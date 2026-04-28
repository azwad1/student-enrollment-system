import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchBar from "../components/SearchBar";

function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/students");
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        toast.error("Failed to load data!!");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE",
      });

      setStudents((prev) => prev.filter((s) => s.id !== id));

      toast.success("Student deleted successfully!!");
    } catch (err) {
      toast.error("Delete failed!!");
      console.error(err);
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="view-container">
      <h2>Student List</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {filteredStudents.length === 0 ? (
        <p>No students found</p>
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