import { sortHighest } from "../../helpers"

export const part1 = (input: string[]) => {
  let sum = 0 
  let results = []

  for (let i = 0; i < input.length; i++) {
    if (i+1 === input.length) continue

    const item = input[i]
    const next = input[i+1]

    if (item !== '') {
        sum += parseInt(item)
    }

    if (next === '') {
      results.push(sum)
      sum = 0
    }
  }

  return results.sort(sortHighest).shift()
}

export const part2 = (input: string[]) => {
  let sum = 0 
  let results = []

  for (let i = 0; i < input.length; i++) {
    if (i+1 === input.length) continue

    const item = input[i]
    const next = input[i+1]

    if (item !== '') {
        sum += parseInt(item)
    }

    if (next === '') {
      results.push(sum)
      sum = 0
    }
  }

  return results.sort(sortHighest).splice(0, 3).reduce((total, current) => total + current, 0)
}
