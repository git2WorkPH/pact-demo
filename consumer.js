const http = require('http')


async function GetUsers(){

   return new Promise((resolve, reject) => {
        http
          .get('http://localhost:30026/get-users', (resp) => {
            let data = ''
  
            resp.on('data', (chunk) => {
              data += chunk
            })
  
            resp.on('end', () => {
              resolve(JSON.parse(data))
            })
          })
          .on('error', (err) => {
            console.error('Error: ' + err.message)
            reject(err)
          })
      })
}

module.exports = {GetUsers}