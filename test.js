const fs = require('fs')
const path = require('path')
const test = require('brittle')
const tmp = require('test-tmp')
const atomicWriteFile = require('./index.js')

test('basic', async function (t) {
  const dir = await tmp(t)
  const filename = path.join(dir, 'folder', 'file.txt')

  await atomicWriteFile(filename, 'Hello World')

  t.alike(await fs.promises.readFile(filename), Buffer.from('Hello World'))
})
