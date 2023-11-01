function findMinAndMax(inputString)
{
    let tempArray = inputString.split(" ");
    let minValue = tempArray[0];
    let maxValue = tempArray[0];
    for (let i = 0; i < tempArray.length; i++)
    {
        if(tempArray[i] > maxValue) maxValue = tempArray[i];
        if(tempArray[i] < minValue) minValue = tempArray[i];
    }
    let output = minValue + " " + maxValue;
    return output;
}

console.log(findMinAndMax("1 9 3 4 -5"))