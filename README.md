# AUTHORS SECTION

This section is meant to help `driver` authors with their first steps using this template.

> TODO: Remove this section when the repository is completely setup.

## Terraform the repository

To customize the repo and enable some pre-configure tools run `AUTHOR_SETUP` script in the terminal at your root directory.

Use the name of your driver instead of `lumberjack-custom-driver` in the above script.

The name of the driver should be in hyphen-case. For example, `lumberjack-supersonic-driver`.

```bash
node AUTHOR_SETUP.js lumberjack-custom-driver
```

## Replace TODOS

Search across the repository files and attend the TODO comments with steps to perform.

- README.md (here)

## Rename root rename root folder

Manually rename the root folder of your project to the name of the driver. (same as name used in script)

> End of AUTHORS SECTION. Delete everything above

<p align="center">
 <img width="40%" height="40%" src="./logo.svg">
</p>

[Logo by Felipe Zambrano](http://instagram.com/octopez)

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngworker](https://img.shields.io/badge/ngworker-%40-red)](https://github.com/ngworker/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> This an awesome <name-capitalize> 🚀

`<name-capitalize>` is a custom log driver for [ngworker/lumberjack](https://github.com/ngworker/lumberjack). It is used to send logs over SOME protocol.

## Features

- ✅ Logs to custom log store
- ✅ Unit test coverage
- ✅ LogCreators Utils
- ✅ Follows Lumberjack Best Practices guide

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install @ngworker/lumberjack @ngworker/<name-hyphen>`

### Yarn

`yarn add @ngworker/lumberjack @ngworker/<name-hyphen>`

## Compatibility

`<name-capitalize-united>` has tested compatibility with the following Angular versions.

> If the version you are using is not listed, please rise an issue. This list only covers tested versions.

| Angular  | Support |
| -------- | ------- |
| > 10.1.x | ✅      |
| > 10.0.x | ✅      |

## Usage

TODO: Verify that this configurations match your driver configurations.

To start using this app just import it in your application root module.

```typescript
...,
LumberjackModule.forRoot({
  //options
}),
<name-capitalize-united>Module.forRoot({
  //options
}),
...,
```

And now you can start using the lumberjack service and it will automatically use the `<name-capitalize-united>`.

## Configuration

TODO: Here it is explained how this custom driver can be configured.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
