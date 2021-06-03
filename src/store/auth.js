import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        access_token: null,
        user: null
    },
    mutations: {
        SET_TOKEN(state, access_token) {
            state.access_token = access_token
        },
        USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async login({dispatch}, credentials) {
            axios.post('http://nxplay.test/api/v1/login', credentials)
                .then(res => {
                    console.log(res.data)

                    localStorage.setItem('token', res.data.access_token)

                    dispatch('attempt', res.data.access_token)
                    dispatch('user', res.data.data)
                }).catch(err => {
                console.log(err)
            })
        },
        async attempt({commit}, access_token) {
            console.log(access_token)
            commit('SET_TOKEN', access_token)
        },

        async user({commit}, user) {
            console.log(user)
            commit('USER', user)
        }
    }
})
