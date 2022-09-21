import * as fromCandidates from '../actions/candidate.actions'

export interface CandidateState {
    data: any;
    loaded: boolean;
    loading: boolean;
}

export const initialState: CandidateState = {
    data: {
        id: "0d9afa1e-fc1c-42ec-8c99-c94dff84ae51",
        email: "timdekievit@hotmail.com",
        firstName: "Tim",
        prefix: "de",
        lastname: "Kievit",
        searching: null,
        rate: null,
        hours: null,
        role: "Programmer",
        availability: "2022-09-20T15:35:42.8412087",
        phoneNumber: "0681568748",
        city: "Wassenaar",
        fileName: "tim_cv",
        agreedTermsAndConditions: true,
        agreedTermsAndConditionsDate: "2022-09-20T15:35:42.8494231",
        kvkNummer: null,
        assignmentSearchRadius: null,
        discountGuid: "4a562d23-40ef-4fcf-b817-3efef7eeb207",
        whatsapp: null,
        defaultMotivation: "geld"
    },
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
            return {
                ...state,
                loading: false,
                loaded: true
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