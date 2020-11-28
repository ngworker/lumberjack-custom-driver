# AUTHORS SECTION

This section is meant to help log driver authors get started with this template.

> TODO: Remove this section when the repository is completely set up.

## Terraform the repository

To customize the repo and enable some pre-configure tools run the `setup` script in the terminal at your root directory.

The `setup` script will ask for the required information.

```bash
node setup
```

## Replace TODOS

Search across the repository files and solve the TODO comments.

### Files with TODOS

- README.md (here)

> End of AUTHORS SECTION. Delete everything above

# @<organization-hyphen>/<name-hyphen>

<p align="center">
 <img width="40%" height="40%" src="./logo.svg">
</p>

[Logo by Felipe Zambrano](http://instagram.com/octopez)

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
[![<organization-hyphen>](https://img.shields.io/badge/<organization-hyphen>-%40-red)](https://github.com/<organization-hyphen>/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()
[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=flat&logo=github)](https://wallabyjs.com/oss/)

TODO: Modify the description of this driver

<name-capitalize> is a custom log driver for [<organization-hyphen>/lumberjack](https://github.com/<organization-hyphen>/lumberjack). It is used to send logs over SOME protocol.

## Features

TODO: Update the features of this driver

- ✅ Logs to custom log store
- ✅ Unit test coverage
- ✅ Custom Logger
- ✅ Follows Lumberjack Best Practices guide

## Table of Contents

- [Installation](#installation)
- [Compatibility](#compatibility)
- [Usage](#usage)
- [Wallaby.js](#wallaby.js)
- [Contributors](#contributors)

## Installation

<name-capitalize-united> is published as the `@<organization-hyphen>/<name-hyphen>` package.

| Toolchain   | Command                                            |
| ----------- | -------------------------------------------------- |
| Angular CLI | `ng add @<organization-hyphen>/<name-hyphen>`      |
| NPM CLI     | `npm install @<organization-hyphen>/<name-hyphen>` |
| Nx CLI      | `nx add @<organization-hyphen>/<name-hyphen>`      |
| Yarn CLI    | `yarn add @<organization-hyphen>/<name-hyphen>`    |

## Compatibility

`<name-capitalize-united>` has verified compatibility with the following Angular versions.

| Angular version | <name-hyphen> support |
| --------------- | --------------------- |
| 11.0.x          | ✅                    |
| 10.2.x          | ✅                    |
| 10.1.x          | ✅                    |
| 10.0.x          | ✅                    |
| 9.1.x           | ✅                    |
| 9.0.x           | ✅                    |

If the version you are using is not listed, please [raise an issue in our GitHub repository](https://github.com/<organization-hyphen>/<name-hyphen>/issues/new).

## Usage

TODO: Verify that these configurations match your driver configurations.

To start using <name-capitalize-united>, import it in your root or core Angular module along with Lumberjack.

```ts
import { NgModule } from '@angular/core';
import { LumberjackLogLevel, LumberjackModule } from '@ngworker/lumberjack';
import { <name-capitalize-united> } from '@<organization-hyphen>/<name-hyphen>';

@NgModule({
  imports: [
    LumberjackModule.forRoot({
      levels: [LumberjackLogLevel.Verbose],
    }),
    <name-capitalize-united>.forRoot({
      levels: [LumberjackLogLevel.Critical, LumberjackLogLevel.Error],
      // Options
    }),
    // (...)
  ],
  // (...)
})
export class AppModule {}
```

Now you can start using the `LumberjackService` or extend `LumberjackLogger` and they will automatically use the `<name-capitalize-united>`.

## Configuration

TODO: Here it is explained how this custom driver can be configured.

## Wallaby.js

[![Wallaby.js](https://img.shields.io/badge/wallaby.js-powered-blue.svg?style=for-the-badge&logo=github)](https://wallabyjs.com/oss/)

Contributors to this repository are welcome to use the
[Wallaby.js OSS License](https://wallabyjs.com/oss/) to get
test results immediately as you type, and see the results in
your editor right next to your code.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
