<template>
    <div class="hello">
        <div class="box" v-for='(v,k) in arr' :key='k'>
                    <img :src='"https://blog.xiaohuwei.cn/sina.php?url="+v.images.small' alt="">
                    <span class="tit">{{v.title}}</span>   <span class="red">{{v.rating.average}}</span>
        </div>
 <div style="height:70px;width:100%"></div>
    </div>
</template>
<script>
import  Vue  from  'vue' 
import {douban} from '../api'
export default {
    beforeCreate(){
          this.$notify({
        message: '数据较慢，请稍等....',
        duration: 2000,
        background: '#42bd56'
                });
    },
    data(){
        return{
        arr:[],
        }
    },
    created() {
        this.fn();
    },
    methods: {
        fn(){
            douban('https://douban.uieee.com/v2/movie/in_theaters',18).then(res=>{this.arr=res})
        }
    },
}

</script>
<style>
.box img{
    width:100px;
}
.box{
    width: 100px;
    padding: 10px;
    height: 150px;
    display: inline-block;
    margin-top: 28px;
   
}
.hello{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       justify-content:space-between;
}
.red{
    color:red;
}
.footer{
   margin-top:90px;
}
.tit{
    font-size:12px;
}
</style>
