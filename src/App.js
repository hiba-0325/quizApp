import React, { useState } from "react";

import QuizApp from "./quiz app/quiz";
import Tracker from "./expenseTracker/tracker";
import TrackForm from "./expenseTracker/Component";


function App() {
  
  return (
    // <div >
    //   <div className="quiz-main"></div>

    // {/* <QuizApp/> */}
    //   </div>
    
    <div>
      <TrackForm/>
      <Tracker/>
    </div>
    
  );
}

export default App;
