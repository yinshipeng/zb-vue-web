<template>
    <div id="home">
      <header-component/>
      <router-view></router-view>
    </div>
</template>
<script>
    import HeaderComponent from './header.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            HeaderComponent,
        }
    }
</script>
<style>
    #home{
    }
</style>
