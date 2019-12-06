<template>
  <div id="app">
    <star-list></star-list>
    <!-- <count-star></count-star>   -->
    <router-link to='/home'>Home</router-link>
    <button @click="passvale">PassMsg</button>
    <router-view></router-view>
    <input type="text" name=""  v-model="password">
  </div>
</template>

<script>
import StarList from './components/StarList.vue'
import CountStar from './components/CountStar.vue'
import Trans from '../src/comm/trans'
import passdata from './comm/passdata'
// import axios from 'axios'
export default { /* eslint-disable */
  name: 'app',
  data() {
    return {
      val: 1,
      password:''
    }
  },
  components: {
    StarList,
    CountStar
  },
  created(){
    this.$nextTick(()=>{
      console.log(Trans.TermUnit["D"])
    })
  //  axios.get('/info').then(function(res){
  //    console.log('res',res);
  //  })
  },
  methods: {
    tohome() {
      this.$router.push({name:'home',params:{id:3}})
    },
    passvale(){
      passdata.$emit('pasmsg','this app msg')
    }

  },
  watch:{
    password(){
      console.log(this.password.length);
      
    }
  }
}
</script>

<style scope>

</style>
