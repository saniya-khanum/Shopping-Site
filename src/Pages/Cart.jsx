import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} style={{ height: 50 }} />
          <p>{item.title}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}

      {showPopup && <div>Order placed successfully!</div>}
    </div>
  );
}
