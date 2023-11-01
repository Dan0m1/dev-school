function swap(array, first, second)
{
    let temporary = array[first];
    array[first] = array[second];
    array[second] = temporary;
}

function sort(array, startIndex, endIndex)
{
    if (startIndex < endIndex)
    {
        let pivot = sorting(array, startIndex, endIndex);

        sort(array, startIndex, pivot - 1);
        sort(array, pivot +1, endIndex);

    }

}

function sorting(array, startIndex, endIndex)
{
    let pivot = endIndex;
    let i = startIndex - 1, j = startIndex;

    while (j < pivot)
    {
        if (array[j] < array[pivot]) {
            j++;
        }
        else {
            i++;
            swap(array, j, i);
            j++;
        }

    }
    swap(array, i + 1, pivot);
    return i + 1;
}

var input = Array.from("42155");
sort(input, 0, input.length - 1);
console.log(input.join(""));

