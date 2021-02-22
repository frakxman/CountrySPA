import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Input() placeholder = '';

  @Output() enter: EventEmitter<string> = new EventEmitter();
  @Output() debounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime( 300 )
      )
      .subscribe( value => this.debounce.emit( value ) );
  }

  search(): void {
    this.enter.emit( this.term );
  }

  keyPressed(): void {
    this.debouncer.next( this.term );
  }
}
