import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-04'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2023/day-04-scratchcards/data-control.txt'))
  expect(r).toBe(13)
})

test('part1 real', () => {
  const r = part1(prepareInput('./src/2023/day-04-scratchcards/data-real.txt'))
  expect(r).toBe(21105)
})

test('part2 control', () => { 
  const r = part2(prepareInput('./src/2023/day-04-scratchcards/data-control.txt'))
  expect(r).toBe(30)
}) 

test('part2 real', () => {
  const r = part2(prepareInput('./src/2023/day-04-scratchcards/data-real.txt')) 
  expect(r).toBe(5329815) 
}) 
