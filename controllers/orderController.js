const Product = require('../models/Product');
const Order = require('../models/Order');
const CustomError = require('../errors');
const { StatusCodes } = require('../models/Product');
const { CheckPermissions } = require('../utils');

const getAllOrders = async (req, res) => {
  res.send('getAllOrders');
};

const getSingleOrder = async (req, res) => {
  res.send('getSingleOrder');
};

const getCurrrentUserOrders = async (req, res) => {
  res.send('getCurrrentUserOrders');
};

const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body;
  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided');
  }
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError(
      'Please provide tax and shipping fee'
    );
  }
  let orderItems = [];
  let subtotal = 0;
  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id : ${item.product}`
      );
    }
    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    };
    // add item to order
    orderItems = [...orderItems, singleOrderItem];
    // calculate subtotal
    subtotal += item.amount * price;
  }
  console.log(orderItems);
  console.log(subtotal);
  res.send('createOrder');
};

const updateOrder = async (req, res) => {
  res.send('updateOrder');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrrentUserOrders,
  createOrder,
  updateOrder,
};
