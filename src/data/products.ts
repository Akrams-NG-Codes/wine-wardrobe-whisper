
import { Product } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

export const PRODUCTS: Product[] = [
  // Men's Products
  {
    id: "m1",
    name: "Classic Fit Oxford Shirt",
    price: 85000,
    image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "shirts",
    gender: "men",
    description: "A timeless Oxford shirt crafted from premium cotton for everyday comfort and style. Features a classic button-down collar and barrel cuffs.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Light Blue"]
  },
  {
    id: "m2",
    name: "Slim Fit Chino Trousers",
    price: 95000,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "trousers",
    gender: "men",
    description: "Modern slim-fit chinos made from stretch cotton for comfort and mobility. Perfect for both casual and semi-formal occasions.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "Olive", "Black"]
  },
  {
    id: "m3",
    name: "Premium Cotton T-Shirt",
    price: 45000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "t-shirts",
    gender: "men",
    description: "Luxuriously soft t-shirt made from 100% premium cotton. Features a comfortable crew neck and relaxed fit for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy"]
  },
  {
    id: "m4",
    name: "Merino Wool Sweater",
    price: 125000,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "jumpers",
    gender: "men",
    description: "Luxurious merino wool sweater that's incredibly soft, naturally temperature-regulating, and perfect for layering in any season.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy", "Burgundy"]
  },
  {
    id: "m5",
    name: "Linen Blend Shirt",
    price: 90000,
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "shirts",
    gender: "men",
    description: "Lightweight linen-blend shirt perfect for warm weather. Features a relaxed fit and breathable fabric for maximum comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Beige", "Light Blue"]
  },
  {
    id: "m6",
    name: "Stretch Denim Jeans",
    price: 110000,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "trousers",
    gender: "men",
    description: "Premium stretch denim jeans that offer both style and comfort. Features a modern slim fit with just the right amount of stretch.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Dark Blue", "Black", "Medium Blue"]
  },
  
  // Women's Products
  {
    id: "w1",
    name: "Silk Blend Blouse",
    price: 95000,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "shirts",
    gender: "women",
    description: "Elegant silk-blend blouse with a flattering drape. Perfect for both office wear and evening occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Blush Pink"]
  },
  {
    id: "w2",
    name: "High-Waisted Tailored Trousers",
    price: 110000,
    image: "https://images.unsplash.com/photo-1509551781882-641c11e201a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "trousers",
    gender: "women",
    description: "Sophisticated high-waisted trousers with a tailored fit. Features a flattering silhouette and comfortable stretch fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel"]
  },
  {
    id: "w3",
    name: "Organic Cotton T-Shirt",
    price: 45000,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "t-shirts",
    gender: "women",
    description: "Sustainable and soft organic cotton t-shirt with a relaxed fit. An essential piece for any wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Sage"]
  },
  {
    id: "w4",
    name: "Cashmere Blend Sweater",
    price: 135000,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "jumpers",
    gender: "women",
    description: "Luxuriously soft cashmere-blend sweater designed for warmth and comfort. Features a relaxed fit and ribbed details.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Light Gray", "Dusty Rose"]
  },
  {
    id: "w5",
    name: "Cotton Poplin Shirt",
    price: 85000,
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "shirts",
    gender: "women",
    description: "Crisp cotton poplin shirt with a slightly oversized fit. Perfect for achieving that effortlessly chic look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Striped"]
  },
  {
    id: "w6",
    name: "Wide-Leg Linen Trousers",
    price: 100000,
    image: "https://images.unsplash.com/photo-1551854838-212c9a5eea65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "trousers",
    gender: "women",
    description: "Breezy wide-leg trousers made from premium linen. Features a comfortable elastic waistband and flowing silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Natural", "Black", "Terracotta"]
  }
];

// Helper functions using Supabase

/**
 * Fetch all products from Supabase
 */
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `);
    
    if (error) {
      console.error('Error fetching products:', error);
      return PRODUCTS; // Fallback to static data
    }

    if (!products || products.length === 0) {
      return PRODUCTS; // Fallback to static data
    }

    // Transform the data to match our Product interface
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    }));
  } catch (error) {
    console.error('Error in fetchProducts:', error);
    return PRODUCTS; // Fallback to static data
  }
};

// Helper function to get new arrivals (most recent 6 products)
export const getNewArrivals = async (): Promise<Product[]> => {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `)
      .order('created_at', { ascending: false })
      .limit(6);
    
    if (error || !products || products.length === 0) {
      return PRODUCTS.slice(0, 6); // Fallback to static data
    }

    // Transform the data
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    }));
  } catch (error) {
    console.error('Error in getNewArrivals:', error);
    return PRODUCTS.slice(0, 6); // Fallback to static data
  }
};

// Helper function to get best sellers (random selection of 6 products)
export const getBestSellers = async (): Promise<Product[]> => {
  try {
    // In a real app, this would be based on order counts or ratings
    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `)
      .limit(6);
    
    if (error || !products || products.length === 0) {
      // Fallback to static data
      const shuffled = [...PRODUCTS].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    }

    // Transform the data
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    }));
  } catch (error) {
    console.error('Error in getBestSellers:', error);
    // Fallback to static data
    const shuffled = [...PRODUCTS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }
};

// Helper function to filter products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', category)
      .single();
    
    if (categoryError || !categoryData) {
      return PRODUCTS.filter(product => product.category === category);
    }

    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `)
      .eq('category_id', categoryData.id);
    
    if (error || !products || products.length === 0) {
      return PRODUCTS.filter(product => product.category === category);
    }

    // Transform the data
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    }));
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    return PRODUCTS.filter(product => product.category === category);
  }
};

// Helper function to filter products by gender
export const getProductsByGender = async (gender: string): Promise<Product[]> => {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `)
      .eq('gender', gender);
    
    if (error || !products || products.length === 0) {
      return PRODUCTS.filter(product => product.gender === gender);
    }

    // Transform the data
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    }));
  } catch (error) {
    console.error('Error in getProductsByGender:', error);
    return PRODUCTS.filter(product => product.gender === gender);
  }
};

// Helper function to get a product by ID
export const getProductById = async (id: string): Promise<Product | undefined> => {
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select(`
        *,
        categories:category_id(name, slug),
        product_sizes(size),
        product_colors(color)
      `)
      .eq('id', id)
      .single();
    
    if (error || !product) {
      return PRODUCTS.find(p => p.id === id);
    }

    // Transform the data
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '',
      category: product.categories?.slug || '',
      gender: product.gender,
      description: product.description || '',
      sizes: product.product_sizes?.map(s => s.size) || [],
      colors: product.product_colors?.map(c => c.color) || [],
    };
  } catch (error) {
    console.error('Error in getProductById:', error);
    return PRODUCTS.find(p => p.id === id);
  }
};
