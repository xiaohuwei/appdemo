<template>
    <div>
        <div class="box1">
        <ul v-for="(v,i) of films" :key="i" >
            <li class="leftcon" @click='xiangqing(v.did)'>
                <p>{{ v.title }}</p>
                <p>演出者：{{ v.profermer }}</p>
                <p>地址：{{ v.address }}</p>
                <p>时间：{{ v.releasetime }}</p>
                <p>{{ v.price }}</p>
            </li>
            <li class="rightcon">
                <img :src="v.poster" alt="">
            </li>
        </ul>

        <div style="height:70px;width:100%"></div>
    </div>

    </div>
</template>
<script>
import {getdamai} from '../../api'
export default {
    data(){
        return{
            films:'',}
    },
    
    created(){
        this.func()
    },

    methods:{
        func(){
                getdamai('http://47.99.153.121:8021/index.php/index/details/typeId/3/count/25')
                .then(res=>{
                    this.films=res;
                })
        },
        xiangqing(i){
            this.$router.push('/broadcast/music/'+i)
        }
    }

}
</script>