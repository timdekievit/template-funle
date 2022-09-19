import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseAssignment, BasePortalAssignment } from '@funle/entities';

@Component({
  selector: 'funle-portal-assignments-favorite-table',
  templateUrl: './assignments-favorite-table.component.html',
  styleUrls: ['./assignments-favorite-table.component.scss']
})
export class AssignmentsFavoriteTableComponent implements OnInit, OnChanges {
  @Output() assignmentSelected = new EventEmitter<string>();
  @Output() showMoreClick = new EventEmitter<string>();

  @Input() assignments: any[];
  @Input() title: string = 'Opdrachten';
  @Input() subtitle: string;
  @Input() showMoreRow: boolean;
  @Input() showFilter: boolean;

  columns = ['title', 'status','detail'];
  toggleFilter: boolean;

  data: MatTableDataSource<any>;

  @ViewChild('filterInput', { static: true }) filter: ElementRef;

  ngOnInit(): void {
    console.log(this.assignments);
    this.data = new MatTableDataSource(this.assignments);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.assignments) {
      if (this.data) {
        this.data.data = this.assignments;
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  onClick(id: string) {
    this.assignmentSelected.emit(id);
  }

  onShowMore() {
    this.showMoreClick.emit(this.title);
  }
  
  onToggleFilter() {
    this.toggleFilter = !this.toggleFilter;
    this.data.filter = '';
  }

  status(inputStatus: string): string {
    switch(inputStatus) {
      case 'Rejected':
        return 'Afgewezen';
      case 'Accepted':
        return 'Beoordelen';
      case 'Interview': 
        return 'Intake';
      case 'Submitted':
        return 'Aangeboden';
      default:
        return inputStatus;
    }
  }
}
