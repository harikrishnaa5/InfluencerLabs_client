import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/student/"+id)
        .then(res => {setData(res.data)
        console.log(res.data);})
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:5000/student/"+id,data)
        .then(res => {
            alert('student data updated successfully')
            navigate("/student");
        })
    }

  return (
    <div className="Add d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-dark bg-gradient">
    <h2 className="mb-4 fw-bold text-white">Edit student</h2>
    <form className="w-50" onSubmit={handleSubmit}>
        <div className=" border bg-light p-5">
            <div>
                <label htmlFor="studentId">Student_Id</label>
                <input
                   value={data.studentId}
                    type="number"
                    name="studentId"
                    className="form-control my-2"
                    disabled
                    
                />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    value={data.name}
                    type="text"
                    name="name"
                    className="form-control my-2"
                    onChange={(e) => setData({...data, name: e.target.value})}
                />
            </div>
            <div>
                <label htmlFor="class">Class</label>
                <input
                  value={data.Class}
                    type="number"
                    name="Class"
                    className="form-control my-2"
                    onChange={(e) => setData({...data, Class: e.target.value})}
                />
            </div>
            <button type="submit" className="btn btn-info mt-3 px-4">
                Update
            </button>
        </div>
    </form>
</div>
  )
}

export default Edit