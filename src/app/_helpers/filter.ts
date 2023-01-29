import { ITableParams } from '@app/_models';

export class Filter<T> {
    constructor() { }
    
    filterData(data: Array<T>, params: ITableParams): [Array<T>, number] {
        if (params.fieldTerms && params.fieldTerms.length > 0) {
            data = data.filter(item => {
                return params.fieldTerms.every(fieldTerm => {
                    const val = item[fieldTerm.key as keyof T] as unknown as string;
                    return val.toString().toLocaleLowerCase().includes(fieldTerm.term.toString().toLocaleLowerCase());
                });
            });
        }
        let length = data.length;
        data = data.slice((params.page - 1) * params.pageSise, params.page * params.pageSise)
        return [data, length];
    }
}