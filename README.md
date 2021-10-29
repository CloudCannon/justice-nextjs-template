# Justice

Law firm themed business template for Next.js. Browse through a
[live demo](https://mysterious-shelter.cloudvent.net/). Increase the web presence of a law firm or
business with this configurable theme.

![Justice template screenshot](_screenshot.png)

Justice was made by [CloudCannon](https://cloudcannon.com/).

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/justice-nextjs-template)

## Features

* Contact form
* Pre-built pages
* Pre-styled components
* Blog with pagination
* Post category pages
* Disqus comments for posts
* Staff and author system
* Configurable footer
* Optimised for editing in [CloudCannon](https://cloudcannon.com/)
* RSS/Atom feed
* SEO tags
* Google Analytics

## Setup

1. Add your site and author details in `data/seo.json`.
2. Add your Google Analytics and Disqus keys to `data/site.json`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/)
or Next.js locally).

## Develop

Justice is built with [Next.js](https://nextjs.org/) (version `11.0.0`).

~~~bash
$ npm install
$ npm run dev
~~~

## Editing

Justice is already optimised for adding, updating and removing pages, staff, posts, company details
and footer elements in [CloudCannon](https://app.cloudcannon.com/).

### Posts

* Add, update or remove a post in the *Posts* collection.
* The **Staff Author** field links to members in the **Staff** collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Contact Form

* Preconfigured to work with [CloudCannon](https://app.cloudcannon.com/).
* Sends email to the address listed in company details.

### Staff

* Reused around the site to save multiple editing locations.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.

### Company details

* Reused around the site to save multiple editing locations.
* Set in the *Data* / *Company* section.
