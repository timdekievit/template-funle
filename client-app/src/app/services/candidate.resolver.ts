
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, map, shareReplay, tap } from "rxjs/operators";
import { CandidateStore } from "./candidateStore";

@Injectable()
export class CandidatesResolver implements Resolve<boolean> {

    constructor(private candidatesStore: CandidateStore) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

        console.log('resolver called')
        
        return this.candidatesStore.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        console.log('Candidates not yet loaded')
                        this.candidatesStore.loadAllCandidates();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );
    }
    
}