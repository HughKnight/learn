<template>
  <div>
    this is home page
    <router-view :propName="insert()" @result="result" ref="child"></router-view>
    <h1 v-show='show'>返回了</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       msg: "this is me palce",
       show:false
      }
    },
    methods: {
      insert() {
        return this.msg;
      },
      result(v){
        // console.log(v)
        this.show = v;
      }
    },
    mounted () {
      // console.log(this.$refs.child)
    },
  }
</script>

<style  scoped>

</style>