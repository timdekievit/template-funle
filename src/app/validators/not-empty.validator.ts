import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { replace } from "ramda";

export function NotEmptyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        var value = removeInvalidChars(control.value);
        return value != '' ? null : { notempty: { value: control.value, message: 'Not Empty' } };
    };

    function removeInvalidChars(value): string {
        return value.replaceAll('_', '')
                    .replaceAll('-', '')
                    .replaceAll('^', '')
                    .replaceAll('`', '')
                    .replaceAll('[', '')
                    .replaceAll(']', '')
                    .replaceAll('\\', '')
                    .trim();
    }
  }