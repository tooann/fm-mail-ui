<template>
  <div class="footer-bar">
    <van-tabbar
      v-model="active"
      active-color="#1989fa"
      inactive-color="#666"
      @change="changeTabbar"
    >
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/record">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: parseInt(sessionStorage.getItem('active')) || 0
    }
  },
  methods: {
    changeTabbar(active) {
      sessionStorage.setItem('active', active)
    }
  }
}
</script>

<style lang="stylus">
</style>
