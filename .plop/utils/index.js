const fs = require('fs')

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const toFolderName = (input) => {
  return input.toLowerCase().replaceAll(' ', '-')
}

const trimTemplateFile = (template) => {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(template, 'utf8').replace(/\s*$/, '')
}

function pad(num) {
  if (parseInt(num) < 10) {
    return `0${num}`
  }
  return num
}

module.exports = {
  pad,
  toTitleCase,
  toFolderName,
  trimTemplateFile,
}
