const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')


//Creating a file 
//writeFileSync('./content/subfolder/clock.pdf',`Here is the result: ${first}, ${second}`)

//for data append
writeFileSync('./content/subfolder/clock.pdf',`Here is the result: ${first}, ${second}`,{flag: 'a'})