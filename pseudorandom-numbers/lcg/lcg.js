module.exports = function*(a, x, c, m) {
   let seed = x;
   while(true) {
     seed = (a * seed + c) % m;
     yield seed;
   }
}

