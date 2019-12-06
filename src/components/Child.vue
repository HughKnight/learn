<template>
  <div>
    this is child page
    {{propName}}
    <button @click="response">result</button>
    <h2>{{anum}}</h2>
  </div>
</template>

<script>
import passdata from '../comm/passdata'
  export default {
    name:'child',
    data() {
      return {
        recode:true,
        anum:''
      }
    },
    props: {
      propName: {
        type: String,
        default: ''
      },
    },
    methods: {
      response() {
        this.$emit('result',this.recode)
      }
    },
    mounted(){
      passdata.$on('pasmsg',(val)=>{
        this.anum = val;
      })
    }
  }
</script>

<style  scoped>

</style>