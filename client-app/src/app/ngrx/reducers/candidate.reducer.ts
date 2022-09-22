import * as fromCandidates from '../actions/candidate.actions'

export interface CandidateState {
    data: any;
    loaded: boolean;
    loading: boolean;
}

export const initialState: CandidateState = {
    data: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromCandidates.CandidateAction
): CandidateState {

    switch (action.type) {
        case fromCandidates.LOAD_CANDIDATE: {
            return {
                ...state,
                loading: true
            };
        }
        case fromCandidates.LOAD_CANDIDATE_SUCCESS: {
            const data = action.payload;
            console.log(data);
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }
        case fromCandidates.LOAD_CANDIDATE_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;

} 

export const getCandidatesLoading = (state: CandidateState) => state.loading;
export const getCandidatesLoaded = (state: CandidateState) => state.loaded;
export const getCandidates = (state: CandidateState) => state.data;