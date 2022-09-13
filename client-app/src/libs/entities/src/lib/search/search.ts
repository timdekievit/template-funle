export interface IBaseSearch {
    search: string;
    status: number;
    id: number;
    freelancer: boolean;
  }
  
  export class BaseSearch implements IBaseSearch {
    search: string;
    status: number;
    id: number;
    freelancer: boolean;
  
    constructor(search: IBaseSearch) {
      this.search = search.search;
      this.status = search.status;
      this.id = search.id;
      this.freelancer = search.freelancer;
    }
  }