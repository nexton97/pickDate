import * as React from 'react';
import { BrowserRouter , Router, Routes, Route, Navigate,} from "react-router-dom";
import "./app.css";
import Home from "./components/home/home";
import Availibilities from './components/availibilities/availibilities';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home/>}/>
        <Route exact path="/availibilities" name="Home" element={<Availibilities/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
