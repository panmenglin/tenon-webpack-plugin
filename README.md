# tenon-webpack-plugin


A webpack plugin to build Tenon blocks.

> NOTE: Node v10+ and webpack v4+ are supported and tested.

## About

This plugin will create Tenon entry file when you build Tenno block.

## Installation

```
yarn add -D tenon-webpack-plugin

or

npm install --save-dev tenon-webpack-plugin
```

## Usage

```javascript

import { TenonWebpackPlugin } from 'tenon-webpack-plugin/src';

const webpackConfig = {
    output: {
      publicPath: 'http://xxx/xxx',
      globalObject: 'proxyWindow',
      library: 'Library Name',
      libraryExport: 'default'
    },
    },
    plugins: [
        new CleanWebpackPlugin({
          blocks: ["Block Name"],
          externals: {
            js: [],
            css: [],
          },
        }),
    ],
};

module.exports = webpackConfig;

```

### Options

```typescript

export type PluginOptions = {
  blocks?: string[];
  externals?: {
    js: string[];
    css: string[]
  }
}

```

**blocks**: The blocks contained in the library.

**externals**: Webpack externals related files.


### Output

The Tenon entry file (`entry.json`) created by this plugin like this:

```json
{
    "js": [
        "index.min.js"
    ],
    "css": [
        "main.css"
    ],
    "library": "Library Name",
    "publicPath": "http://xxx/xxx",
    "blocks": [
        "Item",
    ],
    "externals": {
        "js": [
            "http://unpkg.com/react@17.0.2/umd/react.production.min.js",
            "http://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js",
        ],
        "css": []
    }
}
```


