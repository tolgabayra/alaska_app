const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 8000


const morgan = require("morgan")
const { connectDB } = require("./config/DbConnect")
const AccountRoute = require("./route/AccountRoutes")

connectDB().then(()=>console.log("Db Connection Is Successfully"))


app.use(express.json())
app.use(morgan("dev"))



app.use("/api/v1/accounts", AccountRoute)


app.listen(PORT, () => {
  console.log(`Account Service Is Running On Port:${PORT}`);
})