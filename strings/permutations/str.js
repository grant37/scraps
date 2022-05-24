// simple string permutation assuming all unique characters with
// base case and build
module.exports = function permutations(str) {
  if (str.length == 2) return [str, str[1].concat(str[0])];

  const subStr = str.substring(0, str.length - 1);
  const lastChar = str[str.length - 1];

  const subPermutations = permutations(subStr);
  const results = [];

  // insert the last character into all possible locations for the
  // smaller permutation
  subPermutations.forEach((subPerm) => {
    for (let i = 0; i < subPerm.length + 1; i++) {
      results.push(`${subPerm.substr(0, i)}${lastChar}${subPerm.substr(i)}`);
    }
  });

  return results;
};
