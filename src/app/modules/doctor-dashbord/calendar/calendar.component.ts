import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendar } from 'primeng/fullcalendar/fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  options: any;
  events: any = [];

  @ViewChild('fc') fc: FullCalendar;
  patient: { name: string  }[];
  constructor() { }


  gotoDate(date: Date) {
    this.fc.getCalendar().gotoDate(date);
  }

  ngOnInit(): void {
    this.options = {
      plugins: [interactionPlugin, timeGridPlugin, dayGridPlugin],
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }
    }

      this.events = [
        {
            "title": "All Day Event",
            "start": "2020-06-21"
        },
        {
            "title": "Long Event",
            "start": "2020-06-25",
            "end": "2020-06-27"
        }
       
    ]

//     this.options = {
//       plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      
//       header: {
//           left: 'prev,next',
//           center: 'title',
//           right: 'month,agendaWeek,agendaDay'
//       }
 
// }



    

    this.patient=[
    {
      name : "suchitra Meshram" 
    },
    {
      name : "Sachin Patil" 
    },
    {
      name : "Kamlesh Zade" 
    },
    {
      name : "Marotrao Deshmukh" 
    },
  ]



  }








}
