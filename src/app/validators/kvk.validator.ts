import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function KvKValidator(): ValidatorFn {
    const blackListedKvkNumbers = [
        '00000000',
        '1111111',
        '22222222',
        '33333333',
        '44444444',
        '55555555',
        '66666666',
        '77777777',
        '88888888',
        '99999999',
        '12345678',
        '87654321',
        '01234567',
        '76543210',
    ];
    
    return (control: AbstractControl): ValidationErrors | null => {
        var value = false;
        for (let index = 0; index < blackListedKvkNumbers.length; index++) {
            const val = blackListedKvkNumbers[index];
            value = control.value != val;
            if (!value) break;
        }
        return value ? null : { invalid: { value: control.value, message: 'invalid' } };
    };    
  }