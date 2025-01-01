const express = require('express')
const { createOrder, getAllOrders } = require('../Controllers/Order.controller')




const router = express.Router()



router.post('/orders', createOrder)
router.get('/get-allorders', getAllOrders)



module.exports = router