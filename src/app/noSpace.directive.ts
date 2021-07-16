import {Directive, Input} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appNoSpace]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: NoSpaceDirective, multi: true }
    ]
})

export class NoSpaceDirective {
    constructor() { }

    // @Input() appNoSpace=true;

    // private spvalidator = whiteSpace();

    // validate(control: AbstractControl): { [key: number]: any} {
    //     //console.log(this.appSpace);
    //     return this.appNoSpace == false ? null : this.spvalidator(control);
    //     //console.log(control);
    // }
}

// export function whiteSpace(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } => {
//         //console.log(control);
//         let isWhiteSpace = (control.value || '').trim().length === 0;
//         //console.log(control.value);
//         console.log((control.value || '').trim().length);
//         //console.log(this.isWhiteSpace);
//         //let isValid = !isWhiteSpace;   
//         return !isWhiteSpace ? null : { whitespace: true };
//     }
// };