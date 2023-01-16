const express = require("express")
const app = express()
const PORT = process.env.APP_PORT || 5000


const morgan = require("morgan")
const dotenv = require("dotenv")
const amqplib = require('amqplib')
var channel, connection


const CustomerRoute = require("./route/CustomerRoutes")


async function connectQueue() {
  try {

      connection = await amqplib.connect("amqp://myuser:mypassword@localhost:5672");
      channel = await connection.createChannel()
      
      // connect to 'test-queue', create one if doesnot exist already
      await channel.assertQueue("account-queue")
      console.log("CONNECTED RABBITMQ");
      
  } catch (error) {
      console.log(error)
  }
}


dotenv.config()
connectQueue()


app.use(express.json())
app.use(morgan("dev"))


app.use("/api/v1/customers", CustomerRoute)

app.listen(PORT, () => {
  console.log(`Customer Service Is Running On Port:${PORT}`);
})



module.exports = {
  channel
}