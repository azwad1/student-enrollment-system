import React,{useState} from 'react'
import Nav from '../components/Nav.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [course, setCourse] = useState("")
    const navigate = useNavigate()

    function saveData(e){
        e.preventDefault()
        let studentData = {name,email,department,course}
        axios.post("http://localhost:3000/students",studentData)
        .then(()=>{
          toast.success("Student Added Successfully")
          setName("")
          setEmail("")
          setDepartment("")
          setCourse("")
          navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
      <Nav />
      <h1>Add Student Details</h1>
      <center>
        <form action="" onSubmit={saveData}>
            <input type="text" placeholder="Enter Name" required value={name} onChange={(e) => {setName(e.target.value)}} />
            <input type="text" placeholder="Enter Email" required value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="text" placeholder="Enter Department" required value={department} onChange={(e) => {setDepartment(e.target.value)}} />
            <input type="text" placeholder='Enter Course' required value={course} onChange={(e) => {setCourse(e.target.value)}} />
            <button type='submit'>Add Student</button>
        </form>
      </center>
    </>
  )
}

export default AddStudent