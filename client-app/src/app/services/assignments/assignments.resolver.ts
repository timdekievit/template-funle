
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PortalAssignmentService } from "@funle/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoaded, setAssignments, setLoaded} from "./assignments.repository"

@Injectable()
export class AssignmentsResolver implements Resolve<any> {

    constructor(private assignmentsService: PortalAssignmentService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{

        console.log('resolver called')

        if(!isLoaded()) {
            return this.assignmentsService.getAll()
            .pipe(
                tap(setAssignments),
                tap(() => setLoaded(true))
            )
        }
    }
    
}