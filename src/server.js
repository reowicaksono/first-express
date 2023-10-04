import app from "../src/application/app.js"
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, '127.0.0.1',() => {
  console.log(`Example app listening on PORT ${PORT}`)
});


