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

  res: any;

  constructor(private router: Router, private candidateService: PortalCandidateService) { }

  ngOnInit(): void {

    this.candidateService.get().subscribe(res => {
      console.log(res);
      this.res = res;

      this.form.controls.kvkNummer.setValue(this.res.kvkNummer);
      this.form.controls.rate.setValue(this.res.rate);
      this.form.controls.assignmentSearchRadius.setValue(this.res.assignmentSearchRadius);
      this.form.controls.hours.setValue(this.res.hours);
      this.form.controls.role.setValue(this.res.role);
      this.form.controls.availability.setValue(this.res.availability);
      this.form.controls.searching.setValue(this.res.searching);
      this.form.controls.fileName.setValue(this.res.fileName);
      this.form.controls.specialty.setValue(this.res.specialty);
      this.form.controls.defaultMotivation.setValue(this.res.defaultMotivation);
      console.log(this.form);
    });
  }

  toPage(page: string): void {
    this.router.navigate([page]);
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
