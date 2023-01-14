const Customer = require("../model/Customer");



const create = (data) => {
    return new Customer(data).save()
}

const destroy = (id) => {
    return Customer.findByIdAndDelete(id)
}

const update = (id, data) => {
    return Customer.findByIdAndUpdate(id, data, {new: true})
}

const list = () => {
    return Customer.find().limit(100)
}

const show = (id) => {
    return Customer.findById(id)
}



module.exports = {
    create,
    destroy,
    update,
    list,
    show
}