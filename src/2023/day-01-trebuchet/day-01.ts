import { count } from "../../helpers";

export const part1 = (input: string[]) => {
  const r = input
    .filter(Boolean)
    .map((row) =>
      row
        .split("")
        .map((x) => parseInt(x))
        .filter((x) => !isNaN(x)),
    )
    .map((n) => parseInt(`${n[0]}${n[n.length - 1]}`));

  return count(r);
};

export const part2 = (input: string[]) => {
  const pattern = /(\d|one|two|three|four|five|six|seven|eight|nine)/;
  const wordToDigit = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  } as const;

  // @ts-ignore
  const toNumber = (v: string) => wordToDigit[v] ?? v;

  const getLastMatch = (row: string) => {
    let idx = 1;
    while (true) {
      const matches = row.slice(row.length - idx).match(pattern);
      if (matches) return matches[0];
      idx++;
    }
  };

  const r = input
    .filter(Boolean)
    .map((row) => {
      const matches = row.match(pattern);

      const first = matches?.[0];
      const last = getLastMatch(row);

      // @ts-ignore
      return [toNumber(first), toNumber(last)] 
    })
    .map((n) => parseInt(`${n[0]}${n[n.length - 1]}`));

  return count(r);
};
