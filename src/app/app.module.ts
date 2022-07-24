import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModuleModule} from "./login-module/login-module.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRouterModule} from "./app-router.module";
import {MatSliderModule} from '@angular/material/slider';
import {TrainingComponent} from "./dashboard-module/training/training.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HomeComponent} from "./dashboard-module/home/home.component";
import {StatsComponent} from './dashboard-module/stats/stats.component';
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientJsonpModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ChartComponent} from './dashboard-module/char/chart.component';
import {NgxEchartsModule} from "ngx-echarts";
import {MapComponent} from "./dashboard-module/map/map.component";
import {AgmCoreModule} from '@agm/core'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainingComponent,
    StatsComponent,
    ChartComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMOrWolUI7rHSZENr5bOLTmywEfq2FPZs'
    }), //google maps
    BrowserAnimationsModule,
    LoginModuleModule,
    MatToolbarModule,
    AppRouterModule,
    MatSliderModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientJsonpModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
