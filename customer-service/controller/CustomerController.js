const { create, destroy, update, show, list } = require("../service/CustomerService")




const createCustomer = async (req, res) => {
    try {
        const newCustomer = await create(req.body)
        res.status(201).json(newCustomer)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await destroy(req.params.id)
        res.status(200).json({message: "Customer has been deleted."})
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateCustomer = async (req, res) => {
    const data = req.body
    const id = req.params.id
    try {
        const updatedCustomer = await update(id, data)
        res.status(200).json(updatedCustomer)
    } catch (err) {
        res.status(500).json(err)
    }
}

const showCustomer = async (req, res) => {
    const id = req.params.id
    try {
        const customer = await show(id)
        res.status(200).json(customer)
    } catch (err) {
        res.status(500).json(err)
    }
}

const listCustomer = async (req, res) => {
    try {
        const customerList = await list()
        res.status(200).json(customerList)
    } catch (err) {
        res.status(500).json(err)
    }
}



module.exports = {
    createCustomer,
    deleteCustomer,
    updateCustomer,
    showCustomer,
    listCustomer
}