import React, {useEffect , useState} from 'react'
import Nav from '../components/Nav.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewStudent = () => {

  const[students,setStudents] = useState([])

  const navigate = useNavigate()

  function fetchData(){
    axios.get("http://localhost:3000/students")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    fetchData()
  },[])

  function handleUpdate(id){
    navigate(`/updatestudent/${id}`)
  }

  function handleDelete(id){
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(()=>{
      fetchData()
      toast.success("Deleted")
    })
    .catch(err => console.log(err))
  }
  return (
    <>
    <Nav />
    <div className='view-student'>
      <h1>View Student</h1>
      {
        students.map((x)=>{
          return <div>
            <h3>Name : {x.name}</h3>
            <p><b>Email : {x.email}</b></p>
            <p><b>Department : {x.department}</b></p>
            <p><b>Course : {x.course}</b></p>
            <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
            <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
          </div>
        })}
      </div>
    </>
  )
}

export default ViewStudent

