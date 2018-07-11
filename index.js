'use stricts';

const request = require('request');

const MAX_REDIRECTS = 5;

function followShortUrl(urls, redirectCount = 0) {
  const options = {
    url: urls[urls.length - 1],
    method: 'HEAD',
    followRedirect: false
  };

  return new Promise((resolve, reject) => {
    request(options, async (error, response, body) => {
      if (error) {
        return reject(error);
      }

      if (redirectCount >= MAX_REDIRECTS) {
        return reject(new Error(`Maximum redirects exceeded.`));
      }

      if (response.headers.location) {
        urls.push(response.headers.location);

        await followShortUrl(urls, redirectCount++);
      } else {
        resolve(urls);
      }
    });
  });
}

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    try {
      const urls = await followShortUrl([url]);

      resolve({ urls });
    } catch (error) {
      reject(error);
    }
  });
};
