import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Myfooter from "./components/Myfooter";
import AllTheBooks from "./components/AllTheBooks";
import BookDetails from "./components/BookDetails"; // Importa il nuovo componente
import { Container } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarComponent
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <Container>
                  <Welcome />
                  <AllTheBooks searchQuery={searchQuery} />
                </Container>
                <Myfooter />
              </>
            }
          />
          <Route path="/book/:asin" element={<BookDetails />} />{" "}
          {/* Nuova rotta per BookDetails */}
          <Route path="/*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
