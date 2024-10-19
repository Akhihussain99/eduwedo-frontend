import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CourseOverviewProps {
  overview: string;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ overview }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Course Overview</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className={`text-gray-600 ${expanded ? '' : 'line-clamp-3'}`}>{overview}</p>
          <button
            className="mt-4 text-blue-600 font-semibold flex items-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="ml-1" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;