import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Fondo degradado y estilos globales
import './assets/main.css'

createApp(App).use(router).mount('#app')
