const assert = require('assert');
const perm = require('./str');

const data = process.argv[2];

const result = perm(data);

console.log(`Permutation for "${data}":`, result);
