// "use client"
// import { useCallback } from 'react';


// const FilterComponent = () => {
//     const showFilters = useCallback((): void => {
//         const fSection = document.getElementById('filterSection');
//         if (fSection) {
//           if (fSection.classList.contains('hidden')) {
//             fSection.classList.remove('hidden');
//             fSection.classList.add('block');
//           } else {
//             fSection.classList.add('hidden');
//           }
//         }
//       }, []);
      
//       const applyFilters = useCallback((): void => {
//         document
//           .querySelectorAll<HTMLInputElement>('input[type=checkbox]')
//           .forEach((el) => (el.checked = false));
//       }, []);
      
//       const closeFilterSection = useCallback((): void => {
//         const fSection = document.getElementById('filterSection');
//         if (fSection) {
//           fSection.classList.add('hidden');
//         }
//       }, []);
//   return (
//     <>
// <div className="2xl:container 2xl:mx-auto">

//   <div className="md:py-12 lg:px-20 md:px-6 py-9 px-4">
//     <p className="text-sm dark:text-gray-400 leading-3 text-gray-600 font-normal mb-2">Choose accoding to your choice</p>
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="lg:text-4xl dark:text-white text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Watches</h2>

//       <button onClick={showFilters} className="cursor-pointer dark:bg-white dark:text-gray-800 text-white dark:hover:bg-gray-100 sm:flex  hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal justify-center items-center">
//         <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M6 4V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M6 12V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12 4V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12 18V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M18 4V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M18 9V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         Filters
//       </button>
//     </div>
//     <p className="text-xl dark:text-gray-400 leading-5 text-gray-600 font-medium">09 Products</p>


//     <button onClick={showFilters} className="cursor-pointer mt-6 sm:hidden hover:bg-gray-700 focus:ring  focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center">
//       <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M6 4V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M6 12V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M12 4V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M12 18V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M18 4V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M18 9V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//       Filters
//     </button>
//   </div>

//   <div id="filterSection" className="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">
//     <div onClick={closeFilterSection} className="cursor-pointer text-gray-800 dark:text-white absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
//       <svg className="lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M25 1L1 25" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M1 1L25 25" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
//       </svg>
//     </div>

//     <div>
//       <div className="flex space-x-2 text-gray-800 dark:text-white">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M17 17V17.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium">Colors</p>
//       </div>
//       <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
//           <div className="w-4 h-4 rounded-full bg-white shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">White</p>
//         </div>
//         <div className="flex space-x-2 justify-center items-center">
//           <div className="w-4 h-4 rounded-full bg-blue-600 shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Blue</p>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
//           <div className="w-4 h-4 rounded-full bg-red-600 shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Red</p>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
//           <div className="w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Indigo</p>
//         </div>
//         <div className="flex space-x-2 justify-center items-center">
//           <div className="w-4 h-4 rounded-full bg-black shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Black</p>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
//           <div className="w-4 h-4 rounded-full bg-purple-600 shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Purple</p>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
//           <div className="w-4 h-4 rounded-full bg-gray-600 shadow"></div>
//           <p className="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Grey</p>
//         </div>
//       </div>
//     </div>

//     <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

//     <div>
//       <div className="flex space-x-2 text-gray-800 dark:text-white">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Material</p>
//       </div>
//       <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="Leather" value="Leather" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Leather">Leather</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="Cotton" value="Cotton" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Cotton">Cotton</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-end">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="Fabric" value="Fabric" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Fabric">Fabric</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex space-x-2 md:justify-center md:items-center items-center justify-start">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="Crocodile" value="Crocodile" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Crocodile">Crocodile</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Wool" name="Wool" value="Wool" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" htmlFor="Wool">Wool</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

//     <div>
//       <div className="flex space-x-2 text-gray-800 dark:text-white">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M3 5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12 7L14 5L12 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M5 3L3 5L5 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M19 10V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M17 19L19 21L21 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M21 12L19 10L17 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           <path d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Size</p>
//       </div>
//       <div className="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
//         <div className="flex md:justify-center md:items-center items-center justify-start">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Large" name="Large" value="Large" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" htmlFor="Large">Large</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Medium" name="Medium" value="Medium" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" htmlFor="Medium">Medium</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex md:justify-center md:items-center items-center justify-end">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Small" name="Small" value="Small" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" htmlFor="Small">Small</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex md:justify-center md:items-center items-center justify-start">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="Mini" name="Mini" value="Mini" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" htmlFor="Mini">Mini</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <hr className="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

