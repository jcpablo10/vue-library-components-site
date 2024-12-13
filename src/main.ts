import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueComponentsLibraryLite from 'vue-components-library-lite'
console.log("🚀 ~ VueComponentsLibraryLite:", VueComponentsLibraryLite)

import "vue-components-library-lite/dist/vue-components-library-lite.css"

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(VueComponentsLibraryLite)
app.use(createPinia())
app.use(router)


app.mount('#app')
