[![npm version](https://badge.fury.io/js/nestjs-mongoose-slugfy.svg)](https://badge.fury.io/js/nestjs-mongoose-slugfy)

<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/ninjacoding-primary-logo.svg" alt="NinjaCoding logo" title="NinjaCoding" height="60" />
</a>

# nestjs-mongoose-slugfy

⭐️ Aggiungi una stella su GitHub: mi motiva molto!

> Genera slug univoci per i tuoi documenti NestJS/Mongoose. Questo modulo usa slugify per generare slug.

## Pre-requisiti

Questo progetto è stato sviluppato
utilizzando NodeJS v20.9.0, NPM v10.1.0 o Yarn v1.22.22 e NestJS v10.0.0.

- [Node](http://nodejs.org/) (v20.9.0)
- [NPM](https://npmjs.org/) (v10.1.0)
- [YARN](https://yarnpkg.com/) (v1.22.22)
- [NestJS](https://nestjs.com/) (v10.0.0)

Dipendenze di progetto:

- @nestjs/mongoose: ^10.0.4
- mongoose: ^8.2.3
- slugify: ^1.6.6

Non garantisco la retro-compatibilità con versioni precedenti di NodeJS e NPM.
Eventuali richieste sono ben accette.

## Sommario

- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
    - [Nel tuo service](#nel-tuo-service)
    - [Slug non univoci](#slug-non-univoci)
    - [Parametri](#parametri)
- [Prossimi passi](#prossimi-passi)
- [Licenza](#licenza)

## Installazione

**PRIMA DI INSTALLARE:** per favore leggi i [pre-requisiti](#pre-requisiti)

A seconda del package manager che preferisci, puoi installare la libreria con npm o yarn.

```shell
npm install -S nestjs-mongoose-slufy
```

Oppure se preferisci usare Yarn:

```shell
yarn add nestjs-mongoose-slugfy
```

## Utilizzo

### Nel tuo service

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

### Slug non univoci

nestjs-mongoose-slugfy esporta anche:

`import { MongooseSlugfyClass } from 'nestjs-mongoose-slugfy';`

per la generazione di slug non univoci.
In questo caso, non è necessario passare il campo da confrontare.

Esempio:

```ts
import { MongooseSlugfyClass, MongooseUniqueSlugfyClass } from 'nestjs-mongoose-slugfy';
// ...
const slugfy = MongooseSlugfyClass.create();
const slug = await slugfy.slugOf('my text', {
  lower: true,
  trim: true,
});
```

### Parametri

Il metodo `slugOf` accetta i seguenti parametri:

1. `text`: il testo da trasformare in slug (obbligatorio)
2. Un interfaccia con i seguenti parametri (opzionale):

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

Il metodo `slugUniqueOf` accetta i seguenti parametri:

1. `text`: il testo da trasformare in slug (obbligatorio)
2. Un interfaccia con i seguenti parametri (obbligatorio):

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

puoi avere ulteriori informazioni su questi parametri [qui](https://www.npmjs.com/package/slugify).

### Prossimi passi

Offrire strumenti per l'update dei documenti e la gestione di slug già esistenti.

## Licenza

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licenza Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
This work is distributed under a License <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
Commons Attribution - Share Alike 4.0 International</a>.

<a href="https://ninjacoding.it/">
     <img src="https://raw.githubusercontent.com/carminemilieni/ninjacoding-commons/main/emoji-2.png" alt="NinjaCoding Emoji" title="Emoji" height="500" />
</a>
