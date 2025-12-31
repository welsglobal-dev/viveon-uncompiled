import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/global.css'

const app = createApp(App)   // create the Vue app
app.use(BootstrapVue3)       // use the plugin on the app
app.use(router)
app.mount('#app')    
// createApp(App).mount('#app')
