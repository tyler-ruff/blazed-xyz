
import Home from './../pages/Home.vue'
import View from './../pages/View.vue'
import Catalog from './../pages/Catalog.vue'
import Contact from './../pages/Contact.vue'
import Unknown from './../pages/Unknown.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/view/:id', name: 'view', component: View, props: {
        id: false
    }},
    { path: '/catalog', name: 'catalog', component: Catalog },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Unknown },
]

export default routes;

