# adonis-twilio

[![Version](https://img.shields.io/npm/v/adonis-twilio.svg?style=flat)](https://www.npmjs.com/package/adonis-twilio)
[![Downloads](https://img.shields.io/npm/dt/adonis-twilio.svg?style=flat)](https://www.npmjs.com/package/adonis-twilio)
[![License](https://img.shields.io/npm/l/adonis-twilio.svg?style=flat)](https://www.npmjs.com/package/adonis-twilio)

[Twilio](https://github.com/twilio/twilio-node) Provider for AdonisJs framework.

## Installation

In order to use adonis-twilio

```
npm install adonis-twilio --save
```

## Setup

Once you have installed the provider from the [npm](https://npmjs.org/packages/adonis-twilio), make sure to follow the below steps to setup the provider.

##### bootstrap/app.js

```javascript
const providers = [
  ...,
  'adonis-twilio/providers/TwilioProvider'
]
```

Also, for registering commands.

##### bootstrap/app.js
```javascript
const aceProviders = [
  ...,
  'adonis-twilio/providers/CommandsProvider'
]

const commands = [
  ...,
  'Adonis/Commands/Twilio:Config'
]
```

Also, it is a good practice to setup an alias to avoid typing the complete namespace.

##### bootstrap/app.js
```javascript
const aliases = {
  ...,
  Twilio: 'Adonis/Addons/Twilio'
}
```

Then, for generating a config file.
```bash
./ace twilio:config
```

## Configuration

Adonis Twilio configuration file located at `config/twilio.js`.

## Changelog

[CHANGELOG](CHANGELOG.md)

## Credits

Thanks to the community of [AdonisJs](http://www.adonisjs.com/).

## Copyright and License

Copyright (c) 2016 [Ahsaan Muhammad Yousuf](http://ahsaan.me/), [MIT](LICENSE) License
