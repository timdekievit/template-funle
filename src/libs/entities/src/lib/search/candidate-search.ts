export interface ICandidateSeach {
    search?: string;
    limit?: number;
    skip?: number;
    categoryId?: number;
    all?: boolean;
    distanceToCity?: string;
    sort?: string;
    sortDescending?: boolean;
}

export class CandidateSearch implements ICandidateSeach {
    search?: string;
    limit?: number;
    skip?: number;
    categoryId?: number;
    all?: boolean;
    distanceToCity?: string;
    sort?: string;
    sortDescending?: boolean;

    constructor(search: ICandidateSeach) {
        this.search = search.search;
        this.limit = search.limit;
        this.skip = search.skip;
        this.categoryId = search.categoryId;
        this.all = search.all;
        this.distanceToCity = search.distanceToCity;
        this.sort = search.sort;
        this.sortDescending = search.sortDescending;
    }
}
