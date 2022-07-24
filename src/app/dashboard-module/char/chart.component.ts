import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";
import {isElementScrolledOutsideView} from "@angular/cdk/overlay/position/scroll-clip";
import {HttpClient} from "@angular/common/http";
import {AthleteStatsService} from "../athlete-stats.service";

interface UserStatisticsChart {

  all_ride_totals: ChartTotals
  all_run_totals: ChartTotals
}

interface ChartTotals {
  elapsed_time: number;
  count: number;

}

interface ChartRunTotals {
  elapsed_time: number;
  count: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  option!: EChartsOption;

  public chartData: UserStatisticsChart | undefined;

  constructor(private http: HttpClient, private statsService: AthleteStatsService) {
  }

  ngOnInit(): void {


    this.option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },

      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 132, 201, 434, 1290, 1330, 1320],
          type: 'line',
          smooth: true
          //elapsed_time
          //distance
        },
        {
          data: [80, 92, 90, 93, 129, 1330, 1420, 1750],
          type: 'line',
          smooth: true
        }
      ]
    };
    this.statsService.getAthleteStats().subscribe(
      (data: UserStatisticsChart | undefined) => {
        this.chartData = data;
        console.log(data);
        console.log(this.chartData)
      },
      (err: any) => console.log('JSON uciekł, tylko gdzie? ', err)
    );
  }
}
