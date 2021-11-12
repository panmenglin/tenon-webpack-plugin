# tenon-webpack-plugin

[![npm][npm-image]][npm-url]

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


