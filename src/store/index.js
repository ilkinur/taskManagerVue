import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

export default new Vuex.Store({
    state : {

        url:'http://localhost:8000/api',

    },
    mutations : {

    },
    actions : {


    },
    getters : {

        getUrl(state){

          return state.url
        },

    }
})
