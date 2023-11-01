function indexOfEquality(arr) {
    let rightSum = 0;
    for(let i = 1; i < arr.length; i++) {
        rightSum += arr[i];
    }

    let leftSum = 0;
    let N = 0;

    if (rightSum === 0) {
        return 0;
    }

    for(N = 1; N < arr.length; N++) {
        leftSum += arr[N-1];
        rightSum -= arr[N];
        if (leftSum === rightSum) {
            return N;
        }
    }
    return -1
}