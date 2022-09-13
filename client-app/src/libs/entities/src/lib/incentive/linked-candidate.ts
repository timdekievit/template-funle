import { BaseIncentive, IBaseIncentive } from "./base-incentive";

export interface ILinkedCandidate extends IBaseIncentive {
    email?: string;
    firstName?: string;
    prefix?: string;
    name?: string;
    phoneNumber?: string;
}

export class LinkedCandidate extends BaseIncentive implements ILinkedCandidate  {
    email?: string;
    firstName?: string;
    prefix?: string;
    name?: string;
    phoneNumber?: string;

    constructor(linkedCandidate: ILinkedCandidate) {
        super(linkedCandidate);

        this.email = linkedCandidate.email;
        this.firstName = linkedCandidate.firstName;
        this.prefix = linkedCandidate.prefix;
        this.name = linkedCandidate.name;
        this.phoneNumber = linkedCandidate.phoneNumber;
    }
}
