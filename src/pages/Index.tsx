
import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getNewArrivals, getBestSellers } from "@/data/products";

const Index = () => {
  const newArrivals = getNewArrivals();
  const bestSellers = getBestSellers();

  return (
    <main>
      <HeroSection />
      
      <ProductSection 
        title="New Arrivals" 
        products={newArrivals}
        viewAllLink="/shop"
      />
      
      <FeaturedSection 
        title="Men's Collection"
        image="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        description="Discover our premium men's collection featuring stylish trousers, shirts, and sweaters crafted from high-quality materials for the modern man."
        linkTo="/men"
        buttonText="Shop Men's"
        imagePosition="left"
      />
      
      <ProductSection 
        title="Best Sellers" 
        products={bestSellers}
        viewAllLink="/shop"
      />
      
      <FeaturedSection 
        title="Women's Collection"
        image="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        description="Explore our women's collection designed with both style and comfort in mind. From elegant blouses to comfortable trousers, find pieces that effortlessly enhance your wardrobe."
        linkTo="/women"
        buttonText="Shop Women's"
        imagePosition="right"
      />
      
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
};

export default Index;
