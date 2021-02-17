import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() enter: EventEmitter<string> = new EventEmitter();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.enter.emit( this.term );
  }
}
