import background from "../../assets/pic.jpg";
import Main from "../main/Main";
import * as React from 'react';
import "./home.css";
import Topbar from "../topbar/Topbar";
import SetMeeting from "../SetMeeting/SetMeeting";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
    
      <Topbar/>
      <Main imageSrc={background}/>
      <SetMeeting/>
      
    </div>
  );
};
  
export default Home;