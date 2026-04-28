/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateStudent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")

  
  let {id} = useParams()
  let navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/students/${id}`)
    .then(x => {
      setName(x.data.name)
      setEmail(x.data.email)
      setDepartment(x.data.department)
      setCourse(x.data.course)
    })
    .catch(err => console.log(err))
  },[])

  function handleUpdate(e){
    e.preventDefault()
    const newData = {name,email,department,course}
    axios.put(`http://localhost:3000/students/${id}`,newData)
    .then(()=>{
      toast.success("Updated..")
      navigate("/viewstudent")
    })
    .catch(() => {
      toast.error("Update Failed...");
    })
  }

  
  return (
    <>
    <Nav/>
    <center><h1>Update Student</h1></center>
      <center>
        <form action="" onSubmit={handleUpdate}>
            <input type="text" placeholder="Enter Name" required value={name} onChange={(e) => {setName(e.target.value)}} />
            <input type="text" placeholder="Enter Email" required value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="text" placeholder="Enter Department" required value={department} onChange={(e) => {setDepartment(e.target.value)}} />
            <input type="text" placeholder='Enter Course' required value={course} onChange={(e) => {setCourse(e.target.value)}} />
            <button type='submit'>Update Student</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent