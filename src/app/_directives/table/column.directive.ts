import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

import { ITableConfig } from '@app/_models';
import ConfigurationJson from '../../../assets/configs/table-configuration.json';

@Directive({
    selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

    @Input('key') key?: string | number | symbol;

    private configuration: Array<ITableConfig> | undefined;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnChanges() {
        if (this.key) {
            this.setStyle();
        }
    }

    setStyle() {
        this.configuration = ConfigurationJson;
        let propertyConf = this.configuration?.find(x => x.code == this.key as string);
        if (propertyConf && propertyConf.style && propertyConf.style.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", propertyConf.style.width);
        } else {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", "200px");
        }
    }
}