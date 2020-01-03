<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="left" />
      <van-icon slot="right">{{userInfo.userName}}</van-icon>
    </van-nav-bar>

    <div class="adswiper-container">
      <swiper :options="adSwiperOption">
        <swiper-slide class="swiper-slide" v-for="(image, key) in images" :key="key" :style="{backgroundImage: 'url(' + image +')'}"> 
        </swiper-slide>
        <div class="swiper-pagination" id="pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="hot">
      <p class="hot-title border-bottom">最热商品</p>
      <div>
        <swiper :options="hotSwiperOption">
          <swiper-slide v-for="(item, index) in hotList" :key="index">
            <div>
              <img :src="item.imgUrl"/>
            </div>
            <p>{{item.description}}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="recommend">
      <p class="recommend-title border-bottom">推荐商品</p>
      <div v-for="(item, index) of recommendList" :key="index" class="recommend-list">
        <div>
          <img :src="item.imgUrl"/>
        </div>
        <p>{{item.description}}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
import Mock from 'mockjs'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
      adSwiperOption: {
        effect : 'coverflow',
        centeredSlides: true,
        spaceBetween: '10%',
        slidesPerView: 'auto',
        loop: true,
        autoplay:true,
        coverflowEffect: {
          rotate: 0,
          stretch: 1,
          depth: 300,
          modifier: 0.6,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      hotSwiperOption: {
        slidesPerView: 3.3
      },
      hotList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  created() {
    this.mockFn();
    this.randomMockFn();
    this.getHotList();
    this.getRecommendList();
  },
  methods: {
    randomMockFn() {
      const Random = Mock.Random
      const recommendData = () => {
        let recommend = [];
        for (let i = 0; i < 100; i++) {
          let newRecommendObject = {
            imgUrl: Random.dataImage('300x250', 'mock的图片'),
            description: Random.cparagraph()
          }
          recommend.push(newRecommendObject)
        }

        return recommend
      }
      Mock.mock('/recommendList', 'post', recommendData);
    },
    mockFn() {
      Mock.mock('/hotList', 'get', {
        'data|10-20': [
          {
            imgUrl: '@image(200x200)',
            description: '@sentence'
          }
        ]
      })
    },
    getHotList() {
      this.$http.get('/hotList').then(({ data }) => {
        this.hotList = data.data;
      })
    },
    getRecommendList() {
      this.$http.post('/recommendList').then((data) => {
        this.recommendList = data.data;
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  background-color #f2f2f2
  margin-bottom 50px
  .van-nav-bar
    position fixed
    top 0
    z-index 999 !important
    width 100%
    .van-icon
      font-size 20px
    .van-nav-bar__right
      i
        font-size 14px
  .adswiper-container
    width 100%
    margin-top 50px
    overflow hidden
    padding 5px 0 0 0
    .swiper-container
      width 100%
      .swiper-wrapper
        .swiper-slide
          background-position center
          background-size cover
          background-color #f2f2f2
          width 325px
          height 150px
          border-radius 4px
      /deep/ .swiper-pagination
        height 20px
        font-size 12px
        color #fff
        letter-spacing 0
        line-height 20px
        bottom 0
        &-bullet
          background #fff
          opacity 0.8
          height 5px
          border-radius 4px
          width 5px
          transition all 0.2s
        &-bullet-active
          width 20px
  .hot
    background-color #ffffff
    margin-top 5px
    &-title
      background-color #ffffff
      width 100%
      height 40px
      line-height 40px
      padding-left 10px
      font-size 14px
      text-align left
    .swiper-container
      padding 0 4px
      height 150px
      .swiper-slide
        div
          padding 4px
          height 100px
          img
            width 100%
            background-color #f2f2f2
            box-sizing border-box
        p
          font-size 14px
          margin-top 4px
          padding 0 4px
          height 30px
          line-height 15px
          text-align center
          display -webkit-box
          -webkit-line-clamp:2
          overflow hidden
          text-overflow ellipsis
          -webkit-box-orient vertical
  .recommend
    margin-top 5px
    padding 0px 4px
    display flex
    flex-wrap wrap
    background-color #ffffff
    &-title
      background-color #ffffff
      width 100%
      height 40px
      line-height 40px
      font-size 14px
      text-align center
    .recommend-list
      justify-content space-around
      width calc(100%/3)
      overflow hidden
      margin-top 5px
      div
        padding 0px 4px
        height 100px
        img
          width 100%
          box-sizing border-box
          background-color #f2f2f2
      p
        font-size 14px
        text-align center
        padding 0 4px
        line-height 18px
        height 36px
        display -webkit-box
        -webkit-line-clamp 2
        overflow hidden
        text-overflow ellipsis
        -webkit-box-orient vertical
</style>