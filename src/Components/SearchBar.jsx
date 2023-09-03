import { useState } from 'react';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('name');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value, selectedFilter);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value, searchTerm);
  };

  return (
    <div className="bg-black p-4 flex flex-row w-1/4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300 text-black"
      />
      <select
        className="ml-2 w-1/2 p-2 rounded-md border text-black"
        value={selectedFilter}
        onChange={handleFilterChange}
      >
        <option value="name">Name</option>

      </select>
    </div>
  );
};

export default SearchBar;
