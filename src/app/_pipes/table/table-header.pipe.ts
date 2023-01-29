import { Pipe, PipeTransform } from '@angular/core';

import ConfigurationJson from '../../../assets/configs/table-brands-configuration.json';

@Pipe({
    name: 'header'
})
export class TableHeaderPipe implements PipeTransform {

    // TODO
    private configuration = ConfigurationJson;

    transform(value: string | number | symbol, args?: any): string {

        let config = this.configuration.find(x => x.code == value);
        if (config) {
            return config.name;
        }
        return value as string;
    }
}