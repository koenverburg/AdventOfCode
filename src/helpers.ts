import fs from 'fs'

export const sortHighest = (a: number, b: number) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function count(list: number[]) {
  return list.reduce((total, current) => total + current, 0)
}

// export const findHeighestValue = (series: number[]) => {
//   let max = 1
//
//   for (let num of series) {
//     if (num > max) {
//       max = num
//     }
//   }
//
//   return max
// }

export const prepareInput = (path: string) => {
  return fs
    .readFileSync(path, { encoding: 'utf8' })
    .replace(/(\n)|(\r)|(\r\n)/g, '\n')
    .split('\n')
}

// prepareInput('./src/2022/day-01-calorie-counting/data-part-1.txt')
