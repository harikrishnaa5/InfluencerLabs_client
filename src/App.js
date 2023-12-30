import "./App.css";
import Student from "./components/students/Student";
import Teacher from "./components/teachers/Teacher";
import Add from "./components/students/Add";
import AddTeacher from "./components/teachers/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/students/Edit";
import EditTeacher from "./components/teachers/Edit";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* student routes */}
                <Route path="/student" element={<Student />} />
                <Route path="/createStudent" element={<Add />} />
                <Route path="/update/:id" element={<Edit />} />
                {/* teacher routes */}
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/createTeacher" element={<AddTeacher />} />
                <Route path="/teacher/update/:id" element={<EditTeacher />} />
            </Routes>
        </div>
    );
}

export default App;
