import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import { Checkbox, CheckboxGroup, SubmitBar, Tag, Card, GoodsAction, GoodsActionIcon, GoodsActionButton, List, PullRefresh, Toast, Row, Col, Image, Cell, CellGroup, Icon, Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Lazyload, Field, Button } from 'vant'
import 'amfe-flexible/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(Tag).use(Card).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(List).use(PullRefresh).use(Toast).use(Row).use(Col).use(Image).use(Cell).use(CellGroup).use(Button).use(Field).use(Icon).use(Tabbar).use(TabbarItem).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload).use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
