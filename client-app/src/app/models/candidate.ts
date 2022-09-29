
export interface Candidate {
    id: string;
    email: string;
    firstName: string;
    prefix: string;
    lastname: string;
    searching?: boolean;
    rate?: number;
    hours?: number;
    role: string;
    availability?: Date;
    phoneNumber: string;
    city: string;
    fileName: string;
    agreedTermsAndConditions?: boolean;
    areedTermsAndConditionsDate?: Date;
    kvkNummer?: number;
    assignmentSearchRadius?: number;
    discountGuid: string;
    whatsapp?: boolean;
    defaultMotivation: string;
  }