
<template>
<div>
<Myheader txt='豆瓣数据展示'>
<img src='../../assets/images/ic_actionbar_search_icon.png' class='leftImg' slot="left"> 
<img src='../../assets/images/ic_chat_green.png' class='rightImg' slot="right">
</Myheader>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
<div class="nav">
            <span :class="{active:nowIndex==0}" @click="nowIndex=0"><router-link to="/audio/movie" >最新上映</router-link></span>
             <span :class="{active:nowIndex==1}" @click="nowIndex=1"><router-link to="/audio/top250" >Top250</router-link></span>
</div>
<router-view></router-view>
</van-pull-refresh>
</div>

</template>
<script>
import Myheader from '../../components/header'
import Movies from '../../components/movies'
export default {
    components:{
        Myheader,
        Movies
    },
    data(){
        return{
            nowIndex:0,
            count: 0,
            isLoading: false
        }
    },
    methods: {
            onRefresh() {
      setTimeout(() => {
        this.$toast('好啦，给您更新了数据哟~');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
    },
}
</script>
<style>
    .box ul{
        display: flex;
        margin: 10px 0;
        border-bottom: 1px solid gainsboro;
        box-shadow: 0 3px 5px #ccc;
    }
    .box ul li{
        list-style: none;
        font-size: 12px;
        text-align: left;
        padding-left: 10px;

    }
    .box ul .leftcon{
        flex: 7;
    }
    .box ul .rightcon{
        flex: 3;
    }
    .box ul .rightcon img{
        width: 80%;
    }
    p:last-child{
        color:red;
    }
    p:first-child{
        font-weight: 700;
        color:black;
    }
     .nav{
        height: 30px;
        border-bottom: 1px solid #eee;
        line-height: 30px;
        
        margin-bottom: 3px;
    }
    .nav a{
        display: block;
        width: 20%;
        float: left;
        color: #999;
        font-size: 14px;
        text-decoration: none;
        font-weight: 700;
    }
    
    .nav .active a{
        border-bottom: 2px green solid;

    }

</style>