//     <div>
//       <div className="flex space-x-2 text-gray-800 dark:text-white ">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <g opacity="0.8">
//             <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M14 7H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//             <path d="M17 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//           </g>
//         </svg>
//         <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Collection</p>
//       </div>
//       <div className="flex mt-8 space-x-8">
//         <div className="flex justify-center items-center">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="LS" name="LS" value="LS" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" htmlFor="LS">Luxe signature</label>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <input className="w-4 h-4 mr-2" type="checkbox" id="LxL" name="LxL" value="LxL" />
//           <div className="inline-block">
//             <div className="flex space-x-6 justify-center items-center">
//               <label className="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" htmlFor="LxL">Luxe x London</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


//     <div className="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
//       <button onClick={applyFilters} className="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">Apply Filter</button>
//     </div>


//     <div className="block md:hidden w-full mt-10">
//       <button onClick={applyFilters} className="w-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">Apply Filter</button>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default FilterComponent


"use client";

import React, { useState, useCallback } from 'react';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

const colors: FilterOption[] = [
  { id: 'white', label: 'White', value: 'white' },
  { id: 'blue', label: 'Blue', value: 'blue' },
  { id: 'red', label: 'Red', value: 'red' },
  { id: 'indigo', label: 'Indigo', value: 'indigo' },
  { id: 'black', label: 'Black', value: 'black' },
  { id: 'purple', label: 'Purple', value: 'purple' },
  { id: 'grey', label: 'Grey', value: 'grey' },
];

const materials: FilterOption[] = [
  { id: 'leather', label: 'Leather', value: 'leather' },
  { id: 'cotton', label: 'Cotton', value: 'cotton' },
  { id: 'fabric', label: 'Fabric', value: 'fabric' },
  { id: 'crocodile', label: 'Crocodile', value: 'crocodile' },
  { id: 'wool', label: 'Wool', value: 'wool' },
];

const FilterComponent: React.FC = () => {
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());
  const [selectedMaterials, setSelectedMaterials] = useState<Set<string>>(new Set());

  const toggleFilters = useCallback(() => {
    setFiltersVisible((prev) => !prev);
  }, []);

  const handleColorChange = useCallback((color: string) => {
    setSelectedColors((prev) => {
      const updatedColors = new Set(prev);
      updatedColors.has(color) ? updatedColors.delete(color) : updatedColors.add(color);
      return updatedColors;
    });
  }, []);

  const handleMaterialChange = useCallback((material: string) => {
    setSelectedMaterials((prev) => {
      const updatedMaterials = new Set(prev);
      updatedMaterials.has(material) ? updatedMaterials.delete(material) : updatedMaterials.add(material);
      return updatedMaterials;
    });
  }, []);

  const applyFilters = useCallback(() => {
    // Your filtering logic here
    setFiltersVisible((prev) => !prev);
    console.log('Selected Colors:', Array.from(selectedColors));
    console.log('Selected Materials:', Array.from(selectedMaterials));
  }, [selectedColors, selectedMaterials]);

  const resetFilters = useCallback(() => {
    setSelectedColors(new Set());
    setSelectedMaterials(new Set());
  }, []);

  return (
    <div className="2xl:container 2xl:mx-auto font-site">
      <div className="md:py-6 lg:px-20 md:px-6 py-9 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="lg:text-4xl dark:text-white text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Choose as per your need!</h2>
          <button onClick={toggleFilters} className="cursor-pointer dark:bg-white dark:text-gray-800 text-white sm:flex hover:bg-purple-900 focus:ring py-4 px-6 bg-purple-site flex text-base leading-4 font-normal justify-center items-center rounded">
            Filters
          </button>
        </div>

        {filtersVisible && (
          <div className="relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Colors</h3>
              <button onClick={resetFilters} className="text-gray-100 hover:text-white bg-blue-site hover:bg-blue-800  px-4 py-2 rounded">Reset</button>
            </div>
            <div className="grid grid-cols-3 gap-y-8">
              {colors.map((color) => (
                <label key={color.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedColors.has(color.value)}
                    onChange={() => handleColorChange(color.value)}
                    className="w-4 h-4 text-black"
                  />
                  <span>{color.label}</span>
                </label>
              ))}
            </div>
            <hr className="my-8" />
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Materials</h3>
            </div>
            <div className="grid grid-cols-3 gap-y-8">
              {materials.map((material) => (
                <label key={material.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.has(material.value)}
                    onChange={() => handleMaterialChange(material.value)}
                    className="w-4 h-4"
                  />
                  <span>{material.label}</span>
                </label>
              ))}
            </div>
            <button onClick={applyFilters} className="mt-8 bg-blue-site hover:bg-blue-800   text-white py-2 px-4 rounded">
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
