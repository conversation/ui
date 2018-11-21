# UI

[![Build Status](https://travis-ci.com/conversation/ui.svg?branch=master)](https://travis-ci.com/conversation/ui)

This library contains a collection of React components used to build our apps
at The Conversation. It is based on the excellent [Material
UI](https://material-ui.com) library.

## Table of Contents

* [Getting Started](#getting-started)
* [Examples](#examples)
* [Publishing a Release](#publishing-a-release)
* [Licence](#licence)

## Getting Started

You need to wrap all your react components in a top-level `ThemeProvider`
component. This will provide the correct theme to all of the components in this
library.

You will also need to install the typeface packages and import them into your
project.

For example:

```js
import 'typeface-libre-baskerville'
import 'typeface-montserrat'
import 'typeface-noto-sans'

import { Button, ThemeProvider } from '@theconversation/ui'

const App = () => (
  <ThemeProvider>
    <Button>Hello World!</Button>
  </ThemeProvider>
)
```

## Examples

To run the example react app:

```sh
> cd examples/react-app
> npm i
> npm start
```

## Publishing a Release

Tagged releases of this library will be automatically published to NPM by our
build pipeline on Travis CI.

To release a new (major/minor/patch) version, on the master branch:

```sh
> npm version minor
> git push --follow-tags
```

## Licence

This project is licensed under the MIT licence. See the
[LICENCE](https://github.com/conversation/ui/blob/master/LICENCE.md) file for
more details.
