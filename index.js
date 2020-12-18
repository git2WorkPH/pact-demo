const {startServer} = require('./provider')

startServer(3002,function(){
    console.log('Server is running')
})