# Design Tokens + Style Dictionary + NextJS

## Contents
* [Installation](#installation)
* [Usage](#usage)


## Installation

```bash
$ yarn // or npm install
```

## Usage
### BUILD
```bash
$ yarn build
```
Generate this:

```
web
  ├── <brandname>
  │   ├── tokens.js
  │   ├── tokens.json
  │   └── tokens.styl
  └── <other-brandname>
      ├── tokens.js
      ├── tokens.json
      └── tokens.styl

```
### DEV
```bash
$ yarn dev
```

```
web/js
✔︎  dist/web/belezanaweb/tokens.js

web/stylus
✔︎  dist/web/belezanaweb/tokens.styl

web/json
✔︎  dist/web/belezanaweb/tokens.json

[nodemon] clean exit - waiting for changes before restart
```
