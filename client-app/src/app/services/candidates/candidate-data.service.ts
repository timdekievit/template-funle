import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Candidate } from "src/app/models/candidate";

@Injectable()
export class CandidatesDataService extends DefaultDataService<Candidate> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Candidate', http, httpUrlGenerator);
    }

    update(update: Update<Candidate>): Observable<any> {
        return this.http.put('/api/candidates/' + update.id, update.changes);
    }
}