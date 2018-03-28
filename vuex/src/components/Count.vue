<template>
  <div>
      <h2>{{ msg }}</h2>  
      <hr/>
      <!-- <h3>分数：{{ $store.state.count }}</h3> -->
      <h3>分数：{{ $store.state.a.count }}--{{ count }}</h3>
        <div>
            <button @click="$store.commit('add',10)">Add</button>
            <button @click="reduce">Reduce</button>
        </div>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
  </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';//第二/三种方法读取状态 使用mapState
export default {
  data(){
      return{
          msg:'Hello Vuex'
			}
	},
	// computed:{	//第一种方法读取状态
	// 	count(){
	// 		return this.$store.state.count;
	// 	}
	// },

	// computed:mapState({	//第二种方法读取状态
	// 	count:state => state.count
			// count:function(state){//es5写法
			// 	return state.count;
			// }
	// }),

//	computed:mapState(['count']),//第三种方法数组方式读取状态
    computed:{
        //////...mapState(['count']),
        // count(){
        //     return this.$store.getters.count;
        // }
 ////       ...mapGetters['count']
        count(){
            return this.$store.state.a.count;
        }
    },
    methods:////mapMutations(['add','reduce']),//模板获取Mutations方法:import 引入mapMutations
        {
           ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        },
  store
}
</script>

