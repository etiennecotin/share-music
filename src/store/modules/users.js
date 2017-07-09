/**
 * Created by etienne on 11/05/2017.
 */

import {HTTP} from '../../api.js'

import * as types from '../mutation-types'

const state = {

    user: {
        id: '',
        username: '',
        name: '',
        lastName: '',
        email: '',
        connection: '',
        lastConnection: '',
        signUp: '',
        logged: false,
    }

};

// getters
const getters = {

    // getLastConnection: state => state.lastConnection,
    // getLogged: state => state.logged,
    user: state => state.user,
};

// actions
const actions = {
    checkLoggedIn ({ commit }) {

        const user_id = localStorage.getItem('id');


        return new Promise((resolve, reject) => {

            if (user_id){
                commit(types.GET_LOCAL_USER)

                resolve(true)

            }else {
                reject(false)
            }


        })


        // HTTP.get('posts/'+this.username)
        //     .then(response => {
        //         this.posts = response.data;
        //
        //
        //     })
        //     .catch(e => {
        //         this.errors.push(e)
        //     })

    },
    logIn ({ commit }, values) {

        localStorage.setItem('id', 1)

        return new Promise((resolve, reject) => {

            const user_id = localStorage.getItem('id');
            const route = JSON.parse(localStorage.getItem('route'));
            // console.log(route)
            if (user_id){

                localStorage.removeItem('route')

                console.warn(user_id);
                console.log(route)

                commit(types.LOG_USER)

                const routeProgram = {};
                routeProgram['name'] = route.routeName
                if(route.routeParams){
                    console.log(route.routeParams)
                    routeProgram['param'] = route.routeParams
                    resolve(routeProgram)

                }else {

                    resolve(routeProgram)

                }
            }else {
                reject(false)
            }


        })

    },
    logOut ({ commit }) {

        const user_id = localStorage.getItem('id');

        return new Promise((resolve, reject) => {

            if (user_id){

                console.warn('deco '+user_id)

                localStorage.removeItem('id')

                commit(types.LOGOUT_USER)

                resolve(true)

            }else {
                reject(false)
            }


        })

    },
};

// mutations
const mutations = {
    // increment: state => state.count++,

    [types.GET_LOCAL_USER] (state) {
        state.user.logged = true
        state.user.username = 'etienne'
    },
    [types.LOG_USER] (state) {


        setTimeout(function () {state.user.logged = true}.bind(this),2000)
    },
    [types.LOGOUT_USER] (state) {
        state.user.logged = false
    },
    //

};

export default {
    state,
    getters,
    actions,
    mutations
}