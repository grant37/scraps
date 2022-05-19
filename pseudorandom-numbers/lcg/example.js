const lcg = require('./lcg.js');
// these are probably not great parameters
const gen = lcg(75, Date.now(), 74, 2**16 + 1);

for (let i = 0; i < 10; i++) {
  console.log(gen.next().value);
}

