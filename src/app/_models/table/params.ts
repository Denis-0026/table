export interface ITableParams {
    page: number;
    pageSise: number;
    fieldTerms: Array<IFieldTerm>;
}

export interface IFieldTerm {
    key: string | number | symbol;
    term: string;
}