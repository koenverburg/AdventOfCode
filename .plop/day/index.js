const path = require('path')
const { pad, toFolderName } = require('../utils')

module.exports = {
  description: 'Generate a new Day for Advent Of Code',
  prompts: [
    {
      type: 'input',
      name: 'year',
      message: 'What year is it?',
      default: new Date().getFullYear(),
      validate: (value) => {
        if (/.+/.test(value)) {
          return true
        }
        return 'The year is required.'
      },
    },
    {
      type: 'input',
      name: 'daynumber',
      message: 'What number of day is it?',
      default: '',
      validate: (value) => {
        if (/.+/.test(value)) {
          return true
        }
        return 'The day number is required.'
      },
    },
    {
      type: 'input',
      name: 'exercise',
      message: 'What is the name of the exercise?',
      default: '',
      validate: (value) => {
        if (/.+/.test(value)) {
          return true
        }
        return 'The name is required.'
      },
    },
  ],
  actions: (data) => {
    console.log(data)
    return [
      {
        type: 'add',
        path: path.resolve(
          `./src/${data.year}/day-${pad(data.daynumber)}-${toFolderName(
            data.exercise
          )}/day-${pad(data.daynumber)}.ts`
        ),
        templateFile: './day/logic.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.resolve(
          `./src/${data.year}/day-${pad(data.daynumber)}-${toFolderName(
            data.exercise
          )}/day-${pad(data.daynumber)}.test.ts`
        ),
        templateFile: './day/test.hbs',
        abortOnFail: true,
      },
    ]
  },
}
