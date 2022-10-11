import { CandidatePortal } from "@funle/entities";

// export class updateCandidateAction{
//     static readonly type = '[Candidate Page] update candidate';

//     constructor(public candidate: CandidatePortal) {
//         console.log("update action ran")
//     }
// }

export class loadAssignmentsAction {
    static readonly type = '[Assignments API] load assignments';

    constructor() {console.log("load assignments action ran")}
}