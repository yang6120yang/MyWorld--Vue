<template>
    <div id="app">
        <img src="./assets/logo.png">
        <transition name="fade" mode="out-in">  
            <router-view></router-view>
        </transition>        
        <router-view name="leftNav" style="float:left;width:300px;background-color:#ccc;heith:200px;"></router-view>
        <router-view name="rightNav" style="float:right;width:300px;background-color:#c0c;heith:200px;"></router-view>
    </div>    
</template>

<script>
    export default {
      name: "App"
    };
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
p{
    text-shadow: 0 0 5px rgba(0,0,0,.5);
}
a{
    color: #42b983;
}
.fade-enter{
    opacity: 0;
}
.fade-leave{
    opacity:1;
}
.fade-enter-active{
    transition: opacity .5s;
}
.fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
}
</style>
