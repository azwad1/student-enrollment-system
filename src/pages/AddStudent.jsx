import { useState } from "react";
import { toast } from "react-toastify";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !department) {
      toast.error("All fields are required!!");
      return;
    }

    try {
      await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, department }),
      });

      toast.success("Student added successfully!!");

      setName("");
      setEmail("");
      setDepartment("");
    } catch (err) {
      toast.error("Failed to add student!!");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
