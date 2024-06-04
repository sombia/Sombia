# Sombia
The official GitHub repo for Sombia.

## What is Sombia?
Sombia is a free, privacy-first Social media network, optimized for creators. You can share (nearly) every type of content here. It's currently under construction, but we hope to open the beta soon. Want to be a part of the journey? Join our [Discord](#).

## About this website
The website was built with the Vite template, you can find it on their [website](https://vitejs.dev) and on their [GitHub repo](https://github.com/vitejs/vite).

## How to make modifications
This repo is mainly made public to allow for Style modifications. We mainly use [SASS](http://sass-lang.com/) in this project, but feel free to use any libraries you want ([Bootstrap](http://react-bootstrap.netlify.app/) is already installed :wink:)

You can find all components in the [`/src/components`-directory](src/components), and their respective SASS files in the [`/src/styles/components`-directory](src/styles/components). Same goes for pages, just go to the [`/src/pages`](src/pages) and their respective [`/src/styles/pages`-directory](src/styles/pages).

## How to test and publish your changes
As our API doesn't allow request from a localhost-Host, Vite uses the example data at https://test.sombia.app/ automatically, when you are using `npm run dev`.

For now, if you want to use a custom skin in the Sombia-Application, you need to host the entire application yourself. Later, we will allow a function to inject your own stylesheets directly in the settings, and even later an store for custom skins!

After you've finished your changes, you can run `npm run build` to get a shipping ready version of the App!