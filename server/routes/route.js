const express = require("express")
const router = express.Router()
const controller = require("../controller/controller")

router.post("/add/categories", controller.createCategories)
router.get("/categories", controller.getCategories)

router.post("/add/transaction", controller.createTransaction)
router.get("/transaction", controller.getTransaction)
router.delete("/transaction", controller.deleteTransaction)

router.get("/labels", controller.getLabels)

module.exports = router
