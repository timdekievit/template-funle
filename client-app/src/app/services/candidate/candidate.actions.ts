export class updateCandidateAction{
    static readonly type = '[Candidate Page] update candidate';

    constructor(public name: string) {}
}

export class getCandidatesAction{
    static readonly type = '[Candidate Page] get candidates';

    constructor() {}
}