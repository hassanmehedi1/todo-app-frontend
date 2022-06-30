import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
   return (
     <div>
       <h1 className="display-4 text-info  text-center mb-5">Calender</h1>
       <div className="d-flex justify-content-center">
         <DayPicker mode="single"></DayPicker>
       </div>
     </div>
   );
};

export default Calender;