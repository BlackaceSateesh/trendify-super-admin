import React, { useState, useEffect } from "react";
import { SearchRoutes } from "../../constants/Routes";

const SearchHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const timer = setTimeout(() => {
        const results = SearchRoutes.filter(route =>
          route.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRoutes(results);
        setShowDropdown(true);
      }, 300); // Debounce delay

      return () => clearTimeout(timer); // Cleanup the timer on unmount or on input change
    } else {
      setShowDropdown(false);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionClick = (route) => {
    setSearchTerm(route.title);
    setShowDropdown(false);
  };

  return (
    <div className="SearchHeader">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button>Search</button>
      {showDropdown && (
        <div className="dropdown">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="dropdown-item"
                onClick={() => handleOptionClick(route)}
              >
                {route.title}
              </div>
            ))
          ) : (
            <div className="dropdown-item">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchHeader;
