import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";


dotenv.config();
const app = express()
const PORT = process.env.PORT;
const prisma = new PrismaClient();

const testGet = app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/test-prisma', async (req, res) => {
  const getAllUser = await prisma.user.findMany();

  res.send(getAllUser);
});


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

app.listen(PORT, '127.0.0.1',() => {
  console.log(`Example app listening on PORT ${PORT}`)
})


