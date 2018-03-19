const {blue, yellow, red, cyan} = require('chalk')
const path = require('path')
const fs = require('fs')
//this prints current directory
console.log(yellow(__dirname))

//want to access test.txt
const filename = path.join(__dirname, 'test.txt')
console.log(blue(filename));

fs.readdir(__dirname, (err, files) => {
  if(err) {
    console.log(red(err)) //if instead of __dirname will be a non-existing directory, there will be a red error
  }
  console.log(files)//will print a list of files
})

console.log(yellow('Hello!')) //this will be executed first, before fs.readdir

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  const lines = data
    .split('\n')
    .filter(x => x.length > 0)
    .map((el, idx) => `${idx}: ${el}`)

  console.log(lines)
})

try {
  const syncContents = fs.readFileSync('tratatatta', 'utf-8')
  console.log(cyan(syncContents))
}
catch (err) {
  console.log(red(err))
}

fs.unlink(filename, (err) => {
  if (err) {
    console.log(red(err))
  } else {
    console.log('File has beed anhiliated');
  }
})
