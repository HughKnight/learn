<template>
  <div>
   <el-aside width="200px">
     <el-menu :default-openeds="['0']">
       <el-submenu  v-for = "(good,i) in goods" :key = "good.Type" :index="i + ''">
         <template slot="title"><i :class="good.icon"></i>{{good.Type}}</template>
         <el-menu-item-group>
           <el-menu-item v-for = "item in good.List" :key = "item.name" @click = "postdata(item)" >{{item.name}}</el-menu-item>
         </el-menu-item-group>
       </el-submenu>
     </el-menu>
   </el-aside>
  </div>
</template>

<script>
  export default { /* eslint-disable */
    name:"AsideList",
    data(){
      return{}
    },
    props:{
      goods:Array,
      title:String
    },
    created(){
      
    },
    computed:{
     
    },
    methods:{
      postdata(item) {
        this.$emit("pricedata",item);
      }
    }
  }
</script>

<style scoped>

</style>



