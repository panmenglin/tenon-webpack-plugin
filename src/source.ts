/**
 * Create Webpack Source
 */

type MapOptions = {
	columns?: boolean;
	module?: boolean;
}

declare class Hash {
	constructor();

	update(data: string | Buffer, inputEncoding?: string): Hash;

	digest(encoding?: string): string | Buffer;
}

export class Source{
  constructor(
    content: string,
  ) {
    this.content = content
  }

  content = '';

  source() {
    return this.content
  }

  buffer() {
    const source = this.source();
    if (Buffer.isBuffer(source)) return source;
    return Buffer.from(source, "utf-8");
  }

  size() {
    return this.buffer().length;
  }

  map(options: MapOptions) {
    return {};
  }

  sourceAndMap(options: MapOptions) {
    return {
      source: this.source(),
      map: this.map(options),
    };
  }

  updateHash(hash: Hash) {
    throw new Error("Abstract");
  }
}
