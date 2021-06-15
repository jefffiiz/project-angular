import { AbstractControl } from '@angular/forms';
import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appValidate]'
})
export class ValidateDirective implements OnChanges {
    constructor() { }

    errorMessage = {
        required: 'The field is required.',
        pattern: 'The field is not match "{0}"'
    };

    @Input('appValidate') control: AbstractControl;
    @HostBinding('class') calss: string = 'invalid-feedback';
    @HostBinding('innerText') text: string;

    ngOnChanges() {
        if (!this.control) return;
        // Get Error message default
        this.text = this.getErrorMessage();
        // Get Realtime Error message 
        this.control.valueChanges
            .subscribe(() => {
                this.text = this.getErrorMessage();
            });
    }

    // แสดงข้อมูล Error message จาก FormControl
    private getErrorMessage() {
        const control = this.control;
        if (control && control.invalid) {
            const errorKey = Object.keys(control.errors)[0];
            let errorMessage = this.errorMessage[errorKey];
            switch (errorKey) {
                case 'pattern':
                    errorMessage = this.errorMessage[errorKey].replace('{0}', control.errors.pattern.requiredPattern);
                    break;
                case 'message':
                    errorMessage = control.errors[errorKey];
                    break;
            }
            return errorMessage;
        }
    }
}
