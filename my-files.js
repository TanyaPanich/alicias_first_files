const {blue, yellow } = require('chalk')
const path = require('path')
//this prints current directory
console.log(yellow(__dirname))

//want to access test.txt
const filename = path.join(__dirname, 'test.txt')
console.log(blue(filename));
