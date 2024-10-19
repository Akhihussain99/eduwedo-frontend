import React from 'react';
import { Code, Database, Cloud, Briefcase } from 'lucide-react';

const categories = [
  { name: 'Data Science', icon: Database },
  { name: 'Cloud Computing', icon: Cloud },
  { name: 'Programming', icon: Code },
  { name: 'Business', icon: Briefcase },
];

const CourseCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Course Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <category.icon className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;