import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
const PORT = 8431;

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
  console.log(`Server starteded on http://localhost:${PORT}`);
});
