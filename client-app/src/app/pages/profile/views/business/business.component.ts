import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseSpecialty, CandidatePortal } from '@funle/entities';
import { KvKValidator } from 'src/app/validators/kvk.validator';
import { FileValidator } from 'src/libs/forms/components/src/validators/file-validator';
import { CandidateEntityService } from 'src/app/services/candidates/candidate-entity.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ThrottlingUtils } from '@azure/msal-common';

@Component({
  selector: 'funle-profile-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class ProfileBusinessComponent implements OnInit, OnDestroy {

  show: boolean = false;
  skills: BaseSpecialty[] = [];
  candidate$: Observable<CandidatePortal>;
  newCandidate: CandidatePortal;
  subcription: Subscription;

  form = new FormGroup({
    kvkNummer: new FormControl('', [Validators.required, KvKValidator(), Validators.pattern('^[0-9]{8}$')]),
    rate: new FormControl('', [Validators.min(0), Validators.max(200)]),
    assignmentSearchRadius: new FormControl('', [Validators.min(0)]),
    hours: new FormControl('', [Validators.min(0), Validators.max(40)]),
    role: new FormControl(''),
    availability: new FormControl(''),
    searching: new FormControl(true),
    fileName: new FormControl('', [FileValidator.fileMaxSize(10500000), FileValidator.fileExtensions(['pdf'])]),
    defaultMotivation: new FormControl('')
  });

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private router: Router, private candidatesService: CandidateEntityService) { }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadCandidates()
    this.setValuesForm()
  }

  private loadCandidates(): void {
    this.candidate$ = this.candidatesService.entities$
    .pipe(
      map(candidates => candidates[0])
    );
  }

  setValuesForm(): void {
    this.subcription = this.candidate$.subscribe(candidate => {
      this.form.controls.kvkNummer.setValue(candidate.kvkNummer)
      this.form.controls.rate.setValue(candidate.rate)
      this.form.controls.assignmentSearchRadius.setValue(candidate.assignmentSearchRadius)
      this.form.controls.hours.setValue(candidate.hours)
      this.form.controls.role.setValue(candidate.role)
      this.form.controls.availability.setValue(candidate.availability)
      this.form.controls.searching.setValue(candidate.searching)
      this.form.controls.fileName.setValue(candidate.fileName)
      // this.form.controls.specialty.setValue(candidate.specialty)
      this.form.controls.defaultMotivation.setValue(candidate.defaultMotivation)
    });

  }

  toPage(page: string): void {
    this.router.navigate([page]);
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

  addSpecialty(skill: BaseSpecialty) {
    // const oldSkills = this.skills;
    // if (skill?.value !== undefined && skill?.value !== null && skill?.value.trim() !== '') {
    //   this.candidateService
    //     .addSkill(skill?.value)
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe(
    //       (res: any) => {
    //         this.skills.push(res)
    //         this.showNotification();
    //         this.form.controls.specialty.setValue('');
    //       },
    //       error => {
    //         if (error.status == 401) {
    //           this.router.navigate(['account']);
    //         } else {
    //           this.skills = oldSkills;
    //         }
    //       }
    //     );
    //   }
  }

  downloadCV(): void {
    // this.candidateService.downloadCv()
    //   .pipe(map(payload => URL.createObjectURL(payload)), takeUntil(this.destroy$))
    //   .subscribe(url => window.open(url, '_blank'));
    
  }

  onFileUpload(files: FileList) {
    // if (!files[0]) {
    //   return;
    // }

    // if (this.form.controls.fileName.valid) {
    //   this.form.markAsDirty();
    //   this.form.controls.fileName.setValue(files[0].name);
    //   this.candidateService
    //     .postCv(files[0])
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe(
    //       () => {
    //         this.showNotification();
    //         this.candidateService
    //           .getSkills()
    //           .pipe(takeUntil(this.destroy$))
    //           .subscribe(
    //             (res: any) => {
    //               console.log('skills');
    //               this.skills = res as BaseSpecialty[];
    //             },
    //             error => {
    //               if (error.status == 401) {
    //                 this.router.navigate(['account']);
    //               }
    //             }
    //           );
    //       },
    //       error => {
    //         if (error.status == 401) {
    //           this.router.navigate(['account']);
    //         }
    //       }
    //     );
    // }    
  }

}
