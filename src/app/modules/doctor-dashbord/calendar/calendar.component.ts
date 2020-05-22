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
  events: any;

  @ViewChild('fc') fc: FullCalendar;
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
  }

}
