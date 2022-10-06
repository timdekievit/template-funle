import { Injectable } from "@angular/core";
import { PortalCandidateService } from "@funle/api";
import { CandidatePortal } from "@funle/entities";
import { BehaviorSubject, Observable } from "rxjs";
import { first, tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class CandidateStore {

    private subject = new BehaviorSubject<CandidatePortal[]>([]);

    candidates$: Observable<CandidatePortal[]> = this.subject.asObservable();

    constructor(private portalCandidateService: PortalCandidateService) {}



    getCandidates(): Observable<CandidatePortal[]> {
        if (this.subject.value.length == 0) {
            return this.candidates$.pipe(
                tap(() => this.portalCandidateService.getall()),
                tap(candidates => this.subject.next(candidates)),
                first()
            )
            
        }
        else {
            return this.candidates$
        }

    }
}