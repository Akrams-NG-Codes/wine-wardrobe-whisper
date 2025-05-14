
import { useState } from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  };
  
  // Function to generate WhatsApp message with cart items
  const generateWhatsAppMessage = () => {
    let message = "Hello, I would like to order the following items:\n\n";
    
    cartItems.forEach(item => {
      message += `- ${item.name} (Quantity: ${item.quantity})`;
      if (item.size) message += `, Size: ${item.size}`;
      if (item.color) message += `, Color: ${item.color}`;
      message += ` - UGX ${item.price.toLocaleString()}\n`;
    });
    
    message += `\nTotal: UGX ${totalPrice.toLocaleString()}`;
    message += "\n\nPlease confirm my order. Thank you!";
    
    return encodeURIComponent(message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg transform animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-1 hover:text-brand-purple transition-colors"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <Button 
                className="mt-4 bg-brand-purple hover:bg-brand-purple-dark"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={`${item.id}-${item.size}-${item.color}`} className="flex border-b pb-4">
                  <div className="w-20 h-24 bg-gray-100 overflow-hidden rounded">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove from cart"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}
                    
                    {item.color && (
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                    )}
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <p className="font-medium">UGX {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>UGX {totalPrice.toLocaleString()}</span>
            </div>
            
            <WhatsAppButton 
              phoneNumber="256706851115"
              message={generateWhatsAppMessage()}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
