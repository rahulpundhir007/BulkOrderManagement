const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  sku: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // Price applied at the time of order
  total: { type: Number, required: true }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  taxAmount: { type: Number, required: true, default: 0 }, // e.g., GST
  grandTotal: { type: Number, required: true },
  paymentType: { type: String, enum: ['credit', 'paynow'], required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Shipped', 'Delivered', 'Rejected'], default: 'Pending' },
  invoiceUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
