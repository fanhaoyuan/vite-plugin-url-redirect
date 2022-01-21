# vite-plugin-url-redirect

Redirect a source url to another one.

## Install

```bash
$> npm install vite-plugin-url-redirect
```

## Usage

```ts
//vite.config.ts
import { redirect } from 'vite-plugin-url-redirect';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        // An example for redirect to a local server with absolute path.
        redirect({
            form: /\/basename\/.*\.(jpg|jpeg|png|gif)/,
            to: (src: string) => `http://localhost:3000${src}`,
        }),
    ],
});
```

## Options

```ts
declare type From = RegExp | string;
declare type To = string | ((src: string) => string);
interface RedirectOptions {
    /**
     * The URL which should redirect
     */
    from: From;
    /**
     * The URL which redirect to.
     */
    to: To;
}
```

## License

[MIT](./LICENSE)
