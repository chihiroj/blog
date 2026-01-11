# Blog App

This is a small Next.js blog with two CMS tools (Sanity and Decap CMS). Switch which CMS the site uses by editing `src/lib/cms.js`.

There are one Javascript file each for the CMS tools. sanity.js and decap.js. They have the code for giving content to frontend.

## Install

```sh
npm install
# (Optional) Install Playwright browsers for running tests locally
npx playwright install --with-deps
```

## Run

```sh
npm run dev
```

Open <http://localhost:3000>

## Tests

- Tests are in the `tests/` folder.

### Run tests

```sh
npx playwright test
```

Application must be running first.

## Switching the CMS backend

- Open `src/lib/cms.js`.
- Change the value of `cmsName` to:
  - `"sanity"` — uses Sanity (`src/lib/sanity.js`)
  - `"decap"` — uses Decap CMS (`src/lib/decap.js`)

Example:

```js
// src/lib/cms.js
const cmsName = "decap"
```

## Content location for Decap CMS

- Articles: `public/content/articles/` (examples: `test.md`, `test_featured.md`)
- Authors: `public/content/authors/`
- Categories: `public/content/category/`
- Uploaded images: `public/uploads/`

Sanity content is stored in Sanity backend

## Frontend calls these methods

Both sanity.cms and decap.cms has the same methods with the same names.

- `getAllArticles`
- `getFeaturedArticles`
- `getArticle`
- `search`
