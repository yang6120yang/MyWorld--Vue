<template>
  <div>
      <h2>News-content</h2>
      <p>NewsID:{{ $route.params.id }}</p>
      <ul>
          <li><a href="/">Home</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  validate({ params }){
      return /^\d+$/.test(params.id);
  },
  transition:'test',
  data(){
      return {
          title:this.$route.params.title
      }
  },
  head(){
      return{
          title:this.title,
          meta:[
              {hid:'description',name:'news',content:'this is news page'}
          ]
      }
  }
}
</script>


