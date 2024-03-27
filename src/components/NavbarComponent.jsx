import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useState } from "react";
import FormSearch from "../FormSearch/FormSearch";
import { HiSun, HiMoon } from "react-icons/hi2";
import { ThemeContext } from "../../context/ThemeContextProvider";

function NavbarComponent(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { books, handlesubmit, handleInputSearch, inputSearch } = props;

  return (
    <Navbar
      expand="lg"
      className={`bg-${theme} shadow sticky-top`}
      variant={theme}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#97cbd5" }}>
          {" "}
          <img src="./logo.png" style={{ width: "70px" }} /> StoryForge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <button className="btn">
              {theme === "dark" ? (
                <HiSun
                  className="fs-3 text-light"
                  onClick={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                  }
                />
              ) : (
                <HiMoon
                  className="fs-3"
                  onClick={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                  }
                />
              )}
            </button>
          </Nav>
          <FormSearch
            handlesubmit={handlesubmit}
            handleInputSearch={handleInputSearch}
            inputSearch={inputSearch}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
