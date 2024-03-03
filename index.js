const fs = require('fs')
const path = require('path')

module.exports = async function atomicWriteFile (file, data, opts = {}) {
  const tmpfile = file + '.tmp.' + Math.random()

  await fs.promises.mkdir(path.dirname(tmpfile), { recursive: true })
  await fs.promises.writeFile(tmpfile, data, { flag: 'wx', mode: opts.mode, flush: true })
  await fs.promises.rename(tmpfile, file)
}
