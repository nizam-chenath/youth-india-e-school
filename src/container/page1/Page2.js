import React from 'react';
import "./Page2.css"

function Page2() {
 let updateAdminAttendance=()=>{
   alert("Updated admin attendance");
 }
 let updateTeachersAttendance=()=>{
  alert("Updated teachers attendance");
 }
  return <div>
       <div className="container">
          <h1 className="heading">School Admin Dashboard</h1>

          <div className="btn-container">
              <button className="btn2">admin</button>
              <button className="btn1">student</button>
          </div>
          
          <div className="update-section absolute">
              <span className="span-element">Admin Attendance</span>
              <button className="back-btn"  onClick={updateTeachersAttendance}>Update Teachers Attendance</button>
              <button className="back-btn" onClick={updateAdminAttendance}>Update Admin Attendance</button>
          </div>
          
       </div>
  </div>;
}

export default Page2;
