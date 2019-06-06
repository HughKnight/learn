<template id="home">
  <div>
    <app-slot v-slot:header>
      <p>我的棒棒糖</p>
    </app-slot>
  </div>
</template>

<script>
import slot from '../share/slot'
export default {
  name :"home.vue",
  data() {
    return {

    }
  },
  components:{
    "app-slot":slot
  }
}
</script>