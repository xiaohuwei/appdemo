<template>
    <div class="tabbar">
        <Item txt='首页' mark='home' :sel='selected' @change='getval'>
           <img src='../assets/images/ic_tab_home_active.png' slot="activeImg">
           <img src='../assets/images/ic_tab_home_normal.png' slot="normalImg">
        </Item>
        <Item txt='电影' mark='audio' :sel='selected' @change='getval'>
         <img src='../assets/images/ic_tab_subject_active.png' slot="activeImg">
         <img src='../assets/images/ic_tab_subject_normal.png' slot="normalImg">
        </Item>
        <Item txt='演唱会' mark='broadcast' :sel='selected' @change='getval'>
         <img src='../assets/images/ic_tab_status_active.png' slot="activeImg">
         <img src='../assets/images/ic_tab_status_normal.png' slot="normalImg">
        </Item>
        <Item txt='今天' mark='group' :sel='selected' @change='getval'>
         <img src='../assets/images/ic_tab_group_active.png' slot="activeImg">
         <img src='../assets/images/ic_tab_group_normal.png' slot="normalImg">
        </Item>
        <Item txt='我的' mark='mine' :sel='selected' @change='getval'>
         <img src='../assets/images/ic_tab_profile_active.png' slot="activeImg">
         <img src='../assets/images/ic_tab_profile_normal.png' slot="normalImg">
        </Item>
    </div>
</template>
<style>
    .tabbar{width:100%;
            height:64px;
            border-top:1px solid #ccc;
            position:fixed;
           bottom:0;
           background: white;
            }
</style>
<script>
import Item from './item'
export default {
    components:{
        Item
    },
    data() {
            return {
                selected:'home'
            }
        },
        methods: {
            getval(val){
               this.selected=val;
            }
        },
}
</script>