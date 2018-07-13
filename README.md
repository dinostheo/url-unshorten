# url-unshorten

[![CircleCI](https://circleci.com/gh/dinostheo/url-unshorten/tree/master.svg?style=svg)](https://circleci.com/gh/dinostheo/url-unshorten/tree/master) [![Known Vulnerabilities](https://snyk.io/test/github/dinostheo/url-unshorten/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dinostheo/url-unshorten?targetFile=package.json)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdinostheo%2Furl-unshorten.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdinostheo%2Furl-unshorten?ref=badge_shield)

Checks urls that might be shorten and returns all the potential redirects until its unshorten.

## Installation

`npm i url-unshorten`

## Usage

The `url-unshorten` module exports a function that accepts a url and returns a promise that resolves with the array of the potential urls that redirect to the resolved unshorten one. For convenience it also outputs the unshorten url.

### Example usage

```js
const unshort = require('url-unshorten');

unshort('https://t.co/wy9S5P0Cd2')
  .then(console.log)
  .catch(console.log);
```

The above snippet will output the following:

```js
{
  urls: [
     'https://t.co/wy9S5P0Cd2',
     'https://nyti.ms/2KO3tC7',
     'https://trib.al/WeJspBJ',
     'https://www.nytimes.com/2018/07/10/sports/world-cup/england-croatia-france-belgium.html?smtyp=cur&smid=tw-nytimes'
  ],
  unshorten:
   'https://www.nytimes.com/2018/07/10/sports/world-cup/england-croatia-france-belgium.html?smtyp=cur&smid=tw-nytimes'
}
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdinostheo%2Furl-unshorten.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdinostheo%2Furl-unshorten?ref=badge_large)
