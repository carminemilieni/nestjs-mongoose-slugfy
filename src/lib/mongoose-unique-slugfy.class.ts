import * as slugify from 'slugify';
import { MongooseSlugfyOptsInterface } from './mongoose-slugfy-opts.interface';

export class MongooseUniqueSlugfyClass {
  static create() {
    return new MongooseUniqueSlugfyClass();
  }

  slugOf(value: string, opts?: MongooseSlugfyOptsInterface) {
    slugify.default(value, opts);
  }
}
