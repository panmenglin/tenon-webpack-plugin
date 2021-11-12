/**
 * Tenon Webpack Plugin Types
 */
export type PluginOptions = {
  blocks?: string[];
  externals?: {
    js: string[];
    css: string[]
  }
}