<template>
    <div class="hello">
        <div class="box" v-for='(v,k) in arr' :key='k'>
                    <img :src='"https://blog.xiaohuwei.cn/sina.php?url="+v.images.small' alt="">
                    <span class="tit">{{v.title|movie}}</span>   <p class="red">{{v.rating.average}}</p>
<van-rate v-model="value1[k]" allow-half void-icon="star" void-color="#eee" :size="15" readonly />
        </div>
 <div style="height:75px;width:100%"></div>
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
        value:1.5,
        value1:[]
        }
    },
    created() {
        this.fn();
    },
    methods: {
        fn(){
            douban('https://douban.uieee.com/v2/movie/in_theaters',18).then(res=>{this.arr=res;
            res.forEach(v => {
                this.value1.push(v.rating.average/2);
            });
          
            })
        }
    },
}

</script>
<style>
.box img{
    width:100px;
    height: 148px;
}
.box{
    width: 100px;
    padding: 10px;
    height: 150px;
    display: inline-block;
    padding-bottom:55px; 
   
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
