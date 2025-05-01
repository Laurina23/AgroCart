import { useState } from 'react';

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setCardExpiry(value);
  };

  return (
    <div className="payment-container">
      <style>{`
        .payment-container {
          max-width: 480px;
          margin: 40px auto;
          padding: 24px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          font-family: sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }   

        *, *::before, *::after {
          box-sizing: inherit;
        }

        .payment-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 24px;
          color: #111;
        }

        .payment-summary .label {
          color: #666;
          font-size: 14px;
        }

        .payment-summary .amount {
          font-size: 28px;
          font-weight: bold;
          margin: 6px 0;
        }

        .order-info {
          font-size: 14px;
          color: #777;
          display: flex;
          gap: 6px;
        }

        .dot {
          color: #ccc;
        }

        .payment-methods .method-grid {
          display: flex;
          gap: 8px;
          margin-top: 10px;
        }

        .payment-methods button {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          background: #fafafa;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .payment-methods button.selected {
          border: 2px solid #000;
          background: #f0f0f0;
        }

        .form-group {
          margin-bottom: 16px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
        }

        .input-icon {
          position: relative;
        }

        .input-icon input {
          padding-right: 30px;
        }

        .input-icon span {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        small {
          display: block;
          margin-top: 6px;
          color: #777;
          font-size: 12px;
        }

        .row {
          display: flex;
          gap: 16px;
        }

        .cod-note {
          background: #f9f9f9;
          padding: 12px;
          border-radius: 6px;
          display: flex;
          gap: 10px;
          margin-top: 12px;
          color: #555;
          font-size: 14px;
        }

        .alert {
          font-size: 18px;
          margin-top: 4px;
        }

        .btn-full {
          width: 100%;
          background: #000;
          color: #fff;
          padding: 12px;
          font-size: 15px;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 20px;
          transition: background 0.3s;
        }

        .btn-full:hover {
          background: #333;
        }

        .secure-note {
          text-align: center;
          font-size: 12px;
          color: #888;
          margin-top: 12px;
        }

        .loading {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .spinner {
          border: 2px solid #fff;
          border-top: 2px solid #444;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .payment-success {
          text-align: center;
        }

        .checkmark {
          font-size: 40px;
          color: green;
          margin-bottom: 12px;
        }
      `}</style>

      <h1 className="payment-title">Complete Your Payment</h1>

      {paymentStatus === 'success' ? (
        <div className="payment-success">
          <div className="checkmark">&#10004;</div>
          <h2>Payment Successful!</h2>
          <p>Your order has been placed successfully.</p>
          <hr />
          <button className="btn-full">Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="payment-summary">
            <p className="label">Amount to pay</p>
            <p className="amount">₹2,450.00</p>
            <div className="order-info">
              <span>Order #AGR78245</span>
              <span className="dot">•</span>
              <span>20kg Premium Rice</span>
            </div>
          </div>

          <div className="payment-methods">
            <p className="label">Payment Method</p>
            <div className="method-grid">
              <button
                className={paymentMethod === 'upi' ? 'selected' : ''}
                onClick={() => setPaymentMethod('upi')}
              >
                💰<span>UPI</span>
              </button>
              <button
                className={paymentMethod === 'card' ? 'selected' : ''}
                onClick={() => setPaymentMethod('card')}
              >
                💳<span>Card</span>
              </button>
              <button
                className={paymentMethod === 'cod' ? 'selected' : ''}
                onClick={() => setPaymentMethod('cod')}
              >
                💵<span>Cash</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {paymentMethod === 'upi' && (
              <div className="form-group">
                <label>UPI ID</label>
                <div className="input-icon">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                  />
                  <span>&gt;</span>
                </div>
                <small>Popular: PhonePe, GooglePay, Paytm, BHIM</small>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="form-section">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Name on card"
                  />
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="cod-note">
                <span className="alert">⚠️</span>
                <div>
                  <p><strong>Cash on Delivery</strong></p>
                  <p>Please keep exact change ready at the time of delivery.</p>
                </div>
              </div>
            )}

            <div className="submit-section">
              <button className="btn-full" disabled={isProcessing}>
                {isProcessing ? (
                  <span className="loading">
                    <span className="spinner"></span> Processing...
                  </span>
                ) : (
                  <>
                    Pay ₹2,450.00 <span className="lock">🔒</span>
                  </>
                )}
              </button>
              <p className="secure-note">
                🔒 Secure payment processing by HarvestPay
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
