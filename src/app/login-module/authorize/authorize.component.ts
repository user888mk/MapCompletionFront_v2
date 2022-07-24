import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StravaLoginService} from "../strava-login.service";
import {isElementScrolledOutsideView} from "@angular/cdk/overlay/position/scroll-clip";

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private loginService: StravaLoginService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
          console.log(params);
          const code: string = params['code'];
          const scope: string = params['scope'];
          console.log(code);
          console.log(scope);

          this.loginService.getAuthToken(code).subscribe(response => {
            this.loginService.setBearerToken(response["access_token"]);
            this.loginService.setRefreshToken(response["refresh_token"]);
            this.loginService.setAthleteId(response.athlete.id);

            console.log(response);
            console.log("login succesful");

            this.router.navigate([""]);
          })
        }
      );
  }
}
