
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" 
          alt="Allan Wine Clothing" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center text-white">
        <div className="max-w-xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Fashion for Modern Living</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the latest in style and comfort from Allan Wine Clothing</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <Button className="bg-white text-brand-gray-dark hover:bg-gray-200 transition-colors">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-gray-dark transition-colors">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
