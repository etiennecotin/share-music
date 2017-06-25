/**
 * Created by etienne on 13/05/2017.
 */
// import {HTTP} from '../../api'

import * as types from '../mutation-types'

const state = {
    notification: null,
};

// getters
const getters = {
    notification: state => state.notification,
};

// actions
const actions = {
    addNotification ({ commit }, notif) {
        commit(types.SET_NOTIFICATIONS, notif)
    },

};

// mutations
const mutations = {

    [types.SET_NOTIFICATIONS] (state, notif) {
        state.notification = notif;

        setTimeout( function () {
            state.notification = null;
            },4000
        );
    },

};

export default {
    state,
    getters,
    actions,
    mutations
}