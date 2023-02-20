// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// import { VitePWA } from 'vite-plugin-pwa'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.NODE_ENV === "production" ? "/final-project/" : "/",
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
  //   VitePWA({
  //     registerType: 'autoUpdate',
  //     // devOptions: {
  //     //   enabled: true
  //     // },
  //     injectRegister: 'auto',
  //     workbox: {
  //       cleanupOutdatedCaches: false,
  //       globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']
  //     },
  // //     manifest:{
  // //       name:'e-commerce',
  // //       short_name:'myApp',
  // //       description:'bulding website using vuetify3&pinianpm',
  // //       theme_color: "#ffffff",
  // //       start_url: "/",
  // //       display: "standalone",
  // //       background_color: "#ffffff",
  // //       icons: [
  // //         {
  // //           src: "icon-192.png",
  // //           sizes: "192x192",
  // //           type: "image/png",
  // //         },
  // //         {
  // //           src: "/icon-512.png",
  // //           sizes: "512x512",
  // //           type: "image/png",
  // //         },
  // //         {
  // //           src: "icon-512.png",
  // //           sizes: "512x512",
  // //           type: "image/png",
  // //           purpose: "any maskable",


  // //     }
  // //   ]
  // // }
  //   })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    chunkSizeWarningLimit: 1600,
    // manifest:true
  },
  server: {
    port: 3000,
  },
})
