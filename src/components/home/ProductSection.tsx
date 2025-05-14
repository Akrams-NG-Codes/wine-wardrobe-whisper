
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/context/CartContext";

interface ProductSectionProps {
  title: string;
  category?: string;
  limit?: number;
  viewAllLink: string;
  products?: Product[];
}

const ProductSection = ({ 
  title, 
  category, 
  limit = 4, 
  viewAllLink,
  products: propProducts
}: ProductSectionProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (propProducts) {
      setProducts(propProducts.slice(0, limit));
    }
  }, [category, limit, propProducts]);

  return (
    <div className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Link to={viewAllLink}>
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
              View All
            </Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
