// file system module to perform file operations
const fs = require('fs')
 
// json data
const value = require('./data')

// creating data
const userData = value.data("Vetri",2020,"BTech")
const userName = "vetri09"
const userPassword = "vetrivelan"
// using crypto module to encrypt password
const crypto = require('crypto')
const password = crypto.createHmac('sha256', 'secret').update(userPassword).digest('hex')

// // create content in message.txt
fs.writeFileSync('message.txt', 
    `Progard Details\n
    Name -> ${userData.name}
    Year -> ${userData.Year}
    Qualification -> ${userData.Qualification}
    UserName -> ${userName}
    Password -> ${password}`
)