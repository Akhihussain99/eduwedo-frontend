import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { IconCloudDemo } from './magicui/icon-cloud';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('Accelerate Your Career Growth');
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    'Accelerate Your Career Growth',
    '& Upskill Yourself',
    'World-Class Certification & Degree Programs',
    'Learn today Lead tomorrow'
  ];
  const [scrollingText, setScrollingText] = useState('500% Highest Salary Hike');
  const scrollingLines = [
    'Learn with Industry experts',
    'Get access to Community',
    'Highly valued courses',
    'Get Certified Today'
  ];

  const typewriterRef = useRef<NodeJS.Timeout | null>(null);
  const scrollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTyping = () => {
      let i = 0;
      typewriterRef.current = setInterval(() => {
        if (i < lines[currentLine].length) {
          setTypedText(prev => prev + lines[currentLine][i]);
          i++;
        } else {
          clearInterval(typewriterRef.current!);
          if (currentLine < lines.length - 1) {
            setTimeout(() => {
              setTypedText('');
              setCurrentLine(prev => prev + 1);
              startTyping();
            }, 1000);
          }
        }
      }, 50);
    };

    startTyping();

    return () => {
      if (typewriterRef.current) clearInterval(typewriterRef.current);
    };
  }, [currentLine]);

  useEffect(() => {
    let index = 0;
    scrollingRef.current = setInterval(() => {
      setScrollingText(scrollingLines[index]);
      index = (index + 1) % scrollingLines.length;
    }, 3000);

    return () => {
      if (scrollingRef.current) clearInterval(scrollingRef.current);
    };
  }, []);

  return (
    <div className="relative bg-white text-blue-600 pt-32 pb-48">
      <div className="container mx-auto px-4 py-16 flex items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 h-32">
            {typedText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-2xl font-semibold mb-4 h-8 overflow-hidden">
            <span className="inline-block animate-scrollUp">{scrollingText}</span>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg">
            Explore Courses
          </button>
        </div>
        <div className="hidden lg:block">
          <IconCloudDemo />
        </div>
      </div>

      {/* Feature Card Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-orange-50 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/50" alt="EY Logo" className="w-12 h-12" />
                  <p className="text-gray-700 font-semibold">
                    53% of learners received 50% and above salary hike post completion of the program*
                  </p>
                </div>
                <div className="flex space-x-2">
                  <ChevronLeft className="text-gray-400 cursor-pointer" />
                  <ChevronRight className="text-gray-400 cursor-pointer" />
                </div>
              </div>
              <p className="text-xs text-gray-500">*Subject to Terms and Condition</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              <FeatureCard icon="🎓" title="World-Class Instructors" />
              <FeatureCard icon="👥" title="1:1 with Industry Mentors" />
              <FeatureCard icon="🤝" title="400+ Global Hiring Partners" />
              <FeatureCard icon="📈" title="55% Avg. Salary Hike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;