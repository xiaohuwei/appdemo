<template>
<div>
<van-nav-bar
  title="文章详情页"
  left-text="返回"
  
  :left-arrow='bol'
  @click-left="tui"
 
/>

<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
          <van-tabs v-model="active">
    <van-tab title="新闻详情">

<div v-for='(v,i) in arr.img' :key='i' class="memeda5">
        <img :src="v.src" >
      </div>
<h2>{{arr.title}}</h2>
<br>
<div class="xixixi" v-html='arr.content'>
</div>

      
    </van-tab>
  <van-tab title="新闻来源">{{arr.source}}</van-tab>


    <van-tab title="发布时间">{{time}}</van-tab>
</van-tabs>
       <div style="height:70px;width:100%"></div>
        </van-pull-refresh> 
    </div>
</template>
<script>
//import Myheader from '../../components/header'
export default {
    components:{
       // Myheader
    },
    data(){
        return{
        bol:true,
        arr:[],
        index:'',
        count: 0,
        isLoading: false,
        activeNames: ['1'],
        active: 0,
        time:''
  
        }
    },
    mounted(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    this.fn(this.$route.params.id);//接受新闻唯一ID
    },
    methods: {
    fn(ids){
        const can = {
            id:ids
        };
          this.heheda(can).then(res=>{
          this.arr=res;
         var date = new Date(res.publish_time * 1000);
         var Y = date.getFullYear() + '-';
         var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
         var D = date.getDate() + ' ';
         var h = date.getHours() + ':';
         var m = date.getMinutes() + ':';
         var s = date.getSeconds();
         this.time = Y+M+D+h+m+s;
        })
        },
        tui(){
            this.$router.go(-1);
        },
      onRefresh() {
      setTimeout(() => {
        this.$toast('好啦，给您更新了数据哟~');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    },
}
</script>
<style>
.xixixi img{
    height:100%;
    width: 85%;
    box-shadow: rgba(0,0,0,0.5) 0 0.3125rem 0.5625rem;
    margin-top:10px;
}
.xixixi p{

  font-size: 20px;
  line-height: 30px;
}
.pgc-img-caption{
  text-align: center!important;
}
.van-icon-arrow-left {
    
    
    left: 0px;
}
</style>
