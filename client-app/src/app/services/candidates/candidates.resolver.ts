
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PortalCandidateService } from "@funle/api";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoaded, setCandidates, setLoaded} from "./candidates.repository"

@Injectable()
export class CandidatesResolver implements Resolve<any> {

    constructor(private candidateService: PortalCandidateService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{

        console.log('resolver called')

        if(!isLoaded()) {
            return this.candidateService.getall()
            .pipe(
                tap(setCandidates),
                tap(() => setLoaded(true))
            )
        }
    }
    
}