import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { PhoneNumberValidator } from '../../validators/phone-number-validator';

@Component({
  selector: 'funle-phonenumber-form',
  templateUrl: './phonenumber-form.component.html',
  styleUrls: ['./phonenumber-form.component.scss'],
})
export class PhoneNumberFormComponent {
  @Output() phoneNumberSubmit = new EventEmitter<string>();

  form = new FormGroup({
    phoneNumber: new FormControl('', PhoneNumberValidator(10)),
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.phoneNumberSubmit.emit(this.form.controls.phoneNumber.value);
    }
  }
}
