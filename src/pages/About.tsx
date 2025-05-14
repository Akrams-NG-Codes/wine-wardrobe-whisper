
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/home/NewsletterSection";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="About Allan Wine Clothing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg md:text-xl">
              Learn about Allan Wine Clothing and our commitment to quality
            </p>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Allan Wine Clothing</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Allan Wine Clothing was founded with a simple yet powerful vision: to create stylish, high-quality garments that empower individuals to look and feel their best while maintaining comfort throughout their day.
            </p>
            
            <p className="mb-6">
              Established by fashion entrepreneur Allan Wine on Wilson One Street, our brand has grown from a small local boutique to a respected name in the fashion industry. Our journey began with a focus on well-crafted men's shirts and has expanded to include a comprehensive range of apparel for both men and women.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Philosophy</h3>
            
            <p className="mb-6">
              At Allan Wine Clothing, we believe that quality should never be compromised. Each garment is carefully designed with attention to detail, using premium fabrics that ensure longevity and comfort. Our design philosophy combines timeless elegance with contemporary trends, creating versatile pieces that transition effortlessly from professional settings to casual occasions.
            </p>
            
            <p className="mb-6">
              We're committed to ethical manufacturing practices and work closely with skilled artisans who share our passion for exceptional craftsmanship. By maintaining high standards throughout our production process, we ensure that every item that bears the Allan Wine label is one you can wear with confidence.
            </p>
            
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Allan Wine Clothing Men's Collection" 
                  className="rounded-lg"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Allan Wine Clothing Women's Collection" 
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Collections</h3>
            
            <p className="mb-6">
              Our collections feature a range of premium apparel including stylish trousers, shirts, t-shirts, jumpers, and sweaters. Each piece is designed to offer versatility and longevity, becoming a cherished part of your wardrobe for years to come.
            </p>
            
            <p className="mb-6">
              Whether you're dressing for a business meeting, a casual weekend, or an evening out, Allan Wine Clothing offers sophisticated options that help you express your personal style with confidence.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Promise</h3>
            
            <p className="mb-6">
              We're dedicated to providing not just quality products, but also exceptional service. Our team is always available to assist with sizing recommendations, style advice, or any questions you might have about our collections. We believe in building lasting relationships with our customers, earning your trust and loyalty with every interaction.
            </p>
            
            <p className="mb-8">
              Thank you for exploring Allan Wine Clothing. We invite you to discover our collections and experience the perfect blend of style, quality, and comfort that defines our brand.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="/shop">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark transition-colors">
                Shop Our Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
};

export default About;
