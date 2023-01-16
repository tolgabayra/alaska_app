const amqplib = require('amqplib')

var channel, connection

const connectQueue = async () => {
    try {

        connection = await amqplib.connect("amqp://myuser:mypassword@localhost:5672");
        channel = await connection.createChannel()

        await channel.assertQueue("account-queue")
        console.log("CONNECTED RABBITMQ");

    } catch (error) {
        console.log(error)
    }
}


const sendData = async (data) => {
    // send data to queue
    await channel.sendToQueue("account-queue", Buffer.from(JSON.stringify(data)));

    // close the channel and connection
    await channel.close();
    await connection.close();
}



module.exports = {
    connectQueue,
    sendData
}