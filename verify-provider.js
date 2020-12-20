const path = require('path')
const { Verifier } = require('@pact-foundation/pact')
const { startServer } = require('./provider')

startServer(30026, async (server) => {
  console.log('Server is running on http://localhost:30026')

  try {
    await new Verifier({
      providerBaseUrl: 'http://localhost:30026',
      pactUrls: [path.resolve(__dirname, './pacts contract/consumer-get-usersapi.json')],
      pactBrokerUrl:'http://localhost/',
      consumerVersion:'1.0.0',
      publishVerificationResult:true,
      providerVersion:'1.0.0',
      logLevel:'info'
    }).verifyProvider()
  } catch (error) {
    console.error('Error: ' + error.message)
    process.exit(1)
  }

  server.close()
})