import Vue from 'vue' 
import Vuex from 'vuex'
import Count from './count'
import Start from './start'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
      count:Count,
      start:Start
    }
})
