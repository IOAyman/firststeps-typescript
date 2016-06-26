/// <reference path="../typings/node/node.d.ts"/>
 
import fs = require("fs")
import path = require("path")


let file:string = './////tmp/.././tmp/././one'

// path
console.log('WORKING ON FILE', __filename)
console.log('dirname',   path.dirname(__filename))
console.log('basename',  path.basename(__filename))
console.log('extention', path.extname(__filename))
console.log('details\n', path.parse(__filename))

console.log('\nWORKING ON FILE', file)
file = path.normalize(file)
console.log('normalized', file)



// fs
fs.access(file, (err:NodeJS.ErrnoException)=>{
    if(err) console.log(err.message)
    else console.log('file ', file, ' exists!')
})

fs.stat(file, (err:NodeJS.ErrnoException, stats:fs.Stats)=>{
    console.log('is it a dir?', stats.isDirectory())
    console.log('is is a file?', stats.isFile())
})

fs.mkdir(path.dirname(file), (err:NodeJS.ErrnoException)=>{
    if(err) console.log(err.message)
})

fs.writeFile(file, 'Hello, World!')
