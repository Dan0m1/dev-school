function calculateMoves(diskAmount)
{
    let movesAmount = 2 ** diskAmount - 1;
    return movesAmount;
}

console.log(calculateMoves(7))
console.log(calculateMoves(9))