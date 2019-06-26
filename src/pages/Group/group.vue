
<template>
<div >
   <Myheader txt='历史上的今天'>
    <img src='../../assets/images/ic_actionbar_search_icon.png' class='leftImg' slot="left"> 
    <img src='../../assets/images/ic_chat_green.png' class='rightImg' slot="right">
</Myheader> 
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
<h1 style="color:rgb(66,189,86)">{{years}}年{{month}}月{{day}}日</h1>
 <div>
        <div class="box2">
       <ul v-for="(v,i) in arr" :key="i">
            <li><img :src="v.img" alt=""></li>
            <li>{{ v.title }}</li>
            <li>{{ v.year }}年{{v.month}}月{{v.day}}日</li>
         
        </ul>
        <div style="height:70px;width:100%"></div>
    </div>

    </div>
    </van-pull-refresh>
</div>

</template>
<script>
import Myheader from '../../components/header'
var myDate = new Date();
var month  = myDate.getMonth()+1;  
var day = myDate.getDate();  

export default {
    components:{
        Myheader
    },
    created(){
        this.func()
    },
    data(){
       return{
           arr:[],
           years:2019,
           month,
           day,
           count: 0,
        isLoading: false
       }
    },
    methods:{
        func(){
           this.xiao.today().then(res=>{this.arr=res;})//调用挂载到全局的方法
        },
            onRefresh() {
      setTimeout(() => {
        this.$toast('好啦，给您更新了数据哟~');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
        }
}
</script>
<style scoped>
.box2 ul{
    width: 95%;
    margin:3% 2.5%;
    border: gainsboro 1px solid;
    box-shadow: 0 0 20px gainsboro;
    border-radius: 5px;
}
.box2 ul li{
    list-style: none;
    font-size: 14px;
    text-align: left;
}
.box2 ul li:nth-child(2){
    color: rgb(66,189,86);
    padding: 0 20px;
    font-size:20px;
}
.box2 ul li:nth-child(3){
    font-weight: 700;
    padding: 0 20px;
    font-size: 17px;
}
.box2 ul li:last-child{
    margin-bottom: 18px;
    padding: 0 20px;
    color:gray;
}
.box2 ul li img{
    width: 100%;
}
</style>