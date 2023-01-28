import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

import ConfigurationJson from '../../../assets/configs/table-configuration.json';
 
@Directive({
    selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

    @Input('key') key: any;
    private configuration = ConfigurationJson;
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnChanges() {
        this.setStyle();
    }

    setStyle() {
        let style = this.configuration.find(x => x.code == this.key);
        if (style && style.style && style.style.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", style.style.width);
        }
    }
}