import { Component, OnInit } from '@angular/core';
import {StravaLoginService} from "../strava-login.service";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      window.location.href = `https://www.strava.com/oauth/authorize?client_id=84970&redirect_uri=http://localhost:4200/authorize&response_type=code&approval_prompt=auto&scope=read`;

  }
}

