# UI

[![Build Status](https://travis-ci.com/conversation/ui.svg?branch=master)](https://travis-ci.com/conversation/ui)

This library contains a collection of React components used to build our apps
at The Conversation. It is based on the excellent [Material
UI](https://material-ui.com) library. Examples of the available components can
be viewed in our [styleguide](http://styleguide.theconversation.com).

## Table of Contents

* [Usage](#usage)
* [Developing](#developing)
* [Server-side Rendering](#server-side-rendering)
* [Examples](#examples)
* [Publishing a Release](#publishing-a-release)
* [Licence](#licence)

## Usage

```bash
npm install --save-dev @theconversation/ui
```

Be sure to wrap any react components in a `ThemeProvider` component
from `@theconversation/ui`. This will provide the correct theme to all of
the components in this library.

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

## Developing

When working on components, you can run storybook locally:

```sh
make storybook
```

Alternatively, you can run storybook through Docker:

```sh
make storybook-docker
```

This will give you a hot reloading environment to rapidly develop in.

If you want to test your newly developed components in a local app, the easiest
way is likely going to be to use [npm link](https://docs.npmjs.com/cli/link.html).
Just be certain that the version of node and npm matches or you might run into problems.

First in the root directory of this library, call `npm link`. This sets up a symlink
so that this library will behave as if it's been globally installed.

Next, in the project that you want to use the local version of this libray in, run
`npm link @theconversation/ui`, which creates a symlink in that projects `node_modules/`
to the global `@theconversation/ui`.

From there it should just work, but if you run into issues at this point, try either
resetting or deleting your `package-lock.json` then running `npm install` again.

To undo the symlink, just run `npm unlink @theconversation/ui`.


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

## Publishing a Release

Tagged releases of this library will be automatically published to NPM by our
build pipeline on Travis CI.

To release a new (major/minor/patch) version, first update the changelog. Then
on the master branch:

```sh
> npm version minor
> git push --follow-tags
```

## Licence

This project is licensed under the MIT licence. See the
[LICENCE](https://github.com/conversation/ui/blob/master/LICENCE.md) file for
more details.
