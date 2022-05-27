import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App)
  .use(Antd)
  .use(createPinia())
  .mount('#app')
