const router = require("express").Router()
const CustomerContoller = require("../controller/CustomerController")


router.get("/:id", CustomerContoller.showCustomer)
router.get("/", CustomerContoller.listCustomer)
router.delete("/:id", CustomerContoller.deleteCustomer)
router.post("/", CustomerContoller.createCustomer)
router.put("/:id", CustomerContoller.updateCustomer)


module.exports = router