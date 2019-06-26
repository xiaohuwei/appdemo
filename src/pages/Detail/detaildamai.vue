<template>
  <div class="goods">
<Myheader txt='详情'>
   <span slot="tui"  @click='tui'><van-icon name="arrow-left" /></span>
</Myheader>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh" pulling-text='这是下拉刷新哟' loosing-text='释放让我来刷新~'>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="v in arr" :key="v">
        <img :src="arr.poster" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ arr.title }}</div>
        <div class="goods-price">{{ arr.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：自取</van-col>
        <van-col span="14">剩余：999+</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
<van-collapse v-model="activeName" accordion>

  <van-collapse-item title="展开商品详情" name="2">
          时间：{{arr.releasetime}}<br>
      地址：{{arr.city}}{{arr.address}}<br>
      作者介绍：{{arr.profermer_detial}}<br>
      {{arr.content}}
  </van-collapse-item>

</van-collapse>

    <van-goods-action style="bottom: 65px;">
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
     </van-pull-refresh>
    <div style="height:70px;width:100%"></div>
  </div>
</template>

<script>
import Myheader from '../../components/header'
import {getdamai} from '../../api'
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    Myheader
  },
  data() {
    return {
        arr:[],
        index:this.$route.params.id,
        count: 0,
        isLoading: false,
        activeName: ''
    };
  },
      mounted(){
        
        this.fn(this.$route.params.id);
    },
  methods: {
    fn(index){
    getdamai(`http://47.99.153.121:8021/index.php/index/detailsContent/did/${index}`)
            .then(res=>{
                this.arr=res[0];
            })
        },
    onClickCart() {
       Toast('暂无后续逻辑~');
    },
    sorry() {
      Toast('暂无后续逻辑~');
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
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>