import { Injectable } from "@angular/core";
import { CandidatePortal } from "@funle/entities";
import { Action, State, StateContext } from "@ngxs/store";
import { getCandidatesAction, updateCandidateAction } from "./candidate.actions";

@State<CandidatePortal>({
    name: 'Candidate'
})
@Injectable()
export class CandidateStore {

    @Action(updateCandidateAction)
    updateCandidate(context: StateContext<CandidatePortal>, action: updateCandidateAction) {
        
        const {name} = action;
        
        if (!name) {
            return
        }

        const state = context.getState();

        context.setState({
            ...state
        })
    }

    @Action(getCandidatesAction)
    getCandidates() {
        
    }

}

