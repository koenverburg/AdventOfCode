import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-03'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2022/day-03-rucksack-reorganization/data-control.txt'))
  expect(r).toBe(157)
})

test('part1 real ', () => {
  const r = part1(prepareInput('./src/2022/day-03-rucksack-reorganization/data-real.txt'))
  expect(r).toBe(7568)
})

test('part2 control', () => {
  const r = part2(prepareInput('./src/2022/day-03-rucksack-reorganization/data-control.txt'))
  expect(r).toBe(70)
})

test('part2 real ', () => {
  const r = part2(prepareInput('./src/2022/day-03-rucksack-reorganization/data-real.txt'))
  expect(r).toBe(2780)
})
