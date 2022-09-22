import { Injectable } from "@angular/core";
import { PortalCandidateService } from "@funle/api";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import * as candidateActions from '../actions/candidate.actions'


@Injectable()
export class CandidatesEffect {
    constructor(private actions$: Actions, private candidateService: PortalCandidateService) { }

    @Effect()
    loadCandidate$ = this.actions$.pipe(
        ofType(candidateActions.LOAD_CANDIDATE),
        switchMap(() => {
            return this.candidateService.
                get().
                pipe(
                    map(candidate => new candidateActions.LoadCandidateSuccess(candidate)),
                    catchError(error => of(new candidateActions.LoadCandidateFail(error)))
                );
        })
    );

}