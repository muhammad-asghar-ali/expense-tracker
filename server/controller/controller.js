const { Categories, Transaction } = require('../models/model')

module.exports.createCategories = async (req, res) => {
    try {
        const data = req.body

        const categoriesModel = {
            type: data.type,
            color: data.color
        }
        const category = await Categories.create(categoriesModel)
        res.status(200).json({ category })
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports.getCategories = async (req, res) => {
    try {
        const categories = await Categories.find({}).lean()
        const filter = categories.map(v => Object.assign({}, { type: v.type, color: v.color }))
        res.status(200).json({ filter })
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports.createTransaction = async (req, res) => {
    try {
        const { name, type, amount } = req.body

        const transactionModel = {
            name,
            type,
            amount,
            date: new Date()
        }

        const transaction = await Transaction.create(transactionModel)
        res.status(200).json({ transaction })
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.find().lean()
        res.status(200).json({ transaction })
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.deleteOne(req.body)
        res.status(200).json({})
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports.getLabels = async (req, res) => {
    try {
        const labels = await Transaction.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "type",
                    foreignField: "type",
                    as: "categoryInfo"
                }
            },
            {
                $unwind: "$categoryInfo"
            }
        ])
        let data = labels.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categoryInfo['color'] }))

        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ err })
    }
} 