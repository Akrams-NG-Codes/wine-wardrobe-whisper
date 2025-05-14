import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getBestSellers } from "@/data/products";
import { useCart, Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductSection from "@/components/home/ProductSection";
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  
  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      setIsLoading(true);
      
      try {
        const foundProduct = await getProductById(id);
        setProduct(foundProduct || null);
        
        // Set default selections
        if (foundProduct) {
          setSelectedSize(foundProduct.sizes?.[0] || "");
          setSelectedColor(foundProduct.colors?.[0] || "");
        }
        
        // Get related products
        const bestSellers = await getBestSellers();
        setRelatedProducts(bestSellers.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          title: "Error",
          description: "Failed to load product details.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };
  
  // Generate WhatsApp message for direct order
  const generateWhatsAppMessage = () => {
    if (!product) return "";
    
    let message = `Hello, I would like to order:\n\n`;
    message += `Product: ${product.name}\n`;
    message += `Price: UGX ${product.price.toLocaleString()}\n`;
    message += `Quantity: ${quantity}\n`;
    
    if (selectedSize) message += `Size: ${selectedSize}\n`;
    if (selectedColor) message += `Color: ${selectedColor}\n`;
    
    message += `\nPlease confirm if this item is available. Thank you!`;
    
    return encodeURIComponent(message);
  };
  
  if (isLoading) {
    return (
      <div className="container py-16 text-center">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <main>
      <div className="container py-16">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="text-sm">
            <ol className="flex">
              <li>
                <Link to="/" className="text-gray-500 hover:text-brand-purple transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link to="/shop" className="text-gray-500 hover:text-brand-purple transition-colors">
                  Shop
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link 
                  to={`/${product.gender}`} 
                  className="text-gray-500 hover:text-brand-purple transition-colors"
                >
                  {product.gender === "men" ? "Men" : "Women"}
                </Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-brand-gray-dark font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl">UGX {product.price.toLocaleString()}</p>
            
            <div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? "border-brand-purple bg-brand-purple text-white"
                          : "border-gray-300 hover:border-brand-purple"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color
                          ? "border-brand-purple bg-brand-purple text-white"
                          : "border-gray-300 hover:border-brand-purple"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-1 text-center py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-purple hover:bg-brand-purple-dark transition-colors"
              >
                Add to Cart
              </Button>
              
              <WhatsAppButton
                phoneNumber="0703571358"
                message={generateWhatsAppMessage()}
                className="flex-1"
              />
            </div>
            
            {/* Additional Info */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Category:</p>
                  <p className="text-gray-600 capitalize">
                    {product.category.replace("-", " ")}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Collection:</p>
                  <p className="text-gray-600 capitalize">{product.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <ProductSection 
        title="You May Also Like"
        products={relatedProducts}
        viewAllLink="/shop"
        limit={4}
      />
    </main>
  );
};

export default ProductDetail;
