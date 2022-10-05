import { IBaseProposal, IBaseTag, ProposalStatus } from '@funle/entities';
import moment, { MomentInput } from 'moment';
import { IBaseSpecialty } from '../specialty/specialty';

export interface IBaseCandidate {
  id?: number;
  email: string;
  firstName: string;
  prefix: string;
  name: string;
  lastname: string;
  hasAccount: boolean;
  rate: number;
  hours: number;
  role: string;
  city: string;
  availability: MomentInput;
  cv: File;
  fileName: string;
  description: string;
  activated: boolean;
  creationDate: MomentInput;
  searching: boolean;
  phoneNumber: string;
  contactDate: MomentInput;
  contactTimeSlot: string;
  contacted: boolean;
  matching: boolean;
  specialties: IBaseSpecialty[];
  tags: IBaseTag[];
  proposals: IBaseProposal[];
  proposalCount: number;
  acceptedProposalCount: number;
  declinedProposalCount: number;
  expiredProposalCount: number;
  createdProposalCount: number;
  complete: boolean;
  categoryId: number;
  agreedTermsAndConditions?: boolean;
  agreedTermsAndConditionsDate?: MomentInput;
  freelancer?: boolean;
  assignmentSearchRadius?: number;
  kvkNummer?: number;

  incentiveId: number;
  candidateId: number;
  isComplete: boolean;
  isActive?: boolean;
  introCompleted?: boolean;

  // From AdminCandidateSearchResultModel
  distance?: number;
  exceedsSearchRadius?: boolean;
  whatsapp?: boolean;
  defaultMotivation: string;
}

export class BaseCandidate implements IBaseCandidate {
  static timeSlots = [
    'Geen specifieke tijd',
    'Tussen 10:00 en 12:00',
    'Tussen 12:00 en 14:00',
    'Tussen 14:00 en 16:00',
    'Tussen 16:00 en 18:00',
  ];

  id?: number;
  email: string;
  firstName: string;
  prefix: string;
  name: string;
  lastname: string;
  hasAccount: boolean;
  rate: number;
  hours: number;
  role: string;
  city: string;
  availability: MomentInput;
  cv: File;
  fileName: string;
  description: string;
  activated: boolean;
  creationDate: MomentInput;
  searching: boolean;
  phoneNumber: string;
  contactDate: MomentInput;
  contactTimeSlot: string;
  contacted: boolean;
  matching: boolean;
  specialties: IBaseSpecialty[];
  tags: IBaseTag[];
  proposals: IBaseProposal[];
  proposalCount: number;
  acceptedProposalCount: number;
  declinedProposalCount: number;
  expiredProposalCount: number;
  createdProposalCount: number;
  complete: boolean;
  categoryId: number;
  agreedTermsAndConditions?: boolean;
  agreedTermsAndConditionsDate?: MomentInput;
  freelancer?: boolean;
  assignmentSearchRadius?: number;
  kvkNummer?: number;

  incentiveId: number;
  candidateId: number;
  isComplete: boolean;
  isActive?: boolean;
  defaultMotivation: string;

  // From AdminCandidateSearchResultModel
  distance?: number;
  exceedsSearchRadius?: boolean;
  whatsapp?: boolean;  
  introCompleted?: boolean;

  constructor(candidate: IBaseCandidate) {
    this.id = candidate.id;
    this.email = candidate.email;
    this.firstName = candidate.firstName;
    this.prefix = candidate.prefix;
    this.name = candidate.name || candidate.lastname;
    this.hasAccount = candidate.hasAccount;
    this.rate = candidate.rate;
    this.hours = candidate.hours;
    this.role = candidate.role;
    this.city = candidate.city;
    this.availability = candidate.availability ? moment(candidate.availability).format('YYYY-MM-DD') : undefined;
    this.cv = candidate.cv;
    this.fileName = candidate.cv?.name ?? candidate.fileName;
    this.description = candidate.description;
    this.activated = candidate.activated;
    this.creationDate = candidate.creationDate ? moment(candidate.creationDate).format('YYYY-MM-DD') : undefined;
    this.searching = candidate.searching;
    this.phoneNumber = candidate.phoneNumber;
    this.contactDate = candidate.contactDate ? moment(candidate.contactDate).format('YYYY-MM-DD') : undefined;
    this.contactTimeSlot = candidate.contactTimeSlot;
    this.contacted = candidate.contacted;
    this.matching = candidate.matching;
    this.specialties = candidate.specialties || [];
    this.tags = candidate.tags || [];
    this.proposals = candidate.proposals || [];
    this.proposalCount = candidate.proposalCount;
    this.acceptedProposalCount = candidate.acceptedProposalCount;
    this.declinedProposalCount = candidate.declinedProposalCount;
    this.expiredProposalCount = candidate.expiredProposalCount;
    this.createdProposalCount = candidate.createdProposalCount;
    this.complete = candidate.complete;
    this.freelancer = candidate.freelancer;
    this.kvkNummer = candidate.kvkNummer;
    this.categoryId = candidate.categoryId;
    this.agreedTermsAndConditions = candidate.agreedTermsAndConditions;
    this.agreedTermsAndConditionsDate = candidate.agreedTermsAndConditionsDate
                                          ? moment(candidate.agreedTermsAndConditionsDate).format('DD-MM-YYYY')
                                          : undefined;
    this.assignmentSearchRadius = candidate.assignmentSearchRadius;

    this.incentiveId = candidate.incentiveId;
    this.isComplete = candidate.isComplete;
    this.candidateId = candidate.candidateId;
    this.distance = candidate.distance;
    this.exceedsSearchRadius = candidate.exceedsSearchRadius;
    this.whatsapp = candidate.whatsapp;
    this.defaultMotivation = candidate.defaultMotivation;
    this.isActive = candidate.isActive;
    this.introCompleted = candidate.introCompleted;
  }

  get fullName(): string {
    if (this.name === undefined && this.firstName === undefined) return '-';
    const firstName = this.firstName === undefined ? '' : this.firstName;
    const prefix = this.prefix == undefined || this.prefix.trim() === '' ? ' ' : ` ${this.prefix.trim()} `;
    const name = this.name === undefined ? '' : this.name;
    return firstName + prefix + name;
  }
}

export interface ICandidateSeachResult {
  limit: number;
  skip: number;
  total: number;
  results: IBaseCandidate[];
}

export interface CandidatePortal {
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

export class CandidateSeachResult implements ICandidateSeachResult {
  limit: number;
  skip: number;
  total: number;
  results: IBaseCandidate[];

  constructor(searchResult: ICandidateSeachResult) {
    this.limit = searchResult.limit;
    this.skip = searchResult.skip;
    this.total = searchResult.total;
    this.results = searchResult.results.map(assignment => new BaseCandidate(assignment));
  }
}
