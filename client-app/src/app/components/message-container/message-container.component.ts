import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'funle-portal-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss'],
})
export class MessageContainerComponent implements OnInit {
  @Input() title: string;
  
  constructor() {}

  ngOnInit(): void {
  }
}
