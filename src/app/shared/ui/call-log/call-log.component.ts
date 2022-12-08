import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-call-log',
  templateUrl: './call-log.component.html',
  styleUrls: ['./call-log.component.scss']
})
export class CallLogComponent implements OnInit {

  constructor() { }

  @Input() content : any = {};
  
  ngOnInit(): void {
  }

}
