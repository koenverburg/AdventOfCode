import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-04'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2022/day-04-camp-cleanup/data-control.txt'))
  expect(r).toBe(2)
})

test('part1 real ', () => {
  const r = part1(prepareInput('./src/2022/day-04-camp-cleanup/data-real.txt'))
  expect(r).toBe(573)
})

test('part2 control', () => {
  const r = part2(prepareInput('./src/2022/day-04-camp-cleanup/data-control.txt'))
  expect(r).toBe(4)
})

test('part2 real', () => {
  const r = part2(prepareInput('./src/2022/day-04-camp-cleanup/data-real.txt'))
  expect(r).toBe(867)
})
