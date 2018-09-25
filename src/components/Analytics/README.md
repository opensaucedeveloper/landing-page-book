# Analytics

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Analytics` is used to send statistics of visits to google analytics

## How to use
1- Add following content to import the component:

```js
import Analytics from "@front10/landing-page-book/dist/components/Analytics";
```

2- Put this code into jsx page:
```html
<Analytics idTracking='UA-0000000-1' />
```

## Properties:
| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| idTracking      | `String` | Tracking ID code of your property in google analytics |
| debug      | `Boolean` | If set to true, will output additional feedback to the console. Default `false` |