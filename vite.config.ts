import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    visualizer(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
  ],

  server: {
    host: true,
    port: 3066
  }
})
