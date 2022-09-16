import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseSpecialty } from '@funle/entities';
import { PortalCandidateService } from '@funle/api';
import { KvKValidator } from 'src/app/validators/kvk.validator';
import { FileValidator } from 'src/libs/forms/components/src/validators/file-validator';

@Component({
  selector: 'funle-profile-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class ProfileBusinessComponent implements OnInit {

  show: boolean = false;
  skills: BaseSpecialty[] = [];
  candidate: any;


  form = new FormGroup({
    id: new FormControl(''),
    kvkNummer: new FormControl('', [Validators.required, KvKValidator(), Validators.pattern('^[0-9]{8}$')]),
    rate: new FormControl('', [Validators.min(0), Validators.max(200)]),
    assignmentSearchRadius: new FormControl('', [Validators.min(0)]),
    hours: new FormControl('', [Validators.min(0), Validators.max(40)]),
    role: new FormControl(''),
    availability: new FormControl(''),
    searching: new FormControl(true),
    fileName: new FormControl('', [FileValidator.fileMaxSize(10500000), FileValidator.fileExtensions(['pdf'])]),
    specialty: new FormControl(''),
    defaultMotivation: new FormControl('')
  });

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private router: Router, private candidateService: PortalCandidateService) { }

  ngOnInit(): void {

    this.candidateService.get().subscribe(res => {
      console.log(res);
      this.candidate = res;

      this.form.controls.kvkNummer.setValue(this.candidate.kvkNummer);
      this.form.controls.rate.setValue(this.candidate.rate);
      this.form.controls.assignmentSearchRadius.setValue(this.candidate.assignmentSearchRadius);
      this.form.controls.hours.setValue(this.candidate.hours);
      this.form.controls.role.setValue(this.candidate.role);
      this.form.controls.availability.setValue(this.candidate.availability);
      this.form.controls.searching.setValue(this.candidate.searching);
      this.form.controls.fileName.setValue(this.candidate.fileName);
      this.form.controls.specialty.setValue(this.candidate.specialty);
      this.form.controls.defaultMotivation.setValue(this.candidate.defaultMotivation);
      console.log(this.form);
    });
  }

  toPage(page: string): void {
    this.router.navigate([page]);
  }

  onSubmit(): void {
    this.candidate = {
      ...this.candidate,
      kvkNummer: this.form.value.kvkNummer,
      rate: this.form.value.rate,
      assignmentSearchRadius: this.form.value.assignmentSearchRadius,
      hours: this.form.value.hours,
      role: this.form.value.role,
      availability: this.form.value.availability,
      searching: this.form.value.searching,
      fileName: this.form.value.fileName,
      specialty: this.form.value.specialty,
      defaultMotivation: this.form.value.defaultMotivation
    }

    console.log(this.candidate);

    this.candidateService.put(this.candidate);
    
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
