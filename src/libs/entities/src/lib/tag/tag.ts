export interface IBaseTag {
  id: number;
  candidateId?: number;
  value: string;
}

export class BaseTag implements IBaseTag {
  id: number;
  candidateId?: number;
  value: string;

  constructor(tag: IBaseTag) {
    this.id = tag.id;
    this.candidateId = tag.candidateId;
    this.value = tag.value;
  }
}
