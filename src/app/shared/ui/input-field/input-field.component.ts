import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  
  constructor() { }

  @Input() iconImg : string = '';
  @Input() placeholder : string = '';

  ngOnInit(): void {
  }

}
