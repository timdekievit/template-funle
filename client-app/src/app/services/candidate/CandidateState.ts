import { Injectable } from "@angular/core";
import { PortalCandidateService } from "@funle/api";
import { CandidatePortal } from "@funle/entities";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { loadCandidatesAction, undoCandidateAction, updateCandidateAction } from "./candidate.actions";

export class CandidateStateModel {
    candidates: CandidatePortal[]
}

@State<CandidateStateModel>({
    name: 'Candidates',
    defaults: {
        candidates: []
    },
})

@Injectable({
    providedIn: 'root'
})
export class CandidateState {

    constructor(private candidateService: PortalCandidateService, private store: Store) {}

    @Action(updateCandidateAction)
    updateCandidate(context: StateContext<CandidateStateModel>, action: updateCandidateAction) {


        const state = context.getState();

        const candidate = state.candidates.find(candidate => candidate.id == action.candidate.id);

        const index = state.candidates.indexOf(candidate);

        let candidates = state.candidates;

        const copyCandidates = candidates.slice(0);

        candidates[index] = action.candidate;

        context.patchState({
            candidates: candidates
        })

        this.candidateService.put(action.candidate).subscribe(
            () => {},
            (err) => {
                console.log(err);
                this.store.dispatch(new undoCandidateAction(copyCandidates))
            }
        )

        console.log(context.getState())
    }

    @Action(undoCandidateAction)
    undoUpdateCandidate(context: StateContext<CandidateStateModel>, action: undoCandidateAction) {
        context.patchState({
            candidates: action.candidates
        })
    }

    @Action(loadCandidatesAction)
    loadCandidates(context: StateContext<CandidateStateModel>) {

        console.log('action not getting here')
        // de retrun zorgt ervoor dat erop de obervable wordt gewacht tot het klaar is.
        return this.candidateService.getall()
        .pipe(
            tap(candidates => {
                console.log(candidates)
                context.setState({
                candidates: candidates
            })
        })
        )
    }


    @Selector()
    static getCandidates(state: CandidateStateModel) {
        return state.candidates
    }

    // @Action(getCandidatesAction)
    // getCandidates() {
        
    // }

}

