<template>
  <div class="hello">
    <ul>
      <li v-for= "list in lists" :key="list.id">
        <el-row :gutter="10">
          <el-col :span="12"><div class="grid-content bg-purple">{{list.name}}</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">{{list.star}}</div></el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
export default { /* eslint-disable */
  name: 'StarList',
  props: {
    msg: String
  },
  computed: {
    lists(){
      return this.$store.state.lists;
    }
  },
  created(){
    console.log(this.$store.state);
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

</style>
