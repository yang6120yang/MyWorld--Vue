<template>
  <div>
      <h2>
          News Index Pages
      </h2>
      <p>NewsID:{{ $route.params.newsId }}</p>
      <ul>
          <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
          <!-- <li><a href="/news/123">News-1</a></li>
          <li><a href="/news/456">News-2</a></li>
          <li><a href="/news/jsp">News-3</a></li> -->
          <li><nuxt-link :to="{name:'news-id',params:{id:123,title:'news-1'}}">News-1</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:456,title:'news-2'}}">News-2</nuxt-link></li>
          <li><nuxt-link :to="{name:'news-id',params:{id:'test'}}">News-test</nuxt-link></li>
          <li><nuxt-link :to="{name:'asyncData',params:{title:'asyncData'}}">asyncData</nuxt-link></li>

      </ul>
  </div>
</template>