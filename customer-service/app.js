const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 5000


const morgan = require("morgan")
const dotenv = require("dotenv")
const CustomerRoute = require("./route/CustomerRoutes")


dotenv.config()



app.use(express.json())
app.use(morgan("dev"))


app.use("/api/v1/customers", CustomerRoute)

app.listen(PORT, () => {
  console.log(`Customer Service Is Running On Port:${PORT}`);
})
