<template>
  <div class="detail">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="detail-bg" :style="{backgroundImage: 'url('+ detail.img +')'}"></div>
    <p class="detail-name">{{detail.name}}</p>
    <p class="detail-price">￥{{detail.price}}</p>
    <p>公司：{{detail.company}}</p>
    <p>产地：{{detail.city}}</p>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="cartInfo" @click="goCart"/>
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addCart"/>
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      detail: {},
      cartInfo: parseInt(localStorage.getItem('cartInfo')) || ''
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getDetail() {
      this.$http.get('/product/getDetail', {
        id: this.$route.params.id
      }, (data) => {
        this.detail = data;
      })
    },
    addCart() {
      if (this.userInfo.userName === '未登录') {
        this.$toast('请先登录');
        setTimeout(() => {
          this.$router.push('/profile');
        },2000)
      } else {
        this.$http.post('/cart/addCart', {
          userId: this.userInfo.userId,
          productId: this.$route.params.id
        }, () => {
          this.cartInfo = (parseInt(localStorage.getItem('cartInfo')) || 0) + 1;
          localStorage.setItem('cartInfo', this.cartInfo)
          this.$toast('添加成功，请去购物车查看');
        })
      }
    },
    goCart() {
      this.$router.push('/cart');
      sessionStorage.setItem('active', 2);
    }
  },
  created() {
    this.getDetail();
  }
}
</script>

<style lang="stylus" scoped>
.detail
  font-size 14px
  text-align left
  p
    padding 5px 10px
  &-bg
    width 100%
    height 0
    padding-bottom 70%
    background-size cover
  &-name
    color #333
    font-weight bolder
  &-price
    color #ff7300
    font-size 14px
</style>