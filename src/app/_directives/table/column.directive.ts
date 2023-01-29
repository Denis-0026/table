import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

import { Entities } from '@app/_enums';
import { ITableConfig } from '@app/_models';
import brandsConfigurationJson from '../../../assets/configs/table-brands-configuration.json';
import usersConfigurationJson from '../../../assets/configs/table-users-configuration.json';

@Directive({
    selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

    @Input('key') key?: string | number | symbol;
    @Input('type') type?: Entities;

    private configuration: Array<ITableConfig> | undefined;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnChanges() {
        if(this.type && !this.configuration) {
            this.selectEntityType();
        }
        if (this.key) {
            this.setStyle();
        }
    }

    selectEntityType(): void {
        switch (this.type) {
            case Entities.Brand:
                this.configuration = brandsConfigurationJson;
                break;
            case Entities.User:
                this.configuration = usersConfigurationJson;
                break;
            default:
                break;
        }
    }

    setStyle() {
        let propertyConf = this.configuration?.find(x => x.code == this.key as string);
        if (propertyConf && propertyConf.style && propertyConf.style.width) {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", propertyConf.style.width);
        } else {
            this.renderer.setStyle(this.elementRef.nativeElement, "min-width", "200px");
        }
    }
}