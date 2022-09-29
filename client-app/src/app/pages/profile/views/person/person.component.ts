import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotEmptyValidator } from 'src/app/validators/not-empty.validator';
import { PortalCandidateService } from '@funle/api';
import { HttpClient } from '@angular/common/http';
import { debounceTime, first, map, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { BaseCandidate } from '@funle/entities';
import { Store } from '@ngrx/store';
import { CandidateEntityService } from 'src/app/services/candidates/candidate-entity.service';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'funle-profile-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class ProfilePersonComponent implements OnInit {
  
  show: boolean = false;

  candidate$: Observable<Candidate>;
  newCandidate: Candidate;

  form = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl('', [Validators.required, NotEmptyValidator(), Validators.pattern('^[A-zÀ-ú -]+$')]),
    prefix: new FormControl(''),
    lastname: new FormControl('', [Validators.required, NotEmptyValidator(), Validators.pattern('^[A-zÀ-ú -]+$')]),
    city: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^06[0-9]{8}$')]),
    whatsapp: new FormControl(''),
  });

  constructor(private router: Router, private candidatesService: CandidateEntityService) { }

  private destroy$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {

    // console.log(this.store)

    // this.store.dispatch(new fromStore.LoadCandidate());

    // this.store.select<any>(fromStore.getAllCandidates).subscribe(state => {
    //   console.log(state)
    //   this.candidate = state;
    // })

    this.candidate$ = this.candidatesService.entities$
      .pipe(
        map(candidates => candidates[0])
    );
    
    this.setValuesForm();  
    
    // console.log(this.res);

    // this.form.controls.firstName.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('firstName'));
    // this.form.controls.prefix.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('prefix'));
    // this.form.controls.lastname.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('lastname'));
    // this.form.controls.phoneNumber.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('phoneNumber'));
    // this.form.controls.city.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('city'));
    // this.form.controls.whatsapp.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('whatsapp'));
  
  }

  setValuesForm(): void {
    this.candidate$.subscribe(candidate => {
      this.form.controls.firstName.setValue(candidate.firstName)
      this.form.controls.prefix.setValue(candidate.prefix)
      this.form.controls.lastname.setValue(candidate.lastname)
      this.form.controls.email.setValue(candidate.email)
      this.form.controls.phoneNumber.setValue(candidate.phoneNumber)
      this.form.controls.city.setValue(candidate.city)
      this.form.controls.whatsapp.setValue(candidate.whatsapp)
    });

  }


  onSubmit(): void {
    // this.candidate = {
    //   ...this.candidate,
    //   firstName: this.form.value.firstName,
    //   prefix: this.form.value.prefix,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phoneNumber: this.form.value.phoneNumber,
    //   city: this.form.value.city,
    //   whatsapp: this.form.value.whatsapp
    // }

    // console.log(this.candidate);

    // // this.candidateService.put(this.candidate);
    // this.showNotification()

    this.candidate$.subscribe(candidate => {
      this.newCandidate = {
        ...candidate,
        ...this.form.value
      };
    }).unsubscribe()

    this.candidatesService.update(this.newCandidate);

    this.showNotification();
  }

  showNotification(): void {  
    this.show = true;
    setTimeout(() => this.show = false, 3000);
  }

  // onPropChange(property: string): void {
  //   if (this.form.controls[property].valid) {
  //     this.propChange({ prop: property, candidate: this.form.value });
  //   }
  // }

  // propChange(change: { prop: string; candidate: BaseCandidate }) {
  //   let request = {};
  //   request[change.prop] = change.candidate[change.prop];
  //   this.candidateService
  //     .patch(request as BaseCandidate)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(
  //       () => {
  //         this.show = true;
  //         setTimeout(() => this.show = false, 3000);
  //       },
  //       error => {
  //         if (error.status == 401) {
  //           this.router.navigate(['account']);
  //         }
  //       }
  //     );
  // }

  toPage(page: string): void {
    this.router.navigate([page]);
  }

}
