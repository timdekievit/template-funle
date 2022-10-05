import { Injectable } from "@angular/core";
import { CandidatePortal } from "@funle/entities";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";

@Injectable()
export class CandidateEntityService extends EntityCollectionServiceBase<CandidatePortal> {


    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Candidate', serviceElementsFactory);
    }
}