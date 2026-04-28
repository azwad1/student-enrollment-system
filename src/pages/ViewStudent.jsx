import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
  const loadStudents = async () => {
    try {
      const res = await fetch("http://localhost:3000/students");

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load data!!");
    }
  };

  loadStudents();
}, []);

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete?")) return;

  try {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });

    toast.success("Student deleted successfully!!");

    setStudents((prev) => prev.filter((s) => s.id !== id));

  } catch (err) {
    toast.error("Delete failed!!", err);
  }
};

  const filteredStudents = students.filter((s) =>
    s.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="view-container">
      <h2>Student List</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {students.length === 0 ? (
        <p>No students available</p>
      ) : filteredStudents.length === 0 ? (
        <p>No matching results</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.department}</td>
                <td>
                  <button onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>

                  <button onClick={() => navigate(`/edit/${s.id}`)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudent;