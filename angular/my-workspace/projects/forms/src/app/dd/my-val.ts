import { ValidationErrors, AbstractControl } from '@angular/forms';

export class MyValidator {

    static isStartFromA(c: AbstractControl): ValidationErrors | null {
        if (c.value.charAt(0) == 'a' || c.value.charAt(0) == 'A') {
            return null
        } else {
            return {
                isA: true
            }
        }
    }
}