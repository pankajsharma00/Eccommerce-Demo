import React, { useContext, useEffect, useState } from "react";

import { LocationContext } from "../../lib/context";

import Categories from "./Categories";
import SubCategories from "./SubCategories";

const Dashboard = () => {
  const { categories = [] } = useContext(LocationContext);
  const [updatedCategory, setUpdatedCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const rentalManagementSystem = "RENTAL MANAGEMENT SYSTEM";
  const welcomeTo = "WELCOME TO";
  const selectLocation = "Please Select Location";

  useEffect(() => {
    setSubCategories([]);
    setUpdatedCategory(categories);
  }, [categories]);

  if (!updatedCategory.length) {
    return (
      <div className="dashboard">
        <p>
          <b>
            {welcomeTo}
            <br />
            {rentalManagementSystem}
          </b>
          <br />
          <br />
          {selectLocation}
        </p>
      </div>
    );
  }

  return (
    <>
      {subCategories.length <= 0 ? (
        <Categories
          updatedCategory={updatedCategory}
          setSubCategories={setSubCategories}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <SubCategories
          subCategories={subCategories}
          selectedCategory={selectedCategory}
          setSubCategories={setSubCategories}
        />
      )}
    </>
  );
};

export default Dashboard;
