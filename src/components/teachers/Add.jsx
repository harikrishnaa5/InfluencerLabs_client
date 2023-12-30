import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [inputData, setInputData] = useState({
        name: "",
        subject: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    //form validation
    const validateValues = (inputValues) => {
        let errors = {};
        let subjectList = [
            "English",
            "Hindi",
            "Kannada",
            "Malayalam",
            "Biology",
            "Chemistry",
            "Physics",
            "History",
            "Geography",
            "Mathematics",
        ];
        if (!inputValues.name) {
            errors.name = "This field should not be empty";
        }
        if (!inputValues.subject) {
            errors.subject = "this should not be empty";
        }
        if (!subjectList.includes(inputValues.subject)) {
            errors.subject = "invalid subject entry";
        }

        return errors;
    };

    //form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(inputData));

        axios
            .post("http://localhost:8000/teacher/add", inputData)
            .then((res) => {
                alert("Teacher data added successfully");
                navigate("/teacher");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="Add d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-dark bg-gradient">
            <h2 className="mb-4 fw-bold text-white">Add Teacher</h2>
            <form className="w-50" onSubmit={handleSubmit}>
                <div className=" border bg-light p-5">
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
                        <label htmlFor="class">Subject</label>
                        <input
                            onChange={(e) => setInputData({ ...inputData, subject: e.target.value })}
                            type="text"
                            name="subject"
                            className="form-control my-2"
                        />
                    </div>
                    {errors.subject ? <p className="error">{errors.subject}</p> : null}
                    <button type="submit" className="btn btn-info mt-3 px-4">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;
