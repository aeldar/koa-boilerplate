Koa boilerplate
===============

Simple boilerplate for Koa v2 app.


Type checking
-------------

```
npm run flow
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

Build
-----

Building will place the app into _dist_ directory.

```
npm run build
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

TODO
----

- Fix port for testing.
- Add linting.
