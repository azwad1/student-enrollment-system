import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
      </Routes>
    </>
  );
}

export default App;