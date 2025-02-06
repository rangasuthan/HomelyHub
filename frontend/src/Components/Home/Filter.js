import React, { useDeferredValue, useEffect, useState } from "react";
import FilterModal from "./FilterModal";

import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Filter = () => {
  // State for controlling modal visiblity
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for storing selected fliters
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertyAction.updateSearchParams(selectedFilters));
    dispatch(getAllProperties());
  }, [selectedFilters, dispatch]);

  // Function to handle opening modal
  const handleOpenModal = () => {
    setIsModalOpen(true); // sets isModalOpen to true to open the modal
  };

  // Funtion to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Funtion to handle changes in filters
  const handleFilterChange = (filterName, value) => {
    // Update the selected filter with the new values
    setSelectedFilters((prevfilter) => ({
      ...prevfilter,
      [filterName]: value,
    }));
  };

  return (
    <>
      {/* Click event to opent the modal */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Filter;
