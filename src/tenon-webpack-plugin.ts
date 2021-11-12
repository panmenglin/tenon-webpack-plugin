/**
 * Tenon Webpack Plugin for Tenon Blocks Build
 */
import type { Compiler, Compilation, WebpackPluginInstance, StatsChunk } from 'webpack'

import { Source } from './source'
import { PluginOptions } from './type';

export class TenonWebpackPlugin implements WebpackPluginInstance {

  options = {}

  constructor(options: PluginOptions = {}) {
    this.options = { ...options };
  }

  public apply(compiler: Compiler): void {

    compiler.hooks.emit.tapAsync(
      'TenonWebpackPlugin',
      (compilation: Compilation, callback) => {
        const { chunks = [] } = compilation.getStats().toJson();
        const entryFiles: string[] = [];
        const asyncFiles: string[] = [];

        chunks.forEach((chunk: StatsChunk) => {
          if (!chunk.parents?.length) {
            if (chunk.files?.length) {
              entryFiles.push(...chunk.files);
            }
          } else {
            if (chunk.files?.length) {
              asyncFiles.push(...chunk.files);
            }
          }
        }, []);

        const { library, publicPath } = compiler.options.output;

        const content = {
          js: entryFiles.filter((filename) => /.js($|\?)/.test(filename)),
          css: entryFiles.filter((filename) => /.css($|\?)/.test(filename)),
          library: library!.name,
          publicPath: publicPath,
          ...this.options,
        };

        const data = `${JSON.stringify(content, null, 4)}`;
        compilation.assets['entry.json'] = new Source(data)

        callback()
      },
    );
  }
}
