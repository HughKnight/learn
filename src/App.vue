<template>
  <div id="app">
    <star-list></star-list>
    <count-star></count-star>  
  </div>
</template>

<script>
import StarList from './components/StarList.vue'
import CountStar from './components/CountStar.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    StarList,
    CountStar
  },
  created(){
  //  axios.get('/info').then(function(res){
  //    console.log('res',res);
  //  })
  }
}
</script>

<style scope>

</style>
