# Port-Available

Simple module which checks if a port is available for use.

No dependencies.

## Install

Install through npm:

```
> npm i @art-of-coding/port-available
```

## Example

```ts
import portAvailable from '@art-of-coding/port-available'

const available = await portAvailable(3003)

if (available) {
  console.log('Port 3003 is available!')
} else {
  console.log('Port 3003 is NOT available!')
}
```

## License

Copyright 2021 Michiel van der Velde.

This software is licensed under [the MIT License](LICENSE).
