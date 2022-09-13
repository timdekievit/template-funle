export interface IBaseAcceptedProposal {
    id: number;
    motivation: string;
    makeMotivationDefault: boolean;
    notes: string;
}

export class BaseAcceptedProposal implements IBaseAcceptedProposal {
    id: number;
    motivation: string;
    makeMotivationDefault: boolean;
    notes: string;

    constructor(accpetedProposal: IBaseAcceptedProposal) {
        this.id = accpetedProposal.id;
        this.motivation = accpetedProposal.motivation
        this.makeMotivationDefault = accpetedProposal.makeMotivationDefault;
        this.notes = accpetedProposal.notes;
    }

}