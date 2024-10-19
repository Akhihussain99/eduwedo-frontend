import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">Intellipaat</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button onClick={scrollToCourses} className="text-gray-600 hover:text-blue-600">Courses</button>
          <a href="#" className="text-gray-600 hover:text-blue-600 relative group">
            Interniship
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full animate-pulse">Apply Now</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Log In
          </button>
          <Menu className="md:hidden text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;