/* 
    Algorithm task from Algoexpert.io
    This is my solution based on video explanation from algoexpert.io.
    Could remove code duplication to improve it.
*/

function spiralTraverse(array) {
    let startingRow = 0;
    let endingRow = array.length - 1;
    let startingColumn = 0;
    let endingColumn = array[0].length - 1;
    let outputArr = [];

    while (outputArr.length < array.length * array[0].length) {
        for (let i = startingColumn; i <= endingColumn; i++) {
            outputArr.push(array[startingRow][i]);
        }

        if (outputArr.length >= array.length * array[0].length) break;

        for (let i = startingRow + 1; i <= endingRow; i++) {
            outputArr.push(array[i][endingColumn]);
        }

        if (outputArr.length >= array.length * array[0].length) break;


        for (let i = endingColumn - 1; i >= startingColumn; i--) {
            outputArr.push(array[endingRow][i]);
        }

        if (outputArr.length >= array.length * array[0].length) break;


        for (let i = endingRow - 1; i >= startingRow + 1; i--) {
            outputArr.push(array[i][startingColumn]);
        }

        if (outputArr.length >= array.length * array[0].length) break;


        startingRow++;
        endingRow--;
        startingColumn++;
        endingColumn--;

    }

    return outputArr;
}


