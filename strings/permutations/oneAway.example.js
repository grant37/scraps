const check = require('./oneAway');

const a = process.argv[2];
const b = process.argv[3];
const result = check(a, b);

console.log(result ? 'yes' : 'no');
