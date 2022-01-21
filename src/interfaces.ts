export type From = RegExp | string;

export type To = string | ((src: string) => string);

export interface RedirectOptions {
    /**
     * The URL which should redirect
     */
    from: From;

    /**
     * The URL which redirect to.
     */
    to: To;
}
