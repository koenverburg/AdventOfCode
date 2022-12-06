import { count } from '../../helpers'

enum Shapes {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum ResponseShapes {
  Rock = 'X',
  Paper = 'Y',
  Scissors = 'Z',
}

enum changeOutcome {
  Lose = 'X',
  Draw = 'Y',
  Win = 'Z',
}

function converToReadable(side: string) {
  switch (side) {
    case ResponseShapes.Rock:
    case Shapes.Rock:
      return 'rock'

    case ResponseShapes.Paper:
    case Shapes.Paper:
      return 'paper'

    case ResponseShapes.Scissors:
    case Shapes.Scissors:
      return 'scissors'

    default:
  }
}

const Scores = {
  Lose: 0,
  Draw: 3,
  Win: 6,
}

const ShapeScores = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
}

function battle(shapes: string[]) {
  const lhs = converToReadable(shapes[0])
  const rhs = converToReadable(shapes[1])
  let score = 0

  if (lhs === 'rock' && rhs === 'scissors') {
    // left won
    score = Scores.Lose + ShapeScores.Scissors
  } else if (lhs === 'paper' && rhs === 'rock') {
    // left won
    score = Scores.Lose + ShapeScores.Rock
  } else if (lhs === 'scissors' && rhs === 'paper') {
    // left won
    score = Scores.Lose + ShapeScores.Paper
  } else if (lhs === 'rock' && rhs === 'paper') {
    // right won
    score = Scores.Win + ShapeScores.Paper
  } else if (lhs === 'paper' && rhs === 'scissors') {
    // right won
    score = Scores.Win + ShapeScores.Scissors
  } else if (lhs === 'scissors' && rhs === 'rock') {
    // right won
    score = Scores.Win + ShapeScores.Rock
  } else if (lhs === 'rock' && rhs === 'rock') {
    // draw
    score = Scores.Draw + ShapeScores.Rock
  } else if (lhs === 'paper' && rhs === 'paper') {
    // draw
    score = Scores.Draw + ShapeScores.Paper
  } else if (lhs === 'scissors' && rhs === 'scissors') {
    // draw
    score = Scores.Draw + ShapeScores.Scissors
  }

  return score
}

export const part1 = (series: string[]) => {
  const list = series.filter(Boolean) // filter out empty strings

  const results = list.map((item) => battle(item.split(' ')))

  return count(results)
}

function createWinningShape(shape: string) {
  switch (shape) {
    case Shapes.Paper:
      return Shapes.Scissors

    case Shapes.Rock:
      return Shapes.Paper

    case Shapes.Scissors:
      return Shapes.Rock
  }
}

function createLosingShape(shape: string) {
  switch (shape) {
    case Shapes.Paper:
      return Shapes.Rock

    case Shapes.Rock:
      return Shapes.Scissors

    case Shapes.Scissors:
      return Shapes.Paper
  }
}

function determineRhs(lhs: string, side: string) {
  switch (side) {
    case changeOutcome.Win:
      return createWinningShape(lhs)

    case changeOutcome.Lose:
      return createLosingShape(lhs)

    case changeOutcome.Draw:
      return lhs
  }
}

export const part2 = (series: string[]) => {
  const list = series.filter(Boolean) // filter out empty strings

  const results = list.map((item) => {
    const shapes = item.split(' ')
    const lhs = shapes[0]
    const outcome = determineRhs(lhs, shapes[1])

    return battle([lhs, outcome!])
  })

  return count(results)
}
