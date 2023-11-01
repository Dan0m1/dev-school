function findLeaders(arr, day) {
    let arrayOfSums = new Array(arr.length/day);
    for(let i = 0; i < arr.length/day; i++) {
        let sum = 0;
        for(let j = 0; j < day; j++) {
            sum += arr[i+j*(arr.length/day)];
        }
        arrayOfSums[i] = sum;
    }
    let biggestHonor = arrayOfSums[0];
    for(const el of arrayOfSums) {
        if(el > biggestHonor) {
            biggestHonor = el;
        }
    }
    return biggestHonor;
}