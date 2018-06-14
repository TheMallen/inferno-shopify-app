const dotenv = require('dotenv');
const Koa = require('koa');
const session = require('koa-session');
const historyApiFallback = require('koa2-connect-history-api-fallback');
const webpack = require('koa-webpack');
const compress = require('koa-compress');

const {
  default: shopifyAuth,
  verifyRequest,
} = require('@shopify/koa-shopify-auth');
const {default: graphQLProxy} = require('@shopify/koa-shopify-graphql-proxy');

dotenv.config();
const {SHOPIFY_SECRET, SHOPIFY_API_KEY} = process.env;

const app = new Koa();
app.use(session(app));

app.keys = [SHOPIFY_SECRET];

app.use(
  shopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_SECRET,
    scopes: ['write_products'],
    afterAuth(ctx) {
      const {shop, accessToken} = ctx.session;

      console.log('We did it!', shop, accessToken);

      ctx.redirect('/');
    },
  }),
);

app.use(verifyRequest());

app.use(graphQLProxy());

app.use(compress());

app.use(historyApiFallback());

app.use(webpack());

module.exports = app;
