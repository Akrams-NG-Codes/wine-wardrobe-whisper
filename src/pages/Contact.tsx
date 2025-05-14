import { useState } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <main>
      {/* Hero Section */}
      <div className="bg-brand-gray-light py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              We'd love to hear from you. Get in touch with any questions or inquiries.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-purple hover:bg-brand-purple-dark transition-colors"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Store Location</h3>
                <p className="text-gray-600">Wilson One Street</p>
                <p className="text-gray-600">Kampala, Uganda</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-brand-purple" />
                    <a href="tel:+256706851115" className="text-gray-600 hover:text-brand-purple">
                      +256 706 851 115
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-brand-purple" />
                    <a href="mailto:info@allanwineclothing.com" className="text-gray-600 hover:text-brand-purple">
                      info@allanwineclothing.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">WhatsApp Support</h3>
                <p className="text-gray-600 mb-3">
                  Chat with us directly on WhatsApp for quick assistance.
                </p>
                <WhatsAppButton
                  phoneNumber="0703571358"
                  message="Hello! I have a question about Allan Wine Clothing."
                />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-3">
                  Stay updated with our latest collections and promotions.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-brand-purple hover:text-white transition-colors p-3 rounded-full"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-brand-purple hover:text-white transition-colors p-3 rounded-full"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="h-[400px] bg-gray-200 w-full">
        {/* In a real implementation, you would embed an actual Google Map here */}
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-600">Map placeholder - Google Maps would be embedded here</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
