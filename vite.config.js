import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

const path = require('path')

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
    resolve:{
        alias:{
            "@Components": path.resolve(`resources/js/Components`),
            "@Contexts": path.resolve(`resources/js/Contexts`),
            "@Layouts": path.resolve(`resources/js/Layouts`),
            "@Pages": path.resolve(`resources/js/Pages`),
            "@Styles": path.resolve(`resources/js/Styles`),
            "@Utils": path.resolve(`resources/js/Utils`),
            "@Hooks": path.resolve(`resources/js/Hooks`),
        },
    },
});
