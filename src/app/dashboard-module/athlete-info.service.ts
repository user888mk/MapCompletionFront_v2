import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AthleteStatsService} from "./athlete-stats.service";

interface UserBasicData {

//  dane do wyswietlania na dashboar

  athlete: athleteBasic
}

interface athleteBasic {
  badge_type_id: number
  bio: string
  city: string
  country: string
  // created_at:
  firstname: string
  id: number
  lastname: string
  profile: string
  profile_medium: string
  resource_state: number
  sex: string
  // updated_at: "2022-07-15T09:06:30Z"
  username: string
  weight: number
}

@Injectable({
  providedIn: 'root'
})

export class AthleteInfoService {

  public userBasicInfo: UserBasicData | undefined;

  constructor(private http: HttpClient, private athleteInfoService: AthleteStatsService) {
  }

  ngOnInit(): void {
    this.athleteInfoService.getAthleteStats().subscribe(
      (data: UserBasicData | undefined) => {
        this.userBasicInfo = data;
        console.log(data);
        console.log(this.userBasicInfo)
      },
      (err: any) => console.log('JSON uciekł ', err)
    );
  }
}
