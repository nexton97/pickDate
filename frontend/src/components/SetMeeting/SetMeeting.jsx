import  React from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import TextField from '@mui/material/TextField';
import axios from "axios";


import './SetMeeting.css'
import {useNavigate } from 'react-router-dom';
export default function SetMeeting() {
    const [Start, setStart] = React.useState(new Date());
    const [End, setEnd] = React.useState(new Date());
    const [Title, setTitle] = React.useState('');
    const [Email, setEmail] = React.useState('');
    //const Navigate = useNavigate();
    const handleChangeStart = (newStart) => {
      setStart(newStart);
    };

    const handleChangeEnd = (newEnd) => {
      setEnd(newEnd);
    };




  const saveMeeting = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3020/reservations',{
        start: Start,
        end: End,
        title:Title,
        email:Email
    });
    //Navigate("/");

}
  return (
    <div>
    <div className='TextF'>
    <div className='TextFsolo' >
      <TextField
        id="outlined-name"
        label="Title"
        value={Title}
        onChange={ (e) => setTitle(e.target.value) }
      />
      </div><div className='TextFsolo' >
          <div className='InputWidth'>
      <TextField
        id="outlined-name"
        label="email"
        sx={{'&': {width : 350 } }}
        value={Email}
        onChange={ (e) => setEmail(e.target.value) }
      /></div></div>

    </div>
      
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='dateTime' >
      <div className='dateTimesolo' >
      <DateTimePicker 
        renderInput={(props) => <TextField {...props} />}
        label="Meet Start Time"
        value={Start}
        onChange={handleChangeStart}
      
      /></div>
            <div className='dateTimesolo' >

      <DateTimePicker
       
        renderInput={(props) => <TextField {...props} />}
        label="Meet End Time"
        value={End}
        onChange={handleChangeEnd}
      /></div>

</div>
    </LocalizationProvider>
    <Popup
        trigger={<div className="mainButton"> <Button variant="contained" color="error" onClick={saveMeeting}>Send</Button></div>}
        position="bottom left"
        nested
      ><span> Meeting Sent </span>
      </Popup>

    </div>
  )
}
