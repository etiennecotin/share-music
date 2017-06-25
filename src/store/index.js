import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'
import general from './modules/general'
import users from './modules/users'
// import info from './modules/info'
// import menu from './modules/menu'
// import messages from './modules/messages'
// import enseignants from './modules/enseignants'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
        general,
        users,
        // info,
        // menu,
        // messages,
        // enseignants
    }
})