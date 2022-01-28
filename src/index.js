module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    return matrix
        .map((el, index) => (index % 2 == 1 ? el.reverse() : el))
        .flat();
};
