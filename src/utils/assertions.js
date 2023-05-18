export const isNil = (value) => value === null || value === undefined;

export const isString = (value) => typeof value === 'string';

export const isEmptyString = (value) => isNil(value) || value?.toString().trim() === '';

export const isEmptyArray = (value) => isNil(value) || value?.length === 0;
