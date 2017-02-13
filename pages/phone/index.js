// pages/phone/index.js
const juheRequest = require('../../utils/request.js').juheRequest

Page({
  data:{
    phone: '',
    info: {},
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  inputChange: function(e) {
    let value = e.detail.value || ''
    let key = e.target.dataset.type || ''
    this.setData({
      [key]: value,
    });
  },
  query: function() {
    const self = this;
    const phone = self.data.phone
    wx.showToast({
        title: '查询中',
        icon: 'loading',
        duration: 3000
    })
    juheRequest({
      url: '/mobile/get',
      data: {
        phone,
        key: '480881101b9dd97a3672b4652a90121f'
      },
      success: function(res) {
        wx.hideToast()
        self.setData({
          info: res,
        })
      }
    })
  }
})