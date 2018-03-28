<template>
  <div>
      <h2>{{ msg }}</h2>
      <p>newsId:{{ $route.params.newsId }}</p>
      <p>newsTitle:{{ $route.params.newsTitle }}</p>
      <router-link to="/">home</router-link>
  </div>
</template>
<script>
export default {
  data(){
      return{
          msg:'params pages'
      }
  },
  beforeRouteEnter:(to,from,next) => {
      console.log('准备进入params路由模板');
      next();
  },
  beforeRouteLeave:(to,from,next) => {
      console.log('准备离开params路由模板');
      next();
  }
}
/*
to:路由将要跳转的路径信息，信息是包含在对像里边的。
from:路径跳转前的路径信息，也是一个对象的形式。
next:路由的控制参数，常用的有next(true)和next(false)。
*/
</script>
<style scoped>
a {
  color: #42b983;
}
</style>


