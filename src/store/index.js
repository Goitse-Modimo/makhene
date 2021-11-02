import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import firebase from "firebase";
import { reject, resolve } from 'core-js/fn/promise'


const store = new vuex.store({
    state: {
        loading: false,
        errors: [],
        user: localStorage.getItem('user') || {},
        token: localStorage.getItem('token') || null
    },

    mutations: {
        authRequest(state){
            state.loading = true;
        },
        authSuccess(state, user, token){
            state.user = user
            state.token = token
            state.loading = false
        },
        authError( state, err){
            state.errors = [...state.errors, err ]
        }
    },

    actions: {
        login({ commit }, user){
            return new Promise((resolve, reject) => {
                commit('authRequest')
                firebase.auth().signInWithEmailAndPassword( user.email, user.password)
                    .then(( userCredentials )=> {
                        var user = userCredentials.user
                        var token = userCredentials.accessToken
                        localStorage.setItem('user', user)
                        localStorage.setItem('token', token)
                        commit('authSuccess', user, token)
                        resolve(userCredentials)
                    })
                    .catch(( error )=>{
                        commit('authError', error)
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        reject(error)
                    })
            })
        },
    },
    
    getters:{}
})

export default store