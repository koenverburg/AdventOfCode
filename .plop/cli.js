const dayGenerator = require('./day/index')
const { pad, toFolderName } = require('./utils')

module.exports = (plop) => {
  plop.setGenerator('hoc', dayGenerator)

  plop.addHelper('uppercase', (text) => text.toUpperCase())

  plop.addHelper('getPath', (p, itemName) => {
    const pathParts = p.split('/')
    const index = pathParts.indexOf(itemName)
    const newPath = pathParts.slice(index + 1, pathParts.length)
    return newPath.length < 1 ? `./${newPath}` : `./${newPath.join('/')}/`
  })

  plop.addHelper('curly', (_object, open) => (open ? '{' : '}'))

  plop.addHelper('pad', (p , _) => {
    return pad(p)
  })

  plop.addHelper('toFolderName', (p, _) => {
    return toFolderName(p)
  })
}
