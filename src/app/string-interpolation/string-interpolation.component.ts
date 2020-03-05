import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {
  preson = {
    firstname: "Dante",
    lastname: "Devil",
    age: 50,
    address: "Route 100"

  }

  constructor() { }

  ngOnInit() {
  }

}
