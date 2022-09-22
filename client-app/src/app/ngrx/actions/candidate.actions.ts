import { createAction, props, Action } from '@ngrx/store';

export const LOAD_CANDIDATE = '[Candidate] Load Candidate';
export const LOAD_CANDIDATE_FAIL = '[Candidate] Load Candidate Fail';
export const LOAD_CANDIDATE_SUCCESS = '[Candidate] Load Candidate Success';

export class LoadCandidate implements Action {
    readonly type = LOAD_CANDIDATE
}

export class LoadCandidateFail implements Action {
    readonly type = LOAD_CANDIDATE_FAIL
    constructor(public payload: any) {}
}

export class LoadCandidateSuccess implements Action {
    readonly type = LOAD_CANDIDATE_SUCCESS
    constructor(public payload: any) {}
}

export type CandidateAction = LoadCandidate | LoadCandidateFail | LoadCandidateSuccess;

// export const changeCandidate = createAction(
//     '[Candidate] change Candidate',
//     props<{candidate: any}>
// )