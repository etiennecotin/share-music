/**
 * Created by etienne on 08/07/2017.
 */

import {HTTP} from '../../api.js'

import * as types from '../mutation-types'

const state = {

    allCategory: {},
    category: {
        'load': true
    }


};

// getters
const getters = {

    // getLastConnection: state => state.lastConnection,
    // getLogged: state => state.logged,
    allCategory: state => state.allCategory,
    category: state => state.category,
};

// actions
const actions = {

    getAllCategory ({ commit }) {

        HTTP.get('category')
            .then(response => {
                state.allCategory = response.data;

            })
            .catch(e => {
                // this.errors.push(e)
            })

        console.log(state.allCategory)
        return new Promise((resolve, reject) => {

            if (state.allCategory){

                resolve(true)

            }else {
                reject(false)
            }


        })

    },
    getCategory ({ commit }, url_name) {


        return new Promise((resolve, reject) => {


            // if (response){
            //     console.log("true")
            //     resolve(true)
            //
            // }else {
            //     reject(false)
            // }

            HTTP.get('category/'+url_name)
                .then(response => {
                    state.category = response.data;
                    // console.log(state.category)

                    resolve(true)
                })
                .catch(e => {
                    // this.errors.push(e)
                    reject(false)
                })

        })

    },
};

// mutations
const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}