
function loadGrain(levels) {

  let res = 0;
  let max = 0;
  if (levels.length === 2 || levels.length === 0) {
    return res = 0;
  }
  for (let i = 0; i % levels.length == 0; i++) {

    if (levels[i + 1] < levels[i] && levels[i + 1] < levels[i + 2]) {

      if (levels[i] < levels[i + 2]) {
        res += levels[i] - levels[i + 1];
        max = levels[i + 2];
      }
      if (levels[i] > levels[i + 2]) {
        res += levels[i + 2] - levels[i + 1];
        max = levels[i];
      }
      if (levels[i + 1] === 0 && max < levels.length) {
        res += max - levels[i + 1]
      }
      if (levels[i + 1] === 0 && max >= levels.length) {
        res += levels.length
      }
    }

    if (levels[i + 2] < levels[i + 3] && levels[i + 2] < levels[i + 1]) {
      if (levels[i + 3] < levels[i + 1]) {
        res += levels[i + 3] - levels[i + 2]
        max = levels[i + 1];
      }
      if (levels[i + 3] > levels[i + 1]) {
        res += levels[i + 1] - levels[i + 2]
        max = levels[i + 3]
      }
      if (levels[i + 2] === 0 && max < levels.length) {
        res += max - levels[i + 2];
      }
      if (levels[i + 2] === 0 && max >= levels.length) {
        res += levels.length;
      }

    }

    if (levels[i + 3] < levels[i + 4] && levels[i + 3] < levels[i + 2]) {
      if (levels[i + 4] < levels[i + 2]) {
        res += levels[i + 4] - levels[i + 3];
        max = levels[i + 2];
      } if (levels[i + 4] > levels[i + 2]) {
        res += levels[i + 2] - levels[i + 3]
        max = levels[i + 4];
      } if (levels[i + 3] === 0 && max < levels.length) {
        res += max - levels[i + 3];
      }
      if (levels[i + 3] === 0 && max >= levels.length) {
        res += levels.length
      }
    }

    if (levels[i + 4] < levels[i + 5] && levels[i + 4] < levels[i + 3]) {
      if (levels[i + 3] < levels[i + 5]) {
        res += levels[i + 3] - levels[i + 4];
        max = levels[i + 5];
      }
      if (levels[i + 3] > levels[i + 5]) {
        res += levels[i + 5] - levels[i + 4];
        max = levels[i + 3];
      }
      if (levels[i + 4] === 0 && max < levels.length) {
        res += max - levels[i + 4];
      }
      if (levels[i + 4] === 0 && max >= levels.length) {
        res += levels.length;
      }
    }

    if (levels[i + 5] < levels[i + 6] && levels[i + 5] < levels[i + 4]) {
      if (levels[i + 4] < levels[i + 6]) {
        res += levels[i + 4] - levels[i + 5];
        max = levels[i + 5];
      }
      if (levels[i + 4] > levels[i + 6]) {
        res += levels[i + 6] - levels[i + 5];
        max += levels[i + 6];
      }
      if (levels[i + 5] === 0 && max < levels.length) {
        res += max - levels[i + 5];
      }
      if (levels[i + 5] === 0 && max >= levels.length) {
        res += levels.length;
      }
    }

  }
  return res;
}

console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([4, 0, 1, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));
console.log(loadGrain([4, 0, 2, 4, 2, 5]));
