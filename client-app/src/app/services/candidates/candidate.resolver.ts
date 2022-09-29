import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, tap } from "rxjs/operators";
import { CandidateEntityService } from "./candidate-entity.service";

@Injectable()
export class CandidatesResolver implements Resolve<boolean> {

    constructor(private candidatesService: CandidateEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        
        return this.candidatesService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.candidatesService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
    
}