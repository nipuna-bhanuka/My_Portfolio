import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  description: any ;

  constructor() { }

  ngOnInit(): void {
    this.description = 'A highly motivated and hardworking undergraduate who is keen on learning new technologies and dedicated to accomplishing a certain objective within the given time.'
  }

}
