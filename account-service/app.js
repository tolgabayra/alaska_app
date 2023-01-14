const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 8000


const morgan = require("morgan")




app.use(express.json())
app.use(morgan("dev"))



app.listen(PORT, () => {
  console.log(`Account Service Is Running On Port:${PORT}`);
})