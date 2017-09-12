<template>
  <div id="app">
    <!--<keep-alive>-->
    <!--<router-view></router-view>-->
    <!--</keep-alive>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

      mounted(){
           console.log("当前登陆状态：",this.$store.getters.getIsLogin);
        }
}
</script>

<style>
body{
    background-color: #E7EBEE;
    margin: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
