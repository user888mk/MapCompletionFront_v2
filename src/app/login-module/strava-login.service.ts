import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StravaLoginService {


  constructor(private http: HttpClient) {
  }

  private readonly OAUTH_TOKEN_URL = 'https://www.strava.com/oauth/token';

  private readonly _CLIENT_ID = '84970';

  private readonly CLIENT_SECRET = 'ffc5ff3e851d36bb0f607a912993de18b5a9b45a';

  private _athleteId: number | undefined;
  private _refreshToken: string | undefined;
  private _bearerToken: string | undefined;

  public getAthleteId(): number {
    return <number>this._athleteId;
  }

  public setAthleteId(value: number | undefined) {
    this._athleteId = value;
  }

  public getRefreshToken(): string | undefined {
    return this._refreshToken;
  }

  public setRefreshToken(value: string | undefined) {
    this._refreshToken = value;
  }

  public isUserLoggedIn():boolean{
    return !!this._athleteId;
  }

  public getBearerToken(): string {
    return <string>this._bearerToken;
  }

  public getFormattedToken(): string {
    return "Bearer " + <string>this._bearerToken;
  }

  public setBearerToken(value: string | undefined) {
    this._bearerToken = value;
  }

  public getAuthToken(code: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('grant_type', 'authorization_code')
    params = params.set('client_id', this._CLIENT_ID)
    params = params.set('client_secret', this.CLIENT_SECRET)
    params = params.set('code', code)

    return this.http.post(this.OAUTH_TOKEN_URL, null, {'params': params})
  }

  /*
  https://www.strava.com/api/v3/oauth/
  -d client_id=ReplaceWithClientID \
  -d client_secret=ReplaceWithClientSecret \
  -d code=ReplaceWithCode \
  -d grant_type=authorization_code
   */


}
