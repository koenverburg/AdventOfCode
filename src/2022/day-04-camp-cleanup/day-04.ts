import { count } from '../../helpers'

type Range = {
  start: number
  end: number
}

const prepare = (series: string[]): string[][] =>
  series.map((line) => line.split(','))

const filterEmpties = (line: string[]) => {
  if (line.length > 1) {
    return line
  }
}

const toRange = (item: string): Range => {
  const [start, end] = item.split('-')
  return {
    start: parseInt(start),
    end: parseInt(end),
  }
}

const range = (start: number, end: number): number[] => {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}

const checkCoverage = (pair: string[]) => {
  let covered = 0
  const a = toRange(pair[0])
  const b = toRange(pair[1])

  const aRange = range(a.start, a.end)
  const bRange = range(b.start, b.end)

  if (aRange.includes(b.start) && aRange.includes(b.end)) {
    covered++
  } else if (bRange.includes(a.start) && bRange.includes(a.end)) {
    covered++
  }

  return covered
}

export const part1 = (series: string[]) => {
  const r = prepare(series).filter(filterEmpties).map(checkCoverage)

  return count(r)
}

const checkForPartialCoverage = (pairs: string[]) => {
  const a = toRange(pairs[0])
  const b = toRange(pairs[1])

	const overlaps = (a.start <= b.end && a.end >= b.start) || (b.start <= a.end && b.end >= a.start)

  return overlaps ? 1 : 0
}

export const part2 = (series: string[]) => {
  const r = prepare(series)
    .filter(filterEmpties)
    .map(checkForPartialCoverage)

  return count(r)
}
