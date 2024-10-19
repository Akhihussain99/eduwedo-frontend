import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CoursePage from './components/CoursePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <div className="mt-32">
                <Courses />
                <Testimonials />
                <ContactUs />
              </div>
              <Footer />
            </>
          } />
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;