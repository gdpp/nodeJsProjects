const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base of multiply table',
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'show table in console',
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Tha base must be a number';
        }
        return true;
    }).argv;

module.exports = argv;
