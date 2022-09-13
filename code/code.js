
function loadGrain(levels) {
    let res;
    let maxOne;
    let maxTwo;
    let sumOne = Math.max(...levels);
    let sumTwo = Math.max.apply(Math, levels.filter((ele) => ele < Math.max.apply(Math, levels)));

    if (levels.length === 0) {
        return 0;
    }

    let repet = levels.filter((ele, i, arr) => {
        if (arr.indexOf(ele) !== i) {
            if (ele == sumOne || ele == sumTwo) {
                return ele
            }
        } else {
            return 0
        }
    })
    maxOne = levels.indexOf(sumOne);
    maxTwo = levels.indexOf(sumTwo);

    if (repet.length > 0) {

        repet = repet.reduce((a, b) => {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        });

        levels.filter((ele, index) => {
            if (ele == Number(repet)) {
                if (index > maxOne) {
                    maxTwo = index;
                }
            }
            if (ele == Number(repet)) {
                if (index > maxTwo) {
                    maxOne = index;
                }

            }
        })
    }

    res = levels.map((ele, i, arr) => {

        if (maxOne < i && i < maxTwo || maxTwo < i && i < maxOne) {
            return arr[maxTwo] - arr[i]
        }
        if (ele > arr[i + 1] && arr[i + 2] > arr[i + 1]) {
            if (maxOne < i + 1 && i + 1 < maxTwo || maxTwo < i + 1 && i + 1 < maxOne) {
                return 0;
            }
            if (arr[i + 1] === 0) {
                if (i + 2 === maxTwo || i + 2 === maxOne) {
                    return ele - arr[i + 1]
                } else if (ele > arr[i + 2] && i !== maxOne && i !== maxTwo) {
                    return ele - arr[i + 1]
                }
            }

            if (ele < arr[i + 2]) {

                return ele - arr[i + 1];
            }

            if (arr[i + 2] < ele) {
                return arr[i + 2] - arr[i + 1]

            }

        }
        if(ele === 0 && maxOne > i+1 && i+1 < maxTwo 
            ||ele === 0 && maxTwo > i+1  && i+1  < maxOne){
            return arr[i+1] - ele;
        }
        else {
            return 0
        }
    }).reduce((a, b) => a + b)

    return res
}

console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([4, 0, 1, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));