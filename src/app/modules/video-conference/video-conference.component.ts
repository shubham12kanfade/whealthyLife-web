import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Inject } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation.service';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
var OT = window['OT'];
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-video-conference',
  templateUrl: './video-conference.component.html',
  styleUrls: ['./video-conference.component.scss']
})
export class VideoConferenceComponent implements OnInit {

  apiKey = "46730612";
  // sessionId = "2_MX40NjczMDYxMn5-MTU5MDQxNzMyMjA5Nn56OEhQTGxyMTQ2N2JZbk1ZdTVlcDZtYkp-UH4";
  // token = "T1==cGFydG5lcl9pZD00NjczMDYxMiZzaWc9NjZkYmRjMzc0NGRjYWU5MjQ2NzkyMGMwN2JiNjFlYWI2MWE2NDA0MzpzZXNzaW9uX2lkPTJfTVg0ME5qY3pNRFl4TW41LU1UVTVNRFF4TnpNeU1qQTVObjU2T0VoUVRHeHlNVFEyTjJKWmJrMVpkVFZsY0RadFlrcC1VSDQmY3JlYXRlX3RpbWU9MTU5MDQxODE5NCZub25jZT0wLjk3MjI3NDIwMzk5MzA1MTQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5MDUwNDU5NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
  sessionId: any;
  session: any;
  token: any;
  timer: any;
  countDown: any;
  min: any;
  remSec: any;
  sec: any;
  constructor(@Inject(DOCUMENT) private document: Document,
  public confernceService: ConsultationService,
    public messageService: MessageService,
    public router: Router,
    public userService: UserService,
    public CookieService:CookieService) {
    this.getSession();
  }

  getSession() {
    if (this.userService.getUserDesignation() === 'Doctor') {
      this.confernceService.getDoctorSession().then(resData => {
        if (resData.code === 200) {
          this.sessionId = resData.data.sessionId;
          this.token = resData.data.token;
          this.initializeSession();
        } else {
          this.showToast('error', "Session Faild", resData.data);
          this.router.navigate(['/']);
        }
      }).catch(error => {
        console.log("VideoConferenceComponent -> getSession -> error", error)
      })
    } else if (this.userService.getUserDesignation() === 'User') {
      this.confernceService.getPatientSession().then(resData => {
        if (resData.code === 200) {
          this.sessionId = resData.data.sessionId;
          this.token = resData.data.token;
          this.initializeSession();
        } else {
          this.showToast('error', "Session Faild", resData.data)
          this.router.navigate(['/']);
        }
      }).catch(error => {
        console.log("VideoConferenceComponent -> getSession -> error", error)
      })
    }
  }

  initializeSession() {
    this.getSessionChecked();
    var session = OT.initSession(this.apiKey, this.sessionId);
    console.log("VideoConferenceComponent -> initializeSession -> this.apiKey", this.apiKey, this.sessionId, this.token)
    session.on('streamCreated', function (event) {
      session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, this.handleError);
    });

    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, this.handleError);

    session.connect(this.token, function (error) {
      if (error) {
        if (error.code == 1004) {
          this.initializeSession();
          return;
        }
        this.handleError(error);
      } else {
        session.publish(publisher);
      }
    });
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }

  getSessionChecked() {
    var timeInterval = setInterval(() => {
      if (this.userService.getUserDesignation() === 'Doctor') {
        this.confernceService.getDoctorSession().then(resData => {
          if (resData.code === 201) {
            clearInterval(timeInterval);
            this.router.navigate(['/']);
          }
        }).catch(error => {
          console.log("VideoConferenceComponent -> getSession -> error", error)
        })
      } else if (this.userService.getUserDesignation() === 'User') {
        this.confernceService.getPatientSession().then(resData => {
          if (resData.code === 201) {
            clearInterval(timeInterval);
            this.router.navigate(['/']);
          }
        }).catch(error => {
          console.log("VideoConferenceComponent -> getSession -> error", error)
        })
      }
    }, 3000);
  }

  endSession() {

    const Cooki=JSON.parse(this.CookieService.get('userInfo_WhealthyLife'))
const data={
  patient:Cooki._id
}
    this.confernceService.endSession(data).then(resData => {
      console.log("VideoConferenceComponent -> endSession -> resData", resData);
      this.document.location.href = 'http://localhost:4200/';
    }).catch(error => {
      console.log("VideoConferenceComponent -> endSession -> error", error)
    })
  }

  ngOnInit(): void {
    this.timerCounter();
  }

  ngAfterViewInit() {
  }

  timerCounter() {
    this.sec = 1800;
    this.countDown = setInterval(() => {
      this.secpass();
    }, 1000);
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }


  secpass() {
    this.min = Math.floor(this.sec / 60);
    this.remSec = this.sec % 60;
    if (this.remSec < 10) {
      this.remSec = '0' + this.remSec;
    }
    if (this.min < 10) {
      this.min = '0' + this.min;
    }
    if (this.sec > 0) {
      this.sec = this.sec - 1;
    } else {
      clearInterval(this.countDown);
    }
  }
}
