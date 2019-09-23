import { WelcomeService } from './../Service/welcomeService.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message = 'new message';

  constructor(private service: WelcomeService) { }

  ngOnInit() {
  }
viewMessage() {
// tslint:disable-next-line:no-unused-expression
this.service.excuteHelloWorldBeanService().subscribe(
  response => this.handelresponse(response));
}
handelresponse(response) {
 console.log(response);
 console.log(response.message);
 this.message = response.message;
}
}

