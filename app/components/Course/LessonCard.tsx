import React from 'react';

type LessonCardProps = {
  lessonNumber: string;
  title: string;
  description: string;
  duration: string;
};

const LessonCard: React.FC<LessonCardProps> = ({ lessonNumber, title, description, duration }) => {
  return (
    <div className="flex p-4 rounded-lg shadow-lg bg-white">
      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg flex flex-col justify-center">
        <span className="text-sm">Lesson</span>
        <span className="text-lg font-bold">{lessonNumber}</span>
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="ml-auto text-blue-600 text-sm font-semibold">
        {duration}
      </div>
    </div>
  );
};

export default LessonCard;
