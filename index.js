const {startServer} = require('./provider')

startServer(30026,function(){
    console.log('Server is running')
})