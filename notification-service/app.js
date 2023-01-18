const express = require("express")
const app = express()


const amqplib = require('amqplib')
var channel, connection;


async function connectQueue() {
  try {
    connection = await amqplib.connect("amqp://myuser:mypassword@localhost:5672");
    channel = await connection.createChannel()
    await channel.assertQueue("account-queue")
    console.log("CONNECTED RABBITMQ");


    channel.consume("account-queue",  (amount) =>{
      console.log("Data received : ", `${Buffer.from(amount.content)} $` );
    })
    
    channel.consume("account-id", (id) =>{
      console.log("Id of the sender: ", `${Buffer.from(id.content)}`);
    })
  } catch (err) {
    console.log(err);
  }


}


connectQueue()

app.listen(6000, () => {
  console.log("Notification Service Is Running");
})




