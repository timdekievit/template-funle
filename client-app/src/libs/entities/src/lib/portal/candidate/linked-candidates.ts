import { IBaseLinkedCandidate } from "./base-linked-candidate";

export interface ILinkedCandidates {
    readonly totalDiscount: number;
    readonly discountCurrency: string;
    readonly linkedCandidates: IBaseLinkedCandidate[];
}

export class LinkedCandidates implements ILinkedCandidates {
    readonly totalDiscount: number;
    readonly discountCurrency: string;
    readonly linkedCandidates: IBaseLinkedCandidate[];

    constructor(linkedCandidates: ILinkedCandidates) {
        this.totalDiscount = linkedCandidates.totalDiscount;
        this.discountCurrency = linkedCandidates.discountCurrency;
        this.linkedCandidates = linkedCandidates.linkedCandidates;
    }
}
