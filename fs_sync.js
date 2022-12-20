const {readFileSync, writeFileSync} = require('fs');
let firstFIle = readFileSync('./content/first.txt','utf-8')
let secondFile = readFileSync('./content/second.txt','utf-8')
console.log(firstFIle, secondFile);
writeFileSync('./content/result-sync.txt',`this is the result of ${firstFIle}`,{flag:'a'})
