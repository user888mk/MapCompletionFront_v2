import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AthleteStatsService} from "../athlete-stats.service";

interface UserData {
  athlete: RideTotals
}

interface RideTotals {
  badge_type_id: number
  city: string
  country: string
  firstname: string
  id: number
  lastname: string
  sex: string
  weight: number
  profile: undefined
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personalDataJson: UserData | undefined;

  constructor(private http: HttpClient, private homeService: AthleteStatsService) {
  }


  ngOnInit(): void {
    this.homeService.getAthleteStats().subscribe(
      (data: UserData | undefined) => {
        this.personalDataJson = data;
        console.log(data);
        console.log(this.personalDataJson)
      },
      (err: any) => console.log('JSON uciekł ', err)
    );
  }
}
