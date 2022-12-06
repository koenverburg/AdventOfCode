import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-01'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2022/day-01-calorie-counting/data-control.txt'))
  expect(r).toBe(24000)
})

test('part1 real', () => {
  const r = part1(prepareInput('./src/2022/day-01-calorie-counting/data-real.txt'))
  expect(r).toBe(66487)
})

test('part2 control', () => {
  const r = part2(prepareInput('./src/2022/day-01-calorie-counting/data-control.txt'))
  expect(r).toBe(45000)
})

test('part2 real', () => {
  const r = part2(prepareInput('./src/2022/day-01-calorie-counting/data-real.txt'))
  expect(r).toBe(197301)
})

