
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart, Product } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div 
      className="group animate-fade-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md mb-4">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Quick Add Button - Shows on hover on desktop, always visible on mobile */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 transform transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full lg:translate-y-full'
          } lg:group-hover:translate-y-0`}
        >
          <button 
            onClick={handleAddToCart}
            className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white py-2 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium hover:text-brand-purple transition-colors">{product.name}</h3>
          <p className="text-gray-500 mt-1">UGX {product.price.toLocaleString()}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
