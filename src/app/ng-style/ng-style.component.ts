import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  myFontSize = "10px";
  myColor = "green";

  constructor() { }

  ngOnInit() {
  }

}
