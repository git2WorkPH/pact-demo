const http = require('http')
const url = require('url')

const server = http.createServer(async (req, res) => {
  const route = url.parse(req.url).pathname

  try {
    if (route === '/get-users') {
      const orders = [
        {
          id: 1,
          firstName:'John',
          lastName:'Doe',
        },
        {
          id:2,
          firstName:'Roger',
          lastName:'Miller'
        }
      ]
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(orders))
    }
  } catch (error) {
    res.writeHead(500).end()
  }
})

module.exports = {
  startServer: (port, cb) => {
    server.listen(port, () => {
      cb(server)
    })
  },
}