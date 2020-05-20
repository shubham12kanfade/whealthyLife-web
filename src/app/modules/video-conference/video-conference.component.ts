import { Component, OnInit } from '@angular/core';
var OT = window['OT'];

@Component({
  selector: 'app-video-conference',
  templateUrl: './video-conference.component.html',
  styleUrls: ['./video-conference.component.scss']
})
export class VideoConferenceComponent implements OnInit {

  apiKey = "46730612";
  sessionId = "2_MX40NjczMDYxMn5-MTU4OTkwMzEzNzM4Mn4vdEhuRlBCejRuWFpDSlE1Yi9aaitoQ2N-fg";
  token = "T1==cGFydG5lcl9pZD00NjczMDYxMiZzaWc9NmI2NWIzZmJmNTAwNmM5OWFiNThmYWZlMTBhYTNiNmRmNGJkYzY3ZjpzZXNzaW9uX2lkPTJfTVg0ME5qY3pNRFl4TW41LU1UVTRPVGt3TXpFek56TTRNbjR2ZEVodVJsQkNlalJ1V0ZwRFNsRTFZaTlhYWl0b1EyTi1mZyZjcmVhdGVfdGltZT0xNTg5OTAzMTU0Jm5vbmNlPTAuMTQyOTQ1MDg1ODM2MDMxMjcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4OTkwNjc1MyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

  constructor() {
    this.initializeSession();
  }

  initializeSession() {
    var session = OT.initSession(this.apiKey, this.sessionId);

  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, this.handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, this.handleError);

  // Connect to the session
  session.connect(this.token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      this.handleError(error);
    } else {
      session.publish(publisher, this.handleError);
    }
  });
  }

  handleError(error) {
    if (error) {
      alert(error.message);
    }
  }


  ngOnInit(): void {

  }

}
