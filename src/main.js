import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
/* import { BootstrapVue, IconsPlugin, VBModal } from 'bootstrap-vue' 

 Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.directive('b-modal', VBModal)  */
createApp(App).use(router).mount('#app')
//Vue.use(BootstrapVue)