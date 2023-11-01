function landPerimeter(island) {
    let perimeter = 0;
    for (let row = 0; row < island.length; row++) {
        for (let column = 0; column < island[row].length; column++) {
            if (island[row][column] === 'O') continue;
            if (row !== 0) perimeter += island[row-1][column] === 'X' ? 0 : 1;
            else perimeter++;
            if (row !== island.length - 1) perimeter += island[row+1][column] === 'X' ? 0 : 1;
            else perimeter++
            if (column !== 0) perimeter += island[row][column-1] === 'X' ? 0 : 1;
            else perimeter++;
            if (column !== island[row].length - 1) perimeter += island[row][column+1] === 'X' ? 0 : 1;
            else perimeter++;
        }
    }
    return "Total land perimeter: " + perimeter;
}
