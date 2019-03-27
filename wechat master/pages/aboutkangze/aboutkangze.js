var statusArrs = [];
for (var i = 0; i < 5; i++) {
  statusArrs.push(true);
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['公司介绍', '关于康泽', '新闻中心', '主营业务', '经营品牌', '人才发展', '交流中心'],
    shopitem: '关于康泽',   //默认显示的


    indexSize: 0,
    index: 0,
    showArr: statusArrs,


    imgindex: "0",
    classData:[
      {
        image: '../../img/aboutKZ/oicon_02_06.png',
        title: "康泽简介",
        clickUrl: "../../img/aboutKZ/oicon_02_03.png"
      },
      {
        image: '../../img/aboutKZ/oicon_01_06-09.png',
        title: "发展历程",
        clickUrl: "../../img/aboutKZ/oicon_01_03-08.png"
      },
      {
        image: '../../img/aboutKZ/oicon_01_03-06.png',
        title: "荣誉奖项",
        clickUrl: "../../img/aboutKZ/oicon_01_03.png"
      },
      {
        image: '../../img/aboutKZ/oicon_01_12.png',
        title: "企业文化",
        clickUrl: "../../img/aboutKZ/oicon_01_07.png"
      },
    ],
    indexId: 0,

    imglist: [         //图片预览
      {
        image: '../../img/aboutKZ/001.png',
        title: "2017年中国医药电子商务10强",
      },
      {
        image: '../../img/aboutKZ/002.png',
        title: "2016年中国医药电子商务10强",
      },
      {
        image: '../../img/aboutKZ/003.png',
        title: "2015-2016年中国药店50强",
      },
      {
        image: '../../img/aboutKZ/004.png',
        title: "2014-2015年度中国特色连锁药店",
      },
      {
        image: '../../img/aboutKZ/005.png',
        title: "2014年度纳税大户",
      },
      {
        image: '../../img/aboutKZ/006.png',
        title: "2015零售连锁示范单位",
      },
      {
        image: '../../img/aboutKZ/007.png',
        title: "2015年度消费者放心连锁店",
      }
      ],

  },
  bindshop: function (event) {
    var classify = event.currentTarget.dataset.classify;
    var index = event.currentTarget.dataset.index;

    if (index === 0) {
      wx.navigateTo({
        url: '../companyProfile/companyProfile'
      })
    }
    if (index === 1) {
      wx.navigateTo({
        url: '../aboutkangze/aboutkangze'
      })
    } 
    if (index === 2) {
      wx.navigateTo({
        url: '../newsCenter/newsCenter'
      })
    }
    if (index === 3) {
      wx.navigateTo({
        url: '../mainBusiness/mainBusiness'
      })
    }
    if (index === 4) {
      wx.navigateTo({
        url: '../brandManagement/brandManagement'
      })
    }
    if (index === 5) {
      wx.navigateTo({
        url: '../talentDevelopment/talentDevelopment'
      })
    }
    if (index === 6) {
      wx.navigateTo({
        url: '../communicationCenter/communicationCenter'
      })
    }
    
    var that = this;
    this.setData({

      shopitem: classify,  //更新
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.currentTarget.dataset.index,
      imgindex: e.currentTarget.dataset.index,
    })
  },

        /**   
       * 预览图片  
       */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: [         //图片预览
        '../../img/aboutKZ/001.png',
        '../../img/aboutKZ/002.png',
        '../../img/aboutKZ/003.png',
        '../../img/aboutKZ/004.png',
        '../../img/aboutKZ/005.png',
        '../../img/aboutKZ/006.png',
        '../../img/aboutKZ/007.png',
      ],// 需要预览的图片http链接列表  
      fail: function () {
        console.log('fail')
      },
      complete: function () {
        console.info("点击图片了");
      },
    })
  },

  //滑动时当前页面的index
  onSlideChangeEnd: function (e) {
    var that = this;
    console.log(e.detail.current)
    that.setData({
      indexSize: e.detail.current,
      imgindex: e.detail.current
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})