import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AssignmentPortal } from "@funle/entities";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Update } from "@ngrx/entity";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AssignmentDataService extends DefaultDataService<AssignmentPortal> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Assignment', http, httpUrlGenerator);
    }

    // getById(key: string | number): Observable<any> {
    //     console.log('AssignmentDataService called');
    //     return this.http.get('/api/assignments/' + key);
    // }
    
}