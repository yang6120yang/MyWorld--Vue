<template>
  <div>
      <h1>姓名：{{info.name}}</h1>
      <h2>年龄：{{info.age}}</h2>
      <h2>兴趣：{{info.interest}}</h2>
      <nuxt-link :to="{name:'index'}">Home</nuxt-link>
  </div>
</template>
// <script>
// import axios from 'axios'
// export default {
//   data(){
//      return {
//          name:'hello World',
//          //info:''//省略了
//      }
//   },
//   asyncData(){
//       return axios.get('https://api.myjson.com/bins/7czt3')
//       .then((res)=>{
//           console.log(res)
//           return {info:res.data}
//       })
      
//   }
// }
// </script>
<script>
import axios from 'axios'
export default {
  data(){
     return {
        name:'hello World',
        title:this.$route.params.title         
     }
  },
  async asyncData(){
      let {data}=await axios.get('https://api.myjson.com/bins/7czt3')//使用myjson.com建立远程json文件
      return {info: data}
      
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