'use client';
import Link from 'next/link';
import React from 'react';
import { Courses } from '@app/jsondata';
const CourseCard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-site p-auto bg-[#E7F2F8]">
        <h1 className=" tracking-tight font-site lg:ml-2 md:ml-10 md:px-4 mx-2 mt-6 space-y-2 md:space-y-0 ">
          Popular courses
        </h1>
        <div className="flex overflow-x-scroll pb-4 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-2 md:ml-10 md:px-4 ml-2 mt-4 gap-5 space-y-4 md:space-y-0 ">
            {Courses.map((item, index) => (
              <div
                key={index}
                className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 w-[334px]"
              >
                <h3 className="mb-3 text-xl  text-gray-500">
                {item.age}
                </h3>
                <div className="relative">
                  <img
                    className="w-full object-cover rounded-xl"
                    src={item.bannerImage}
                    alt="Colors"
                  />
                  <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  {item.price} /-
                  </p>
                </div>
                <h1 className="mt-4 text-gray-800 text-xl cursor-pointer">
                {item.courseName}
                </h1>
                <div className="my-4">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p>{item.totalHours} Hourses</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p>{item.noOfModules} Modules</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p>{item.language}</p>
                  </div>
                  <button className="mt-4 text-xl w-full text-white bg-[#296CD7] py-2 rounded-xl shadow-lg">
                    <Link
                      href={
                        '/course/Javascript-Bootcamp-for-Absolute-Beginners'
                      }
                    >
                      Enroll now
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="mt-2 flex justify-end mr-4 pb-10">
        {/* <Button/> */}
        <a href="/course" className="btn-main text-lg">
            View all
          </a>
          {/* <a
            className="inline-flex cursor-pointer rounded-lg bg-[#323435]  py-3  px-5 text-lg text-white"
            href="/course"
          >
            View all
          </a> */}
        </div>
        
        <style jsx>{`
          .hide-scroll-bar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
      </div>
    </>
  );
};

export default CourseCard;
