<template>
  <div class="profile">
    <div class="title">{{title}}</div>
    <div class="clearfix">
      <van-col span="8">
      </van-col>
      <van-col span="8">
        <van-image
          round
          fit="cover"
          width="100%"
          height="30vw"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col span="8">
      </van-col>
    </div>

    <van-cell-group v-show="!isShow">
      <van-field
        v-model="loginUsername"
        label="用户名"
        placeholder="请输入用户名"
        clearable
      />
      <van-field
        v-model="loginPassword"
        type="password"
        label="密码"
        placeholder="请输入密码"
        clearable
      />
    </van-cell-group>

    <van-cell-group v-show="isShow">
      <van-field
        v-model="registerUsername"
        label="用户名"
        placeholder="请输入用户名"
        clearable
      />
      <van-field
        v-model="registerPassword"
        type="password"
        label="密码"
        placeholder="请输入密码"
        clearable
      />
    </van-cell-group>

    <van-button round size="large" type="info" v-show="!isShow" :loading ="isLoding" @click="loginHandel">登录</van-button>
    <van-button round plain hairline size="large" type="info" v-show="!isShow" @click="toRegister">暂无账号去注册</van-button>
    
    <van-button round size="large" type="info" v-show="isShow" :loading ="isLoding" @click="registerHandel">注册</van-button>
    <van-button round plain hairline size="large" type="info" v-show="isShow" @click="toLogin">已有账号去登录</van-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      title: '注册',
      isShow: true,
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: '',
      isLoding: false
    }
  },
  methods: {
    ...mapActions(['actionLogin']),
    loginHandel() {
      this.isLoding =  true;
      this.$http.post('/user/login', {
          userName: this.loginUsername,
          password: this.loginPassword
        }, (data) => {
          if(data.code === 200) {
            this.actionLogin(data);
            this.$toast.success(data.message);
            setTimeout(() => {
              this.$router.go(-1);
            },2000)
          } else {
            this.$toast.fail(data.message);
          }
          this.isLoding =  false;
        }, (data) => {
          this.$toast.fail(data.message);
          this.isLoding =  false;
        })
    },
    registerHandel() {
      if (this.registerUsername === '') {
        this.$toast('用户名不能为空');
      } else if (this.registerPassword === '') {
        this.$toast('密码不能为空');
      } else if (this.registerPassword.length < 5) {
        this.$toast('密码长度不能小于5位');
      } else {
        this.isLoding =  true;
        this.$http.post('/user/register', {
          userName: this.registerUsername,
          password: this.registerPassword
        }, (data) => {
          if (data.code === 200) {
            this.$toast.success(data.message);
          } else {
            this.$toast(data.message);
          }
          this.isLoding =  false;
        }, (data) => {
          this.$toast.fail(data.message);
          this.isLoding =  false;
        })
      }
      
    },
    toLogin() {
      this.title = '登录';
      this.isShow = !this.isShow;
    },
    toRegister() {
      this.title = '注册';
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding 16px
  .title
    padding 0 16px
    height 35px
    line-height 35px
    font-size 18px
  .clearfix
    margin 20px 0
    &::after
      content ""
      display block
      height 0
      clear both
      visibility hidden
  /deep/ .van-cell-group
    .van-cell
      .van-cell__value
        padding: 4px 0;
        .van-field__control
          height: 16px;
        .van-icon-clear
          height: 16px;
  .van-button
    margin-top 20px
</style>