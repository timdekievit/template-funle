import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CandidatePortal } from "@funle/entities";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CandidatesDataService extends DefaultDataService<CandidatePortal> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Candidate', http, httpUrlGenerator);
    }

    update(update: Update<CandidatePortal>): Observable<any> {
        return this.http.put('/api/candidates/' + update.id, update.changes);
    }
}