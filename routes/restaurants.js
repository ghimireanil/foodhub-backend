const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

//Create New Data
router.post('/', async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    address: req.body.address,
    bannerImage: req.body.bannerImage,
    menu: req.body.menu,
    rating: req.body.rating,
  });
  try {
    const savedRestaurant = await restaurant.save();
    res.json(savedRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Get All data
router.get('/', async (req, res) => {
  try {
    const getRestaurants = await Restaurant.find();
    res.json(getRestaurants);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Get Specific Data
router.get('/:id', async (req, res) => {
  try {
    const specificRestaurant = await Restaurant.findById(req.params.id);
    res.json(specificRestaurant);
  } catch (error) {
    res.json(console.log(error));
  }
});

//  Delete specific data
router.delete('/:id', async (req, res) => {
  try {
    const deleteRestaurant = await Restaurant.remove({
      _id: req.params.id,
    });
    res.json(deleteRestaurant);
  } catch (error) {
    res.json({ message: err });
  }
});

// Update a specific data
router.patch('/:id', async (req, res) => {
  try {
    const updateRestaurant = await Restaurant.updateOne(
      { _id: req.params.id },
      { $set: { userRating: req.body.userRating } }
    );
    res.json(updateRestaurant);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
