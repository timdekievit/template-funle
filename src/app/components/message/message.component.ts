import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'funle-portal-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: string;
  @Input() secondMessage: string;
  @Input() buttonText: string;
  @Input() pageClick: string;
  
  @Output() buttonClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(page: string) {
    this.buttonClick.emit(page);
  }
}
