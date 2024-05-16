export interface MongooseUniqueSlugfyOptsInterface {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
  strict?: boolean;
  locale?: string;
  trim?: boolean;
  fieldNameToCompare: string;
}
