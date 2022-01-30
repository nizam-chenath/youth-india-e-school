import React, { useState } from "react";
import Calender from 'react-calendar';
import './Page1.css';
import 'react-calendar/dist/Calendar.css';


function Page1() {

    const [date, setDate] = useState(new Date());
    const [classData, setClassData] = useState({ value: ""})

     const onChange = date =>{
       setDate(date)
     }
     const getClass = event =>{
        setClassData({ value: event.target.value})
     }
     //console.log(classData)

  return <div>
         <div className="container">
         
            
         <h1 className="heading">School Admin Dashboard</h1>

         <div className="btn-container">
         <button className="btn1">staff</button>
         <button className="btn2">student</button>
         </div>
      
     <select name="SelectClass" className="select" value={classData.value}  onChange={getClass}>
       <option value="" >Select Class</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
     </select>

     <button className="filter-btn">Apply Filter</button>
     <button className="back-btn">Back to Home Page</button>

     <div className="path">

     <p>Science, <b>Class {classData.value} </b>, Attendance, Report</p>
     <p>Science,Class {classData.value}, Attendance, Report</p>
     </div>
        
        <div className="section2">

     <table>
       <tr>
         <th>Total Attendance</th>
         <th>Date</th>
         <th>List of Attendees</th>
       </tr>
       <tr>
         <td>25</td>
         <td>10/9/21</td>
         <td><a href="">List</a></td>
       </tr>
       <tr>
         <td>24</td>
         <td>11/9/21</td>
         <td><a href="">List</a></td>
       </tr>
       <tr>
         <td>24</td>
         <td>12/9/21</td>
         <td><a href="">List</a></td>
       </tr>
       <tr>
         <td>24</td>
         <td>13/9/21</td>
         <td><a href="">List</a></td>
       </tr>
       <tr>
         <td>25</td>
         <td>14/9/21</td>
         <td><a href="">List</a></td>
       </tr>

       <tr>
         <td>22</td>
         <td>15/9/21</td>
         <td><a href="">List</a></td>
       </tr>
     </table>

       <div className="calender-section">
         <Calender  onChange={onChange}
         value={date} />
       </div>
     
        </div>
   </div>
  </div>;
}

export default Page1;
