import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { filter, finalize, first, map, tap } from "rxjs/operators";
import { loadAssignmentsAction } from "./assignment.actions";
import { AssignmentState } from "./assignment.state";

// een singleton is hier nodig om te zorgen dat het niet 3 keer wordt geladen.
@Injectable({
    providedIn: 'root'
})
export class AssignmentsResolver implements Resolve<boolean> {

    loading = false;

    constructor(private store: Store, private assignmentState: AssignmentState) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

        if (!this.assignmentState.isLoaded()) {
            return this.store.dispatch(new loadAssignmentsAction())
            .pipe(
                tap((assignments) => {
                    if (!this.loading) {
                        this.loading = true;
                        console.log('loading');
                        console.log(assignments);
                        this.assignmentState.setLoaded(true);
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );
        }
        
    }
    
}