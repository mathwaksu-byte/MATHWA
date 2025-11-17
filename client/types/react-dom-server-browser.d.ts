declare module 'react-dom/server.browser' {
  interface ReadableStreamWithAllReady<T = any> extends ReadableStream<T> {
    allReady: Promise<void>;
  }
  export function renderToReadableStream(
    node: any,
    options?: any
  ): Promise<ReadableStreamWithAllReady<any>> | ReadableStreamWithAllReady<any>;
}
