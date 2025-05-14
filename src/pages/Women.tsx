
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByGender, getProductsByCategory } from "@/data/products";
import ProductSection from "@/components/home/ProductSection";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";

const Women = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<{
    [key: string]: Product[];
  }>({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      
      try {
        // Fetch women's products
        const womensProducts = await getProductsByGender("women");
        setProducts(womensProducts);
        
        // Group by category
        const shirts = womensProducts.filter(p => p.category === "shirts");
        const trousers = womensProducts.filter(p => p.category === "trousers");
        const tShirts = womensProducts.filter(p => p.category === "t-shirts");
        const jumpers = womensProducts.filter(p => p.category === "jumpers");
        
        setProductsByCategory({
          shirts,
          trousers,
          "t-shirts": tShirts,
          jumpers
        });
      } catch (error) {
        console.error("Error fetching women's products:", error);
        toast({
          title: "Error",
          description: "Failed to load women's products.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

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
      
      {/* Loading state */}
      {isLoading && (
        <div className="container py-8 text-center">
          <p className="text-gray-500">Loading products...</p>
        </div>
      )}
      
      {/* Product Sections by Category */}
      {!isLoading && productsByCategory.shirts?.length > 0 && (
        <ProductSection 
          title="Shirts & Blouses" 
          products={productsByCategory.shirts}
          viewAllLink="/shop?gender=women&category=shirts"
          limit={4}
        />
      )}
      
      {!isLoading && productsByCategory.trousers?.length > 0 && (
        <ProductSection 
          title="Trousers" 
          products={productsByCategory.trousers}
          viewAllLink="/shop?gender=women&category=trousers"
          limit={4}
        />
      )}
      
      {!isLoading && productsByCategory["t-shirts"]?.length > 0 && (
        <ProductSection 
          title="T-Shirts" 
          products={productsByCategory["t-shirts"]}
          viewAllLink="/shop?gender=women&category=t-shirts"
          limit={4}
        />
      )}
      
      {!isLoading && productsByCategory.jumpers?.length > 0 && (
        <ProductSection 
          title="Jumpers & Sweaters" 
          products={productsByCategory.jumpers}
          viewAllLink="/shop?gender=women&category=jumpers"
          limit={4}
        />
      )}
    </main>
  );
};

export default Women;
