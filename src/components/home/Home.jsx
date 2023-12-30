import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome!!!!!!</h1>
            <span className="d-flex align-items-center">
                <Link to="/student" className="btn btn-sm btn-info px-4 ms-3">
                    Student
                </Link>
                <Link to="/teacher" className="btn btn-sm btn-info px-4 ms-3">
                    Teacher
                </Link>
            </span>
        </div>
    );
};

export default Home;
