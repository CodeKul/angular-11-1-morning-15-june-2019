import { ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

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

    static asyncVali(c: AbstractControl): Observable<ValidationErrors | null> {
        return Observable.create(em => {
            if (c.value.charAt(0) == 'a' || c.value.charAt(0) == 'A') {
                em.next(null)
            } else {
                em.next({ isA: true })
            }
            em.complete()
        })
    }
}