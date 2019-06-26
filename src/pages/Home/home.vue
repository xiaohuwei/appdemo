
<template>
<div>
<Myheader bol='true'>
<img src='../../assets/images/ic_chat_white.png' class='rightImg' slot="right">
<div slot="search" class="search">
    <input type="text" placeholder="影视 图书 唱片 小组">
    <img src='../../assets/images/ic_group_search_small.png' class="searchImg">
    <img src='../../assets/images/ic_scan_gray.png' class="scanImg">
</div>
</Myheader>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
<Banner swiperid='go' paginationdesition='right' >
    <div slot="swiper-con" class="swiper-slide" >
        <img src="../../assets/images/banner/01.jpg" alt="">
    </div>
        <div slot="swiper-con" class="swiper-slide">
        <img src="../../assets/images/banner/02.jpg" alt="">
    </div>
        <div slot="swiper-con" class="swiper-slide">
        <img src="../../assets/images/banner/03.jpg" alt="">
    </div>
</Banner>  
<Cell title='聚焦当下' :hot='true'></Cell>

<List v-for="(item,index) in arr" :url='"http:"+item.image_url' :key='index'>
    <span slot='title' @click='tishi(item.item_id)'>{{item.title}}</span>
    <span slot='desc' @click='tishi(item.item_id)'>来源:{{item.source}}</span>
</List>

</van-pull-refresh>
 <div style="height:80px;width:100%"></div> 
</div>
</template>
<script>
import Cell from '../../components/cell'
import Myheader from '../../components/header'
import Banner from '../../components/banner'
import List from '../../components/newslist'
export default {
    data(){
        return{
        arr:[],
        count: 0,
        isLoading: false
        }
    },
    components:{
        Myheader,
        Banner,
        Cell,
        List
    },
    created() {
        this.fn();
    },
    methods: {
        fn(){
                this.toutiao()
                .then(res=>{this.arr=res;})//api.js里面挂载到原型的方法
        },
        tishi(i){
               this.$router.push('/detail/'+i)
        },
    onRefresh() {
      setTimeout(() => {
        this.fn();
        this.$toast('好啦，给您更新了数据哟~');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
    },
}
</script>



