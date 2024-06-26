import { resolve } from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Icons from 'unplugin-icons/vite'
import lqip from 'vite-plugin-lqip'
import Unfonts from "unplugin-fonts/vite"
import {imagetools} from 'vite-imagetools'
// import {chunkSplitPlugin} from 'vite-plugin-chunk-split'
// import VitePluginCssMediaSplitter from "css-media-splitter/vite-plugin"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from 'vite-tsconfig-paths'
import dynamicImport from 'vite-plugin-dynamic-import'
import content from '@originjs/vite-plugin-content'
import { fileURLToPath } from 'node:url'

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //@ts-expect-error stupid ts
    content,
    dynamicImport(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      include: "**/*.svg?react",
    }),
    // chunkSplitPlugin(),
    tsconfigPaths(),
    react(),
    imagetools(),
    Icons({
      autoInstall: true,
      compiler: 'jsx',
      jsx: 'react'
    }),
    Unfonts({
      // Custom fonts.
      custom: {
        families: [{
          name: 'Get Show',
          local: 'Get Show',
          src: './src/assets/fonts/*.ttf',
        }],
        display: 'auto',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend',
      },
      google: {
        preconnect: false,
        display: 'swap',
        text: undefined,
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Noto Sans Display',
            styles: 'ital,wght@0,100..900;1,100..900',
            defer: true,
          },
        ],
      },
    }),
    lqip(),
    // VitePluginCssMediaSplitter(),
  ],
  base: (process.env.URL_BASE ?? '/') + '#',
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@config', replacement: resolve(__dirname, './src/config') },
      { find: '@atoms', replacement: resolve(__dirname, './src/atoms') },
      { find: '@molecules', replacement: resolve(__dirname, './src/molecules') },
      { find: '@plugins', replacement: resolve(__dirname, './src/plugins') },
      { find: '@views', replacement: resolve(__dirname, './src/views') },
      { find: '@mixins', replacement: resolve(__dirname, './src/mixins') },
      { find: '@svg', replacement: resolve(__dirname, './src/svg') },
      { find: '@models', replacement: resolve(__dirname, './src/models') },
      { find: '@contexts', replacement: resolve(__dirname, './src/contexts') },
      { find: '@blog', replacement: resolve(__dirname, './src/blog-rendered') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@images', replacement: resolve(__dirname, './src/assets/images') },
      { find: '@fonts', replacement: resolve(__dirname, './src/assets/fonts') },
    ]
  }
})
