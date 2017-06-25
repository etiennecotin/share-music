// import {HTTP} from '../../api'

import * as types from '../mutation-types'

const state = {
     count: 0,
     // notifications: [],
     test2:'test',
     test: []
};

// getters
const getters = {
    checkoutStatus: state => state.count,
    // notifications: state => state.notifications,
    test:  state => [state.test2, state => state.count]
};

// actions
const actions = {
    increment ({ commit }) {
        // setTimeout(() => {
            commit(types.INCREMENTE)
        // }, 1000)
    },
    decrement ({ commit }) {
        // setTimeout(() => {
        // commit(types.DECREMENTE)
        // }, 1000)
        return new Promise((resolve, reject) => {
            // setTimeout(() => {
                commit(types.DECREMENTE)
                // commit(types.SET_NOTIFICATIONS)
                resolve()
            // }, 1000)
        })
    }
};

// mutations
const mutations = {
    // increment: state => state.count++,

    [types.INCREMENTE] (state) {
        state.count++
    },
    [types.DECREMENTE] (state) {
        state.count--
    },
    // [types.SET_NOTIFICATIONS] (state) {
    //     state.notifications.push('Mis à jour');
    //     setTimeout(() => { state.notifications.pop() }, 1500)
    // },

};

export default {
    state,
    getters,
    actions,
    mutations
}