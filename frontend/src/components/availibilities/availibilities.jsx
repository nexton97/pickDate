
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Calendar } from '@fullcalendar/core';
import axios from 'axios';
import React, {
  useState,useEffect,useMemo
} from "react";
const queryParams = new URLSearchParams(window.location.search);

export default function Availibilities() {

  const [meetings, setMeetings] = useState([]);


  useEffect(() => {  
axios.get('http://localhost:3020/reservations').then((response)=>{
  setMeetings(response.data.dates)
  
})
  })
  useMemo(() => {
    document.getElementById(queryParams.get("meeting")) &&
    document.getElementById(queryParams.get("meeting")).click();
  }, [
    meetings,
    queryParams.get("meeting"),
    document.getElementById(queryParams.get("meeting")) != null,
  ]);

  return (
    // <div className='availibilities'>
        <FullCalendar

        // defaultView="dayGridMonth"

        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay"
        // }}
       
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={meetings.map((meeting) =>
          ({
         title:meeting.title,
         date: meeting.start
       }))}  
        
      />
  // </div>
  )
}
