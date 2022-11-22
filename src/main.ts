import { createApp } from "vue"
import { pinia } from "./store"

import "element-plus/dist/index.css"
import "./style.css"

import App from "./App.vue"

createApp(App).use(pinia).mount("#app")
