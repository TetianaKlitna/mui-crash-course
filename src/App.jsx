import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import Calendar from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
        <Route path="/calendar" element ={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
