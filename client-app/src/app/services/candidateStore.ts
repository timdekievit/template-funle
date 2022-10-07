import { Injectable } from "@angular/core";
import { PortalCandidateService } from "@funle/api";
import { CandidatePortal } from "@funle/entities";
import { BehaviorSubject, from, Observable } from "rxjs";
import { shareReplay, tap } from "rxjs/operators";
import { LoadingService } from "./loadingService";


@Injectable({
    providedIn: 'root'
})
export class CandidateStore {

    private subject = new BehaviorSubject<CandidatePortal[]>([]);

    private loadedSubject = new BehaviorSubject<boolean>(false);

    candidates$: Observable<CandidatePortal[]> = this.subject.asObservable();

    loaded$: Observable<boolean> = this.loadedSubject.asObservable();

    constructor(private portalCandidateService: PortalCandidateService, private loadingService: LoadingService) {
        console.log('constructeur called')
     }



    loadAllCandidates() {

        this.portalCandidateService.getall().pipe( 
            tap(candidates => {
                console.log(candidates)
                this.subject.next(candidates)
                this.loadedSubject.next(true)}),  
        ).subscribe()

        // this.loadingService.showLoaderUntilCompleted(loadCandidates$).subscribe()

    }

    getCandidatesObservable() {
        return this.candidates$
    }
}
