"use client";
import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className=" mx-auto w-full mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl lg:max-w-none">
          <div className="text-center  space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
              Trusted by many parents and students
            </h2>
          </div>
          <dl className="mt-2 bg-slate-50 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-700">
                Engaged students
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black">
              <CountUp end={450} duration={5} delay={2}/>
              +
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-700">
                Total hours teached
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black">
                <CountUp end={9000} duration={5} delay={2}/>
                +
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-700">
                Qualified teachers
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black">
              <CountUp end={50} duration={5} delay={2}/>
                +
              </dd>
            </div>
            <div className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-700">
               Curriculums
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black">
              <CountUp end={15} duration={5} delay={2}/>
                +
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Stats
