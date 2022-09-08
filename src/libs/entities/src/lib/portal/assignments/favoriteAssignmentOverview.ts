import { IBaseAssignment } from "../../assignment/assignment";

export interface IBaseFavoriteAssignmentOverview {
    overviewCount: number;
    accepted: IBaseAssignment[];
    declined: IBaseAssignment[];
    rejected: IBaseAssignment[];
    interview: IBaseAssignment[];
    submitted: IBaseAssignment[];
}

export class BaseFavoriteAssignmentOverview implements IBaseFavoriteAssignmentOverview {
    overviewCount: number;
    accepted: IBaseAssignment[];
    declined: IBaseAssignment[];
    rejected: IBaseAssignment[];
    interview: IBaseAssignment[];
    submitted: IBaseAssignment[];

    constructor(favoriteAssignmentOverview: IBaseFavoriteAssignmentOverview) {
        this.overviewCount = favoriteAssignmentOverview.overviewCount;
        this.accepted = favoriteAssignmentOverview.accepted;
        this.declined = favoriteAssignmentOverview.declined;
        this.rejected = favoriteAssignmentOverview.rejected;
        this.interview = favoriteAssignmentOverview.interview;
        this.submitted = favoriteAssignmentOverview.submitted;
    }
}
