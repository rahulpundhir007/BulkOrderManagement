const mongoose = require('mongoose');

const priceTierSchema = new mongoose.Schema({
  minQty: { type: Number, required: true },
  maxQty: { type: Number },
  price: { type: Number, required: true }
}, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  description: { type: String },
  moq: { type: Number, required: true, default: 1 }, // Minimum Order Quantity
  stock: { type: Number, required: true, default: 0 },
  priceTiers: [priceTierSchema],
  image: { type: String } // Optional image URL
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
