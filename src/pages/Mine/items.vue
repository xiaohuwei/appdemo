<template>
  <div class="page">

        
       <div class="mineitem">

<van-button plain type="primary" @click="nihao">随机一句话</van-button>
     </div>
  </div>
</template>

<script>

 
export default {
  name: '',
  components: {},
  data() {
    return {
        msg:'我与春风皆过客，你携秋水揽星河。'
    }
  },created(){
    
  },
  methods: {
    toy(){
      fetch('https://v1.hitokoto.cn')
    .then(function (res){
     return res.json();
    })
    .then( (data)=> {
      var hitokoto = document.getElementById('hitokoto');
      this.msg=data.hitokoto ; 
    })
    .catch(function (err) {
    })
    },
        nihao(){
        this.toy();
        this.$notify({
        message: this.msg,
        duration: 2000,
        background: '#42bd56'
                });
    }
  },
}
</script>

<style scoped>
.po{
  line-height: 50px;
}
.page .mineitem ul{
        width: 100%;
    }
.page .mineitem ul li{
    width: 80%;
    height: 50px;

    list-style: none;
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 10px rgb(238, 237, 237);
    border-radius: 5px;
    margin-left: 10%;
}
.van-button--plain{
  margin-top:10px;
}
</style>