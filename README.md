<div align="center">
  <img src=".github/images/vue-open-storefront-banner copy.png" alt="Vue Open Storefront (WIP)"/>
</div>

# Vue Open Storefront (WIP)

Vue Open Storefront is a batteries-included, open-source template for Nuxt-based Shopify Storefronts.

## Technologies

- [Nuxt 3](https://v3.nuxtjs.org) as the Framework
- [Storefront API](https://shopify.dev/api/storefront) as the API
- [GraphQL](https://graphql.org) to interface with the API
- [Apollo](https://www.apollographql.com) for using GraphQL
- [Pinia](https://pinia.vuejs.org) for State Management
- [Tailwind](https://tailwindcss.com) for styling
- [TypeScript](https://www.typescriptlang.org) for type safety

## Why use Vue Open Storefront?

Vue Open Storefront comes packaged with all the standard features found in a typical Shopify liquid theme, but with the added benefits of headless and Vue-powered development. This means you only need to worry about customizing the theme and not working on store features.

## Roadmap

- [x] Product Page
  - [x] Select variants
  - [x] Add to cart
  - [x] Display details
- [ ] Cart
  - [x] Add to cart
  - [x] Remove from cart
  - [ ] Update cart item
- [ ] Customers
  - [ ] Sign in
  - [ ] Create account
  - [ ] View order history
  - [ ] Manage addresses
    - [ ] Add address
    - [ ] Edit Address
    - [ ] Delete Address
    - [ ] Set default address
- [ ] Collections
  - [ ] Filter products
  - [ ] Load more products
  - [ ] Display products
- [ ] Search
  - [ ] Search products
  - [ ] Filter products
  - [ ] Search blog posts
- [x] Blog
  - [x] View articles by blog
  - [x] View blog article
- [x] Pages
  - [x] View page
- [ ] Shop
  - [ ] Update localization
- [ ] UI Components
  - [x] Buttons
  - [x] Radio buttons
  - [x] Checkboxes
  - [x] Inputs
  - [ ] Select
  - [ ] Tabs

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

> Recommended: You can sign up as a Shopify Partner to get access to development stores [here](https://www.shopify.com/partners)

1. Create a Shopify Store or login to an existing one;
2. In your store, go to apps and create a new app with Storefront API access;
3. Install the app on your store and insert the `storefront_api_access_token` into the `.env` file;
4. Insert the name of your storefront into the `.env` file.

## Limitations

Having a storefront on the bleeding edge of web technologies is great and all, but that also means that the technologies aren't tested by time as much so it may not be as stable as a tried and tested theme.

## Contributing

We're open to contributions! If you have anything to contribute simply open an issue or pull request.
