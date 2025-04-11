import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="border p-2 rounded">
            <img src={product.image} alt="" className="h-32 mx-auto" />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
