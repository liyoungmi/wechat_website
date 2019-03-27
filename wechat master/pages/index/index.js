//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
        id: 0,
        "imglist": '../../images/banner/494083001.jpg',
      },
      {
        id: 1,
        "imglist": '../../images/banner/9970099001.jpg',
      },
      {
        id: 2,
        "imglist": '../../images/banner/angong911.jpg',
      },
      {
        id: 3,
        "imglist": '../../images/banner/mgaoli.jpg',
      },
      {
        id: 4,
        "imglist": '../../images/banner/yiann.jpg',
      },
    ],
    imgUrl: [
      {
        "imgOne": '../../img/150516173054.jpg',
        "price": '9.9',
        "oldprice": '1毛',
        "textOne": "驴胶补血",
      },
      {
        "imgOne": '../../img/150516173078.jpg',
        "price": '10.9',
        "oldprice": '2毛',
        "textOne": "清喉利咽"
      },
      {
        "imgOne": '../../img/150528150824.jpg',
        "price": '11.9',
        "oldprice": '3毛',
        "textOne": "加味逍遥丸"
      }
    ],
    imgUrlOne: [
      {
        "imgTwo": '../../img/150528150827.jpg',
        "price": '12.9',
        "oldprice": '4毛',
        "textTwo": "六味地黄丸"
      },
      {
        "imgTwo": '../../img/150917160621.jpg',
        "price": '13.9',
        "oldprice": '5毛',
        "textTwo": '固肾合剂'
      },
      {
        "imgTwo": '../../img/170713146855.jpg',
        "price": '14.9',
        "oldprice": '6毛',
        "textTwo": '补肺丸'
      },
    ],
    imgUrlTwo: [
      {
        "imgThree": '../../img/4632732001.jpg',
        "price": '15.9',
        "oldprice": '7毛',
        "textThree": '固本延龄丸'
      },
      {
        "imgThree": '../../img/4730293001.jpg',
        "price": '16.9',
        "oldprice": '8毛',
        "textThree": '补肾益寿胶囊'
      },
      {
        "imgThree": '../../img/6902809001.jpg',
        "price": '17.9',
        "oldprice": '9毛',
        "textThree": '益安宁丸'
      }
    ],
    interval: 3000,
    duration: 800,

    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,
  },
  // 跳转到classify分类页面
  toclassify: function(){
    wx.switchTab({
      url: "../classify/classify",
      success: function () {
        console.log('跳转到classify页面成功')       
      }
    })
  },
  toprofile: function(){
    wx.switchTab({
      url: "../profile/profile",
      success: function () {
        console.log('跳转到profile页面成功')         
      }
    })
  },
  tobuy:function(){
    wx.switchTab({
      url: "../buy/buy",
      success: function () {
        console.log('跳转到buy页面成功')
      }
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      windowHeight: wx.getStorageSync('windowHeight')
    });
  },

  // 页面渲染完成后 调用
  onReady: function () {
    var myDate = new Date();
    var time = Date.parse(myDate.toLocaleDateString()) / 1000 + 864000
    var totalSecond = time - Date.parse(new Date()) / 1000;

    var interval = setInterval(function () {
      // 秒数
      var second = totalSecond;

      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;

      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;

      // 分钟位
      var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;

      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;

      this.setData({
        countDownDay: 0,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      // if (totalSecond < 0) {
      //   clearInterval(interval);
      //   wx.showToast({
      //     title: '活动已结束',
      //   });
      //   this.setData({
      //     countDownDay: '00',
      //     countDownHour: '00',
      //     countDownMinute: '00',
      //     countDownSecond: '00',
      //   });
      // }
    }.bind(this), 1000);
  },

})
