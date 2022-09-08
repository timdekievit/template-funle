import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseAssignment, BasePortalAssignment } from '@funle/entities';

@Component({
  selector: 'funle-portal-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() text: string;
  @Input() type: 'basic' | 'primary' | 'secondary' = 'basic';
  @Input() height: 'full' | 'auto' = 'full';
}
