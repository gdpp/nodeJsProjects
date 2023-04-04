const fileSystem = require('fs');
const colors = require('colors');

const createTableFile = async (base = 2, list = false) => {
    try {
        let out = '';

        out += '============================= \n';
        out += `======== Table of ${base} ========= \n`;
        out += '============================= \n';

        for (let x = 1; x <= 10; x++) {
            out += `${base} X ${x} = ${base * x} \n`;
        }

        fileSystem.writeFileSync(`table_${base}.txt`, out);

        return `table_${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createTableFile,
};
