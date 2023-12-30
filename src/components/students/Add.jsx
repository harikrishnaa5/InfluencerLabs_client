import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './student.css'

const Add = () => {
    const [inputData, setInputData] = useState({
        studentId: 0,
        name: "",
        Class: 0,
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    //form validation
    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.studentId.length < 4) {
            errors.studentId = "Student_Id is too short";
        }
        if (!inputValues.studentId) {
            errors.studentId = "This field should not be empty";
        }
        if (!inputValues.name) {
            errors.name = "This field should not be empty";
        }
        if (!inputValues.Class) {
            errors.Class = "this should not be empty";
        }
        if (inputValues.Class > 12 || inputValues.Class < 1) {
            errors.Class = "select a class between 1 to 12";
        }
        return errors;
    };

    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(inputData));
        axios
            .post("http://localhost:5000/student/add", inputData)
            .then((res) => {
                alert("Student data added successfully");
                navigate("/student");
            })
            .catch((err) => alert(err.message))
    };

    return (
        <div className="Add d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-dark bg-gradient">
            <h2 className="mb-4 fw-bold text-white">Add student</h2>
            <form className="w-50" onSubmit={handleSubmit}>
                <div className=" border bg-light p-5">
                    <div>
                        <label htmlFor="studentId">Student_Id</label>
                        <input
                            onChange={(e) => setInputData({ ...inputData, studentId: e.target.value })}
                            type="number"
                            name="studentId"
                            className="form-control my-2"
                        />
                    </div>
                    {errors.studentId ? <p className="error">{errors.studentId}</p> : null}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                            type="text"
                            name="name"
                            className="form-control my-2"
                        />
                    </div>
                    {errors.name ? <p className="error">{errors.name}</p> : null}
                    <div>
                        <label htmlFor="class">Class</label>
                        <input
                            onChange={(e) => setInputData({ ...inputData, Class: e.target.value })}
                            type="number"
                            name="Class"
                            className="form-control my-2"
                        />
                    </div>
                    {errors.Class ? <p className="error">{errors.Class}</p> : null}
                    <button type="submit" className="btn btn-info mt-3 px-4">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
