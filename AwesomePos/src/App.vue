<template>
  <div id="app">
    <left-nav></left-nav>
    <div class="main">
        <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
      leftNav
  }
}
</script>

<style>
@import url(assets/css/fonts/iconfont.css);
#app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html,body,div,ul,ol,li{
    margin:0;
    padding:0;
}
ul,ol,li{
    list-style: none;
}
.main{
    margin-left: 50px;
    height: 100%;
    background-color: #EFF2F7;
}
</style>
