import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-send-input',
  templateUrl: './send-input.component.html',
  styleUrls: ['./send-input.component.scss']
})
export class SendInputComponent implements OnInit {

  constructor() { }

  @Input() firstIcon : string = '';
  @Input() secondIcon : string = '';
  @Input() placeholder : string = '';

  ngOnInit(): void {
  }

}
