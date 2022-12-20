const os = require('os')
// Get the user info
let user = os.userInfo()
console.log(user)
// Get the user system uptime in seconds
console.log(`the system uptime is ${os.uptime()/3600} hours`)
// get os info
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1000000000,
    freeMem: os.freemem()/1000000000,
}
console.log(currentOs)