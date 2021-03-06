[![Build Status](https://travis-ci.org/bengourley/node-directory-structure.png?branch=master)](https://travis-ci.org/bengourley/node-directory-structure)

Create arbitrary directory structures.

## Install

```
npm install directory-structure
```

## Usage

```js
var mkdirs = require('directory-structure')
```

### mkdirs(root, subdirs, cb)

- `root` must exist
- `subdirs` is an array of subdirectories to create below `root`
- `cb` is the callback `function (err) {}` (`err` is null if ok)

Eg:
```js
mkdirs('/Users/bengourley', ['foo', 'bar', 'baz'], function (err) {
  if (err) throw err
  console.log('done!')
})
```

Results in:
```
/Users/bengourley
└─┬ foo
  ├ bar
  └ baz
```