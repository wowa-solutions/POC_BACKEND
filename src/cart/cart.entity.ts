import * as mongoose from 'mongoose';

// CartItem Schema
const CartItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  quantity: { type: Number, required: true },
  addedAt: { type: Date, required: true, default: Date.now },
});

// Haupt-Cart Schema
export const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  cartItems: { type: [CartItemSchema], required: true, default: [] },
  status: {
    type: String,
    enum: ['open', 'completed', 'cancelled'],
    default: 'open',
  },
  totalPrice: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save Hook für updatedAt
CartSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Export des Models
export default mongoose.model('Cart', CartSchema);
