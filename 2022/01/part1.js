const { input } = require('./input');

const food = input.map(elf => {
    return elf.split('\n')
})

console.log(food)