
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByGender } from "@/data/products";
import ProductSection from "@/components/home/ProductSection";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";

const Women = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const womensProducts = getProductsByGender("women");
    setProducts(womensProducts);
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
          src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Women's Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Collection</h1>
            <p className="text-lg md:text-xl mb-8">
              Discover premium women's clothing designed with style and comfort in mind.
            </p>
            <Link to="/shop?gender=women">
              <Button className="bg-white text-brand-gray-dark hover:bg-gray-200 transition-colors">
                Shop All Women's
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Category Highlights */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/shop?gender=women&category=shirts" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Shirts & Blouses" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Shirts & Blouses</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=women&category=trousers" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1509551781882-641c11e201a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Trousers" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Trousers</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=women&category=t-shirts" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="T-Shirts" 
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <span className="text-white text-xl font-bold">T-Shirts</span>
            </div>
          </Link>
          
          <Link to="/shop?gender=women&category=jumpers" className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
          title="Shirts & Blouses" 
          products={shirts}
          viewAllLink="/shop?gender=women&category=shirts"
          limit={4}
        />
      )}
      
      {trousers.length > 0 && (
        <ProductSection 
          title="Trousers" 
          products={trousers}
          viewAllLink="/shop?gender=women&category=trousers"
          limit={4}
        />
      )}
      
      {tShirts.length > 0 && (
        <ProductSection 
          title="T-Shirts" 
          products={tShirts}
          viewAllLink="/shop?gender=women&category=t-shirts"
          limit={4}
        />
      )}
      
      {jumpers.length > 0 && (
        <ProductSection 
          title="Jumpers & Sweaters" 
          products={jumpers}
          viewAllLink="/shop?gender=women&category=jumpers"
          limit={4}
        />
      )}
    </main>
  );
};

export default Women;
