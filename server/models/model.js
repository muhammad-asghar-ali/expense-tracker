const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Investment"
    },
    color: {
        type: String,
        default: "#FCBE44"
    }
})

const transactionsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Investment"
    },
    type: {
        type: String,
        default: "#FCBE44"
    },
    amount: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Categories = mongoose.model('categories', categoriesSchema)
const Transaction = mongoose.model('transaction', transactionsSchema)

module.exports = {
    Categories,
    Transaction
}