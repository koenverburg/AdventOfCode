import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-02'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2023/day-02-cube-conundrum/data-control.txt'))
  expect(r).toBe(24000)
})

test('part1 real ', () => {
  const r = part1(prepareInput('./src/2023/day-02-cube-conundrum/data-real.txt'))
  expect(r).toBe(24000)
})

/* test('part2 control', () => { */
/*   const r = part2(prepareInput('./src/2023/day-02-cube-conundrum/data-control.txt')) */
/*   expect(r).toBe(24000) */
/* }) */
/**/
/* test('part2 real ', () => { */
/*   const r = part2(prepareInput('./src/2023/day-02-cube-conundrum/data-real.txt')) */
/*   expect(r).toBe(24000) */
/* }) */
/**/
/**/
