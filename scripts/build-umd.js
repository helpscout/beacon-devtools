const fs = require('fs')
const path = require('path')
const glob = require('glob')

const src = path.resolve(__dirname, '../build/static/js', '*.js')
const dist = path.resolve(__dirname, '../dist')
const dest = path.resolve(dist, 'beacon-devtools.umd.js')

glob(src, (err, files) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  // 1. Get the compiled file
  const compiledJsFile = files[0]
  if (!compiledJsFile) return

  // 2. Read the data
  const compiledJs = fs.readFileSync(compiledJsFile, 'utf8')

  // 3. Create the directory (maybe)
  if (!fs.existsSync(dist)) fs.mkdirSync(dist)

  // 4. Write to a UMD ready JS file
  fs.writeFileSync(dest, compiledJs, {flag: 'w'})

  // 5. Done!
  console.log('Successfully created beacon-devtools.umd.js')
  process.exit(0)
})
