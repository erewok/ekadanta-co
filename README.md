# ekadanta-co / erikaker.com

Personal site for [erikaker.com](https://erikaker.com)

## Design

This is a Sveltekit site with static content. The old site was a [Haskell-servant app with an Elasticsearch backend](https://github.com/erewok/ekadanta-co-servant), but this site is cheaper and simpler to deploy.


## Building

To create a production version of your app:

```bash
❯ npm run dev -- --open
```

This will launch a browser window and open the project on [localhost:3000](http://localhost:3000)


## Deployment

This site is deployed on Cloudflare pages: pushing a commit to `main` will automatically deploy a new version of the site to production.