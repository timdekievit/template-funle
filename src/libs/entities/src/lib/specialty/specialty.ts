import moment, { MomentInput } from 'moment';

export interface IBaseSpecialty {
  id: number;
  candidateId?: number;
  value: string;
}

export class BaseSpecialty implements IBaseSpecialty {
  id: number;
  candidateId?: number;
  value: string;

  constructor(specialty: IBaseSpecialty) {
    this.id = specialty.id;
    this.candidateId = specialty.candidateId;
    this.value = specialty.value;
  }
}
