
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="section bg-brand-purple text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-lg mb-8">
            Subscribe to receive updates on new collections, special offers, and style tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              type="submit" 
              className="bg-white text-brand-purple hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </Button>
          </form>
          
          {isSubmitted && (
            <p className="mt-4 text-white bg-white bg-opacity-20 py-2 px-4 rounded-md inline-block">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
