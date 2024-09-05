'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    '“Our goal is to inspire and equip the next generation of innovators and problem-solvers.”',
    '“We believe in learning by doing, and we are dedicated to helping students bring their creations to life.”',
    '“We empower students to turn their ideas into reality through practical, project-based learning.”',
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-6 sm:mt-10">
      <Carousel>
        {texts.map((text, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663091226871-2878f62a524d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              {text}
            </h3>
            {/* <p>Nora Jacobs, Teacher</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
