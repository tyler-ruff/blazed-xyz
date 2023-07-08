import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import topbar from 'topbar'

import build_head from './util/head.js'

import './assets/style.css'
import './assets/build.css'

import App from './App.vue'

import Home from './pages/Home.vue'
import Catalog from './pages/Catalog.vue'
import Unknown from './pages/Unknown.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/catalog', name: 'catalog', component: Catalog },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Unknown },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    topbar.show()
    document.activeElement?.blur()
})

router.afterEach((to, from, failure) => {
    topbar.hide()
    const drawer = document.querySelector('#mobile-menu-drawer')
    if(drawer.checked === true){
        drawer.checked = false
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app')

build_head();