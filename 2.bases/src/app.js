// const { getAge } = require('./plugins/get-age.plugin');
// const { getUUID } = require('./plugins/get-uuid.plugin');

// const { buildMakePerson } = require('./js-foundation/04-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const person = { name: 'John', birthdate: '1991-11-23' };

// const john = makePerson(person);

// console.log(john);

// const { getPokemonById } = require('./js-foundation/05-promises');

// getPokemonById(23)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('End of request'));

const buildLogger = require('./plugins/logger.plugin');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
