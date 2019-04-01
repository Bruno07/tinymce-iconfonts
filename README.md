# TinyMCE iconfonts plugin

The holy grail of using icon fonts in TinyMCE. 🏆

This plugin does a few things:

1. Prevents TinyMCE from converting `<i>` icons into `<em>` elements
2. Prevents TinyMCE from removing empty icons
3. Makes icons selectable so you can copy/paste/delete them easier
4. Let's you configure the CSS selector used to identify icon font elements

NOTE: This plugin is designed to allow icon font elements to exist in the TinyMCE editor. It It does not facilitate inserting or changing icons through a UI. Such features are outside the scope of this plugin.

## Standard Usage

Copy the contents of `dist/` to `tinymce/plugins/iconfonts` and initialize:

```js
tinymce.init({
  // ...

  iconfonts_selector: '.fa, .fab, .fal, .far, .fas, .glyphicon', // optional (default shown)

  // To load the plugin from the tinymce/plugins directory...
  plugins: 'iconfonts',

  // ...or to load the plugin from a CDN or other external URL
  external_plugins: {
    'iconfonts': 'https://example.com/path/to/plugin.js'
  }
});
```

## Advanced Usage

If you're using a module loader (e.g. for a custom TinyMCE build), install with:

```sh
npm install tinymce-iconfonts
```

Then include the plugin with:

```js
// CommonJS
require('tinymce-iconfonts'); // CommonJS

// ES6
import 'tinymce-iconfonts'; // ES6
```

## Development

Install dependencies:

```sh
npm install
```

To test manually, start a local server and navigate to: `/test/index.html`

Note that the test cannot be run from a `file://` url due to the way TinyMCE loads external plugins. Also note that the test uses `dist/plugin.js` and not `src/plugin.js`.

## Build

To create a build:

```
npm run build
```
