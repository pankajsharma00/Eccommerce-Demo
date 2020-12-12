import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import LocationDropdown from "../component/locationDropdown/LocationDropdown";

import { LocationProvider } from "../lib/context";

const Layout = (props) => {
  const rentalManagementSystem = "Rental Management System";
  const selectLocation = "Select Location";
  const [activeCategories, setActiveCategories] = useState([]);

  const getHeader = () => {
    return (
      <>
        <Navbar className="navbar navbar-dark bg-dark">
          <Container>
            <Navbar.Brand>{rentalManagementSystem}</Navbar.Brand>
            <Navbar.Brand style={{ marginRight: "150px" }}>
              <Nav className="mr-auto">
                <NavDropdown title={selectLocation} id="basic-nav-dropdown" style={{color: "white !important"}}>
                  <LocationDropdown setActiveCategories={setActiveCategories} />
                </NavDropdown>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  };

  const getFooter = () => {
    return <Navbar className="navbar navbar-dark bg-dark footer"></Navbar>;
  };

  return (
    <>
      {getHeader()}
      <LocationProvider value={{ categories: activeCategories }}>
        <Container>{props.children}</Container>
      </LocationProvider>
      {getFooter()}
    </>
  );
};

export default Layout;
