const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 8000


const morgan = require("morgan")
const cors = require("cors")
const { connectDB } = require("./config/DbConnect")
const { connectQueue } = require("./config/RabbitmqConnect")

const AccountRoute = require("./route/AccountRoutes")

connectQueue()
connectDB().then(() => console.log("Db Connection Is Successfully"))




app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



app.use("/api/v1/accounts", AccountRoute)


app.listen(PORT, () => {
  console.log(`Account Service Is Running On Port:${PORT}`);
})


