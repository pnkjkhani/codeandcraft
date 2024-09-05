import React from 'react';

const FreeClassesSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-purple-400 via-blue-500 to-blue-600 text-white font-site">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Most popular coding projects</h1>
          <p className="mt-4 text-lg">
          Check out awesome kids coding projects submitted by our students and add your own!
          </p>
          <p className="mt-2 text-sm text-blue-100">
            Our small group <a href="#" className="underline">awesome coding classes</a>, live online experience, and awesome teachers set every child up for success.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Grades {card.grades}</p>
                <p className="mt-4">{card.description}</p>
                <button className="mt-6 w-full bg-purple-site text-white py-2 rounded-lg hover:bg-purple-500">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    image: 'https://media.istockphoto.com/id/1336175076/photo/smart-kid-and-stem-education.jpg?s=1024x1024&w=is&k=20&c=tqnIe967KKcODDEPyaBrHdf2e6wmLreG9y0CYiF-pW0=',
    title: 'Free Intro to Scratch Coding',
    grades: '2-5',
    description: 'Code games and animations with beginner-friendly Scratch coding',
  },
  {
    image: 'https://media.istockphoto.com/id/1392669729/photo/close-up-student-hand-using-multimeter-measure-the-electrical-circuit-of-robot-in-technology.jpg?s=1024x1024&w=is&k=20&c=BKs8IN-Ya98AAZenQjWycMAMSE4kDNOmGtl-J90Bq94=',
    title: 'Minecraft Escape Estate (free event)',
    grades: '2-9',
    description: 'Solve puzzles, build, and create games with fun coding in Minecraft',
  },
  {
    image: 'https://media.istockphoto.com/id/1076614286/photo/concentrated-schoolboy-typing-on-laptop-keyboard-and-programming-mechanical-robot-in-stem.jpg?s=1024x1024&w=is&k=20&c=6rp2TC7TqzOOllo_C4N-5KUiLBCtdqAOw5J4CvXo8K0=',
    title: 'Minecraft Coding Intro - TimeTravel! (free event)',
    grades: '3-6',
    description: 'Solve puzzles, build, and create games with fun coding in Minecraft',
  },
  {
    image: 'https://media.istockphoto.com/id/1076614200/photo/schoolboy-working-with-robot-at-stem-robotics-lesson.jpg?s=1024x1024&w=is&k=20&c=CanWEHVfCy9FR2AK7K8MoPSJjBSCj4qNTjiisaGALj8=',
    title: 'Beginner Roblox Game Coding - Free Intro',
    grades: '3-8',
    description: 'Start learning Roblox game coding the simple way',
  },
  {
    image: 'https://media.istockphoto.com/id/1131466706/photo/smart-schoolboy-being-involved-in-engineering-classes.jpg?s=1024x1024&w=is&k=20&c=IQPQDTL16uRE99IfgszIp1T89_hmqL26DuthI7uVS0c=',
    title: 'AI Explorers - Introduction (free event)',
    grades: '4-9',
    description: 'Discover how AI fuels self-driving cars, face recognition, and other advanced technologies',
  },
  {
    image: 'https://media.istockphoto.com/id/959332558/photo/child-programming-robot.jpg?s=1024x1024&w=is&k=20&c=zjFBciGPQ0SLKkpbFunuXLBPMt6Zh-32L2PYI4qKGzA=',
    title: 'Accelerated Scratch - Intro to Coding for Teens',
    grades: '5-10',
    description: 'Fast-paced introduction to coding: build games, stories, and animations',
  },
];

export default FreeClassesSection;
