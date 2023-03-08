import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  clickArray : number[] = []
  index = 1;
  check = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayDetails(){
    this.clickArray.push(this.index);
    this.index++;
  }

}
