import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  
  names= [
    "Ana",
    "John",
    "Mark",
    "Mariel"
  ];

  cities = [
     {name: "São Paulo", state: "SP"},
     {name: "Porto Alegra", state: "RS"},
     {name: "Curitiba", state: "PR"},
     {name: "Rio de Janeiro", state: "SP"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
