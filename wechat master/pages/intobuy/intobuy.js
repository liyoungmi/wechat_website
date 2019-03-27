Page({

  data: {
    view1: true,  //先设置隐藏
    // 滑动描点定位
    navList: [
      "商品",
      "详情",
      "说明书",
    ],
    // 轮播图
    tobuyimg: [
      {
        id: 0,
        "tobuyimglist": '../../images/banner/494083001.jpg',
        "swipertext": '轮播图临时文案'
      },
      {
        id: 1,
        "tobuyimglist": '../../images/banner/9970099001.jpg',
        "swipertext": '轮播图临时文案'
      },
      {
        id: 2,
        "tobuyimglist": '../../images/banner/angong911.jpg',
        "swipertext": '轮播图临时文案'
      },
      {
        id: 3,
        "tobuyimglist": '../../images/banner/mgaoli.jpg',
        "swipertext": '轮播图临时文案'
      },
      {
        id: 4,
        "tobuyimglist": '../../images/banner/yiann.jpg',
        "swipertext": '轮播图临时文案'
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
        "textThree": '固本延龄丸打点滴打到多多多多多FFFFFFFFFFFFFFFFFFFFFFFF'
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
    indicatorDots: true,
    autoplay: false,
    indicatorColor: '#cccccc',
    indicatorActivecolor: '#fe180f',
    interval: 5000,
    duration: 1000,

    swipertext: '轮播图临时文案',
    productPrice: 880,
    productoldPrice: 998,
    productSpecifications: '5g*18袋',
    treatmentPackage: '一盒装',

    // input默认是1  
        num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  // 实现滑动描点定位
  getStatus(e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({ status: e.currentTarget.dataset.index })
  },


  toprofile: function () {
    wx.switchTab({
      url: "../profile/profile",
      success: function () {
        console.log('跳转到profile页面成功')
      }
    })
  },
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },  //数量变化处理
  toclassify: function () {
    wx.switchTab({
      url: "../classify/classify",
      success: function () {
        console.log('跳转到classify页面成功')
      }
    })
  },
  toindex: function () {
    wx.switchTab({
      url: "../index/index",
      success: function () {
        console.log('跳转到index页面成功')
      }
    })
  },
  clickArea: function (e) {
    var num = e.currentTarget.dataset.num
    if (num == 1) {
      this.setData({
        view1: !this.data.view1
      })
    }
  }, 
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  choiceWordindex: function (event) {
    console.log(event)
  },  

})