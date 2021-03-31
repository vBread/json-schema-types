export * from './schema';
export * as Schema from './schema';

export * from './JSONSchema';

export type JSON = string | number | boolean | null | JSON[] | { [key: string]: JSON };
