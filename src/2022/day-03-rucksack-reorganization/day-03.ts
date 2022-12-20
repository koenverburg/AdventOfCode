import { count } from "../../helpers"

type Rucksack = string[]
type Group = Rucksack[]

function toItemPriority(item: string): number {
  if (!item) return 0

  const char = item.charCodeAt(0)

  return char > 90
    ? char - 'a'.charCodeAt(0) + 1
    : char - 'A'.charCodeAt(0) + 27
}

function intersect<Element>(a: Set<Element>, b: Set<Element>) {
  return new Set(
    [...a.values()].filter(v => b.has(v))
  )
}

function deduplicate<Element>(containers: Element[][]) {
  return Array.from(
    containers.map(c => new Set(c)).reduce(intersect)
  )
}

const getRucksackPriority = (ruckSack: Rucksack): number  => {
  const compartmentSize = ruckSack.length / 2

  const head = ruckSack.slice(0, compartmentSize)
  const tail = ruckSack.splice(compartmentSize)

  const deduped = deduplicate([head, tail])[0]

  return toItemPriority(deduped)
 
}

export const part1 = (series: string[]) => {
  const result = series
    .map((line: string) => [...line])
    .map(getRucksackPriority)

  return count(result)
}


const toGroup = ([current, ...others]: Group[], ruckSack: Rucksack) => {
  if (current.length < 3) {
    return [[ruckSack, ...current], ...others]
  } else {
    return [[ruckSack], current, ...others]
  }
}

const toGroupPriority = (group: Group) => {
  if (group.length === 0) return

  const deduped = deduplicate(group)[0]

  return toItemPriority(deduped)
}

export const part2 = (series: string[]) => {
  const result = series
    .map((line: string) => [...line])
    .reduce(toGroup, [[]])
    .map(toGroupPriority)
    .filter(x => x) as number[]

  return count(result)
}
