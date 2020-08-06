import Home from './views/Home.vue'
import About from './views/About.vue'
import Interface from './views/Interface.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/interface', component: Interface, meta: { title: 'Interface'} },

  { path: '/:path(.*)', component: NotFound },
]
