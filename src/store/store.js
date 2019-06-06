import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        navgatebotoom:false,
        lists:[
            {name:'Hurry',star:'天蝎座',id:1},
            {name:'Jimmy',star:'天秤座',id:2},
            {name:'Anny',star:'处女座',id:3},
        ]
    }
})
