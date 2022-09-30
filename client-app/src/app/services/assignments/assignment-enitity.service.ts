import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Assignment } from "src/app/models/assignment";

@Injectable()
export class AssignmentEntityService extends EntityCollectionServiceBase<Assignment> {


    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Assignment', serviceElementsFactory);
    }
}