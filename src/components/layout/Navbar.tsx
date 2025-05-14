
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag, User, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartSidebar from "@/components/cart/CartSidebar";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link to="/" className="text-xl md:text-2xl font-bold">
              Allan Wine Clothing
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-brand-purple transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-brand-purple transition-colors">Shop</Link>
            <Link to="/men" className="hover:text-brand-purple transition-colors">Men</Link>
            <Link to="/women" className="hover:text-brand-purple transition-colors">Women</Link>
            <Link to="/blog" className="hover:text-brand-purple transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-brand-purple transition-colors">About</Link>
            <Link to="/contact" className="hover:text-brand-purple transition-colors">Contact</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch} 
              className="hover:text-brand-purple transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/account" className="hover:text-brand-purple transition-colors">
              <User className="h-5 w-5" />
            </Link>
            
            <button 
              onClick={toggleCart} 
              className="hover:text-brand-purple transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 animate-fade-in">
          <div className="container py-4">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu}
                className="hover:text-brand-purple transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col items-center space-y-6 mt-16">
              <Link to="/" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/shop" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Shop</Link>
              <Link to="/men" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Men</Link>
              <Link to="/women" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Women</Link>
              <Link to="/blog" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-xl hover:text-brand-purple transition-colors" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 animate-fade-in">
          <div className="container py-4">
            <div className="flex justify-end">
              <button 
                onClick={toggleSearch}
                className="hover:text-brand-purple transition-colors"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mt-16 max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  autoFocus
                />
                <Search className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
