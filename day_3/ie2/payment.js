// payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
  const cartItems = getCartItems();
  if (cartItems.length === 0) {
    return { status: 'failed', message: 'Cart is empty' };
  }

  let subtotal = getCartTotal();
  let discount = 0;
  let finalTotal = subtotal;

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, cartItems);
    subtotal = discountResult.originalTotal;
    discount = discountResult.discount;
    finalTotal = discountResult.finalTotal;
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  // Simulate payment success
  cartItems.forEach(item => reduceStock(item.product.id, item.quantity));
  clearCart();

  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal,
    discount,
    total: finalTotal,
    paymentMethod,
    status: 'success',
    message: 'Payment processed successfully'
  };
}

export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
  return 'ORD' + Date.now();
}