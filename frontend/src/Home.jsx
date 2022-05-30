import background from "./assets/pic.jpg";
import Main from "./components/main/Main";
import * as React from 'react';
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import SetMeeting from "./components/SetMeeting/SetMeeting";
import { Link } from "react-router-dom";


export default function index() {
  return (
    <div>
      <Link to="/">
    <div className="App">
      <Topbar/>
      <Main imageSrc={background}/>
      <SetMeeting/>
      
    </div>
    </Link>

    </div>
  )
}
