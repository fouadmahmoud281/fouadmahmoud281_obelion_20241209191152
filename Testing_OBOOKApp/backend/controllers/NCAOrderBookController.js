const NCAOrderBookModel = require('../models/NCAOrderBookModel');

// Create a new order
async function createOrder(req, res) {
  try {
    const { orderId, instrument, price, quantity } = req.body;
    const newOrder = await NCAOrderBookModel.create({ orderId, instrument, price, quantity });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all orders
async function getAllOrders(req, res) {
  try {
    const orders = await NCAOrderBookModel.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a single order by ID
async function getOrderById(req, res) {
  try {
    const { id } = req.params;
    const order = await NCAOrderBookModel.findOne({ where: { orderId: id } });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update an order by ID
async function updateOrder(req, res) {
  try {
    const { id } = req.params;
    const { instrument, price, quantity } = req.body;
    const order = await NCAOrderBookModel.findOne({ where: { orderId: id } });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.instrument = instrument;
    order.price = price;
    order.quantity = quantity;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete an order by ID
async function deleteOrder(req, res) {
  try {
    const { id } = req.params;
    const order = await NCAOrderBookModel.findOne({ where: { orderId: id } });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
};
