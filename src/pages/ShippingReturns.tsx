
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ShippingReturns = () => {
  return (
    <main>
      <div className="bg-brand-gray-light py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Shipping & Returns</h1>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Shipping Policy</h2>
            
            <p>
              At Allan Wine Clothing, we strive to provide you with the best shopping experience, including fast and reliable shipping services. Below you'll find details about our shipping process and what to expect when ordering from us.
            </p>
            
            <h3>Domestic Shipping</h3>
            
            <p>
              We offer shipping to all locations within Uganda. Orders are typically processed within 1-2 business days after payment confirmation.
            </p>
            
            <ul>
              <li>
                <strong>Standard Delivery:</strong> 2-4 business days, UGX 10,000
              </li>
              <li>
                <strong>Express Delivery:</strong> 1-2 business days, UGX 20,000
              </li>
              <li>
                <strong>Free Shipping:</strong> Available on orders over UGX 200,000
              </li>
            </ul>
            
            <h3>International Shipping</h3>
            
            <p>
              We ship to select international destinations. International shipping times may vary depending on your location and customs processing.
            </p>
            
            <ul>
              <li>
                <strong>East Africa:</strong> 5-10 business days
              </li>
              <li>
                <strong>Rest of Africa:</strong> 7-14 business days
              </li>
              <li>
                <strong>International:</strong> 10-21 business days
              </li>
            </ul>
            
            <p>
              Please note that international customers may be responsible for duties, taxes, and customs clearance fees. These charges are not included in the shipping cost and will be collected upon delivery.
            </p>
            
            <h3>Order Tracking</h3>
            
            <p>
              Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this number to track the progress of your delivery through our shipping partners' websites.
            </p>
            
            <h2 className="mt-10">Return Policy</h2>
            
            <p>
              We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, we accept returns under the following conditions:
            </p>
            
            <h3>Return Eligibility</h3>
            
            <ul>
              <li>Items must be returned within 14 days of receipt</li>
              <li>Items must be unworn, unwashed, and with all original tags attached</li>
              <li>Items must be in their original packaging</li>
              <li>Sale items can only be returned if defective</li>
            </ul>
            
            <h3>How to Return</h3>
            
            <ol>
              <li>Contact our customer service team at info@allanwineclothing.com to request a return</li>
              <li>Include your order number and reason for return</li>
              <li>Our team will provide you with return instructions and a return authorization</li>
              <li>Package the item(s) securely with all original tags and packaging</li>
              <li>Ship the package to the address provided in the return instructions</li>
            </ol>
            
            <h3>Refunds</h3>
            
            <p>
              Once we receive and inspect your return, we will notify you about the status of your refund. If approved, your refund will be processed within 7 business days. The refund will be issued to your original payment method.
            </p>
            
            <p>
              Shipping costs are non-refundable. If you received free shipping on your order, the standard shipping cost will be deducted from your refund.
            </p>
            
            <h3>Exchanges</h3>
            
            <p>
              If you'd like to exchange an item for a different size or color, please follow the return process and place a new order for the item you want. This ensures you get the item you want as quickly as possible.
            </p>
            
            <h3>Damaged or Defective Items</h3>
            
            <p>
              If you receive a damaged or defective item, please contact our customer service team immediately with photos of the damage. We will arrange for a return or replacement at no additional cost to you.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/contact">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark transition-colors">
                Contact Us with Questions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShippingReturns;
