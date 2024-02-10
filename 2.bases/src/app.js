// const { getAge } = require('./plugins/get-age.plugin');
// const { getUUID } = require('./plugins/get-uuid.plugin');

// const { buildMakePerson } = require('./js-foundation/04-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });

// const person = { name: 'John', birthdate: '1991-11-23' };

// const john = makePerson(person);

// console.log(john);

const { getPokemonById } = require('./js-foundation/05-promises');

console.log(getPokemonById(1));
