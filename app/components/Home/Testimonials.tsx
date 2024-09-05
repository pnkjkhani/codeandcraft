"use client";
import { useEffect, useRef } from 'react';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import {data} from '@app/jsondata'
import testIds from '@app/utils/test-ids';
const TestimonialsSlider = () => {
  const sliderRef = useRef<KeenSliderInstance | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderContainerRef.current) {
      sliderRef.current = new KeenSlider(sliderContainerRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious?.addEventListener('click', () => sliderRef.current?.prev());
      keenSliderNext?.addEventListener('click', () => sliderRef.current?.next());

      return () => sliderRef.current?.destroy();
    }
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-6 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-6">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          {/* <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2> */}
          <h1
          className="text-center py-8 text-blue-site font-site"
          data-testid={testIds.NEWS_PAGE.HEADER}
        >
          Read trusted reviews from our happy parents and students
        </h1>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-purple-site p-3 text-purple-site transition hover:bg-purple-site hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-purple-site p-3 text-purple-site transition hover:bg-purple-site hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-2 lg:col-span-2 lg:mx-0">
          <div ref={sliderContainerRef} className="keen-slider">
            {data.map((item)=>(
                <div key={item.id} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-[#E7F2F8] p-6 shadow-sm sm:p-8 lg:p-12">
                    
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                        
                    <svg
                      className="size-5"
                      fill="orange"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="size-5"
                      fill="orange"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="size-5"
                      fill="orange"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                      {/* Add the SVGs for the stars */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-blue-500 sm:text-3xl">Stayin' Alive</p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
            ))}
            

            {/* Add more slides as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
