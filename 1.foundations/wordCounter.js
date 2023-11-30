const fs = require('fs')

const content = fs.readFileSync('readme.md', 'utf8')

const words = content.split(' ')

// const reactWordCount = words.filter(word => word.toLocaleLowerCase() === 'react').length

const reactWordCount = content.match(/react/gi).length;

console.log('Palabras: ' + words.length)
console.log('Palabra React: ' + reactWordCount)