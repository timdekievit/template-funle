import moment from "moment";
import { MomentInput } from "moment";
import { match, mathMod } from "ramda";
import { BaseCandidate } from "../candidate/candidate";

export interface IBaseMatching {
  id: number;
  contactPerson: string;
  prio: number;
  checked: boolean;
  candidateId: number;
  created: MomentInput;
  lastMatchDate: MomentInput;
  candidate: BaseCandidate;
  notes: string;
  totalLikes: number;
  totalMatches: number;
}

export class BaseMatching implements IBaseMatching {
  id: number;
  contactPerson: string;
  prio: number;
  checked: boolean;
  candidateId: number;
  created: MomentInput;
  lastMatchDate: MomentInput;
  candidate: BaseCandidate;
  notes: string;
  totalLikes: number;
  totalMatches: number;

  constructor(matching: IBaseMatching) {
    this.id = matching.id;
    this.contactPerson = matching.contactPerson;
    this.prio = matching.prio;
    this.checked = matching.checked;
    this.candidateId = matching.candidateId;
    this.created = matching.created ? moment(matching.created).format('DD-MM-YYYY') : undefined;
    this.lastMatchDate = matching.lastMatchDate ? moment(matching.lastMatchDate).format('DD-MM-YYYY') : undefined;
    this.notes = matching.notes;
    this.candidate = matching.candidate ? new BaseCandidate(matching.candidate) : undefined;
    this.totalLikes = matching.totalLikes;
    this.totalMatches = matching.totalMatches;
  }
}
