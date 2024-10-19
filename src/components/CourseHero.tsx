import React from 'react';
import { Star } from 'lucide-react';

interface CourseHeroProps {
  title: string;
  description: string;
  rating: number;
  ratingCount: number;
  image: string;
  certifications: string[];
}

const CourseHero: React.FC<CourseHeroProps> = ({
  title,
  description,
  rating,
  ratingCount,
  image,
  certifications,
}) => {
  return (
    <section className="bg-white py-16 pt-24"> {/* Added pt-24 for top padding */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-gray-600">
                {rating} ({ratingCount} Ratings)
              </span>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="flex items-center mb-6">
              <span className="text-gray-600 mr-4">Certification Aligned to:</span>
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/100x50?text=${cert}`}
                  alt={cert}
                  className="h-8 mr-2"
                />
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                Talk to Advisor
              </button>
              <button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-gray-100">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={image} alt={title} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;