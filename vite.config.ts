import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [react(), svgrPlugin()],
    server: { port: 8080 },
    // build: {
    //     outDir: 'build',
    //     chunkSizeWarningLimit: 1600,
    //     sourcemap: false, 
    //     rollupOptions: {
    //       output:{
    //           manualChunks(id) {
    //               if (id.includes('node_modules')) {
    //                   return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //               }
    //           }
    //       }
    //   }  
    // },
    resolve: {
      alias: {
          '@layouts': path.resolve(__dirname, './src/layouts'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@contexts': path.resolve(__dirname, './src/contexts'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@components': path.resolve(__dirname, './src/components'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@services': path.resolve(__dirname, './src/services'),
          '@reduxs': path.resolve(__dirname, './src/reduxs'),
      }   
    }
  }

  if (command !== 'serve') {
    config.base = '/theinlwin/'
  }

  return config
})
