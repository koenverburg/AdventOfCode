import { count, toDict } from "../../helpers";

export const part1 = (inputs: string[]) => {
  const r = inputs
    .filter(Boolean)
    .map((line) => {
      const parts = line
        .substring(line.indexOf(":") + 1)
        .trim()
        .split("|")
        .map((x) => x.trim().split(" "));

      const winnings = parts[0].filter(Boolean);
      const numbers = parts[1].filter(Boolean);

      return numbers.filter((num) => winnings.includes(num));
    })
    .map((matches) => {
      let score = 0;
      let point = 1;

      for (let i = 0; i < matches.length; i++) {
        score += point;
        if (i >= 1) {
          point = point * 2;
        }
      }

      return score;
    });

  return count(r);
}

const mapToInt = (v: string[]) => v.map(x => parseInt(x))

function getPoints(line: string, idx: number) {
  const parts = line.split(':')[1]

  const [winnings, numValues] = parts.split('|')

  const winningsDict = toDict(mapToInt(winnings.split(' ').filter(Boolean)))

  const numbers = mapToInt(numValues.split(' ').filter(Boolean))
  
  let points = 0
  numbers.forEach(num => {
    if (winningsDict[num]) {
      points++
    }
  })
  
  return new Array(points).fill(idx + 1).map((x, i) => x + i)
} 

export const part2 = (inputs: string[]) => {
  const cards = inputs.filter(Boolean)

  const toProcess = new Array(cards.length).fill(0).map((_, i) => i+1)

  const sum = {}
  const seen = {}

  while(toProcess.length) {
    const idx = toProcess.pop()
    sum[idx] = sum[idx] ? sum[idx] + 1 : 1

    const points = seen[idx] ? seen[idx] :  getPoints(cards[idx-1], idx)

    toProcess.push(...points)
  }

  const score = Object.keys(sum).reduce((acc, idx) => {
    return acc + sum[idx]
  }, 0)
  
  return score
};
