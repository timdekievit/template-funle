export interface IBaseLinkedCandidate {
    readonly firstName?: string;
    readonly prefix?: string;
    readonly lastName?: string;
    readonly fullName?: string;
    readonly isComplete: boolean;
}

export class BaseLinkedCandidate implements IBaseLinkedCandidate {
    readonly firstName?: string;
    readonly prefix?: string;
    readonly lastName?: string;
    readonly fullName?: string;
    readonly isComplete: boolean;

    constructor(linkedCandidate: IBaseLinkedCandidate) {
        this.firstName = linkedCandidate.firstName;
        this.prefix = linkedCandidate.prefix;
        this.lastName = linkedCandidate.lastName;
        this.fullName = linkedCandidate.fullName;
        this.isComplete = linkedCandidate.isComplete;
    }
}
