const addUppercasedTitle = (title) =>
  title.charAt(0).toUpperCase() + title.slice(1);
const addTitle = (docs, title) => `${docs}# ${addUppercasedTitle(title)}\n`;
const addSubTitle = (docs, title) => `${docs}## ${title}\n`;
const addSubSubTitle = (docs, title) => `${docs}### ${title}\n`;
const addSubSubSubTitle = (docs, title) => `${docs}#### ${title}\n`;
const addText = (docs, text) => `${docs}${text}\n\n`;
const addCommand = (docs, command) => `${docs} \`\`\`${command}\`\`\`\n`;
const getFullCommandName = (program) => {
  const args = program._args.map((a) => `<${a.name()}>`).join(' ');

  const options = program.options
    .filter((o) => !o.optional)
    .map((o) => `${o.long} <${o.long.slice(2)}>`)
    .join(' ');

  if (program.parent) {
    if (program.commands.length === 0) {
      return `${getFullCommandName(program.parent)} ${
        program._name
      } ${args} ${options}`;
    } else {
      return `${getFullCommandName(program.parent)} ${program._name}`;
    }
  }

  if (program.commands.length === 0) {
    return `${program._name} ${args} ${options}`;
  } else {
    return `${program._name}`;
  }
};

module.exports = {
  addUppercasedTitle,
  addTitle,
  addSubTitle,
  addSubSubTitle,
  addSubSubSubTitle,
  addText,
  addCommand,
  getFullCommandName,
};
