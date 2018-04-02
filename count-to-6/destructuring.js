let userArray = process.argv.slice(2)

let [, username, email] = userArray

let data = { username: username, email: email }

console.log(data)