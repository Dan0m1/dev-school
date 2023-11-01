function ifPrimal(number)
{
    if (number === 2 || number === 3)
    {
        return true;
    }

    if(number % 2 === 0 || number % 3 === 0)
    {
        return false;
    }

    for(let i = 5; i ** 2 <= number; i += 6)
    {
        if(number % i === 0  || number % (i+2) === 0 )
        {
            return false;
        }
    }
    return true;
}

function countPrimals(number)
{
    let counter = 0;
    for (let i = 2; i <= number; i++)
    {
        if(ifPrimal(i))
        {
            counter++;
        }
    }
    return counter;
}

console.log(countPrimals(100000000))