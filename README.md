[![npm version](https://badge.fury.io/js/nestjs-mongoose-slugfy.svg)](https://badge.fury.io/js/nestjs-mongoose-slugfy)

<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/ninjacoding-primary-logo.svg" alt="NinjaCoding logo" title="NinjaCoding" height="60" />
</a>

# nestjs-mongoose-slugfy

⭐️ Add a star on GitHub: it motivates me a lot!

> Generate unique slugs for your NestJS/Mongoose documents. This module uses slugify to generate slugs.

## Prerequisites

This project was developed
using NodeJS v20.9.0, NPM v10.1.0 or Yarn v1.22.22 and NestJS v10.0.0.

- [Node](http://nodejs.org/) (v20.9.0)
- [NPM](https://npmjs.org/) (v10.1.0)
- [YARN](https://yarnpkg.com/) (v1.22.22)
- [NestJS](https://nestjs.com/) (v10.0.0)

Project dependencies:

- @nestjs/mongoose: ^10.0.4
- mongoose: ^8.2.3
- slugify: ^1.6.6

I do not guarantee backward compatibility with previous versions of NodeJS and NPM.
Any requests are welcome.

## Summary

- [Installation](#installation)
- [Usage](#usage)
    - [In your service](#in-your-service)
    - [Non-unique slugs](#non-unique-slugs)
    - [Parameters](#parameters)
- [Next steps](#next-steps)
- [License](#license)

## Installation

**BEFORE INSTALLING:** please read the [prerequisites](#prerequisites)

Depending on the package manager you prefer, you can install the library with npm or yarn.

```shell
npm install -S nestjs-mongoose-slufy
```

Or if you prefer to use Yarn:

```shell
yarn add nestjs-mongoose-slugfy
```

## Usage

### In your service

```ts
// ...
import { MongooseUniqueSlugfyClass } from 'nestjs-mongoose-slugfy';

// ...

export class ExampleService {

  constructor(
    @InjectModel(Example.name)
    private _exampleModel: Model<ExampleDocument>
  ) {
  }

  // ...
  async create(
    data: ExampleDto
  ): Promise<IRequestQueryResponse<ExampleEntity>> {
    const slugFy = MongooseUniqueSlugfyClass.create<ExampleDocument>(
      this._exampleModel,
    );

    const slug = await slugFy.slugUniqueOf(data.name, {
      fieldNameToCompare: 'slug', // il campo da confrontare
      lower: true,
      trim: true,
    });
    data.slug = slug;
    // ...
  }

  // ...
}
```

### Non-unique slugs

nestjs-mongoose-slugfy also exports:

`import { MongooseSlugfyClass } from 'nestjs-mongoose-slugfy';`

for generating non-unique slugs.
In this case, it is not necessary to pass the field to compare.

Example:

```ts
import { MongooseSlugfyClass, MongooseUniqueSlugfyClass } from 'nestjs-mongoose-slugfy';
// ...
const slugfy = MongooseSlugfyClass.create();
const slug = await slugfy.slugOf('my text', {
  lower: true,
  trim: true,
});
```

### Parameters

The slugOf method accepts the following parameters:

1. `text`: the text to transform into a slug (required)
2. An interface with the following parameters (optional)

```ts
export interface MongooseSlugfyOptsInterface {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
  strict?: boolean;
  locale?: string;
  trim?: boolean;
}
```

The slugUniqueOf method accepts the following parameters:

1. `text`: the text to transform into a slug (required)
2. An interface with the following parameters (required):

```ts
export interface MongooseUniqueSlugfyOptsInterface {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
  strict?: boolean;
  locale?: string;
  trim?: boolean;
  fieldNameToCompare: string;
}
```

you can have more information about these parameters [here](https://www.npmjs.com/package/slugify).

### Next steps

Offer tools for updating documents and managing existing slugs.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licenza Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
This work is distributed under a License <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
Commons Attribution - Share Alike 4.0 International</a>.

<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/emoji-2.png" alt="NinjaCoding Emoji" title="Emoji" height="500" />
</a>
