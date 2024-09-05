import React from 'react';

const CourseBanner: React.FC = () => {
  return (
    <div className="bg-purple-800 text-white p-2 flex flex-col lg:flex-row justify-between items-center font-site">
      <div className="flex flex-col lg:flex-row items-center mb-6 lg:mb-0">

        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center mb-2">
            <span className="bg-red-500 text-xs px-2 py-1 rounded-full">Category</span>
            <span className="text-sm ml-2 font-site">Coding | Mathematics | Todays Offers</span>
          </div>
          <h2 className=" font-bold text-2xl font-site">
            CERTIFIED CODING ONLINE LIVE CLASSES FOR KIDS – 3 MONTHLY
          </h2>
        </div>
      </div>

      {/* <div className="flex bg-blue-500 rounded justify-between items-center flex-wrap w-full lg:w-auto">
        <div className="flex justify-center p-6 lg:justify-start space-x-2 text-sm w-full lg:w-auto mb-4 lg:mb-0">
          <div className="flex items-center">
            <i className="far fa-clock"></i>
            <span className="ml-2">12 Weeks</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-signal"></i>
            <span className="">All Levels</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-video"></i>
            <span className="ml-2">Live Class</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-puzzle-piece"></i>
            <span className="">Interactive</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-user-friends"></i>
            <span className="ml-2">5 Students</span>
          </div>
        </div>

      
      </div> */}
      <div className="flex bg-purple-800 rounded justify-between items-center flex-wrap w-full lg:w-auto">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          {/* <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p> */}

          <div className="flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block bg-blue-500 hover:bg-blue-600 w-full rounded px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Shedule Classes
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white hover:bg-gray-100 px-12 text-black py-3 text-sm font-medium  shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
