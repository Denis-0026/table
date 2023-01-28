import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

import ConfigurationJson from '../../../assets/configs/table-brands-configuration.json';
 
@Directive({
    selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

    @Input('key') key?: string | number | symbol;

    // TODO
    private configuration = ConfigurationJson;
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnChanges() {
        if(this.key) {
            this.setStyle();
        }
    }

    setStyle() {
        let propertyConf = this.configuration.find(x => x.code == this.key as string);
        if (propertyConf && propertyConf.style && propertyConf.style.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", propertyConf.style.width);
        }
    }
}