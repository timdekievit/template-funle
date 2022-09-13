export interface IBaseIncentiveLink {
    signUpIncentiveLink: string
}

export class BaseIncentiveLink implements IBaseIncentiveLink {
    signUpIncentiveLink: string;

    constructor(incentiveLink: IBaseIncentiveLink){
        this.signUpIncentiveLink = incentiveLink.signUpIncentiveLink;
    }
}