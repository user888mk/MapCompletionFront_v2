import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {


  constructor(
    private router: Router
  ) {
  }

  title = 'MapCompletionUI';

  // // btnTraining1(): void {
  // //   this.router.navigateByUrl('/training');
  // // }
  //
  // btnTraining2(): void {
  //   this.router.navigateByUrl('/dashboard/training');
  // }
}
