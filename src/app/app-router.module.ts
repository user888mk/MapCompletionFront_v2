import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponentComponent} from "./login-module/login-component/login-component.component";
import {HomeComponent} from "./dashboard-module/home/home.component";
import {AuthorizeComponent} from "./login-module/authorize/authorize.component";
import {TrainingComponent} from "./dashboard-module/training/training.component";
import {StatsComponent} from "./dashboard-module/stats/stats.component";
import {ChartComponent} from "./dashboard-module/char/chart.component";
import {AuthGuardGuard} from "./login-module/auth-guard.guard";
import {MapComponent} from "./dashboard-module/map/map.component";

const routes: Routes = [
  {
    path: 'loginToStrava',
    component: LoginComponentComponent
  },
  {
    path: "",
    redirectTo: "/stats",
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'authorize',
    component: AuthorizeComponent
  },

  {
    path: 'training',
    component: TrainingComponent,
    canActivate: [AuthGuardGuard]

  },
  {
    path: 'stats',
    component: StatsComponent,
    canActivate: [AuthGuardGuard]

  },
  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [AuthGuardGuard]

  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuardGuard]

  }
]

@NgModule({

  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), CommonModule],
  exports: [RouterModule],
})
export class AppRouterModule {
}
