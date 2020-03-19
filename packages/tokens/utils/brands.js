const fs = require('fs')
const path = require('path')

const getBrands = () => {
  const source = path.resolve('src/brands')
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

module.exports = {
  getBrands
}
