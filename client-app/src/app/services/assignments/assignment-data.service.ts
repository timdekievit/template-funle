import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Assignment } from "src/app/models/assignment";

@Injectable()
export class AssignmentDataService extends DefaultDataService<Assignment> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Assignment', http, httpUrlGenerator);
    }

    // getById(key: string | number): Observable<any> {
    //     console.log('AssignmentDataService called');
    //     return this.http.get('/api/assignments/' + key);
    // }
    
}