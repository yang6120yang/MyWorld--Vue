import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:3
};
const mutations = {
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
};
const getters={
    count:function(){
        return state.count+=100;
    }
};
const actions={
    addAction(context){
        context.commit('add',12);
        setTimeout(() => {
            context.commit('reduce');
        }, 3000);
        console.log('我比reduce先执行了')
    },
    reduceAction({commit}){
        commit('reduce');
    }
}
const moduleA={
    state,mutations,getters,actions
}
// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions
// });
export default new Vuex.Store({
    modules:{a:moduleA}
})
