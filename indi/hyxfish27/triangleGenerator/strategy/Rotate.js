import { Matrix } from '../../component/Matrix'

const originMatrix = new Matrix()

/**
 * @author hyxfish27
 * @public
 */
export const Rotate = {
  rotate90: (array) => {
    const column = array.length
    const row = array[0].length
    const arr90 = originMatrix.initial(row, column)

    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        arr90[j][column - i - 1] = array[i][j]
      }
    }
    return arr90
  },
  rotate180: (array) => {
    return Rotate.rotate90(Rotate.rotate90(array))
  },
  rotate270: (array) => {
    return Rotate.rotate90(Rotate.rotate90(Rotate.rotate90(array)))
  }
}
