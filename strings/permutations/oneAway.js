module.exports = function oneAway(a, b) {
  const lengthDiff = Math.abs(a.length - b.length);

  if (lengthDiff > 1) {
    return false;
  }

  // can do this more efficiently with two separate loops
  if (lengthDiff === 0) {
    return isOk(a, b);
  } else if (a.length < b.length) {
    return isOk(a.concat(' '), b) || isOk(' '.concat(a), b);
  } else {
    return isOk(b.concat(' '), a) || isOk(' '.concat(b), a);
  }
};

function isOk(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff++;
    }

    if (diff > 1) {
      return false;
    }
  }

  return true;
}
