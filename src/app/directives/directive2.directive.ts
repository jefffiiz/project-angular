import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[directive2]'
})
export class Directive2Directive implements OnChanges {

    @Input('directive2') directive2: number;

    constructor(
        private template: TemplateRef<any>,
        private container: ViewContainerRef
    ) {
    }

    ngOnChanges() {
        if ((this.directive2 % 2) == 0) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            this.container.remove();
        }
    }

}
