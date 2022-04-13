# Storybook React SVGR
This plugin will add the same CRA useful behaviour on storybook regarding SVG.

For using it:
1. run `npm install -D @kkurko/storybook-react-svgr` or `yarn add -D @kkurko/storybook-react-svgr`.
   1.just add the following plugin on your `./storybook/main.js`:

```diff
  module.exports = {
    addons: [
+     '@kkurko/storybook-react-svgr',
    ]
  }
```
