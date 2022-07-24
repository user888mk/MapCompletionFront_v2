import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StravaLoginService} from "../login-module/strava-login.service";

@Injectable({
  providedIn: 'root'
})
export class AthleteStatsService {

  private readonly ATHLETES_URL = 'https://www.strava.com/api/v3/athletes';

  // private readonly STATS = 'stats';

  constructor(private http: HttpClient, private loginService: StravaLoginService) {
  }


  public getAthleteStats(): Observable<any> {
    let params: HttpHeaders = new HttpHeaders();
    params = params.set('Authorization', this.loginService.getFormattedToken())
    // Authorization: Bearer 1235123124

    return this.http.get(this.ATHLETES_URL+"/" + this.loginService.getAthleteId() + "/stats", {'headers': params})
    // return this.http.get(this.ATHLETES_URL+"/" + this.loginService.getAthleteId() + "/chart", {'headers': params})
  }
}
