<template>
  <div class="hello">
    <ul>
      <li v-for= "list in lists" :key="list.id">
        <el-row :gutter="10" >
          <el-col :span="12"><div  :class="{active:isActive == list.id }" @click="getinfo(list.id)" class="grid-content bg-purple">{{list.name}}</div></el-col>
          <el-col :span="12"><div  :class="{active:isActive == list.id }" class="grid-content bg-purple-light">{{list.star}}</div></el-col>
        </el-row>
      </li>
    </ul>
    <!-- <div class="column">
      <dir>1</dir>
      <dir>2</dir>
      <dir>3</dir>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default { /* eslint-disable */
  name: 'StarList',
  data(){
    return {
      isselect:'',
      // lists:this.$store.state.lists
    }
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState({
        lists:(state)=> state.start.lists
    }),
    isActive() {
      for (let i = 0; i < this.lists.length; i++) {
        if(this.lists[i].id==this.isselect){
          return this.lists[i].id
        } 
      }
      return 1
    }
  },
  created(){
    console.log("lists",this.$store.state.start);
  },
  methods: {
    getinfo(index){
      this.isselect = index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 36px;
  }
  .active{
    background-color: #faf60c;
  }
  .column{
    justify-items: flex-start;
  }

</style>
