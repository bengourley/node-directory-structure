
```js
var mkdirs = require('directory-structure')
```

### mkdirs(root, subdirs, cb)

- `root` must exist
- `subdirs` is an array of subdirectories to create below `root`
- `cb` is the callback `function (err) {}` (`err` is null if ok)

Eg:
```js
mkdirs('/Users/bengourley', ['foo', 'bar', 'baz'], function () {
  console.log('done!')
})
```