export interface IBaseDeclinedProposal {
    id: number;
    declinedReason: string;
}

export class BaseDeclinedProposal implements IBaseDeclinedProposal {
    id: number;
    declinedReason: string;

    constructor(declinedProposal: IBaseDeclinedProposal) {
        this.id = declinedProposal.id;
        this.declinedReason = declinedProposal.declinedReason;
    }
}