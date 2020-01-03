<template>
  <div class="cart">
    <van-nav-bar title="购物车"></van-nav-bar>
    <van-card
      v-for="(item, index) of cartList"
      :key="index"
      :price="item.price"
      :desc="item.name"
      :title="item.company"
      :thumb="item.img"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" @click="delCart(item._id, index)">-</van-button>
      </div>
    </van-card>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      cartList: [],
      checked: false
    }
  },
  computed: {
    ...mapState(['userInfo']),
    totalPrice(){
      return this.cartList.reduce((sum, elem)=>{
          sum += elem.price;
          return sum;
      }, 0) * 10 * 10;
    }
  },
  created () {
    this.getCartList();
  },
  methods: {
    getCartList () {
      this.$http.get('/cart/getCartList', {
        userId: this.userInfo.userId || sessionStorage.getItem('userId')
      }, (data) => {
        data.map((value) => {
          this.cartList.push(value.productId);
        })
      })
    },
    delCart(id, index){
      // 删除数据库中的数据(同学自己完成)，如果删除成功，进入回调函数，在回调函数中，如下代码
      this.cartList.splice(index, 1);
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart
  margin-bottom 120px
  .van-card__content
    text-align left
  .van-submit-bar
    bottom 50px
  .van-checkbox
    margin-left 15px
</style>