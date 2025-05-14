
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  
  // Get unique categories from products
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
  
  useEffect(() => {
    // Get category from URL params
    const categoryFromURL = searchParams.get("category");
    const genderFromURL = searchParams.get("gender");
    
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
    
    if (genderFromURL) {
      setSelectedGender(genderFromURL);
    }
    
    setProducts(PRODUCTS);
  }, [searchParams]);
  
  useEffect(() => {
    let result = [...products];
    
    // Apply gender filter
    if (selectedGender) {
      result = result.filter(p => p.gender === selectedGender);
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Apply price filter
    result = result.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [products, selectedCategory, selectedGender, priceRange]);
  
  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };
  
  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedGender("");
    setPriceRange([0, 200000]);
  };

  return (
    <main>
      <div className="bg-brand-gray-light py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">All Products</h1>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Filters</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearFilters}
                className="mb-4"
              >
                Clear All
              </Button>
            </div>
            
            {/* Gender Filter */}
            <div>
              <h4 className="font-medium mb-3">Gender</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-all"
                    name="gender"
                    checked={selectedGender === ""}
                    onChange={() => setSelectedGender("")}
                    className="mr-2"
                  />
                  <label htmlFor="gender-all">All</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-men"
                    name="gender"
                    checked={selectedGender === "men"}
                    onChange={() => setSelectedGender("men")}
                    className="mr-2"
                  />
                  <label htmlFor="gender-men">Men</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="gender-women"
                    name="gender"
                    checked={selectedGender === "women"}
                    onChange={() => setSelectedGender("women")}
                    className="mr-2"
                  />
                  <label htmlFor="gender-women">Women</label>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="category-all"
                    name="category"
                    checked={selectedCategory === ""}
                    onChange={() => setSelectedCategory("")}
                    className="mr-2"
                  />
                  <label htmlFor="category-all">All</label>
                </div>
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`} className="capitalize">
                      {category.replace("-", " ")}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Filter */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-all"
                    name="price"
                    checked={priceRange[0] === 0 && priceRange[1] === 200000}
                    onChange={() => handlePriceRangeChange(0, 200000)}
                    className="mr-2"
                  />
                  <label htmlFor="price-all">All Prices</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-under-50k"
                    name="price"
                    checked={priceRange[0] === 0 && priceRange[1] === 50000}
                    onChange={() => handlePriceRangeChange(0, 50000)}
                    className="mr-2"
                  />
                  <label htmlFor="price-under-50k">Under UGX 50,000</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-50k-100k"
                    name="price"
                    checked={priceRange[0] === 50000 && priceRange[1] === 100000}
                    onChange={() => handlePriceRangeChange(50000, 100000)}
                    className="mr-2"
                  />
                  <label htmlFor="price-50k-100k">UGX 50,000 - 100,000</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="price-over-100k"
                    name="price"
                    checked={priceRange[0] === 100000 && priceRange[1] === 200000}
                    onChange={() => handlePriceRangeChange(100000, 200000)}
                    className="mr-2"
                  />
                  <label htmlFor="price-over-100k">Over UGX 100,000</label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="md:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-4">No products found</h3>
                <p className="text-gray-500 mb-6">Try changing your filters to find products.</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-gray-500">{filteredProducts.length} products</p>
                </div>
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
