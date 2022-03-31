const fs = require('fs');

const {
  addSubSubSubTitle,
  addSubSubTitle,
  addSubTitle,
  addText,
  addTitle,
  addUppercasedTitle,
  getFullCommandName,
} = require('./utils');

// Specific to CLI

const addArgsAndOptions = (docs, args = [], options = []) => {
  const headers =
    '| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | \n| ---- | ----- | ----------- | ----------- | --------------- | ----------- | \n';
  const optionsString =
    headers +
    args
      .map((args) => {
        const { _name, description, required, defaultValue } = args;
        return `| \`${_name}\` |  | ${description} | ${
          required ? 'required' : 'optional'
        } | ${defaultValue ? `\`${defaultValue}\`` : ''} | | \n`;
      })
      .join('\n') +
    options
      .map(
        (option) =>
          `| \`${option.long}\` | ${
            option.short ? `\`${option.short}\`` : ''
          } | ${option.description} | ${
            option.optional ? 'optional' : 'required'
          } | ${option.defaultValue ? `\`${option.defaultValue}\`` : ''} |`,
      )
      .join('\n');

  // return headers;
  return `${docs}${optionsString}\n`;
};

let tableOfContents = '# Table of Contents\n\n';

const buildRecursiveDocumentation = (program, level = 0) => {
  let docs = '';

  if (level === 0) {
    docs = addTitle(docs, `${program._name} `);
  } else if (level === 1) {
    docs += '---\n';
    docs += addSubTitle(
      docs,
      `Module: ${addUppercasedTitle(program._name)} <div id="${
        program._name
      }"></div>`,
    );
  } else if (level === 2) {
    docs = addSubSubTitle(docs, `${program._name} `);
  } else if (level === 3) {
    docs = addSubSubSubTitle(docs, `${program._name} `);
  }

  tableOfContents += `${[...Array(level).keys()].reduce((acc) => {
    acc += '\t';
    return acc;
  }, '')} - [${program._name}](#${program._name})\n`;
  docs = addText(docs, `**Description**: \n ${program._description}`);

  if (program._aliases.length > 0) {
    docs = addText(docs, `Alias: \`${program._aliases[0]}\``);
  }

  if (program.options.length > 0 || program._args.length > 0) {
    docs = addSubSubSubTitle(docs, 'Arguments');
    docs = addArgsAndOptions(docs, [...program._args], [...program.options]);
  }

  program.commands.forEach((c) => {
    const { docs: subDocs } = buildRecursiveDocumentation(c, level + 1);
    docs += subDocs;
  });

  if (program.commands.length === 0) {
    docs += `Example: \n\n 
    
    ${getFullCommandName(program)}
    \n`;
  }

  return { docs, tableOfContents };
};

const writeDocumentation = (docs, output) => {
  fs.writeFileSync(output, docs);
};

module.exports = {
  writeDocumentation,
  buildRecursiveDocumentation,
};
