import React, { useState } from 'react';
import "./App.css";
import NavbarComponent from './components/NavbarComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import Myfooter from './components/Myfooter';
import Myalert from './components/Myalert';
import AllTheBooks from './components/AllTheBooks';

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <NavbarComponent searchText={searchText} onSearchChange={handleSearchChange} />
      <Myalert />
      <AllTheBooks searchText={searchText} />
      <Myfooter/>
    </div>
  );
}

export default App;

