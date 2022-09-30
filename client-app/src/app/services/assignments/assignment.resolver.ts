import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { AssignmentEntityService } from "./assignment-enitity.service";

@Injectable()
export class AssignmentsResolver implements Resolve<boolean> {

    constructor(private assignmentsService: AssignmentEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        
        return this.assignmentsService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.assignmentsService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
    
}