import { prepareInput } from "../../helpers";
import { part1, part2 } from "./day-01";

test("part1 control", () => {
  const r = part1(prepareInput("./src/2023/day-01-trebuchet/data-control.txt"));
  expect(r).toBe(142);
});

test("part1 real", () => {
  const r = part1(prepareInput("./src/2023/day-01-trebuchet/data-real.txt"));
  expect(r).toBe(55607);
});

test("part2 control", () => {
  const r = part2(prepareInput("./src/2023/day-01-trebuchet/data-control-p2.txt"));
  expect(r).toBe(281);
});

test('part2 real', () => { 
  const r = part2(prepareInput('./src/2023/day-01-trebuchet/data-real.txt')) 
  expect(r).toBe(55291) 
}) 
