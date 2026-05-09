import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: {
    type: [String],
    required: true,
    trim: true,
  },
  chapters: {
    type: Number,
    required: true,
    min: 0,
  },
  volumes: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
