export interface IBaseCategory {
  id: number;
  value: string;
}

export class BaseCategory implements IBaseCategory {
  id: number;
  value: string;

  constructor(tag: IBaseCategory) {
    this.id = tag.id;
    this.value = tag.value;
  }
}
