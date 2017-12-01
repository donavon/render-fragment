# render-fragment

[![Build Status](https://travis-ci.org/donavon/render-fragment.svg?branch=master)](https://travis-ci.org/donavon/render-fragment)
[![npm version](https://img.shields.io/npm/v/render-fragment.svg)](https://www.npmjs.com/package/render-fragment)
[![Coverage Status](https://coveralls.io/repos/github/donavon/render-fragment/badge.svg?branch=master)](https://coveralls.io/github/donavon/render-fragment?branch=master)

A convenient way to return a JSX fragment without the wrapping `div`
element and not worry about the version of React.

## Install
```bash
$ npm i --save render-fragment
```

With the introduction of React 16.2, you can now return a fragment
(i.e. multiple elements that are not under a single element).
In previous versions, you were required to return either a 
single element (in version 15.x)
or an array (in version 16.0 and 16.1).

```js
import Fragment from 'render-fragment';

const App = () => (
  <Fragment>
    <div>A</div>
    <div>B</div>
  </Fragment>
);
```

If you are running React 15.x, it will render a wrapping `<div>`. 
For React 16.0 and 16.1, it will render an array. 
For React 16.2 and above, it will render a `<React.Fragment>`.

This way you can use the same markup regardless of the version
of React that you are using.
This is really useful for component designers that have React
installed as a peerDependency.

See live example on [CodeSandbox](https://codesandbox.io/s/xp55rmrz8w).
