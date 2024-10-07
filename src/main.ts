import { createApp } from 'vue'
// import './style.css'
import '@/css/tailwindcss.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
import '@/style.css'
import 'animate.css';
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
