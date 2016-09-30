Koa boilerplate
===============

Simple boilerplate for Koa v2 app.

Install
-------

```
git clone git@github.com:aeldar/koa-boilerplate.git
npm install
```

Build
-----

To run app in dev mode no need to build it. Just skip to run section.

Building will place the app into _dist_ directory.

```
npm run build
```

Run
---

In development mode with auto refresh:

```
npm start
```

In production mode (build and run)

```
npm run serve
```

Test
----
Testing will start the app and test it.

```
npm test
```

Debug
-----

To debug in dev mode:
```
npm run start:debug
```

To debug built version:
```
npm run serve:debug
```

Linting
-------

```
npm run lint
```
It runs with _--fix_ option (trying to fix what it can).

Type checking
-------------

```
npm run flow
```

Koa v1 vs v2
------------

Koa 2 is incompatible with old Koa 1. To the moment of writing this docs the latest
Koa is v1. So to install Koa v2 it should be specified like this:

```
npm install --save koa@2
```

All middleware provided by 3d parties also should be Koa2 compatible. Most of them
could be installed with tag "@next". Like this:

```
npm i -S koa-router@next
```

Babel presets
-------------

_babel-preset-latest-minimal_ determines what plugins are needed via feature detection. (That only makes sense for Node.js, but not for browsers.)

TODO
----

- Fix port for testing.
- Add chai, sinon. Add eslint support for them.
