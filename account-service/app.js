const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 8000


const morgan = require("morgan")
const { connectDB } = require("./config/DbConnect")
const amqplib = require('amqplib')

var channel, connection



const AccountRoute = require("./route/AccountRoutes")

async function connectQueue() {
  try {

      connection = await amqplib.connect("amqp://myuser:mypassword@localhost:5672");
      channel = await connection.createChannel()
      
      await channel.assertQueue("account-queue")
      console.log("CONNECTED RABBITMQ");
      
  } catch (error) {
      console.log(error)
  }
}

connectQueue()
connectDB().then(()=>console.log("Db Connection Is Successfully"))




app.use(express.json())
app.use(morgan("dev"))



app.use("/api/v1/accounts", AccountRoute)


app.listen(PORT, () => {
  console.log(`Account Service Is Running On Port:${PORT}`);
})

module.exports = {
  channel
}