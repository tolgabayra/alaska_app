const { create, destroy, deposit, withdraw, show, list } = require("../service/AccountService")
const { pool } = require("../config/DbConnect")
const { sendData, sendId } = require("../config/RabbitmqConnect")


const withdrawMoney = async (req, res) => {
    const amount = req.body.amount
    const id = req.params.id
    try {
        await pool.query("BEGIN")
        await withdraw(id, amount)
        sendData(amount)
        sendId(id)
        res.status(200).json(`Amount Of Money Withdrawn: ${amount}$`)
        await pool.query("COMMIT")
    } catch (err) {
        await pool.query("ROLLBACK")
        res.status(500).json(err)
        console.log(err);
    }
}

const depositMoney = async () => {
    const amount = req.body.amount
    try {
        await pool.query("BEGIN")
        await deposit(req.params.id, amount)
        res.status(200).json(`Amount Of Money Deposit :${amount}`)
        channel.sendToQueue("account-queue", Buffer.from(JSON.stringify(amount)))
        await pool.query("COMMIT")
    } catch (err) {
        await pool.query("ROLLBACK")
        res.status(500).json(err)
    }
}

const createAccount = async (req, res) => {
    try {
        await create(req.body)
        res.status(200).json("Account has been created.")
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteAccount = async (req, res) => {
    try {
        await destroy(req.params.id)
        res.status(200).json("Account has been destroy.")
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateAccount = async (req, res) => {

}

const showAccount = async (req, res) => {

}

const listAccount = async (req, res) => {
    try {
        const accountList = await list()
        res.status(200).json(accountList)
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = {
    createAccount,
    deleteAccount,
    updateAccount,
    showAccount,
    listAccount,
    withdrawMoney,
    depositMoney
}