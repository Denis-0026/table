import { Direction } from '@app/_enums';
import { ITableParams } from '@app/_models';

export class Filter<T> {
    constructor() { }

    filterData(data: Array<T>, params: ITableParams): [Array<T>, number] {

        if (params.fieldTerms && params.fieldTerms.length > 0 || params.sort) {
            data = data.filter(item => {
                return params.fieldTerms.every(fieldTerm => {
                    const val = item[fieldTerm.key as keyof T] as unknown as string;
                    return val.toString().toLocaleLowerCase().includes(fieldTerm.term.toString().toLocaleLowerCase());
                });
            }).sort((a, b) => {
                const isAsc = params.sort?.direction === Direction.Asc;
                return this.compare(a[params.sort?.key as keyof T] as unknown as string, b[params.sort?.key as keyof T] as unknown as string, isAsc);
            });
        }

        let length = data.length;

        data = data.slice((params.page - 1) * params.pageSise, params.page * params.pageSise)
        return [data, length];
    }

    compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}