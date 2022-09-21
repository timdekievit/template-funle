import * as fromCandidates from './candidate.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CandidateState {
    candidate: fromCandidates.CandidateState
}

export const reducers: ActionReducerMap<CandidateState> = {
    candidate: fromCandidates.reducer
};

export const getCandidatesState = createFeatureSelector<CandidateState>('candidates')

export const getCandidateState = createSelector(getCandidatesState, (state: CandidateState) => state.candidate);

export const getAllCandidates = createSelector(getCandidateState, fromCandidates.getCandidates);
export const getCandidatesLoaded = createSelector(getCandidateState, fromCandidates.getCandidatesLoaded);
export const getCandidatesLoading = createSelector(getCandidateState, fromCandidates.getCandidatesLoading);