module.exports = function towelSort (matrix) {
  if ((!matrix) || matrix.length === 0) {
        return [];
    }
    else if (matrix.length > 0) {
         let array = [];
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (i % 2 == 0) {
                array.push(matrix[i][j]);
            } else {
                array.push(matrix[i][matrix[i].length - j - 1]);
                   }
            }
            }
  return array;
            }
            }
