import './assets/main.css'

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router';

// createApp(App).mount('#app')
const app = createApp(App); // kita bikin variable app

// panggil disini
app.use(router)
app.mount("#app");