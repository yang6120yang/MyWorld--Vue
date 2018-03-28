<template>
  <div>
      {{ msg }}
      <p><input type="text" v-model="msg"></p>
  </div>
</template>
<script>
export default {
  name:'error',
  data(){
      return{
          msg:'404'
      }
  }
}
</script>
