<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <p>
            <router-link to="/">首页</router-link> |
            <router-link to="/hi">goHome</router-link> |
            <router-link to="/hi">Hi页面</router-link> |
            <router-link to="/params/aa/jsBox">Params</router-link> |
            <router-link to="/params/918/I like jsBox">Go Params(redirect)</router-link> | 
            <router-link to="/test">Alias</router-link> 
        </p>
        <div>
            <button @click="goBack">后退</button>
            <button @click="goFront">前进</button>
            <button @click="goIndex">回首页</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      },
      goFront(){
          this.$router.go(1);
          console.log('前进');
      },
      goIndex(){
          this.$router.push('/');
          console.log('回首页');
      }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
