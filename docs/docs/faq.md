---
sidebar_label: 'FAQ'
slug: '/faq'
---

# Frequently Asked Questions

## Do you plan on implementing a feature for X?

Probably not unless the feature request has been opened on the [GitHub Repo](https://github.com/strapi-community/plugin-redis) and up voted by the community. However we do also accept PRs for new features.

## How do I contribute to the project?

Please open up a PR on the [GitHub Repo](https://github.com/strapi-community/plugin-redis), we will review it and merge it if it meets our standards. If you would like to discuss something before you contribute you are welcome to open an issue on the repo.

## Do you plan on rewriting this in Typescript or providing Typescript support?

No, we do not plan on rewriting this in Typescript or providing Types. Certainly we will accept PRs if you believe you can provide a good implementation that doesn't overly complicate the code-base but in general you should be able to use the existing types provided by the `ioredis` package.

The Lead maintainer of this package has a strong preference for Javascript over Typescript and does not see the value in rewriting the package in Typescript.

## I can't get the package to work, can you help me?

Please open an issue on the [GitHub Repo](https://github.com/strapi-community/plugin-redis) and we will do our best to help you. Please provide as much information as possible including the version of Strapi you are using, the version of the plugin you are using, and any error messages you are seeing.

Most of the time the issue is not with this plugin and is with your Redis configuration or your Strapi configuration. In many cases certain cloud providers have very strict network firewalls or restrictions that can prevent the connection.
