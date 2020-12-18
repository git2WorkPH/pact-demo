const http = require('http')


async function fetchOrders(){

   return new Promise((resolve, reject) => {
        http
          .get('http://localhost:30026/orders', (resp) => {
            let data = ''
  
            resp.on('data', (chunk) => {
              data += chunk
            })
  
            resp.on('end', () => {
              console.log(data)
              resolve(JSON.parse(data))
            })
          })
          .on('error', (err) => {
            console.error('Error: ' + err.message)
            reject(err)
          })
      })
}

module.exports = {fetchOrders}