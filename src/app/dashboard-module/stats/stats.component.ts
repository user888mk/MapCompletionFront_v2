import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AthleteStatsService} from "../athlete-stats.service";

interface UserStatistics {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: RideTotals,
  all_ride_totals: RideTotals
}

interface RideTotals{
  count: number,
  distance: number,
  moving_time: number,
  elapsed_time: number,
  elevation_gain: number,
  achievement_count: number
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent  implements OnInit {

  public dataJSON: UserStatistics | undefined;


  constructor(private http: HttpClient, private statsService: AthleteStatsService) {
  }


  ngOnInit(): void {
    this.statsService.getAthleteStats().subscribe(
      (data: UserStatistics | undefined) => {
        this.dataJSON = data;
        console.log(data);
        console.log(this.dataJSON)
      },
      (err: any) => console.log('JSON uciekł, tylko gdzie? ', err)
    );
  }
}
