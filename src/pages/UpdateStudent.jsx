import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  // 🔄 Fetch existing data
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(`http://localhost:3000/students/${id}`);
        const data = await res.json();

        setName(data.name);
        setEmail(data.email);
        setDepartment(data.department);
      } catch (err) {
        toast.error("Failed to load student ❌");
        console.error(err);
      }
    };

    fetchStudent();
  }, [id]);

  // ✏️ Update logic
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, department }),
      });

      toast.success("Student updated successfully ✅");

      navigate("/viewstudent");
    } catch (err) {
      toast.error("Update failed ❌");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Update Student</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudent