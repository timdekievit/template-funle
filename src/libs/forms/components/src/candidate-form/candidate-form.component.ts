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
import { FileValidator } from '../validators/file-validator';

@Component({
  selector: 'funle-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss'],
})
export class CandidateFormComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('fileUpload') fileUpload: ElementRef;

  @Input() candidate: BaseCandidate;
  @Input() admin: boolean;

  specialties: BaseSpecialty[];

  @Output() formChange = new EventEmitter<BaseCandidate>();
  @Output() formSubmit = new EventEmitter<BaseCandidate>();
  @Output() openSkillsDialg = new EventEmitter<BaseCandidate>();
  @Output() specialtyAdd = new EventEmitter<BaseSpecialty>();
  @Output() specialtyRemove = new EventEmitter<BaseSpecialty>();
  @Output() tagAdd = new EventEmitter<BaseTag>();
  @Output() tagRemove = new EventEmitter<BaseTag>();

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(''),
    prefix: new FormControl(''),
    name: new FormControl(''),
    hasAccount: new FormControl(false),
    rate: new FormControl('', [Validators.required, Validators.min(0), Validators.max(200)]),
    hours: new FormControl('', [Validators.required, Validators.min(1), Validators.max(40)]),
    role: new FormControl(''),
    availability: new FormControl(''),
    cv: new FormControl('', [FileValidator.fileMaxSize(10500000), FileValidator.fileExtensions(['pdf'])]),
    contacted: new FormControl(false),
    cvApproval: new FormControl(true, [Validators.requiredTrue]),
    searching: new FormControl(true),
    specialty: new FormControl(''),
    tag: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.minLength(10),Validators.required]),
    contactDate: new FormControl(''),
    contactTimeSlot: new FormControl(''),
    description: new FormControl(''),
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

  public timeSlots = BaseCandidate.timeSlots;

  fileName: string;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$), debounceTime(2000)).subscribe(() => this.onChange());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (this.candidate && changes.candidate) {
      this.specialties = [...this.candidate.specialties];

      if (!this.candidate.fileName && this.fileName) {
        this.candidate.fileName = this.fileName;
      }
      if (this.candidate.hours === undefined) {
        this.candidate.hours = 1;
      }
      if (this.candidate.rate === undefined) {
        this.candidate.rate = 0;
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

  nextAvailableDay(): Moment {
    const today = moment().day();
    const skipDays = today > 4 ? 8 - today : 1;
    const nextAvailableDay = moment().add(skipDays, 'days');
    return nextAvailableDay;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onChange(): void {
    const formData = this.value;
    if (this.fileName == formData.cv as any) {
      formData.cv = undefined;
    }
    this.formChange.emit(formData);
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
    this.form.markAsDirty();
  }

  addSpecialty(specialty: any): void {
    if (specialty.value && specialty.value.trim() != '') { 
      const value = new BaseSpecialty({candidateId: this.candidate.id, value: specialty.value} as IBaseSpecialty);
      this.specialtyAdd.emit(value);
    }
    this.form.controls.specialty.setValue('');
  }

  removeSpecialty(specialty: BaseSpecialty): void {
    const value = new BaseSpecialty({candidateId: this.candidate.id, value: specialty.value, id: specialty.id} as IBaseSpecialty);
    this.specialtyRemove.emit(value);
  }

  addTag(tag: any): void {
    if (tag.value && tag.value.trim() != '') { 
      const value = new BaseSpecialty({candidateId: this.candidate.id, value: tag.value} as IBaseSpecialty);
      this.tagAdd.emit(value);
    }
    this.form.controls.tag.setValue('');
  }

  removeTag(tag: BaseTag): void {
    const value = new BaseSpecialty({candidateId: this.candidate.id, value: tag.value, id: tag.id} as IBaseSpecialty);
    this.tagRemove.emit(value);
  }


  // TODO: use moment for all dates
  // so we have 1 consistent way of handling dates
  fromTodayFilter = (d: Date | null): boolean => {
    const day = d || new Date();
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return day >= date;
  };

  fromTomorrowFilter = (d: Moment | null): boolean => {
    const date = d || moment();
    const tomorrow = moment();
    const day = date.day();
    return date >= tomorrow && day !== 0 && day !== 6;
  };
}
