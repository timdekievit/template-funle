import { MomentInput } from 'moment';
import { IBaseCandidate } from '../candidate/candidate';

export interface IBaseAction {
  id: number;
  typeId: number;
  type?: { id: number; name: string };

  description?: string;
  dueDate?: MomentInput;
  creationDate?: MomentInput;

  candidateId: number;
  candidate?: IBaseCandidate;

  notes?: string;
  completedOn?: MomentInput;
  completedById?: number;
  completedBy?: IBaseCandidate;
}

export interface IBaseActionPage {
  limit: number;
  skip: number;
  total: number;
  results: IBaseAction[];
}

export class BaseAction implements IBaseAction {
  id: number;
  typeId: number;
  type?: { id: number; name: string };

  description?: string;
  dueDate?: MomentInput;
  creationDate?: MomentInput;

  candidateId: number;
  candidate?: IBaseCandidate;

  notes?: string;
  completedOn?: MomentInput;
  completedById?: number;
  completedBy?: IBaseCandidate;

  constructor(action: IBaseAction) {
    this.id = action.id;
    this.typeId = action.typeId;
    this.type = action.type;

    this.description = action.description;
    this.dueDate = action.dueDate;
    this.creationDate = action.creationDate;

    this.candidateId = action.candidateId;
    this.candidate = action.candidate;

    this.notes = action.notes;
    this.completedOn = action.completedOn;
    this.completedById = action.completedById;
    this.completedBy = action.completedBy;
  }
}

export class BaseActionPage implements IBaseActionPage {
  limit: number;
  skip: number;
  total: number;
  results: IBaseAction[];

  constructor(searchResult: IBaseActionPage) {
    this.limit = searchResult.limit;
    this.skip = searchResult.skip;
    this.total = searchResult.total;
    this.results = searchResult.results.map(action => new BaseAction(action));
  }
}
