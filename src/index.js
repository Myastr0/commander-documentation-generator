const commander = require('commander');
const path = require('path');

const { version, name, description } = require('../package.json');
const {
  buildRecursiveDocumentation,
  writeDocumentation,
} = require('./service');
const program = new commander.Command();

program.name(name).version(version).description(description);

program
  .command('generate')
  .requiredOption('-i, --input <path>', 'Path to config file')
  .option('-o, --output <path>', 'Path to output file', './documentation.md')
  .action(({ input, output }) => {
    const subprogram = require(path.resolve(input));

    const { docs, tableOfContents } = buildRecursiveDocumentation(subprogram);

    writeDocumentation(tableOfContents + docs, output);
    console.log(`output: ${path.resolve(output)}`);
  });

module.exports = program;
