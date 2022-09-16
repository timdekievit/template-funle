import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotEmptyValidator } from 'src/app/validators/not-empty.validator';
import { PortalCandidateService } from '@funle/api';
import { HttpClient } from '@angular/common/http';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BaseCandidate } from '@funle/entities';

@Component({
  selector: 'funle-profile-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class ProfilePersonComponent implements OnInit {
  
  show: boolean = false;

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

  res: any;


  constructor(private router: Router, private candidateService: PortalCandidateService, private http: HttpClient) { }

  private destroy$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    // this.res = this.candidateService.get();
    // console.log(this.res);

    this.candidateService.get().subscribe(res => {
      console.log(res);
      this.res = res;

      this.form.controls.firstName.setValue(this.res.firstName)
      this.form.controls.prefix.setValue(this.res.prefix)
      this.form.controls.lastname.setValue(this.res.lastname)
      this.form.controls.email.setValue(this.res.email)
      this.form.controls.phoneNumber.setValue(this.res.phoneNumber)
      this.form.controls.city.setValue(this.res.city)
      this.form.controls.whatsapp.setValue(this.res.whatsapp)
      // this.form.value.prefix = this.res.prefix;
      // this.form.value.lastname = this.res.lastname;
      // this.form.value.email = this.res.email;
      // this.form.value.phoneNumber = this.res.phoneNumber;
      // this.form.value.city = this.res.city;
      // this.form.value.whatsapp = this.res.whatsapp;

      console.log(this.form);
    });
    // console.log(this.res);

    // this.form.controls.firstName.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('firstName'));
    // this.form.controls.prefix.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('prefix'));
    // this.form.controls.lastname.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('lastname'));
    // this.form.controls.phoneNumber.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('phoneNumber'));
    // this.form.controls.city.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('city'));
    // this.form.controls.whatsapp.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('whatsapp'));
  
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
