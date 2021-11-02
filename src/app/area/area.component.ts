import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public circleArea: number = 0;
  public squareArea: number = 0;
  onCircleArea(param:HTMLInputElement) {
    this.circleArea = Math.floor((Number(param.value) ** 2) * Math.PI);
  }
  onSquareArea(param:HTMLInputElement) {
    this.squareArea = Math.floor(Number(param.value) ** 2);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
