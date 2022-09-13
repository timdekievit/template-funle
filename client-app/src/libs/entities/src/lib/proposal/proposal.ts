import { BaseAssignment } from '../assignment/assignment';
import { BaseCandidate } from '../candidate/candidate';
import moment, { MomentInput } from 'moment';

export enum ProposalStatus {
  Created,
  Declined,
  Accepted,
  Submitted,
  Interview,
  Rejected,
  Hired,
  Expired,
}

export interface IBaseProposal {
  id?: number;
  assignmentId: number;
  candidateId: number;
  status: ProposalStatus;
  assignment: BaseAssignment;
  candidate: BaseCandidate;
  done: boolean;
  declinedReason: string;
  rejectedReason: string;
  creationDate: MomentInput;
  submitDate: MomentInput;
  interviewDate: MomentInput;
  interviewTime: string;
  interviewDatetime: string;
  interviewLocation: string;
  interviewLink: string;
  source: string;
  match: boolean;
  matchDate: MomentInput;
  matchNotificationDate: MomentInput;
  favorite: boolean;
  saved: boolean;
  digital: boolean;
  motivation: string;
  notes: string;
  isRead: string;
}

export class BaseProposal implements IBaseProposal {
  static status = ProposalStatus;

  id?: number;
  assignmentId: number;
  candidateId: number;
  status: ProposalStatus;
  assignment: BaseAssignment;
  candidate: BaseCandidate;
  done: boolean;
  declinedReason: string;
  rejectedReason: string;
  creationDate: MomentInput;
  submitDate: MomentInput;
  interviewDate: MomentInput;
  interviewTime: string;
  interviewDatetime: string;
  interviewLocation: string;
  interviewLink: string;
  source: string;
  match: boolean;
  matchDate: MomentInput;
  matchNotificationDate: MomentInput;
  favorite: boolean;
  saved: boolean;
  digital: boolean;
  motivation: string;
  notes: string;
  isRead: string;

  constructor(proposal: IBaseProposal) {
    this.id = proposal.id;
    this.assignmentId = proposal.assignmentId;
    this.candidateId = proposal.candidateId;
    this.status = proposal.status;
    this.assignment = proposal.assignment ? new BaseAssignment(proposal.assignment) : undefined;
    this.candidate = proposal.candidate ? new BaseCandidate(proposal.candidate) : undefined;
    this.done = proposal.done;
    this.rejectedReason = proposal.rejectedReason;
    this.creationDate = proposal.creationDate ? moment(proposal.creationDate).format('YYYY-MM-DD') : undefined;
    this.submitDate = proposal.submitDate ? moment(proposal.submitDate).format('YYYY-MM-DD') : undefined;
    this.interviewDate = proposal.interviewDate ? moment(proposal.interviewDate).format('YYYY-MM-DD') : undefined;
    this.interviewTime = proposal.interviewTime
                          ? proposal.interviewTime
                            : proposal.interviewDate
                              ? proposal.interviewDate.toString().split('T')[1]
                                : undefined;
    this.interviewDatetime = proposal.interviewDate ? proposal.interviewDate.toString() : undefined;
    this.interviewLocation = proposal.interviewLocation;
    this.source = proposal.source;
    this.match = proposal.match;
    this.matchDate = proposal.matchDate;
    this.matchNotificationDate = proposal.matchNotificationDate ? moment(proposal.matchNotificationDate).format('YYYY-MM-DD') : undefined;
    this.favorite = proposal.favorite;
    this.saved = proposal.saved;
    this.digital = proposal.digital;
    this.motivation = proposal.motivation;
    this.notes = proposal.notes;
    this.interviewLink = proposal.interviewLink;
    this.declinedReason = proposal.declinedReason;
    this.isRead = proposal.isRead;
  }
}
