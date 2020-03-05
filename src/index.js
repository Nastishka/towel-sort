
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length > 0) {

        return matrix.reduce(
            (resultingArray, currentArray, currentIndex) => {
                let newArray = (currentIndex % 2 === 0) ?
                    currentArray : currentArray.reverse();
                return resultingArray.concat(newArray);
            }

        )
    }
    return [];
}
