function getRootProperty(givenObject, val)
{
    if(Array.isArray(givenObject) && givenObject.includes(val)) return true;
    else
    {
        for(let branchName in givenObject)
        {
            if(getRootProperty(givenObject[branchName], val)) return branchName;
        }
    }
    return null;
}