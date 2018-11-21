# UI

[![Build Status](https://travis-ci.com/conversation/ui.svg?branch=master)](https://travis-ci.com/conversation/ui)

This library contains a collection of React components used to build our apps
at The Conversation. It is based on the excellent [Material
UI](https://material-ui.com) library.

## Table of Contents

* [Publishing a Release](#publishing-a-release)
* [Licence](#licence)

## Publishing a Release

Tagged releases of this library will be automatically published to NPM by our
build pipeline on Travis CI.

To release a new (major/minor/patch) version, on the master branch:

    > npm version minor
    > git push --follow-tags

## Licence

This project is licensed under the MIT licence. See the
[LICENCE](https://github.com/conversation/ui/blob/master/LICENCE.md) file for
more details.
