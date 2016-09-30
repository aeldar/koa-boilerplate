import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
const PORT = 8431;

router.get('/', async (ctx = {}) => {
  console.log('success!');

  const a = 1234;

  const b = 4321;

  console.log(a + b);

  ctx.body = {
    success: true
  };
  ctx.status = 200;
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server starteded on http://localhost:${PORT}`);
});
