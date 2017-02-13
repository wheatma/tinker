//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    tools: [{
      label: '手机归属地',
      icon: 'phone',
      page: 'phone'
    }, {
      label: '身份证',
      icon: 'id',
      page: 'id'
    }, {
      label: '敬请期待',
      icon: 'coming',
      page: 'index'
    }]
  },
  onLoad: function () {

  }
})
