import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent";

  btnDisabled = true;

  colors = ['primary' , 'accent', 'warn', '']
  idx = 0;

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      this.idx = (this.idx+1) % this.colors.length
    }, 500);
  }

}
