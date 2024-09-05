'use client';
import React, { useState, useCallback, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchVal, setSearchVal] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchVal(newValue);
  }, []);

  const handleSearch = useCallback(() => {
    onSearch(searchVal);
  }, [onSearch, searchVal]);

  return (
    <div className="my-4 flex h-10 items-center justify-start bg-white leading-4 sm:w-96">
      <input
        placeholder="Search"
        onChange={handleChange}
        value={searchVal}
        className="peer ml-2 flex-grow bg-transparent text-gray-500 outline-none border-none focus:ring-0 focus:outline-none"
        type="text"
        aria-label="Search input"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="peer-focus:mr-2 z-20 cursor-pointer text-blue-600 outline-none duration-150 hover:scale-125"
        aria-label="Search button"
      >
        <svg className="h-6 w-6 stroke-2" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle
            cx="15"
            cy="14"
            r="8"
            stroke="currentColor"
            fill="transparent"
          />
          <line
            x1="21.1514"
            y1="19.7929"
            x2="26.707"
            y2="25.3484"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>
      </button>
    </div>
  );
};

export default React.memo(SearchBar);
