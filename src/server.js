const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about/:id', async (req, res) => { 
  const statusCode = res.statusCode = 200
  await res.setHeader('Content-Type', 'text/html')
  if(statusCode === 200){
    res.end(`Hello World! ${statusCode} ${req.params.id}`)

  }else if(statusCode === 404){
    res.end('Not Found')
  }else{
    res.end('Error')
  }
  
  
})
app.use(express.static('public'))

app.listen(port, '127.0.0.1',() => {
  console.log(`Example a  pp listening on port ${port}`)
})