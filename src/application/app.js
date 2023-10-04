import express from "express";
import  publicRouter  from "../routes/public_route.js";
import  testRouter  from "../routes/api.js";
const app = express()

// app.use(express.json)
app.use(publicRouter)
app.use(testRouter)



export default app;