import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 52.409538;
  lng = 16.931992;

  //https://github.com/sebholstein/angular-google-maps/issues/1845#issuecomment-672051511
  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
