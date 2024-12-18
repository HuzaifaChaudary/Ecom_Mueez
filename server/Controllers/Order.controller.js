const Order = require('../Models/Order.modal');

const createOrder = async (req, res) => {
  try {
    const { user, cartItems, totalAmount, shippingMethod } = req.body;

    if (!user || !cartItems || !totalAmount || !shippingMethod) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const newOrder = new Order({
      user,
      cartItems,
      totalAmount,
      shippingMethod,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('cartItems._id');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
};

module.exports = { createOrder, getAllOrders };
