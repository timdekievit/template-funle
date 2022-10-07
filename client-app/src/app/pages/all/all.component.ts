import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PortalAssignmentService } from "@funle/api";
import { AssignmentPortal } from "@funle/entities";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AssignmentStore } from "src/app/services/assignments/assignmentStore";

@Component({
    selector: 'funle-portal-dashboard',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss'],
  })
  export class AllComponent {
    assignments$: Observable<AssignmentPortal[]>;
    nothingFound = true;
    nothingFoundMessage =
    'Hmm vreemd we hebben op dit moment geen opdrachten die passen bij jou profiel... We doen ons best om zo veel mogelijk opdrachtgevers aan te sluiten op Funle zodat we voor iedereen mooie opdrachten hebben.';
    // somethingWentWrong = true;

    constructor(private router: Router, private route: ActivatedRoute, private assignmentStore: AssignmentStore) {}

    ngOnInit(): void {
      this.getAssignments()
    }

    private getAssignments() {
      this.assignments$ = this.assignmentStore.assignments$
    }

    onAssignmentSelected(id: string) {
      this.router.navigate([id], { relativeTo: this.route });
    }

    toPage(page: string) {
      this.router.navigate([page]);
    }

  }