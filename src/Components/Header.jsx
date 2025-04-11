import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header style={{ padding: 10, background: '#eee', display: 'flex', gap: 20 }}>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
