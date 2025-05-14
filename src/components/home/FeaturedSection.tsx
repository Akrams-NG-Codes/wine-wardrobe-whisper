
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  title: string;
  image: string;
  description: string;
  linkTo: string;
  buttonText: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const FeaturedSection = ({
  title,
  image,
  description,
  linkTo,
  buttonText,
  imagePosition = "left",
  className = "",
}: FeatureSectionProps) => {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}>
          <div className={`${imagePosition === "right" ? "md:order-2" : ""}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover object-center rounded-lg"
            />
          </div>
          
          <div className={`space-y-6 ${imagePosition === "right" ? "md:order-1" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div>
              <Link to={linkTo}>
                <Button className="bg-brand-purple hover:bg-brand-purple-dark">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
