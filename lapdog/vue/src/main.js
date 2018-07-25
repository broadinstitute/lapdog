import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './Pages/Home.vue'
import Workspace from './Pages/Workspace.vue'
// import Slideout from 'vue-slideout'
window.$ = require('jquery')
window.jQuery = require('jquery')
window.materialize = require('materialize-css')
Vue.use(Router)

const router = new Router({
  routes:
  [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/workspaces/:namespace/:workspace',
      name: 'workspace',
      component: Workspace,
      props:true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// Vue.component('sidenav', {
//   template: ,
//   mounted: () => {
//     console.log("MOUNTED")
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App),
  mounted: () => {
    window.$('.sidenav').sidenav()
  },
  router,
  // Slideout
})
