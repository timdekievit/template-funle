import { Injectable } from "@angular/core";
import { PortalAssignmentService } from "@funle/api";
import { AssignmentPortal } from "@funle/entities";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class AssignmentStore {

    private subject = new BehaviorSubject<AssignmentPortal[]>([]);

    private loadedSubject = new BehaviorSubject<boolean>(false);

    assignments$: Observable<AssignmentPortal[]> = this.subject.asObservable();

    loaded$: Observable<boolean> = this.loadedSubject.asObservable();

    constructor(private portalAssignmentService: PortalAssignmentService) {
        console.log('constructeur called')
    }

    loadAllAssignments() {

        this.portalAssignmentService.getAll().pipe( 
            tap(assignments => {
                console.log(assignments)
                this.subject.next(assignments)
                this.loadedSubject.next(true)}),  
        ).subscribe()

    }

    getAssignmentsWithProposals(): Observable<AssignmentPortal[]> {
        return this.assignments$
        .pipe(
            map(assignments => assignments.filter(assignment => assignment.proposals.length > 0))
        )
    }

    isLoaded(): boolean {
        return this.loadedSubject.getValue()
    }

}