import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface CourseFAQsProps {
  faqs: FAQ[];
}

const CourseFAQs: React.FC<CourseFAQsProps> = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Course FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </div>
              {expandedIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFAQs;