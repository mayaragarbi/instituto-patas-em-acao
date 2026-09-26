import { defineConfig } from "vite";
import { resolve } from "node:path";
import { minify } from "html-minifier-terser";

export default defineConfig({
    plugins: [
        {
            name: "minificar-html",
            apply: "build",

            transformIndexHtml: {
                order: "post",

                handler(html) {
                    return minify(html, {
                        collapseWhitespace: true,
                        removeComments: true
                    });
                }
            }
        }
    ],

    build: {
        minify: true,
        cssMinify: true,

        rollupOptions: {
            input: {
                index: resolve(process.cwd(), "index.html"),
                projetos: resolve(process.cwd(), "projetos.html"),
                cadastro: resolve(process.cwd(), "cadastro.html")
            }
        }
    }
});