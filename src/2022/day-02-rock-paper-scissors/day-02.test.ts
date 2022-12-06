import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-02'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2022/day-02-rock-paper-scissors/data-control.txt'))
  expect(r).toBe(15)
})

test('part1 real ', () => {
  const r = part1(prepareInput('./src/2022/day-02-rock-paper-scissors/data-real.txt'))
  expect(r).toBe(14531)
})

test('part2 control', () => {
  const r = part2(prepareInput('./src/2022/day-02-rock-paper-scissors/data-control.txt'))
  expect(r).toBe(12)
})

test('part2 real', () => {
  const r = part2(prepareInput('./src/2022/day-02-rock-paper-scissors/data-real.txt'))
  expect(r).toBe(11258)
})
