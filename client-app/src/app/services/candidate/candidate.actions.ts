import { CandidatePortal } from "@funle/entities";

export class updateCandidateAction{
    static readonly type = '[Candidate Page] update candidate';

    constructor(public candidate: CandidatePortal) {
        console.log("update action ran")
    }
}

export class loadCandidatesAction{
    static readonly type = '[Candidates API] load candidates';

    constructor() {console.log("load candidates action ran")}
}