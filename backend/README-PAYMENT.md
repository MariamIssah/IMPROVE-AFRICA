# IMPROVE Africa Marketplace Payment Integration

This document provides an overview of the payment options implemented in the IMPROVE Africa Marketplace platform.

## Payment Methods

The marketplace supports multiple payment methods to cater to the diverse needs of customers across Africa:

### 1. Credit/Debit Card Payments

Integrated with Stripe, the platform accepts international credit and debit cards including:

- Visa
- Mastercard
- American Express
- Discover

Card payments are processed securely through Stripe's payment infrastructure, ensuring PCI compliance and fraud protection.

### 2. Mobile Money Payments

Mobile Money is a popular payment method in Africa, allowing users to make payments using their mobile phone accounts. The following Mobile Money providers are supported:

#### MTN Mobile Money

- Most widely used in Ghana and several other African countries
- Uses prefixes: 024, 054, 055, 059
- Payment process: Users receive a prompt on their phone or can dial \*170# to authorize payments

#### Airtel Money / Tigo Cash

- Common in Ghana and other markets
- Uses prefixes: 026, 027, 057, 056
- Payment process: Similar to MTN with provider-specific USSD codes

#### Vodafone Cash

- Available to Vodafone subscribers in Ghana
- Uses prefixes: 020, 050
- Payment process: Requires voucher for authorization in some cases

### 3. Bank Transfer

For larger purchases, customers can pay via direct bank transfer:

- Customer receives bank account details during checkout
- Uploads proof of payment
- Order is processed after payment verification

### 4. Cash on Delivery

Available for customers within specified delivery zones:

- No upfront payment required
- Customer pays in cash when the product is delivered
- Available only in selected urban areas

## Technical Implementation

### Mobile Money Integration

The Mobile Money integration is handled through `js/momo-payment.js`, which:

1. Validates phone numbers based on Ghana's telecom provider patterns
2. Provides appropriate payment instructions based on the selected provider
3. Simulates or processes payment requests
4. Handles success/failure cases and redirects

In a production environment, this would connect to:

- Mobile Money payment aggregators like Hubtel, Paystack, or Flutterwave
- Direct telecom API integrations where available
- Backend webhooks for payment verification

### Stripe Integration

Stripe is used for card payments with the following features:

- Stripe Elements for secure card collection
- Payment Intents API for transaction processing
- Webhook integration for asynchronous payment events

### Order Flow

1. User adds products to cart (managed by `js/cart.js`)
2. User proceeds to checkout (`checkout.html`)
3. User fills shipping information and selects payment method
4. Order is created in the database
5. Payment is processed based on selected method
6. On successful payment, inventory is updated and order status changes to "processing"
7. User is redirected to order confirmation page

## Testing Payment Methods

### Mobile Money Test Mode

For testing Mobile Money payments:

- Use valid phone number formats based on the selected provider
- The system will simulate payment success (90% success rate in demo mode)
- Use phone numbers starting with:
  - MTN: 024, 054, 055, 059
  - Airtel/Tigo: 026, 027, 057, 056
  - Vodafone: 020, 050

### Stripe Test Mode

For testing card payments:

- Use Stripe test cards: `4242 4242 4242 4242` (for successful payments)
- Expiry date: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## Implementation Notes

- All payment methods are implemented in a way that can be easily switched between test and production modes
- Mobile Money implementation includes phone number validation specific to Ghana's telecom patterns
- The UI provides clear instructions for each payment method
- Success/failure handling includes appropriate messaging and status updates

## Customization

To add new payment methods or customize existing ones:

1. Add the payment option in `checkout.html`
2. Implement handling logic in JavaScript
3. Update the backend API in `controllers/paymentController.js`
4. Update the Order model to support the new payment method

## Security Considerations

- All payment credentials are transmitted securely
- Stripe Elements handles sensitive card data
- Mobile Money transactions rely on phone verification (something you have)
- Database never stores full payment credentials
- Payment processing is handled server-side where possible
