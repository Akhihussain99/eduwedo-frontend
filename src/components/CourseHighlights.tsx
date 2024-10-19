import React from 'react';

interface Highlight {
  icon: string;
  text: string;
}

interface CourseHighlightsProps {
  highlights: Highlight[];
}

const CourseHighlights: React.FC<CourseHighlightsProps> = ({ highlights }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center">
              <span className="text-4xl mr-4">{highlight.icon}</span>
              <p className="text-gray-700 font-semibold">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;