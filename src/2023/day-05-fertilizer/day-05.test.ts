import { prepareInput } from '../../helpers'
import { part1, part2 } from './day-05'

test('part1 control', () => {
  const r = part1(prepareInput('./src/2023/day-05-fertilizer/data-control.txt'))
  expect(r).toBe(35)
})

test.skip('part1 real ', () => {
  const r = part1(prepareInput('./src/2023/day-05-fertilizer/data-real.txt'))
  expect(r).toBe(24000)
})

/* test('part2 control', () => { */
/*   const r = part2(prepareInput('./src/2023/day-05-fertilizer/data-control.txt')) */
/*   expect(r).toBe(35) */
/* }) */
/**/
/* test('part2 real ', () => { */
/*   const r = part2(prepareInput('./src/2023/day-05-fertilizer/data-real.txt')) */
/*   expect(r).toBe(24000) */
/* }) */
/**/
/**/
