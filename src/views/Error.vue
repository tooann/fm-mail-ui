<template>
  <div class="wrap">
    <h1>404</h1>
    <div class="banner">
      <img src="@/assets/img/banner.png" alt="404">
    </div>
    <div class="page">
      <h2>Sorry,we can't find that page!</h2>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.wrap
  margin 0 auto
  padding 10px
  h1
    text-align center
    margin-top 20px
    color #603813
    font-size 2em
    text-transform uppercase
    font-weight bold
  .banner
    text-align center
    margin-top 20px
    img
      max-width 100%
  .page
    text-align center
    font-family "Century Gothic"
    h2
      font-size 18px
      color rgb(99, 44, 37)
      font-weight bold
      margin-top 12px
</style>
