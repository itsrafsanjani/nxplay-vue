import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use({
    install(Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: 'http://localhost:8000/api/v2/',
            withCredentials: true,
        })
        
        Vue.prototype.$siteUrl = axios.create({
            baseURL: 'http://localhost:8000/',
            withCredentials: true,
        })
    }
})

axios.defaults.withCredentials = true;

// check authentication
let auth = localStorage.getItem('auth');

if (auth) {
    store.dispatch('authUser').then(() => {
        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    });
} else {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}
