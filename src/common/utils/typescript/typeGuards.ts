type Nil = null | undefined;

export class TypeGuard {
    static isString(value: unknown): value is string {
        return typeof value === 'string';
    }

    static isBoolean(value: unknown): value is boolean {
        return typeof value === 'boolean';
    }

    static isNumber(value: unknown): value is number {
        return typeof value === 'number';
    }

    static isUndefined(value: unknown): value is undefined {
        return value === undefined && typeof value === 'undefined';
    }

    static isNull(value: unknown): value is null {
        return value === null;
    }

    static isNil(value: unknown): value is Nil {
        return this.isUndefined(value) || this.isNull(value);
    }

    static isArray(value: unknown): value is unknown[] {
        return Array.isArray(value);
    }

    static isObject(value: unknown): value is boolean {
        return typeof value === 'object';
    }

    static isFunction(value: unknown): value is boolean {
        return value instanceof Function;
    }

    static isStringEmpty(value: unknown): value is boolean {
        return this.isString(value) && !value.length;
    }

    static isArrayEmpty(value: unknown): value is boolean {
        return this.isArray(value) && !value.length;
    }
}

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export const isNumber = (value: unknown): value is number => typeof value === 'number';

export const isUndefined = (value: unknown): value is undefined => value === undefined && typeof value === 'undefined';

export const isNull = (value: unknown): value is null => value === null;

export const isNil = (value: unknown): value is Nil => isNull(value) || isUndefined(value);

export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

export const isObject = (value: unknown): value is boolean => typeof value === 'object';

export const isFunction = (value: unknown): value is boolean => value instanceof Function;

export const isArrayEmpty = (value: unknown): value is boolean => isArray(value) && !value.length;
