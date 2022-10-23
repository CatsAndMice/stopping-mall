import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Arco from "@/lib/arco.js"

createApp(App)
    .use(router)
    .use(Arco)
    .mount('#app')
