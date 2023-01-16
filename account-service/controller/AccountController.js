const { create, destroy, deposit, withdraw, show, list } = require("../service/AccountService")
const { pool } = require("../config/DbConnect")



const withdrawMoney = async (req, res) => {
    const amount = req.body.amount
    try {
        await pool.query("BEGIN")
        await withdraw(req.params.id, amount)
        res.status(200).json(`Amount Of Money Withdrawn :${amount}`)
        await pool.query("COMMIT")
    } catch (err) {
        await pool.query("ROLLBACK")
        res.status(500).json(err)
    }
}

const depositMoney = async () => {
    const amount = req.body.amount
    try {
        await pool.query("BEGIN")
        await deposit(req.params.id, amount)
        res.status(200).json(`Amount Of Money Deposit :${amount}`)
        await pool.query("COMMIT")
    } catch (err) {
        await pool.query("ROLLBACK")
        res.status(500).json(err)
    }
}

const createAccount = async (req, res) => {

}

const deleteAccount = async (req, res) => {

}

const updateAccount = async (req, res) => {

}

const showAccount = async (req, res) => {

}

const listAccount = async (req, res) => {

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