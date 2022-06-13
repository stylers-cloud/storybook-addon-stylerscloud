# Storybook stylers.cloud Addon

A Storybook to use [stylers.cloud](https://stylers.cloud) in your storybook

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

Configure addon with your stylers.cloud project id in `.storybook/preview.js`

```js
// .storybook/preview.js
import { addParameters } from "@storybook/react";

addParameters({
  stylersCloudProjectId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
});
```

## Using stylers.cloud in storybook

You can open stylers.cloud window from top-right corner inside Canvas/Docs frame.

![localhost_6006__path=_story_example-button--primary](https://user-images.githubusercontent.com/1194439/173340392-89e682ea-846e-4636-bc21-2c54b15c8169.png)


## More about stylers.cloud

If you are not using [stylers.cloud](https://stylers.cloud) client yet, you can try it using [css.support](http://css.support/) on small standalone task for free (while in beta).
