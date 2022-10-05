import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotEmptyValidator } from 'src/app/validators/not-empty.validator';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { CandidateEntityService } from 'src/app/services/candidates/candidate-entity.service';
import { CandidatePortal } from '@funle/entities';

@Component({
  selector: 'funle-profile-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class ProfilePersonComponent implements OnInit {
  
  show: boolean = false;

  candidate$: Observable<CandidatePortal>;
  newCandidate: CandidatePortal;

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

    this.candidate$ = this.candidatesService.entities$
      .pipe(
        map(candidates => candidates[0])
    );
    
    this.setValuesForm();  

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

  toPage(page: string): void {
    this.router.navigate([page]);
  }

}
