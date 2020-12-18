const assert = require('assert')
const { Pact, Matchers } = require('@pact-foundation/pact')
const { fetchOrders } = require('./consumer')
const { eachLike } = Matchers



describe('Pact with Order API', () => {
  const provider = new Pact({
    port: 30026,
    consumer: 'OrderClient',
    provider: 'OrderApi',
    spec:1,
    logLevel:'info'
  })
  
  before(() => provider.setup())
  after(() => provider.finalize())

  describe('when a call to the API is made', () => {
    before(async () => {

    const interaction =  provider.addInteraction({
            state: 'there are orders',
            uponReceiving: 'a request for orders',
            withRequest: {
              path: '/orders',
              method: 'GET',
            },
            willRespondWith: {
              headers:{
                'Content-Type':'application/json',
              },
              body: eachLike({
                id: 1,
                items: eachLike({
                  name: 'burger',
                  quantity: 2,
                  value: 100,
                }),
              }),
              status: 200,
            },
          })

      return interaction
    })

    it('will receive the list of current orders', async () => {
      const result = await fetchOrders()
      assert.ok(result.length)
    })
  })

 
})