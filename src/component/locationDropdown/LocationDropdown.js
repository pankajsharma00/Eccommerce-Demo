import React from "react";

import Catalog from "../../data/catalog.json";

import { NavDropdown } from "react-bootstrap";

const LocationDropdown = ({ setActiveCategories }) => {
  const { status, data } = Catalog;

  const handleLocationBranches = (branches) => {

    return branches.map((branch) => {
	  const { name = "", categories = [] } = branch;
	  
      return (
        <NavDropdown.Item 
          href="#"
          onClick={() => setActiveCategories(categories)}
        >
          {name}
        </NavDropdown.Item>
      );
    });
  };

  return (
    <>
      {status === "success" &&
        data.locations.map((location) => (
          <NavDropdown
            title={location.name}
            drop="right"
            id="basic-nav-dropdown"
          >
            {handleLocationBranches(location.branches)}
          </NavDropdown>
        ))}
    </>
  );
};

export default LocationDropdown;
