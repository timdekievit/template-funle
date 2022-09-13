import { IBaseProposal } from '@funle/entities';
import moment, { MomentInput, Duration } from 'moment';


export interface IBasePortalAssignment {
  id?: number;
  rate: number;
  hours: number;
  description: string;
  city: string;
  title: string;
  customer: string;
  isRead?: boolean;
  startDate: MomentInput;
  endDate: MomentInput;
  withProlongation: boolean;
  favorite?: boolean;
  saved?: boolean;
  potentialMatch?: boolean;
  rejectedReason: string;
  proposalStatus: string;
  interviewLocation: string;
  interviewDate: MomentInput;
  submitDate: MomentInput;
  publicId: string;
  motivation: string;
  notes: string;
  interviewLink: string;
  declinedReason: string;
  digital: boolean;
}

export class BasePortalAssignment implements IBasePortalAssignment {
  id?: number;
  rate: number;
  hours: number;
  description: string;
  city: string;
  title: string;
  customer: string;
  isRead?: boolean;
  startDate: MomentInput;
  endDate: MomentInput;
  withProlongation: boolean;
  favorite?: boolean;
  saved?: boolean;
  potentialMatch?: boolean;
  rejectedReason: string;
  proposalStatus: string;
  interviewLocation: string;
  interviewDate: MomentInput;
  submitDate: MomentInput;
  publicId: string;
  motivation: string;
  notes: string;
  interviewLink: string;
  declinedReason: string;
  digital: boolean;

  constructor(assignment: IBasePortalAssignment) {
    this.id = assignment.id;
    this.rate = assignment.rate;
    this.hours = assignment.hours;
    this.description = assignment.description;
    this.startDate = assignment.startDate ? moment(assignment.startDate).format('DD-MM-YYYY') : undefined;
    this.endDate = assignment.endDate ? moment(assignment.endDate).format('DD-MM-YYYY') : undefined;
    this.submitDate = assignment.submitDate ? moment(assignment.submitDate).format('DD-MM-YYYY') : undefined;
    this.withProlongation = assignment.withProlongation;
    this.city = assignment.city;
    this.title = assignment.title;
    this.customer = assignment.customer;
    this.isRead = assignment.isRead;
    this.favorite = assignment.favorite;
    this.saved = assignment.saved;
    this.potentialMatch = assignment.potentialMatch;
    this.rejectedReason = assignment.rejectedReason;
    this.proposalStatus = assignment.proposalStatus;
    this.interviewDate = assignment.interviewDate ? moment(assignment.interviewDate).format('DD-MM-YYYY HH:mm:ss') : undefined;
    this.interviewLocation = assignment.interviewLocation;
    this.publicId = assignment.publicId;
    this.motivation = assignment.motivation;
    this.notes = assignment.notes;
    this.interviewLink = assignment.interviewLink;
    this.declinedReason = assignment.declinedReason;
    this.digital = assignment.digital;
  }
}