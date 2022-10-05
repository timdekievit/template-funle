import { Injectable } from "@angular/core";
import { AssignmentPortal } from "@funle/entities";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";

@Injectable()
export class AssignmentEntityService extends EntityCollectionServiceBase<AssignmentPortal> {


    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Assignment', serviceElementsFactory);
    }
}