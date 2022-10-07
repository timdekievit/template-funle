
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, shareReplay, tap } from "rxjs/operators";
import { AssignmentStore } from "./assignmentStore";

@Injectable()
export class AssignmentsResolver implements Resolve<boolean> {

    constructor(private assignmentsStore: AssignmentStore) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

        console.log('resolver called')
        
        return this.assignmentsStore.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        console.log('Assignments not yet loaded')
                        this.assignmentsStore.loadAllAssignments();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
    
}