import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="/edit/:id" element={<UpdateStudent />} />
      </Routes>
    </>
  );
}

export default App;
