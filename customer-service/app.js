const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 5000


const morgan = require("morgan")




app.use(morgan("dev"))


app.listen(PORT, () => {
  console.log(`Customer Service Is Running On Port:${PORT}`);
})
