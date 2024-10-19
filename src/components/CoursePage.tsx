import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CourseHero from './CourseHero';
import CourseHighlights from './CourseHighlights';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseFAQs from './CourseFAQs';

const courses = {
  'cloud-architect': {
    title: 'Certification in Cloud and DevOps - Advanced Master\'s Program',
    description: 'Our Cloud Architect certification program lets you gain proficiency in Cloud and DevOps. You will work on real-world projects in AWS, Azure, Google Cloud Platform to master these best cloud platforms. As part of this Cloud Architect course, you will gain in-depth knowledge in building apps in AWS, GCP, and Azure to become a certified Cloud Architect.',
    rating: 4.8,
    ratingCount: 3562,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    certifications: ['Microsoft Azure', 'AWS'],
    highlights: [
      { icon: '🎓', text: '147 Hrs Instructor Led Training' },
      { icon: '📺', text: '208 Hrs Self-paced Videos' },
      { icon: '💻', text: '246 Hrs Project & Exercises' },
      { icon: '🏆', text: 'Certification' },
    ],
    overview: 'Our course offers in-depth knowledge on building cloud applications. Learn to deploy SaaS, PaaS, and IaaS on AWS, Azure, and GCP, and master DevOps tools for efficiency.',
    curriculum: [
      {
        title: 'AWS',
        duration: '36 Hours',
        modules: '14 Modules',
        topics: [
          'Introduction to Cloud Computing and Amazon Web Services',
          'Getting Started with the Elastic Cloud Compute and Storage Volumes Types',
          'Load Balancing, Autoscaling, and Domain Name Servers AWS',
          // ... more topics
        ]
      },
      // ... more courses
    ],
    faqs: [
      {
        question: 'What is Intellipaat\'s Cloud Architect master\'s program, and how is it different from individual courses?',
        answer: 'Intellipaat\'s Cloud Computing course has a structured learning path specially designed by industry experts, which ensures that you can transform into a Cloud and DevOps expert. Individual courses at Intellipaat focus on one or two specializations. However, if you have to pursue master\'s in Cloud Computing online, then this program is for you. Further, you will also receive the official course material of the Cloud Architect master\'s program issued by Microsoft for \'Integrating On-premises Identity Infrastructure with Microsoft Azure\' and \'Implementing Security in Azure Development Solutions.\''
      },
      // ... more FAQs
    ]
  },
  // ... other courses
};

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses[courseId as keyof typeof courses];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CourseHero
        title={course.title}
        description={course.description}
        rating={course.rating}
        ratingCount={course.ratingCount}
        image={course.image}
        certifications={course.certifications}
      />
      <CourseHighlights highlights={course.highlights} />
      <CourseOverview overview={course.overview} />
      <CourseCurriculum curriculum={course.curriculum} />
      <CourseFAQs faqs={course.faqs} />
      <Footer />
    </div>
  );
};

export default CoursePage;