import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validator that requires the control to have a valid phone number.
 * @param minDigits The minimum amount of digits a phone number should have to pass.
 * @usageNotes
 * ```typescript
 * const control = new FormControl('1234', PhoneNumberValidator(10));
 * 
 * console.log(control.errors); // { phoneNumber: { value: '1234', minDigits: 10, actualDigits: 4 } }
 * ```
 * @returns An error map with the `phoneNumber` property if validation fails; otherwise `null`.
 */
export function PhoneNumberValidator(minDigits: number = 10): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const looksLikeAPhoneNumber = /[-+() 0-9]+/.test(control.value);
    const digits = (control.value.match(/[0-9]/g) || []).length;
    return looksLikeAPhoneNumber && digits >= minDigits
      ? null
      : { phoneNumber: { value: control.value, minDigits: minDigits, actualDigits: digits } };
  };
}
