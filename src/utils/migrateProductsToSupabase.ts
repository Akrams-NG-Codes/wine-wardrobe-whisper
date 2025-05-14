
import { supabase } from "@/integrations/supabase/client";
import { PRODUCTS } from "@/data/products";

/**
 * This utility function migrates the static product data to Supabase.
 * To use it, call this function from the browser console:
 * 
 * import { migrateProductsToSupabase } from "@/utils/migrateProductsToSupabase";
 * migrateProductsToSupabase();
 */
export const migrateProductsToSupabase = async () => {
  console.log("Starting product migration...");

  try {
    // First get all categories to map them
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*');
    
    if (catError) {
      console.error("Error fetching categories:", catError);
      return;
    }

    const categoryMap = categories.reduce((acc, cat) => {
      acc[cat.slug] = cat.id;
      return acc;
    }, {});

    // Process each product
    for (const product of PRODUCTS) {
      console.log(`Processing product: ${product.name}`);
      
      // Map category slug to category ID
      const categoryId = categoryMap[product.category];
      if (!categoryId) {
        console.error(`Category ${product.category} not found, skipping product ${product.name}`);
        continue;
      }

      // Insert product
      const { data: newProduct, error } = await supabase
        .from('products')
        .insert({
          name: product.name,
          price: product.price,
          description: product.description || '',
          image: product.image,
          gender: product.gender,
          category_id: categoryId
        })
        .select()
        .single();
      
      if (error) {
        console.error(`Error inserting product ${product.name}:`, error);
        continue;
      }
      
      console.log(`Product ${product.name} inserted with ID: ${newProduct.id}`);
      
      // Insert sizes
      if (product.sizes && product.sizes.length > 0) {
        const sizesData = product.sizes.map(size => ({
          product_id: newProduct.id,
          size
        }));
        
        const { error: sizeError } = await supabase
          .from('product_sizes')
          .insert(sizesData);
          
        if (sizeError) {
          console.error(`Error inserting sizes for ${product.name}:`, sizeError);
        }
      }
      
      // Insert colors
      if (product.colors && product.colors.length > 0) {
        const colorsData = product.colors.map(color => ({
          product_id: newProduct.id,
          color
        }));
        
        const { error: colorError } = await supabase
          .from('product_colors')
          .insert(colorsData);
          
        if (colorError) {
          console.error(`Error inserting colors for ${product.name}:`, colorError);
        }
      }
    }
    
    console.log("Migration completed!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
};
