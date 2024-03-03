# atomic-write-file

Atomic file writing by creating a temporary file and renaming it

```
npm i atomic-write-file
```

## Usage

```js
const atomicWriteFile = require('atomic-write-file')

await atomicWriteFile('./firmware.bin', 'Hello World!')
```

## License

MIT
