
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import Myfooter from "./components/myfooter";
import Myalert from "./components/Myalert";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Myalert />
      <AllTheBooks/>
      <Myfooter />
    </div>
  );
}

export default App;
