cronshot-local
==============

[CronShot](https://git.corp.yahoo.com/sports/cronshot) middleware to save images to the local filesystem

`npm install cronshot-local`


## Setup

Install `CronShot`

`npm install cronshot`


## Example

```javascript
var cronshot = require('cronshot'),
  middleware = {
    local: require('cronshot-local')
  };

// Local File Example
// ------------------

// Takes a screenshot of sports.yahoo.com,
// and saves the screenshot to the local file system

// Save Local File Example
cronshot.startCapturing({
  'url': 'http://sports.yahoo.com',
  'path': __dirname,
  'cronPattern': false,
  'saveMiddleware': [middleware.local],
}, function(err) {
  // optional callback function once all screenshots have been taken
  if (err) {
      console.error(err);
  }
});
```

## Options

```javascript
{
  // The path where the screenshot will be saved
  'path': '',
  // The image name used to save the screenshot
  'imageName': ''
}
```

## Contributing

Please send all PR's to the `dev` branch.

If your PR is a code change:

1.  Install all node.js dev dependencies: `npm install`
2.  Update the appropriate module inside of the `src/modules` directory.
3.  Add a unit test inside of `tests/unit/cronshot-local.js`.
4.  Verify that all tests are passing by running `npm test`.
5.  Send the PR!


## Contributors

- [Greg Franko](https://github.com/gfranko)
- [Chase West](https://github.com/ChaseWest)