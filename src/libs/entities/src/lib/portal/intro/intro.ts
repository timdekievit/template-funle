import moment from "moment";
import { MomentInput } from "moment";

export interface IBaseIntro {
    complete: boolean;
    isNew: boolean;
    firstName: string;
    prefix: string;
    lastName: string;
    availability: MomentInput;
    agreedTermsAndConditions?: boolean;
    phoneNumber: string;
    kvkNummer: string;
}

export class BaseIntro implements IBaseIntro {
    complete: boolean;
    isNew: boolean;
    firstName: string;
    prefix: string;
    lastName: string;
    availability: MomentInput;
    agreedTermsAndConditions?: boolean;
    phoneNumber: string;
    kvkNummer: string;

    constructor(intro: IBaseIntro) {
        this.complete = intro.complete;
        this.isNew = intro.isNew;
        this.firstName = intro.firstName;
        this.prefix = intro.prefix;
        this.lastName = intro.lastName;
        this.availability = intro.availability ? moment(intro.availability).format('YYYY-MM-DD') : undefined;
        this.agreedTermsAndConditions = intro.agreedTermsAndConditions;
        this.phoneNumber = intro.phoneNumber;
        this.kvkNummer = intro.kvkNummer;
    }

}
