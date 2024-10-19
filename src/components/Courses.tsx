import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allCourses = [
  {
    id: 'cloud-architect',
    title: 'Cloud Architect Certification',
    category: 'Cloud Computing',
    description: 'Master cloud services and prepare for certification exams.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 'data-science',
    title: 'Data Science Bootcamp',
    category: 'Data Science',
    description: 'Comprehensive data science training with real-world projects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 'full-stack-web',
    title: 'Full Stack Web Development',
    category: 'Programming',
    description: 'Learn to build modern web applications from front to back.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  // ... other courses
];

const categories = ['All', 'Cloud Computing', 'Programming', 'Data Science'];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All'
    ? allCourses
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <section id="courses-section" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  to={`/course/${course.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;