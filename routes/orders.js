const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Post restaurant order
router.post('/users/:id/orders', async (req, res) => {
  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
