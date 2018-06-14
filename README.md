# Inferno Shopify App

## Getting an app setup on your store

### Expose your dev environment to the internet

You will need to download ngrok at https://ngrok.com/download and signup for a free account. Move the unziped ngrok client to your user folder and run the following in your terminal.

```bash
$ ./ngrok http 3000
```

This should display a UI in your terminal with the public URL of your tunnel and other status and metrics information about connections made over your tunnel.

### Set up an App on the partners dashboard

Log into the [partner dashboard](https://partners.shopify.com/organizations) and click "Apps" from the main dashboard navigation. Then click "Create app".

Give you app a name, this can be anything you'd like.

Set the app URL to the public URL of you ngrok tunnel. This should be displayed in the UI under "Fowarding" and should end with `.ngrok.io` for example `https://e3fd01a0.ngrok.io`.

 We'll be using `/auth/callback` as our oauth callback route, so add that to your whitelist.

For example, for the address above you would add `https://e3fd01a0.ngrok.io/auth/callback`.

Rename `.env.example` to `.env` and copy and paste your Shopify Api Key and Secret to this file. These can be found in under App credentials, near the bottom of the App Info page.

```
SHOPIFY_API_KEY=YOUR_SHOPIFY_API_KEY
SHOPIFY_SECRET=YOUR_SHOPIFY_SECRET
```

## Starting the app

Install the dependencies by running in the project root:
`npm install`

And finally run the app:
`npm start`

Open a browser and go to either [localhost:3000](localhost:3000) or the url provided by ngrok.

If successful, you should see a hello message in your browser.

Rename `.env.example` to `.env` and copy and paste your Shopify Api Key and Secret to this file.

```
SHOPIFY_API_KEY=YOUR_SHOPIFY_API_KEY
SHOPIFY_SECRET=YOUR_SHOPIFY_SECRET
```

## Using this repo

```
npm start
```

Start the server

```
npm prod
```

Run `start` with NODE_ENV=production

```
npm dev
```

Run `start` with NODE_ENV=development

## Whats included

* [babel](https://babeljs.io/) lets us use modern syntax and JSX everywhere
* [webpack](https://webpack.js.org/) compiles our client-side code into a bundle
* [prettier](https://prettier.io/) make our code look pretty and maintains consistency
* [dotenv](https://github.com/motdotla/dotenv) helps configure our environment variables
* [koa](https://koajs.com/) minimalistic and modern node server framework
