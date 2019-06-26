<template>
  <div id="app">
   <transition name="fade">
    <router-view/>
    </transition>
    
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  },
  beforeCreate() {
    this.$router.push('/');
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.van-icon-arrow-left{
  font-size: 25px;
  line-height: 44px;
 
  left: -150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
