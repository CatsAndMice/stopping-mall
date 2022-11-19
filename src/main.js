import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Arco from "@/lib/arco.js"
import GoodFooter from "@/components/GoodFooter.vue"
createApp(App)
    .use(router)
    .use(Arco)
    .use(GoodFooter)
    .mount('#app')
