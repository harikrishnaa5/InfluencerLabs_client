import React, { useEffect, useState } from "react";
import "./student.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const Student = () => {
    // const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetchStudentList();
    }, []);

    const fetchStudentList = async () => {
        try {
            const response = await axios.get("http://localhost:5000/student");
            setRecords(response.data);
        } catch (error) {
            console.error("Error fetching student list:", error);
        }
    };

    const updateStudentList = () => {
        fetchStudentList();
    };
    return (
        <div className="container p-5">
            <h1 className="fw-bold mb-2">Students</h1>
            <div className="text-end">
                <Link to="/createStudent" className="btn btn-success mb-3 px-4">
                    Add +
                </Link>
            </div>
            <table className="table border">
                <thead>
                    <tr className="">
                        <th className="p-3" scope="col">
                            Student_Id
                        </th>
                        <th className="p-3" scope="col">
                            Name
                        </th>
                        <th className="p-3" scope="col">
                            Class
                        </th>
                        <th className="p-3" scope="col">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {records?.map((d, i) => (
                        <tr key={i}>
                            <td className="p-3" scope="row">
                                {d.studentId}
                            </td>
                            <td className="p-3" scope="row">
                                {d.name}
                            </td>
                            <td className="p-3" scope="row">
                                {d.Class}
                            </td>
                            <td className="p-3" scope="row">
                                <Link className="btn btn-sm btn-info px-4" to={`/update/${d.studentId}`}>
                                    Update
                                </Link>
                                <button
                                    className="btn btn-sm ms-2 btn-danger px-4"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                >
                                    Delete
                                </button>
                                {/* Button trigger modal */}
                                <Delete id={d.studentId} updateStudentList={updateStudentList} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Student;
