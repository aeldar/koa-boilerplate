// @flow

import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
const PORT: number = 8431;

app.use(async (ctx, next) => {
  const startTime = Date.now();

  await next();

  const timeToProcess = Date.now() - startTime;
  const fullUrl = `${ctx.protocol}://${ctx.host}${ctx.originalUrl}`;

  // eslint-disable-next-line no-console
  console.log(`${ctx.method} ${fullUrl} - ${timeToProcess}`);
});

app.use(async (ctx, next) => {
  console.log('before next'); // eslint-disable-line no-console
  await next();
  console.log('after next'); // eslint-disable-line no-console
});

router.get('/', async (ctx) => {
  console.log('success!'); // eslint-disable-line no-console

  ctx.body = { // eslint-disable-line no-param-reassign
    success: true,
  };
});

app.use(router.routes());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on http://localhost:${PORT}`);
});
