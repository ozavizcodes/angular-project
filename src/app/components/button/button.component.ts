import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  implements OnInit {

  @Input() text: string = '' 
  @Output() btnClick = new EventEmitter()
  @Input() color?:any


  constructor() {}

  ngOnInit(): void {}

  onClick() {
    // console.log("add");
    this.btnClick.emit();
  }

}
//ngOninIt 
//ngOnchnages
