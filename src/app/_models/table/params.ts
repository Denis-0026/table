import { Direction } from "@app/_enums";

export interface ITableParams {
    page: number;
    pageSise: number;
    fieldTerms: Array<IFieldTerm>;
    sort: IFieldSort | null;
}

export interface IFieldSort {
    key: string | number | symbol;
    direction: Direction;
}

export interface IFieldTerm {
    key: string | number | symbol;
    term: string;
}