

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { filter, finalize, first, map, tap } from "rxjs/operators";
import { loadCandidatesAction } from "./candidate.actions";

@Injectable()
export class CandidatesResolver implements Resolve<boolean> {

    loading = false;
    loaded = false;

    constructor(private store: Store) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

        if (!this.loaded) {
            return this.store.dispatch(new loadCandidatesAction())
            .pipe(
                tap((candidates) => {
                    if (!this.loading) {
                        // this.store.dispatch(loadCandidatesAction)
                        this.loading = true;
                        console.log('loading')
                        console.log(candidates)
                        this.loaded = true;
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );
        }
        
    }
    
}