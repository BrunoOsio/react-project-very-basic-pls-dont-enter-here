const express = require("express")
const router = express.Router()

const apiService = require("../service/ApiService")

router.post("/create", apiService.createData)
router.get("/read", apiService.readData)
router.put("/update/:id", apiService.updateData)
router.delete("/delete/:id", apiService.deleteData)

module.exports = router