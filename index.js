const fs = require('fs');
const Koa = require('koa');
const cors = require('kcors');
const onerror = require('koa-onerror');
const jwt = require('cihm-jwt');
const nJwt = require('njwt');

const app = new Koa();

const config = require(process.env.APP_CONFIG || './config');

onerror(app);

app.use(cors({ origin: '*' }));

app.use(jwt(config.secrets));

app.use((ctx) => {
  let issuer = ctx.state.jwtData.iss;
  let token = nJwt.create(ctx.state.jwtData, config.secrets[issuer]);
  ctx.cookies.set('c7a2_token', token, { maxAge: 86400000, overwrite: true });
  ctx.body = {"done": true};
  ctx.status = 200;
})

app.listen(3000);
