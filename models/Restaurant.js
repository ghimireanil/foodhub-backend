const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  bannerImage: {
    type: String,
    required: true,
  },
  menu: {
    type: [
      {
        name: {
          type: Array,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
