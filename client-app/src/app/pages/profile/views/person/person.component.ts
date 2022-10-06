import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotEmptyValidator } from 'src/app/validators/not-empty.validator';
import { PortalCandidateService } from '@funle/api';
import { HttpClient } from '@angular/common/http';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BaseCandidate } from '@funle/entities';
import { CandidateStore } from 'src/app/services/candidateStore';

@Component({
  selector: 'funle-profile-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class ProfilePersonComponent implements OnInit {
  
  show: boolean = false;

  candidate: any;

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

  constructor(private router: Router, private candidateStore: CandidateStore) { }

  private destroy$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.candidateStore.getCandidates().subscribe(res => {
      console.log(res);
      this.candidate = res[0];

      this.form.controls.firstName.setValue(this.candidate.firstName)
      this.form.controls.prefix.setValue(this.candidate.prefix)
      this.form.controls.lastname.setValue(this.candidate.lastname)
      this.form.controls.email.setValue(this.candidate.email)
      this.form.controls.phoneNumber.setValue(this.candidate.phoneNumber)
      this.form.controls.city.setValue(this.candidate.city)
      this.form.controls.whatsapp.setValue(this.candidate.whatsapp)

      console.log(this.form);
    });

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

    // this.candidateService.put(this.candidate);
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
