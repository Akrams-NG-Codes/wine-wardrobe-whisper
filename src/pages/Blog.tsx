
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Essential Wardrobe Staples for Every Professional",
    excerpt: "Discover the key pieces that should form the foundation of your professional wardrobe for versatility and style.",
    date: "May 12, 2023",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Style Tips"
  },
  {
    id: "2",
    title: "How to Care for Your Premium Cotton Shirts",
    excerpt: "Learn the proper techniques to maintain the quality and extend the life of your premium cotton shirts.",
    date: "April 28, 2023",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Care Guide"
  },
  {
    id: "3",
    title: "Summer Fashion Trends to Watch",
    excerpt: "Stay ahead of the curve with our roundup of the hottest summer fashion trends that are making waves this season.",
    date: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1509631179346-26f77060c9e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Trends"
  },
  {
    id: "4",
    title: "The Art of Mixing and Matching Colors",
    excerpt: "Discover the color theory principles that can help you create harmonious and stylish outfit combinations.",
    date: "March 30, 2023",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Style Tips"
  },
  {
    id: "5",
    title: "Sustainable Fashion: Making Better Choices",
    excerpt: "Learn how to make more environmentally friendly choices when it comes to your wardrobe and fashion consumption.",
    date: "March 15, 2023",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability"
  },
  {
    id: "6",
    title: "From Office to Evening: Transforming Your Look",
    excerpt: "Simple tips and tricks to take your outfit from a professional day look to an elegant evening ensemble.",
    date: "February 28, 2023",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Style Tips"
  }
];

const Blog = () => {
  return (
    <main>
      <div className="bg-brand-gray-light py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Fashion Blog & Style Tips</h1>
        </div>
      </div>
      
      <div className="container py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <span className="text-brand-purple font-medium">{blogPosts[0].category}</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-500 mb-3">{blogPosts[0].date}</p>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <Link to={`/blog/${blogPosts[0].id}`}>
                <Button className="bg-brand-purple hover:bg-brand-purple-dark">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-brand-purple font-medium">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-brand-purple font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
