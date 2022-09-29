import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Candidate } from "src/app/models/candidate";

@Injectable()
export class CandidateEntityService extends EntityCollectionServiceBase<Candidate> {


    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Candidate', serviceElementsFactory);
    }
}