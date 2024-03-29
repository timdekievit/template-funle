import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalCandidateService } from '@funle/api';
import { CandidatePortal } from '@funle/entities';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NotEmptyValidator } from 'src/app/validators/not-empty.validator';

@Component({
  selector: 'funle-profile-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class ProfilePersonComponent implements OnInit {
  
  show: boolean = false;

  candidate: CandidatePortal;
  candidate$: Observable<CandidatePortal>;
  subscription: Subscription;

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl('', [Validators.required, NotEmptyValidator(), Validators.pattern('^[A-zÀ-ú -]+$')]),
    prefix: new FormControl(''),
    lastname: new FormControl('', [Validators.required, NotEmptyValidator(), Validators.pattern('^[A-zÀ-ú -]+$')]),
    city: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^06[0-9]{8}$')]),
    whatsapp: new FormControl(''),
  });

  constructor(private router: Router, private candidateService: PortalCandidateService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.loadCandidates();
    this.setValuesForm()
  }

  loadCandidates() {
    
    this.candidate$ = this.candidateService.getall()
      .pipe(
        map(candidates => candidates[0]),
        tap(candidate => this.candidate = candidate)
      );
  }

  private setValuesForm(): void {
    this.subscription = this.candidate$.subscribe(candidate => {
      this.form.controls.firstName.setValue(candidate.firstName)
      this.form.controls.prefix.setValue(candidate.prefix)
      this.form.controls.lastname.setValue(candidate.lastname)
      this.form.controls.email.setValue(candidate.email)
      this.form.controls.phoneNumber.setValue(candidate.phoneNumber)
      this.form.controls.city.setValue(candidate.city)
      this.form.controls.whatsapp.setValue(candidate.whatsapp)
    })
  }

  onSubmit(): void {
    this.candidate = {
      ...this.candidate,
      firstName: this.form.value.firstName,
      prefix: this.form.value.prefix,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      phoneNumber: this.form.value.phoneNumber,
      city: this.form.value.city,
      whatsapp: this.form.value.whatsapp
    }

    console.log(this.candidate);

    this.candidateService.put(this.candidate);
    this.showNotification()
  }

  showNotification(): void {  
    this.show = true;
    setTimeout(() => this.show = false, 3000);
  }

  toPage(page: string): void {
    this.router.navigate([page]);
  }

}
