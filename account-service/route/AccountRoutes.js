const router = require("express").Router()
const AccountController = require("../controller/AccountController")


router.put("/withdraw/:id", AccountController.withdrawMoney)
router.put("/deposit/:id", AccountController.depositMoney)

router.get("/:id", AccountController.showAccount)
router.get("/", AccountController.listAccount)
router.delete("/:id", AccountController.deleteAccount)
router.post("/", AccountController.createAccount)
router.put("/:id", AccountController.updateAccount)


module.exports = router