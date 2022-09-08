export interface IBaseIncentive {
    incentiveId: number;
    candidateId: number;
    isComplete: boolean;
}

export class BaseIncentive implements IBaseIncentive {
    incentiveId: number;
    candidateId: number;
    isComplete: boolean;

    constructor(incentive: IBaseIncentive) {
        this.incentiveId = incentive.incentiveId;
        this.candidateId = incentive.candidateId;
        this.isComplete = incentive.isComplete;
    }
}
