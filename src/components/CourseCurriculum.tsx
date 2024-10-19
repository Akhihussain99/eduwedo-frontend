import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CurriculumItem {
  title: string;
  duration: string;
  modules: string;
  topics: string[];
}

interface CourseCurriculumProps {
  curriculum: CurriculumItem[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ curriculum }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Course Curriculum</h2>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Download Brochure
          </button>
        </div>
        <div className="space-y-4">
          {curriculum.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="text-gray-600 text-sm mt-1">
                    <span>{item.duration}</span> • <span>{item.modules}</span>
                  </div>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </div>
              {expandedIndex === index && (
                <div className="p-4 bg-gray-50">
                  <ul className="list-disc list-inside space-y-2">
                    {item.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-700">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;