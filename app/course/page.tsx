import Banner from '@app/components/Course/Banner';
import CourseComponents from '@app/components/Course/CourseComponents';
import FilterComponent from '@app/components/Course/FilterComponent';
import Hero from '@app/components/Course/Hero';
import React from 'react';
const page = () => {
  return (
    <div>
      <Banner />
      <FilterComponent />
      <CourseComponents/>
    </div>
  );
};

export default page;
