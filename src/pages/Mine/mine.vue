<template>
<div>
    <Myheader txt='我的'>
    <img src='../../assets/images/ic_settings.png' class='rightImg' slot="right">
</Myheader>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
<Hea></Hea>

<Cell title='公告API 来自肖虎威博客'>
    <img src="../../assets/images/ic_mine_notification.png" alt="" slot="icon" class="cell_img">
<img src="../../assets/images/ic_arrow_gray_small.png" alt="" slot="cell-right" class="cell_right_img">
</Cell>
<br>
<van-notice-bar
  color="white"
  background="#42bd56"
  left-icon="success"
>
{{msg}}
</van-notice-bar>
<Memeda></Memeda>
<List></List>

</van-pull-refresh>
<div style="height:70px;width:100%"></div>
</div>

</template>
<script>
import Cell from '../../components/cell'
import Myheader from '../../components/header'
import Hea from './minelist'
import List from './items'
import Memeda from '../../components/items'
export default {
    components:{
        Myheader,
        Cell,
        List,
        Hea,
        Memeda
    },
    data(){
        return{
            count: 0,
            isLoading: false,
            msg:'公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告'
        }
    },
 mounted() {
        this.meme()
    },
    methods: {
      onRefresh() {
      setTimeout(() => {
        this.$toast('好啦，给您更新了数据哟~');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    meme(){
        this.xiao.gonggao().then(res=>{
          const str = res.concent+res.dateandtime;
          this.msg = str;
        })
    }
    },
}
</script>