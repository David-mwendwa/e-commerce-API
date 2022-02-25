
const getAllOrders = async (req, res) => {
  res.send('getAllOrders')
}

const getSingleOrder = async (req, res) => {
  res.send('getSingleOrder');
};

const getCurrrentUserOrders = async (req, res) => {
  res.send('getCurrrentUserOrders');
};

const createOrder = async (req, res) => {
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