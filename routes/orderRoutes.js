const express = require('express');
const router = express.Router();

const {
  getAllOrders,
  getSingleOrder,
  getCurrrentUserOrders,
  createOrder,
  updateOrder,
} = require('../controllers/orderController');

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

router
  .route('/')
  .get([authenticateUser, authorizePermissions('admin')], getAllOrders)
  .post(authenticateUser, createOrder);

router.route('/showAllMyOrders').get(authenticateUser, getCurrrentUserOrders);

router
  .route('/:id')
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

module.exports = router;
