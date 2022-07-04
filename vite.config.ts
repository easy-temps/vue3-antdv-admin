import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,

    define: {
      'process.env.VUE_APP_PUBLIC_PATH': JSON.stringify(env.VITE_APP_PUBLIC_PATH)
    },

    plugins: [
      vue(),
      vueJsx(),
      visualizer(),
      Components({
        dts: true,
        resolvers: [AntDesignVueResolver()],
        types: []
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
    ],

    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets')
      },
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: 'true; @import "~/styles/variables.less";',
            'root-entry-name': 'variable',
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
        },
      },
    },

    server: {
      host: true,
      port: 3066
    }
  }
})