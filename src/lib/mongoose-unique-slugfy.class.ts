import * as slugify from 'slugify';
import { HydratedDocument, Model } from 'mongoose';
import { MongooseUniqueSlugfyOptsInterface } from './mongoose-unique-slugfy-opts.interface';

export class MongooseUniqueSlugfyClass<
  T extends HydratedDocument<any> = HydratedDocument<any>,
> {
  constructor(private _model: Model<T>) {}

  static create<T extends HydratedDocument<any> = HydratedDocument<any>>(
    model: Model<T>,
  ): MongooseUniqueSlugfyClass<T> {
    return new MongooseUniqueSlugfyClass(model);
  }

  async slugUniqueOf(
    value: string,
    opts?: MongooseUniqueSlugfyOptsInterface,
  ): Promise<string> {
    const { fieldNameToCompare } = opts;

    let res: any,
      slug = slugify.default(value, opts),
      i = 1;
    const baseSlug = slug;

    do {
      res = await this._model
        .findOne({
          [fieldNameToCompare]: slug,
        } as any)
        .exec();
      slugify.default(value, opts);
      if (res) {
        slug = `${baseSlug}-${i}`;
        i++;
      }
    } while (res);

    return slug;
  }
}
