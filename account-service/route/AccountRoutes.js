const router = require("express").Router()
const AccountController = require("../controller/AccountController")




router.get("/:id", AccountController.showAccount)
router.get("/", AccountController.listAccount)
router.delete("/:id", AccountController.deleteAccount)
router.post("/", AccountController.createAccount)
router.put("/:id", AccountController.updateAccount)


module.exports = router