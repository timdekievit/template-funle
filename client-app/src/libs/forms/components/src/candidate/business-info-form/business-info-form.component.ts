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
import { BaseCandidate, BaseSpecialty, BaseTag, IBaseSpecialty } from '@funle/entities';
import moment, { Moment } from 'moment';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FileValidator } from '../../validators/file-validator';

@Component({
  selector: 'funle-business-info-form',
  templateUrl: './business-info-form.component.html',
  styleUrls: ['./business-info-form.component.scss'],
})
export class BusinessInfoFormComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('fileUpload') fileUpload: ElementRef;

  @Input() candidate: BaseCandidate;
  @Input() admin: boolean;

  @Output() formChange = new EventEmitter<BaseCandidate>();
  @Output() propChange = new EventEmitter<{prop: string, candidate: BaseCandidate}>();
  @Output() fileUploaded = new EventEmitter<File>();
  

  @Output() formSubmit = new EventEmitter<BaseCandidate>();

  edit: boolean = false;

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    prefix: new FormControl(''),
    name: new FormControl(''),
    hasAccount: new FormControl(false),
    rate: new FormControl('', [Validators.min(0), Validators.max(200)]),
    assignmentSearchRadius: new FormControl('', [Validators.min(0)]),
    hours: new FormControl('', [Validators.min(0), Validators.max(40)]),
    role: new FormControl(''),
    availability: new FormControl(''),
    cv: new FormControl('', [FileValidator.fileMaxSize(10500000), FileValidator.fileExtensions(['pdf'])]),
    contacted: new FormControl(false),
    cvApproval: new FormControl(true, [Validators.requiredTrue]),
    searching: new FormControl(true),
    specialty: new FormControl(''),
    tag: new FormControl(''),
    phoneNumber: new FormControl(''),
    contactDate: new FormControl(''),
    contactTimeSlot: new FormControl(''),
    description: new FormControl(''),
    defaultMotivation: new FormControl(''),
  });

  private destroy$ = new Subject<boolean>();

  get disabled(): boolean {
    return this.form.pristine || this.form.invalid;
  }

  get searching(): boolean {
    return this.form.controls.searching.value;
  }

  get value(): BaseCandidate {
    return new BaseCandidate({ ...this.candidate, ...this.form.value });
  }

  fileName: string;  

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onChange());

    this.form.controls.searching.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('searching'));
    this.form.controls.role.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('role'));
    this.form.controls.assignmentSearchRadius.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('assignmentSearchRadius'));
    this.form.controls.rate.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('rate'));
    this.form.controls.hours.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('hours'));
    this.form.controls.availability.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('availability'));
    this.form.controls.defaultMotivation.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('defaultMotivation'));
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

  onPropChange(property: string): void {
    if (this.form.controls[property].valid) {
      this.propChange.emit({prop: property, candidate: this.value});
    }
  }

  onSubmit(): void {
    if (this.disabled && !this.admin) {
      return;
    }
    const formData = this.value;
    if (this.fileName == formData.cv as any) {
      formData.cv = undefined;
    }
    this.formSubmit.emit(formData);
    this.form.markAsPristine();
  }

  onFileUpload(files: FileList): void {
    if (!files[0]) {
      return;
    }

    this.form.controls.cv.setValue(files[0]);
    if (this.form.controls.cv.valid) {
      this.form.markAsDirty();
      this.fileUploaded.emit(this.value.cv);
    }
  }

  onEdit(value: boolean): void {
    this.edit = value;
  }
}
