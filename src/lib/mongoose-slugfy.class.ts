import * as slugify from 'slugify';
import { MongooseSlugfyOptsInterface } from './mongoose-slugfy-opts.interface';

export class MongooseSlugfyClass {
  static create() {
    return new MongooseSlugfyClass();
  }

  slugOf(value: string, opts?: MongooseSlugfyOptsInterface): string {
    return slugify.default(value, opts);
  }
}
