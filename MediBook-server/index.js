//import json server
const jsonserver=require('json-server')

//create server for running json file
const server=jsonserver.create()

//set up path/route for middleware
const route=jsonserver.router('db.json')

//create middleware
const middleware=jsonserver.defaults()
server.use(middleware)
server.use(route)

const PORT=3000
server.listen(PORT,()=>{
    console.log('server started');
    
}
)