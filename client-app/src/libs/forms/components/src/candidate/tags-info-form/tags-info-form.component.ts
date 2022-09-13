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
import { takeUntil } from 'rxjs/operators';
import { BaseCandidate, BaseSpecialty, BaseTag, IBaseSpecialty } from '@funle/entities';
import moment, { Moment } from 'moment';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'funle-tags-info-form',
  templateUrl: './tags-info-form.component.html',
  styleUrls: ['./tags-info-form.component.scss'],
})
export class TagsInfoFormComponent implements OnChanges, OnDestroy {
  @Input() candidate: BaseCandidate;

  @Output() tagAdd = new EventEmitter<BaseTag>();
  @Output() tagRemove = new EventEmitter<BaseTag>();


  form = new FormGroup({
    tag: new FormControl(''),
  });
  edit: boolean = false;

  private destroy$ = new Subject<boolean>();

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.candidate && changes.candidate) {
      this.form.patchValue(this.candidate);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
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

  onEdit(value: boolean): void {
    this.edit = value;
  }
}
