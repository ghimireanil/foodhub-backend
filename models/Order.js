const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  restaurantID: {
    type: String,
    required: true,
  },
  foodItems: {
    type: Array,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  dateOrdered: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
