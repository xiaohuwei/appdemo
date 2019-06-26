<template>
  <div class="page">
      <div class='userlogin'>
          <div class="headimg"><img src="https://blog.xiaohuwei.cn/sina.php?url=https://ws3.sinaimg.cn/large/006nCBHOgy1fsswu9e675j305k05kjt2" alt=""></div>

           <div class="btns">
               <p>欢迎来到肖虎威的地方！</p>
                <button>注册</button><span>&nbsp;</span><button>登陆</button>
             </div>
             <ul>
                 <li><p>个人信息 &nbsp <van-icon name="manager" /></p></li>
                 <li><p>收藏夹 &nbsp <van-icon name="star" /></p></li>
                 <li><p>我喜欢 &nbsp <van-icon name="like" /></p></li>
                 <li><p>足迹 &nbsp <van-icon name="youzan-shield" /></p></li>
             </ul>
      </div>
     
    
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
    .page .userlogin{
        width: 100%;
        height: 160px;
        background: rgb(66,189,86);
        position: relative;
    }
    .page .userlogin .headimg{
        width: 70px;
        height: 70px;
        border: 1px solid rgb(250, 238, 75) ;
        box-shadow: 0 0 8px salmon;
        background: ghostwhite;
        border-radius: 50%;
        position: absolute;
        left: 20px;
        top:20%;
    }
    .page .userlogin .headimg img{
         width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .page .userlogin .btns button{
        width: 60px;
        height: 25px;
        border: 1px rgb(250, 238, 75)  solid;
        font-size: 14px;
        text-align: center;
        line-height: 25px;
        color: white;
        background: none;
        border-radius:5px;
        box-shadow: 0 0 4px salmon; 
    }
    .page .userlogin .btns{
        position: absolute;
        left:110px;
        top: 20%;
    }
    .page .userlogin .btns p{
        color: white;
        font-size: 14px;
        line-height: 30px;
        text-align: left;
        text-indent: 3px;
        position: relative;
    }
    .page .userlogin ul{
        width: 100%;
        height: 30px;
        display: flex;
        position: absolute;
        bottom: 0;
    }
    .page .userlogin ul li{
        width: 100%;
        list-style: none;

    }
    .page .userlogin ul li p{
        color:white;
        font-weight: 700;
        font-size: 14px;
    }
    .van-icon{
        position: absolute;
        top:3px;
        
    }

</style>
