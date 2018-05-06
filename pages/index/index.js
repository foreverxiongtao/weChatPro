//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World xiong tao',
    userInfo: {},
    hasUserInfo: false,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  showBigImage:function(e){
    var index=e.currentTarget.dataset["index"];
    console.log("index",index);  
    wx.showToast({
      title:index.toString(),
      icon:"none"
    })  
  }
})
