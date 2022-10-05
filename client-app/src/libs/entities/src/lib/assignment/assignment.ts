import { IBaseProposal } from '@funle/entities';
import moment, { MomentInput, Duration } from 'moment';

export enum AssignmentStatus {
  Closed,
  Open,
  New,
}

export interface AssignmentPortal {
  id: string;
  source: string;
  sourceId: string;
  customer: string;
  categoryId?: string;
  proposals: any;
  rate?: number;
  hours?: number;
  role: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  submitDate?: Date;
  withProlongation?: boolean;
  city: string;
  notes: string;
  title: string;
}

export interface IBaseAssignment {
  id?: number;
  publicId: string;
  rate: number;
  hours: number;
  role: string;
  description: string;
  startDate: MomentInput;
  endDate: MomentInput;
  submitDate: MomentInput;
  creationDate: MomentInput;
  withProlongation: boolean;
  city: string;
  notes: string;
  title: string;
  source: string;
  customer: string;
  isRead?: boolean;
  status: AssignmentStatus;
  freelancer: boolean;
  proposals: IBaseProposal[];
  categoryId?: number;
  favorite?: boolean;
  saved?: boolean;
  potentialMatch?: boolean;
  rejectedReason: string;
  proposalStatus: string;
  interviewLocation: string;
  interviewDate: MomentInput;
  distanceFromCandidate?: number;
  exceedsSearchRadius?: boolean;
  numberOfSearchResults?: number;
}

export class BaseAssignment implements IBaseAssignment {
  id?: number;
  publicId: string;
  rate: number;
  hours: number;
  role: string;
  description: string;
  startDate: MomentInput;
  endDate: MomentInput;
  submitDate: MomentInput;
  creationDate: MomentInput;
  withProlongation: boolean;
  city: string;
  notes: string;
  title: string;
  source: string;
  customer: string;
  isRead?: boolean;
  status: AssignmentStatus;
  freelancer: boolean;
  proposals: IBaseProposal[];
  categoryId?: number;
  favorite?: boolean;
  saved?: boolean;
  potentialMatch?: boolean;
  rejectedReason: string;
  proposalStatus: string;
  interviewLocation: string;
  interviewDate: MomentInput;
  distanceFromCandidate?: number;
  exceedsSearchRadius?: boolean;
  numberOfSearchResults?: number;

  static duration(startDate: MomentInput, endDate: MomentInput): Duration {
    if (startDate && endDate) {
      return moment.duration(moment(endDate).diff(moment(startDate)));
    }
  }

  constructor(assignment: IBaseAssignment) {
    this.id = assignment.id;
    this.publicId = assignment.publicId;
    this.rate = assignment.rate;
    this.hours = assignment.hours;
    this.role = assignment.role;
    this.description = assignment.description;
    this.startDate = assignment.startDate ? moment(assignment.startDate).format('YYYY-MM-DD') : undefined;
    this.endDate = assignment.endDate ? moment(assignment.endDate).format('YYYY-MM-DD') : undefined;
    this.submitDate = assignment.submitDate ? moment(assignment.submitDate).format('YYYY-MM-DD') : undefined;
    this.creationDate = assignment.creationDate ? moment(assignment.creationDate).format('YYYY-MM-DD') : undefined;
    this.withProlongation = assignment.withProlongation;
    this.city = assignment.city;
    this.notes = assignment.notes;
    this.title = assignment.title;
    this.source = assignment.source;
    this.isRead = assignment.isRead;
    this.customer = assignment.customer;
    this.status = assignment.status ?? AssignmentStatus.Open;
    this.freelancer = assignment.freelancer;
    this.proposals = assignment.proposals || [];
    this.categoryId = assignment.categoryId;
    this.favorite = assignment.favorite;
    this.saved = assignment.saved;
    this.potentialMatch = assignment.potentialMatch;
    this.rejectedReason = assignment.rejectedReason;
    this.proposalStatus = assignment.proposalStatus;
    this.interviewDate = assignment.interviewDate ? moment(assignment.interviewDate).format('DD-MM-YYYY hh:mm:ss') : undefined;
    this.interviewLocation = assignment.interviewLocation;
    this.distanceFromCandidate = Math.round(assignment.distanceFromCandidate);
    this.exceedsSearchRadius = assignment.exceedsSearchRadius;
    this.numberOfSearchResults = assignment.numberOfSearchResults;
  }

  get duration() {
    return BaseAssignment.duration(this.startDate, this.endDate)?.humanize();
  }
}

export interface IBaseSearchAssignment {
  limit: number;
  skip: number;
  total: number;
  results: IBaseAssignment[];
}

export class BaseSearchAssignment implements IBaseSearchAssignment {
  limit: number;
  skip: number;
  total: number;
  results: IBaseAssignment[];

  constructor(searchAssignment: IBaseSearchAssignment) {
    this.limit = searchAssignment.limit;
    this.skip = searchAssignment.skip;
    this.total = searchAssignment.total;
    this.results = searchAssignment.results.map(assignment => new BaseAssignment(assignment));
  }
}