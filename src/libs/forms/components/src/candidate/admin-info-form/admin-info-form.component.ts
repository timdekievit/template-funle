import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { BaseCandidate, BaseCategory, BaseSpecialty, BaseTag, IBaseSpecialty } from '@funle/entities';
import moment, { Moment } from 'moment';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'funle-admin-info-form',
  templateUrl: './admin-info-form.component.html',
  styleUrls: ['./admin-info-form.component.scss'],
})
export class AdminInfoFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() candidate: BaseCandidate;

  @Output() formChange = new EventEmitter<BaseCandidate>();
  @Output() formSubmit = new EventEmitter<BaseCandidate>();

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    prefix: new FormControl(''),
    name: new FormControl(''),
    hasAccount: new FormControl(false),
    rate: new FormControl(''),
    hours: new FormControl(''),
    role: new FormControl(''),
    availability: new FormControl(''),
    cv: new FormControl(''),
    contacted: new FormControl(false),
    cvApproval: new FormControl(true),
    searching: new FormControl(true),
    specialty: new FormControl(''),
    tag: new FormControl(''),
    phoneNumber: new FormControl(''),
    contactDate: new FormControl(''),
    contactTimeSlot: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl(''),
    freelancer: new FormControl(''),
    whatsapp: new FormControl(''),
    introCompleted: new FormControl(''),
    isActive: new FormControl(''),
  });

  private destroy$ = new Subject<boolean>();

  get disabled(): boolean {
    return this.form.pristine || this.form.invalid;
  }

  get value(): BaseCandidate {
    return new BaseCandidate({ ...this.candidate, ...this.form.value });
  }

  fileName: string;  
  categories: BaseCategory[] = [ 
    new BaseCategory({id: 1, value: 'Other'}),
    new BaseCategory({id: 2, value: 'Analysis'}),
    new BaseCategory({id: 3, value: 'Development'}),
    new BaseCategory({id: 4, value: 'Management'}),
    new BaseCategory({id: 5, value: 'Operations'}),
    new BaseCategory({id: 6, value: 'Security'}), 
    new BaseCategory({id: 7, value: 'Testing'}), 
  ];

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onChange());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.candidate && changes.candidate) {
      if (!this.candidate.fileName && this.fileName) {
        this.candidate.fileName = this.fileName;
      }

      this.form.patchValue(this.candidate, {emitEvent: false});

      if (!this.candidate.availability) {
        this.form.patchValue({ availability: new Date() }, {emitEvent: false});
      }

      if (this.candidate.fileName) {
        this.fileName = this.candidate.fileName;
        this.form.controls.cv.setValue(this.candidate.fileName, {emitEvent: false});
      }
      else if (this.fileName) {
        this.form.controls.cv.setValue(this.fileName, {emitEvent: false});
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onChange(): void {
    if (this.disabled) {
      return;
    }
    const formData = this.value;
    if (this.fileName == formData.cv as any) {
      formData.cv = undefined;
    }
    this.formChange.emit(formData);
  }

  onSubmit(): void {
    if (this.disabled) {
      return;
    }
    const formData = this.value;
    if (this.fileName == formData.cv as any) {
      formData.cv = undefined;
    }
    this.formSubmit.emit(formData);
    this.form.markAsPristine();
  }
}
