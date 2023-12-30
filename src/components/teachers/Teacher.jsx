import React, { useEffect, useState }  from "react";
import "./teacher.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {Delete} from "./Delete";

const Teacher = () => {

    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetchTeacherList();
    }, []);

    const fetchTeacherList = async () => {
        try {
            const response = await axios.get("http://localhost:8000/teacher");
            setRecords(response.data);
        } catch (error) {
            console.error("Error fetching student list:", error);
        }
    };

    const updateTeacherList = () => {
        fetchTeacherList();
    };

    return (
        <div className="container p-5">
            <h1 className="fw-bold mb-2">Teachers</h1>
            <div className="text-end">
                <Link to="/createTeacher" className="btn btn-success mb-3 px-4">
                    Add +
                </Link>
            </div>
            <table className="table border">
                <thead>
                    <tr className="">
                        
                        <th className="p-3" scope="col">
                            Name
                        </th>
                        <th className="p-3" scope="col">
                            Subject
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
                                {d.name}
                            </td>
                            <td className="p-3" scope="row">
                                {d.subject}
                            </td>
                            
                            <td className="p-3" scope="row">
                                <Link className="btn btn-sm btn-info px-4" to={`/teacher/update/${d._id}`}>
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
                                <Delete id={d._id} updateTeacherList={updateTeacherList} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teacher;
