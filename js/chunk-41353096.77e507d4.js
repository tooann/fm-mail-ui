(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41353096"],{4093:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-bar"},[a("van-tabbar",{attrs:{"active-color":"#1989fa","inactive-color":"#666"},on:{change:t.changeTabbar},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"home-o",to:"/"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"apps-o",to:"/record"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{icon:"shopping-cart-o",to:"/cart"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"user-o",to:"/profile"}},[t._v("我的")])],1)],1)},r=[],o=(a("e25e"),{data:function(){return{active:parseInt(sessionStorage.getItem("active"))||0}},methods:{changeTabbar:function(t){sessionStorage.setItem("active",t)}}}),c=o,i=a("2877"),s=Object(i["a"])(c,n,r,!1,null,null,null);e["default"]=s.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",c=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(c,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:s(1),end:s(2),trim:s(3)}},e25e:function(t,e,a){var n=a("23e7"),r=a("e583");n({global:!0,forced:parseInt!=r},{parseInt:r})},e583:function(t,e,a){var n=a("da84"),r=a("58a8").trim,o=a("5899"),c=n.parseInt,i=/^[+-]?0[Xx]/,s=8!==c(o+"08")||22!==c(o+"0x16");t.exports=s?function(t,e){var a=r(String(t));return c(a,e>>>0||(i.test(a)?16:10))}:c}}]);