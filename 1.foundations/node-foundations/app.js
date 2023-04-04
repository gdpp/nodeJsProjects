const argv = require('./yargs/yargs');
const { createTableFile } = require('./helpers/multiply');

require('colors');

console.clear();

createTableFile(argv.b, argv.l)
    .then((fileName) => console.log(`${fileName.rainbow} created`))
    .catch((error) => console.log(error));
