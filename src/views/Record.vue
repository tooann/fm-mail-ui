<template>
  <div class="record">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <van-row>
      <van-col span="6">
        <ul>
          <li class="record-list" v-for="(item, index) of recordList" :key="item.typeId" :class="{'active-record': activeIndex===index}" @click="changeRecord(index, item.typeId)">
            {{item.typeName}}
          </li>
        </ul>
      </van-col>
      <van-col span="18">
        <div class="product-wrap">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              loading-text="加载中..."
              finished-text="我们是有底线的"
              @load="onLoad"
            >
              <div class="product-list" v-for="(item, index) of productList" :key="index" @click="showDetail(item._id)">
                <img :src="item.img"/>
                <div class="product-des">
                  <p class="title">{{item.company}}</p>
                  <p class="desc-contennt">{{item.name}}</p>
                  <p class="product-price">￥{{item.price}}元</p>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Mock from 'mockjs';
import type from '@/data/type.js';
import products from '@/data/product.js';
export default {
  data () {
    return {
      activeIndex: 0,
      activeTypeId: 1,
      recordList: [],
      productList: [],
      isLoading: true,
      loading: false,
      finished: false,
      limit: 10
    }
  },
  methods: {
    mockFn() {
      Mock.mock('/getTypes', 'get', () => {
        return type
      })
      Mock.mock('/getProducts', 'get', () => {
        return products
      })
    },
    // 切换分类列表
    changeRecord (index, typeId) {
      this.activeIndex = index;
      this.activeTypeId = typeId;
      this.getProducts(typeId);
    },
    // 查询分类列表
    getTypes () {
      this.$http.get('/getTypes').then(({data}) => {
        this.recordList = data;
      })
    },
    // 查询分类商品
    getProducts (typeId) {
      this.productList = [];
      this.$http.get('/getProducts', {
        typeId: typeId,
        start: this.productList.length,
        limit: this.limit
      }).then(({data}) => {
        if (data.length !==0 ) {
          this.productList = this.productList.concat(data);
        } else {
          this.finished = true;
        }
        this.loading = false;
      })
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.getProducts(this.activeTypeId);
      }, 1000);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.getProducts(this.activeTypeId);
      }, 500);
    },
    showDetail(productId) {
      this.$router.push(`/detail/${productId}`)
    }
  },
  async created () {
    this.mockFn();
    await this.getTypes();
    this.changeRecord(0, 1)
  }
}
</script>

<style lang="stylus" scoped>
.record
  .record-list
    background #f2f2f2
    font-size 14px
    height 40px
    line-height 40px
  .active-record
    background #ffffff
  .product-wrap
    position fixed
    top 50px
    bottom 50px
    overflow-y auto
    .product-list
      display flex
      margin-bottom 10px
      img
        width 100px
        height 100px
        background #f2f2f2
        border-radius 4px
        margin 0 5px
      .product-des
        padding 0 10px
        flex 1
        p
          font-size 14px
          text-align left
          margin-bottom 5px
        .title
          font-weight 600
        .desc-contennt
          word-break break-all;
          text-overflow ellipsis;
          display -webkit-box;
          -webkit-box-orient vertical;
          -webkit-line-clamp 2;
          overflow hidden;
        .product-price
          color #ff1415
</style>