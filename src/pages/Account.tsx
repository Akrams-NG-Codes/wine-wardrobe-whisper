
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would authenticate with your backend here
    // For this demo, we'll just simulate a successful login/signup
    console.log("Form submitted:", formData);
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      name: ""
    });
  };
  
  if (isLoggedIn) {
    return (
      <div className="container py-16">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6">My Account</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Account Information</h2>
              <p className="text-gray-600">Name: {formData.name || "User"}</p>
              <p className="text-gray-600">Email: {formData.email}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Order History</h2>
              <p className="text-gray-600">You haven't placed any orders yet.</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
              <p className="text-gray-600">No shipping address saved.</p>
              <Link to="/account/address" className="text-brand-purple hover:underline block mt-2">
                Add address
              </Link>
            </div>
            
            <div>
              <Button onClick={handleLogout} variant="outline" className="w-full">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isLogin ? "Sign In" : "Create Account"}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
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
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
              required
            />
          </div>
          
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                required={!isLogin}
              />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-brand-purple hover:bg-brand-purple-dark transition-colors"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-brand-purple hover:underline font-medium"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
