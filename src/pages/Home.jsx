import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Student Enrollment System</h1>

      <p className="subtitle">
        Manage student records easily with add, view, and delete features.
      </p>

      <div className="home-buttons">
        <Link to="/addstudent">
          <button>Add Student</button>
        </Link>

        <Link to="/viewstudent">
          <button className="secondary-btn">View Students</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
