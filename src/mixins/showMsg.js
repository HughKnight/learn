

export default{ /* eslint-disable */
  name:"showMsg",
  data(){
    return{

    }
  },
  created() {
    // setTimeout(() => {
      console.log("oooo");
    // }, 6000);
  },
  methods:{
    Dialog(msg){
      console.log(msg);
    },
    
  }
}