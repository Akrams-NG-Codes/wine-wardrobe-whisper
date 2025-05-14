
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-gray-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Allan Wine Clothing</h3>
            <p className="text-gray-300 mb-4">
              Stylish and high-quality apparel for young adults and professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/men" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=trousers" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Trousers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shirts" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=t-shirts" className="text-gray-300 hover:text-brand-purple transition-colors">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop?category=jumpers" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Jumpers & Sweaters
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping-returns" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-brand-purple transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get special offers and latest fashion news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required
              />
              <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple-dark transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Allan Wine Clothing. All rights reserved.</p>
          <p className="mt-2">Wilson One Street, Uganda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
