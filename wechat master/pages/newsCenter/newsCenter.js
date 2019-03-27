// pages/newsCenter/newsCenter.js
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
    shopitem: '新闻中心',   //默认显示的

    indexSize: 0,
    index: 0,
    showArr: statusArrs,

    imgindex: "0",
    classData: [
      {
        image: '../../img/newsCenter/icons_03.png',
        title: "公司动态",
        clickUrl: "../../img/newsCenter/icons_02.png",
      },
      {
        image: '../../img/newsCenter/icons_06.png',
        title: "业务动态",
        clickUrl: "../../img/newsCenter/icons_07.png"
      },
      {
        image: '../../img/newsCenter/icons_10.png',
        title: "行业资讯",
        clickUrl: "../../img/newsCenter/icons_09.png"
      },
      {
        image: '../../img/newsCenter/icons_05.png',
        title: "公益活动",
        clickUrl: "../../img/newsCenter/icons_04.png"
      },
    ],
    indexId: 0,
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
    console.log(e.currentTarget.dataset.index)
    this.setData({
      indexSize: e.currentTarget.dataset.index,
      imgindex: e.currentTarget.dataset.index,
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