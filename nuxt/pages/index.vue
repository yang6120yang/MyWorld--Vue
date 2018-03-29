<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        My test
      </h1>
      <h2 class="subtitle">
        Hello World!
      </h2>
      <!-- <ul class="naves">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/news">News</a></li>
      </ul> -->
      <ul class="naves">
        <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
        <li><nuxt-link :to="{name:'about'}">About</nuxt-link></li>
        <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">News</nuxt-link></li>
      </ul>
    </div>
    <div>
        <img src="~static/logo_me.svg" alt="" srcset="">
    </div>
  </section>
</template>
<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
  components: {
    AppLogo
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.naves{
    display: flex;
    justify-content: space-around;
}
.naves li{
    margin: 0 10px;
}
.links {
  padding-top: 15px;
}
</style>
