import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseSpecialty } from '@funle/entities';
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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:5000/api/candidates/a43d667e-bb17-4870-83ce-0fe1e9a9dc7f').subscribe(res => {
      console.log(res);
      this.res = res;

      this.form.value.kvkNummer = this.res.kvkNummer;
      this.form.value.rate = this.res.rate;
      this.form.value.assignmentSearchRadius = this.res.assignmentSearchRadius;
      this.form.value.hours = this.res.hours;
      this.form.value.role = this.res.role;
      this.form.value.availability = this.res.availability;
      this.form.value.searching = this.res.searching;
      this.form.value.fileName = this.res.fileName;
      this.form.value.specialty = this.res.specialty;
      this.form.value.defaultMotivation = this.res.defaultMotivation;

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
