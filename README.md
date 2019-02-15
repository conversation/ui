# UI

[![Build Status](https://travis-ci.com/conversation/ui.svg?branch=master)](https://travis-ci.com/conversation/ui)

This library contains a collection of React components used to build our apps
at The Conversation. It is based on the excellent [Material
UI](https://material-ui.com) library. Examples of the available components can
be viewed in our [styleguide](http://styleguide.theconversation.com).

## Table of Contents

* [Getting Started](#getting-started)
* [Server-side Rendering](#server-side-rendering)
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

## Server-side Rendering

`<ThemeProvider>` supports two optional props, `sheetsRegistry` and
`sheetsManager`. These can be used to keep track of the JSS so it can be
rendered inline when doing server side rendering.

You can then call `sheetsRegistry.toString()` to get a string containing the
CSS in order to render the current page server side.

```js
const sheetsRegistry = new SheetsRegistry();
const sheetsManager = new Map();

const App = () => (
  <ThemeProvider sheetsRegistry={sheetsRegistry} sheetsManager={sheetsManager}>
    <Button>Hello World!</Button>
  </ThemeProvider>
)
```

```html
<style type="text/css" id="ssr-styles">${sheetsRegistry.toString()}</style>
```

## Examples

To run the example react app:

```sh
> cd examples/react-app
> npm i
> npm start
```

## Storybook

When working on components, you can run storybook locally:

```sh
make storybook
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
