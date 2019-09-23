import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class welcomemessage {
  public message: string;
  constructor(message
    ) { this.message = message; }
}
export class WelcomeService {


  constructor(private http: HttpClient
  ) { }
  excuteHelloWorldBeanService() {
   return this.http.get<welcomemessage>('http://localhost:8080/hello-world-bean');
   this.excuteHelloWorldBeanService().subscribe();
  }
}


