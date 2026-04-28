import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}></NavLink>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/addstudent">Add Student</NavLink> |{" "}
      <NavLink to="/viewstudent">View Students</NavLink>
    </nav>
  );
}

export default Nav;