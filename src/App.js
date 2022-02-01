import React from "react";
import {  Route, Routes } from "react-router-dom";
import Page1 from "./container/page1/Page1";
import Page2 from "./container/page1/Page2";


function App() {
     

  return (
    <div className="App">
       <Routes>
         <Route path="/" element={ <Page1/>}/>
         <Route path="/page2" element={ <Page2/>}/>

       </Routes>
    </div>
  );
}

export default App;
