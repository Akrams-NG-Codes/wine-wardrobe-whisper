
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByGender } from "@/data/products";
import ProductSection from "@/components/home/ProductSection";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";

const Men = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const mensProducts = getProductsByGender("men");
    setProducts(mensProducts);
  }, []);
  
  // Group products by category
  const getProductsByCategory = (category: string) => {
    return products.filter(p => p.category === category);
  };
  
  const shirts = getProductsByCategory("shirts");
  const trousers = getProductsByCategory("trousers");
  const tShirts = getProductsByCategory("t-shirts");
  const jumpers = getProductsByCategory("jumpers");

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Men's Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Men's Collection</h1>
            <p className="text-lg md:text-xl mb-8">
              Discover premium men's clothing crafted for style and comfort.
            </p>
            <Link to="/shop?gender=men">
              <Button className="bg-white text-brand-gray-dark hover:bg-gray-200 transition-colors">
                Shop All Men's
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Category Highlights */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/shop?gender=men&category=shirts" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Shirts" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Shirts</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=men&category=trousers" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Trousers" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Trousers</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=men&category=t-shirts" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="T-Shirts" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">T-Shirts</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=men&category=jumpers" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Jumpers & Sweaters" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Jumpers & Sweaters</span>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Product Sections by Category */}
      {shirts.length > 0 && (
        <ProductSection 
          title="Shirts" 
          products={shirts}
          viewAllLink="/shop?gender=men&category=shirts"
          limit={4}
        />
      )}
      
      {trousers.length > 0 && (
        <ProductSection 
          title="Trousers" 
          products={trousers}
          viewAllLink="/shop?gender=men&category=trousers"
          limit={4}
        />
      )}
      
      {tShirts.length > 0 && (
        <ProductSection 
          title="T-Shirts" 
          products={tShirts}
          viewAllLink="/shop?gender=men&category=t-shirts"
          limit={4}
        />
      )}
      
      {jumpers.length > 0 && (
        <ProductSection 
          title="Jumpers & Sweaters" 
          products={jumpers}
          viewAllLink="/shop?gender=men&category=jumpers"
          limit={4}
        />
      )}
    </main>
  );
};

export default Men;
