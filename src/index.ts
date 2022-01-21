import { Plugin } from 'vite';
import { RedirectOptions, To } from './interfaces';
import { ServerResponse } from 'http';

function _redirect(res: ServerResponse, src: string, to: To) {
    const Location = typeof to === 'function' ? to(src) : to;

    res.writeHead(302, { Location });

    return res.end();
}

export function redirect(options: RedirectOptions | RedirectOptions[] = []): Plugin {
    const _options = Array.isArray(options) ? options : [options];

    return {
        name: 'vite-plugin-url-redirect',
        configureServer(server) {
            for (const { from, to } of _options) {
                if (!from || !to) continue;

                server.middlewares.use((req, res, next) => {
                    const { url: src = '' } = req;

                    if (typeof from === 'string') {
                        if (from === src) {
                            return _redirect(res, src, to);
                        }

                        return next();
                    }

                    if (from.test(src)) {
                        return _redirect(res, src, to);
                    }

                    next();
                });
            }
        },
    };
}

export * from './interfaces';
