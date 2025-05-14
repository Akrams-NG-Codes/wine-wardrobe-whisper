
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John D.",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The quality of Allan Wine's clothing is exceptional. I've been a customer for over a year, and their shirts are the most comfortable I've ever worn."
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "As someone who reviews fashion brands for a living, I can confidently say that Allan Wine Clothing stands out for their attention to detail and quality materials."
  },
  {
    id: 3,
    name: "Michael T.",
    role: "Business Professional",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "Their trousers are perfect for my everyday work attire. They're stylish, comfortable, and durable. I've recommended them to all my colleagues."
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="section bg-brand-gray-light">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold">{testimonials[activeIndex].name}</p>
                <p className="text-brand-gray text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-brand-purple' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Arrow Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
