import {
  Component,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseCandidate, BaseSpecialty, IBaseSpecialty } from '@funle/entities';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'funle-skills-info-form',
  templateUrl: './skills-info-form.component.html',
  styleUrls: ['./skills-info-form.component.scss'],
})
export class SkillsInfoFormComponent implements OnChanges, OnDestroy {
  // @Input() candidate: BaseCandidate;
  @Input() admin: boolean;
  @Input() specialties: BaseSpecialty[];

  @Output() specialtyAdd = new EventEmitter<BaseSpecialty>();
  @Output() specialtyRemove = new EventEmitter<BaseSpecialty>();


  form = new FormGroup({
    specialty: new FormControl(''),
  });

  edit: boolean = false;

  private destroy$ = new Subject<boolean>();

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.candidate && changes.candidate) {
    //   this.form.patchValue(this.candidate);
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addSpecialty(specialty: any): void {
    if (specialty.value && specialty.value.trim() != '') { 
      const value = new BaseSpecialty({value: specialty.value} as IBaseSpecialty);
      this.specialtyAdd.emit(value);
    }
    this.form.controls.specialty.setValue('');
  }

  removeSpecialty(specialty: BaseSpecialty): void {
    const value = new BaseSpecialty({value: specialty.value, id: specialty.id} as IBaseSpecialty);
    this.specialtyRemove.emit(value);
  }

  onEdit(value: boolean): void {
    this.edit = value;
  }
}
