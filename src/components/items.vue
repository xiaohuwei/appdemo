<template>
  <div class="page">
       <div class="mineitem">
        <div class="iconbox">
          <p>我的可爱功能块</p>
          <table cellspacing="0" border="0">
            <tr>
              <td><img src="../assets/icons/dianpu.png" alt=""><br />可爱</td>
              <td><img src="../assets/icons/dianzan.png" alt=""><br />小姐姐</td>
              <td><img src="../assets/icons/gongneng.png" alt=""><br />你真</td>
              <td><img src="../assets/icons/gouwuche.png" alt=""><br />好看</td>
            </tr>
            <tr>
              <td><img src="../assets/icons/gouwudai.png" alt=""><br />小姐姐</td>
              <td><img src="../assets/icons/jingdian.png" alt=""><br />快点</td>
              <td><img src="../assets/icons/liwu.png" alt=""><br />加我</td>
              <td><img src="../assets/icons/wangluo.png" alt=""><br />微信</td>
            </tr>


          </table>


        </div>

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
.page{
  margin-top: 20px;
}
.page .iconbox p{
  text-align: left;
  font-size: 14px;
  text-indent: 2em;
  color: rgb(158, 158, 158);
  height: 30px;
  line-height:30px; 
  font-weight: 600;
  border-bottom: 1px solid gainsboro;
}
.page .iconbox{
  width: 95%;
  margin: 0 auto;
  border: 1px solid gainsboro;
  border-radius: 10px;
  box-shadow: 0 0 10px gainsboro;

}
.page .iconbox table{
  width: 100%;
  height: 160px;
  margin:0 auto;
}
.page .iconbox table tr{
  margin-bottom: 10px;
  font-size: 12px;
}
.page .iconbox table tr td img{
  width: 40%;
}

</style>
