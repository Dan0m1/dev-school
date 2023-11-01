function findNb(volume)
{
    let iterator = 1;
    while(volume >= 0)
    {
        if (iterator ** 3 <= volume)
        {
            volume -= iterator ** 3;
            if (volume === 0)
                return iterator;
            iterator++;
            continue;
        }
        return -1;
    }
}

console.log(findNb(91716553919373547))