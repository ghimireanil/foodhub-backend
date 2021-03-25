const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Post restaurant review
router.post("/restaurants/:id/reviews", async (req, res) => {
  const review = new Review({
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
});

// List restaurant review
router.get("/restaurants/:id/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete restaurant review
router.delete(
  "/restaurants/:id/reviews/:reviewId",
  getReview,
  async (req, res) => {
    try {
      await res.review.remove();
      res.json({ message: "Deleted Review" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

async function getReview(req, res, next) {
  let review;
  try {
    review = await Review.findById(req.params.id);
    if (review == null) {
      return res.status(404).json({ message: "Cannot find review" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.review = review;
  next();
}

module.exports = router;
