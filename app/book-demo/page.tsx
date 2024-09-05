"use client";
import { useState } from 'react';

interface FormData {
  studentName: string;
  age: number | '';
  email: string;
  fatherName: string;
  phone: string;
  address: string;
  grade: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    age: '',
    email: '',
    fatherName: '',
    phone: '',
    address: '',
    grade: '',
  });

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? Number(value) : value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key in keyof FormData]?: string } = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key as keyof FormData] = 'This field is required';
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
    }
  }; 

  return (
    <div className="min-h-[100vh] font-site flex items-center justify-center px-5 lg:px-0 bg-gray-50">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex flex-col md:flex-row justify-center flex-1">
        <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center bg-[url(https://res.cloudinary.com/pnkjkhani/image/upload/v1725297056/t8ejmnwyebphnx3v0xel.webp)] bg-cover bg-center bg-no-repeat p-6">
          
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Student Information
              </h1>
              <p className="text-[12px] text-gray-500">
                Here enter the details of student for demo class
              </p>
            </div>

            <div className="w-full flex-1 mt-8">
              <form className="mx-auto max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.studentName ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                  value={formData.studentName}
                  onChange={handleChange}
                />
                {errors.studentName && (
                  <span className="text-red-500 text-sm">{errors.studentName}</span>
                )}

                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.age ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="number"
                  name="age"
                  placeholder="Enter age"
                  value={formData.age}
                  onChange={handleChange}
                />
                {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}

                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.fatherName ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="text"
                  name="fatherName"
                  placeholder="Enter father name"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">{errors.fatherName}</span>
                )}

                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}

                <input
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.address ? 'border-red-500' : 'border-gray-200'
                  } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">{errors.address}</span>
                )}

                <select
                  className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    errors.grade ? 'border-red-500' : 'border-gray-200'
                  } text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                >
                  <option value="grade">Select grade</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                    <option key={grade} value={grade}>
                      Grade {grade}
                    </option>
                  ))}
                </select>
                {errors.grade && <span className="text-red-500 text-sm">{errors.grade}</span>}

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;