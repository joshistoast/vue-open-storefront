# Vue Open Storefront (WIP)

Vue Open Storefront is a batteries-included boilerplate for Nuxt-based Shopify Storefronts.

## Technologies

- [Nuxt 3](https://v3.nuxtjs.org) as the Framework
- [Storefront API](https://shopify.dev/api/storefront) as the API
- [Pinia](https://pinia.vuejs.org) for State Management
- [Tailwind](https://tailwindcss.com) for styling
- [Apollo](https://www.apollographql.com) for GraphQL
- [TypeScript](https://www.typescriptlang.org) for type safety

## Getting Started

### 1. Fork and clone this repository

### 2. Install dependencies

```zsh
npm install
# or
yarn install
```

### 3. Start developing locally

```zsh
npm run dev
# or
yarn dev
```

## Shopify Setup

1. Create a Shopify Store or login to an existing one;
   1. Tip: Sign up as a Shopify Partner to get access to development stores;
2. In your store, go to apps and create a new app with Storefront API access;
3. Install the app on your store and insert the `storefront_api_access_token` into the `.env` file;
4. Insert the name of your storefront into the `.env` file.

## Limitations

Having a storefront on the bleeding edge of web technologies is great and all, but that also means that the technologies aren't tested by time as much so it may not be as stable as it could be.
