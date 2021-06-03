import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: 'Welcome from Vuex',
        user: {},
        authenticated: false
    },
    getters: {
        getMessage(state) {
            return state.message;
        },
        getUser(state) {
            return state.user;
        },
        getAuthenticated(state) {
            return state.authenticated;
        }
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data
        },
        SET_AUTHENTICATED(state, data) {
            state.authenticated = data;
        }
    },
    actions: {
        authUser({commit}) {
            return axios.get('http://localhost:8000/api/v2/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
                localStorage.setItem('auth', true);

                if (router.currentRoute.name !== null) {
                    router.push({name: 'Home'})
                }

            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
                localStorage.removeItem('auth');

                if (router.currentRoute.name !== 'Login') {
                    router.push({name: 'Login'})
                }
            })
        },
    }
})

export default store;
