

function loadGrain(levels) {
  let res;

  if (levels.length === 0) {
      return 0;
  }

  res = levels.map((ele, i, arr) => {

      if (arr.length == 3) {
          if (arr[i + 1] < arr[i + 2] && arr[i + 1] < ele) {
              if (arr[i + 2] < ele)
                  return arr[i + 2] - arr[i + 1];
          } else if (arr[i + 2] > ele) {
              return ele - arr[i + 1];
          } else {
              return 0;
          }

      }
      if (ele > arr[i + 1] && arr[i + 2] > arr[i + 1] && ele !== 0) {
          return ele - arr[i + 1];
      } else if (ele === 0) {
          return arr[i + 1] - ele;
      } else {
          return 0;
      } А
  }).filter(e => e !== undefined).reduce((a, b) => a + b);

  return res
}

console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([4, 0, 1, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));

