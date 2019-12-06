<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <menu-side :goods = "goods" :title = "title" @pricedata="data"></menu-side>
        </el-aside>
        <el-main>
          <ul>
            <li v-for="list in result" :key="list.dataCode">
              <el-row :gutter="10">
                <el-col :span="12">
                  <div class="grid-content bg-purple">{{list.name}}</div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light">{{list.star}}</div>
                </el-col>
              </el-row>
            </li>
          </ul>
          <div v-show = "flg" :class="{showstyle:flg}"> 
              <img :src="dataurl" alt="">
              <i>{{proname}}</i>
              <i>{{prooldprice}}</i>
              <i>{{proprice}}</i>
          </div>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
   </el-container>
  </div>
</template>

<script>
import Aside from './AsideList' 
import Dialog from '../mixins/showMsg'

export default {/* eslint-disable */ 
  name: 'CountStar',
  props: {
    msg: String
  },
  mixins:[Dialog],
  components:{
    "menu-side":Aside
  },
  data() {
    return {
      result:[],
      message:"",
      fruit:[],
      Vegetables:[],
      Dairy:[],
      goods:[],
      title:"",
      flg:false,
      proname:"",
      proprice:"",
      prooldprice:"",
      dataurl:""
     
    }
  },
  async created() {
  //   fetch("/api/info",{
  //     method:"GET",
  //     headers: {
  //       'Accept': 'text/plain',
  //       'Content-Type': 'text/plain'
  //     },
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       return res.json()
  //     }else{
  //       return Promise.reject({
  //         Status:res.status,
  //         StatusText:res.statusText
  //       })
  //     }
  //   })
  //   .then(data => {
  //     this.result = data.result[0].result;
  //     console.log(this.result);
  //   })
  //   .catch(error => console.log(error))
  // this.axios.get('http://localhost:8888/info')
  //     .then(res =>{
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       return 
  //     })
  this.Dialog("woooooo");
  await this.getData('/info').then(res =>{
    console.log(res);
    this.result = res.result;
  });
  await this.getData('/goods').then(res =>{
    this.goods = res.result;
    console.log("this.goods",this.goods);
    // console.log(Object.prototype.toString.call(this.goods).slice(8,-1));
  })
  },
  computed:{
    
  },
  methods: {
     getData(url) {
      return  new Promise((resolve,reject) =>{
          this.axios.get(url)
          .then(response =>{
            // console.log(response.data);
            resolve(response.data);
          })
          .catch(error => {
            console.log(error)
            reject(error);
          })
        })
    },
    data(data) {
      if(data && data.price != ''){
        console.log(data);
        this.flg = true;
        this.proprice = data.price;
        this.proname = data.name;
        this.prooldprice = data.oldprice;
        this.dataurl = data.url;
      }
    }
    
  }  
  
}
</script>
<style scope>
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .hidestyle {
    position: relative;
    left: -1000px;
  }
  .showstyle {
    position: relative;
    left: 0px;
    background-color: #f1ee1e;
  }
</style>