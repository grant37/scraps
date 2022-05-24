// simple string permutation assuming all unique characters with
// base case and build
module.exports = function permutations(str) {
  if (str.length == 1) return [str];

  const subStr = str.substring(0, str.length - 1);
  const lastChar = str.charAt(str.length - 1);

  const subPermutations = permutations(subStr);
  const results = [];

  const seen = new Set();

  // insert the last character into all possible locations for the
  // smaller permutation
  subPermutations.forEach((subPerm) => {
    for (let i = 0; i < subPerm.length + 1; i++) {
      const current = `${subPerm.substr(0, i)}${lastChar}${subPerm.substr(i)}`;
      if (!seen.has(current)) {
        results.push(current);
        seen.add(current);
      }
    }
  });

  return results;
};
