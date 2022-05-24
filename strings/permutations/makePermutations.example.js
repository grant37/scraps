const perm = require('./makePermutations');

const data = process.argv[2];
const result = perm(data);

console.log(`Permutation for "${data}":`, result);
