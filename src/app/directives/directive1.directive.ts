import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[directive1]'
})
export class Directive1Directive {
    constructor(private elementRef: ElementRef) {
        const elem = this.elementRef.nativeElement as HTMLElement;
        // elem.onmouseover = function () {
        //     elem.style.color = 'red';
        // };
        // elem.onmouseout = function () {
        //     elem.style.color = 'black';
        // };
    }

    @HostBinding('style.color') color: string;

    @HostListener('mouseover')
    onmouseover() {
        this.color = 'red';
    }

    @HostListener('mouseout')
    onmouseout() {
        this.color = 'black';
    }
}