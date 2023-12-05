import { count } from '../../helpers'

const TARGET_RED = 12
const TARGET_BLUE = 14
const TARGET_GREEN = 13
const defaults = {
  red: 0,
  blue: 0,
  green: 0,
}

const converToGame = (line: string) => {
  const parts = line.split(':')

  const id = parseInt(parts[0].split(' ')[1])
  const bags = parts[1].split(';')

  const reveals = bags.map((bag) => ({
    ...defaults,
    ...Object.fromEntries(
      bag
        .split(',')
        .map((x) => x.trim())
        .map((x) => x.split(' '))
        .map(([count, color]) => [color, parseInt(count)]),
    ),
  }))

  return {
    id,
    reveals,
  }
}

export const part1 = (inputs: string[]) => {
  const games = inputs
    .filter(Boolean)
    .map(converToGame)
    .filter((x) =>
      x.reveals.every(({ red, blue, green }) => red <= TARGET_RED && blue <= TARGET_BLUE && green <= TARGET_GREEN),
    )
    .map(({ id }) => id)

  return count(games)
}

export const part2 = (inputs: string[]) => {
  const games = inputs
    .filter(Boolean)
    .map(converToGame)
    .map(({ reveals }) =>
      reveals.reduce((acc, curr) => {
        return {
          red: Math.max(acc.red, curr.red),
          blue: Math.max(acc.blue, curr.blue),
          green: Math.max(acc.green, curr.green),
        }
      }, defaults),
    )
    .map(({ red, green, blue }) => red * green * blue)

  return count(games)
}
