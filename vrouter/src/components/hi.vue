<template>
  <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            <router-link to="/">首页</router-link> |
            <router-link to="/hi">Hi页面</router-link>
        </p>
  </div>
</template>
<script>
export default {
  name:'hi',
  data (){
      return {
          msg:'Hi,I am HiBox!'
      }
  }
}
</script>
<style scoped>
a {
  color: #42b983;
}
</style>

