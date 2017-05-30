import path from 'path'
import Express from 'express'
import { handleRender } from './handle-render'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(port)

console.log('Server run')
console.log('Port listening ', port);