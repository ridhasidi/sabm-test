// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ApplicationForm from "./pages/ApplicationForm";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </div>
  );
}

export default App;
