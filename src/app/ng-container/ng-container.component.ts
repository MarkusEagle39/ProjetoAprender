import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role: "admin", lastlongin: new Date ('2/1/2018')},
    {login: "lia", role: "user", lastlongin: new Date ('4/30/2018')},
    {login: "john", role: "admin", lastlongin: new Date ('4/23/2018')},
    {login: "robin", role: "user", lastlongin: new Date ('2/20/2018')}
  ];

  constructor() { }

  ngOnInit() {
  }

}
