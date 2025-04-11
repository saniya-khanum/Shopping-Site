import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <img src={product.image} alt={product.title} style={{ height: '200px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
