import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentPortal } from '@funle/entities';

@Component({
  selector: 'funle-portal-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.scss']
})
export class AssignmentsTableComponent implements OnInit, OnChanges {
  @Output() assignmentSelected = new EventEmitter<string>();
  @Output() showMoreClick = new EventEmitter<string>();

  @Input() assignments: AssignmentPortal[];
  @Input() title: string = 'Opdrachten';
  @Input() subtitle: string;
  @Input() showMoreRow: boolean;
  @Input() showFilter: boolean;

  columns = ['title', 'detail'];
  toggleFilter: boolean;

  data: MatTableDataSource<AssignmentPortal>;

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
    console.log(id);
    this.assignmentSelected.emit(id);
  }

  onShowMore() {
    this.showMoreClick.emit(this.title);
  }
  
  onToggleFilter() {
    this.toggleFilter = !this.toggleFilter;
    this.data.filter = '';
  }
}
