const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  discountedPersent: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  color: {
    type: String,
  },
  sizes: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  imageUrl: {
    type: String,
  },
  rating: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numRating: {
    type: Number,
    defualt: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  createddAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('products',productSchema);

module.exports= Product