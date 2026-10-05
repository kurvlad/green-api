export interface Error {
    message: string;
}

export interface BaseResponse<Data, Meta extends object = object> {
    data: Data;
    meta: Meta;
    errors: Error[];
}

export type ListResponse<T> = {
    items: T[];
    count?: number;
    group?: string;
};
