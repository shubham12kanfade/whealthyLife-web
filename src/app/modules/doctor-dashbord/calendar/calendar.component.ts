import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendar } from 'primeng/fullcalendar/fullcalendar';
import { PaitentsService } from 'src/app/services/paitents.service';
import { UserService } from 'src/app/services/user.service';

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
  DoctId: any;
  Allpaitent: any;
  alllPaitent: any = [];
  constructor(public userService : UserService, public paitentService : PaitentsService) {

    this.DoctId= this.userService.getUserInfo()

    this.paitentService.getAllPaitent(this.DoctId._id).then(resData => {
      console.log("PatientsComponent -> constructor -> resData", resData);
           this.Allpaitent = resData.data.AllPaitent.length;
           console.log(": ----------------------------------------------------------------------");
           console.log("CalendarComponent -> constructor ->  this.Allpaitent",  this.Allpaitent);
           console.log(": ----------------------------------------------------------------------");

           for (let i = 0 ; i <  resData.data.AllPaitent.length; i++ ){

            this.alllPaitent[i] = resData.data.AllPaitent[i].petient
            console.log(": ----------------------------------------------------------------------------");
            console.log("CalendarComponent -> constructor -> this.alllPaitent[i]", this.alllPaitent[i]);
            console.log(": ----------------------------------------------------------------------------");
          }

    }).catch(error =>{
      console.log("PatientsComponent -> constructor -> error", error);
    })

   }


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





  //   this.patient=[
  //   {
  //     name : "suchitra Meshram"
  //   },
  //   {
  //     name : "Sachin Patil"
  //   },
  //   {
  //     name : "Kamlesh Zade"
  //   },
  //   {
  //     name : "Marotrao Deshmukh"
  //   },
  // ]



  }








}
