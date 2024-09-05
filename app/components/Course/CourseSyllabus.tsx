import React from 'react';
import LessonCard from './LessonCard';

const lessons = [
  { number: '01', title: 'Student Engagement', description: 'Managing student behaviour inside a classroom and beyond', duration: '5 hours' },
  { number: '02', title: 'Behaviour Management', description: 'Establishing norms and setting expectations to make learning effective', duration: '5 hours' },
  { number: '03', title: 'Metacognition', description: 'Deploying awareness, perception, reasoning and judgement in learning transactions', duration: '5 hours' },
  { number: '04', title: 'Active Learning', description: 'Amplifying engagement and self-motivation in the teaching-learning process', duration: '5 hours' },
  { number: '05', title: 'Bloom\'s Taxonomy', description: 'Exploring the hierarchical levels of learning objectives in the taxonomy', duration: '5 hours' },
  { number: '06', title: 'Multiple Intelligences', description: 'Using Gardner’s theory to adapt teaching techniques to address differentiated learners', duration: '5 hours' },
  { number: '07', title: 'Assessment for Learning', description: 'Identifying strengths and weaknesses of students by documenting and analysing empirical data', duration: '5 hours' },
  { number: '08', title: 'Teaching with Digital Technologies', description: 'Integrating digital resources in the classroom and beyond in the Indian context', duration: '5 hours' },
];

const CourseSyllabus: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-site">
      <h2 className="text-3xl font-bold mb-6 text-center font-site">Course Syllabus</h2>
      <p className="text-center text-gray-500 mb-8 font-site">This course comprises the following lessons.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lessons.map((lesson, index) => (
          <LessonCard
            key={index}
            lessonNumber={lesson.number}
            title={lesson.title}
            description={lesson.description}
            duration={lesson.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSyllabus;
