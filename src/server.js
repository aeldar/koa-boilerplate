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

  console.log(`${ctx.method} ${fullUrl} - ${timeToProcess}`);
});

app.use(async (ctx, next) => {
  console.log('before next');
  await next();
  console.log('after next');
});

router.get('/', async ctx => {
  console.log('success!');

  ctx.body = {
    success: true
  };
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
