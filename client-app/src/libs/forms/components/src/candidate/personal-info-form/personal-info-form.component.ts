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
import { PhoneNumberValidator } from '../../validators/phone-number-validator';

@Component({
  selector: 'funle-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() candidate: BaseCandidate;
  @Input() admin: boolean;
  @Input() new: boolean;

  @Output() formChange = new EventEmitter<BaseCandidate>();
  @Output() propChange = new EventEmitter<{prop: string, candidate: BaseCandidate}>();

  @Output() formSubmit = new EventEmitter<BaseCandidate>();

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(''),
    prefix: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    hasAccount: new FormControl(false),
    rate: new FormControl(''),
    city: new FormControl(''),
    kvkNummer: new FormControl(''),
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
  });

  private destroy$ = new Subject<boolean>();

  get disabled(): boolean {
    return this.admin ? this.form.pristine : this.form.pristine || this.form.invalid;
  }

  get searching(): boolean {
    return this.form.controls.searching.value;
  }

  get value(): BaseCandidate {
    return new BaseCandidate({ ...this.candidate, ...this.form.value });
  }

  fileName: string;
  edit = false;

  ngOnInit(): void {

    this.form.controls.phoneNumber.setValidators(this.admin ? [] : [Validators.required, PhoneNumberValidator(10)]);

    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onChange());

    this.form.controls.firstName.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('firstName'));
    this.form.controls.prefix.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('prefix'));
    this.form.controls.name.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('lastname'));
    this.form.controls.phoneNumber.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('phoneNumber'));
    this.form.controls.city.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('city'));
    this.form.controls.kvkNummer.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(1000)).subscribe(() => this.onPropChange('kvkNummer'));
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
    const formData = this.value;
    formData.lastname = formData.name;
    if (this.form.controls[property].valid) {
      this.propChange.emit({ prop: property, candidate: formData });
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
    this.edit = false;
  }

  onEdit(value: boolean): void {
    this.edit = value;
  }
}
