import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Delete = ({id, updateStudentList}) => {
    const navigate = useNavigate()
  
    const handleSubmit =async (e) => {
      
        e.preventDefault()
        await axios.delete("http://localhost:5000/student/"+id)
        .then(res => {
            updateStudentList();
            navigate("/student")
        })
    }
    return (
        <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-danger" id="staticBackdropLabel">
                            WARNING!!!
                        </h1>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body text-center">
                        Are you sure you want to delete this student?
                        <br /> All the data of the student will be deleted permenently!!!!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button onClick={handleSubmit} type="button" className="btn btn-sm ms-2 btn-danger px-4"  data-bs-dismiss="modal">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
