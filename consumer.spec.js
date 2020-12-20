const path = require('path')
const chai = require('chai')
const { Pact, Matchers } = require('@pact-foundation/pact')
const { GetUsers } = require('./consumer')
const { log } = require('console')
const { eachLike } = Matchers



describe('Pact with Order API', () => {

  const provider = new Pact({
    port: 30026,
    consumer: 'consumer',
    provider: 'get-usersapi',
    spec:1,
    logLevel:'info',
    log:path.resolve(process.cwd(),'pact logs','pact.log'),
    dir:path.resolve(process.cwd(),'pacts contract')
  })
  
  before(() => provider.setup())
  after(() => provider.finalize())
  describe('when a call to the API is made', () => {
    before(async () => {

    const interaction =  provider.addInteraction({
            state: 'looking for users',
            uponReceiving: 'a request for get-users',
            withRequest: {
              path: '/get-users',
              method: 'GET',
            },
            willRespondWith: {
              headers:{
                'Content-Type':'application/json',
              },
              body: eachLike({
                id: 1,
                firstName:'John',
                lastName:'Doe'
              }),
              status: 200,
            },
          })

      return interaction
    })

    it('will receive the list of users', async () => {
      const result = await GetUsers()
      chai.expect(result.length).to.equal(1)
      chai.expect(result[0].firstName).to.equal('John')
    })
  })

 
})