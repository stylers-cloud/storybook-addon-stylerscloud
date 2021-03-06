# Storybook stylers.cloud Addon

A Storybook addon to use [stylers.cloud](https://www.stylers.cloud/?utm_source=gh) in your storybook

## Getting started

### 1. Install

Install using npm/yarn

```sh
yarn add -D storybook-addon-stylerscloud
```

### 2. Register the addon in `main.js`

To configure storybook to include addon, insert `storybook-addon-stylerscloud` to `addons` field in `.storybook/main.js`

```js
// .storybook/main.js
module.exports = {
  addons: ["storybook-addon-stylerscloud"],
};
```

### 3. Configure with project id

Configure addon with your stylers.cloud project id in `.storybook/preview.js` (edit or create it)

```js
// .storybook/preview.js
export const parameters = {
  stylersCloudProjectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  stylersCloudNonProdDomains: [-1204607085, 1505998205],
});
```

You can find project id (`stylersCloudProjectId`) in client settings or in snippet we sent you.

If you want to use only [css.support](https://www.stylers.cloud/css-support/?utm_source=gh) this way add `stylersCloudSupportMode: true` to config and remove `stylersCloudNonProdDomains` (it is not needed).

#### Domain hashes

To get domain hashes required in `stylersCloudNonProdDomains` you can use this code:

1. open domain where stylers.cloud should run (eg. dev.example.com)
2. run code below in devtools console
3. output of script is hash of domain you are currently on (insert it to `stylersCloudNonProdDomains`)

```js
var domain = location.hostname.split(".").slice(-3).join(".");
function hash(s) {
  var h = 0,
    l = s.length,
    i;
  if (l == 0) return h;
  for (i = 0; i < l; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h = h & h;
  }
  return h;
}
hash(domain);
```

exising defaults are

```
localhost = -1204607085
127.0.0.1 = 1505998205
```

## Using stylers.cloud in storybook

You can open stylers.cloud window from top-right corner inside Canvas/Docs frame.

![localhost_6006__path=_story_example-button--primary](https://user-images.githubusercontent.com/1194439/173340392-89e682ea-846e-4636-bc21-2c54b15c8169.png)

## More about stylers.cloud

[stylers.cloud](https://www.stylers.cloud/?utm_source=gh) is start-up automating CSS.
If you are not our client yet, feel free to [contact us](https://www.stylers.cloud/?utm_source=gh).
