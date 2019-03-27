// pages/classify/classify.js

var statusArrs = [];
for(var i=0; i<200; i++){
  statusArrs.push(true);
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0, //可以控制动画
    list: '',
    showArr: statusArrs,
    detail: [
      {
        image: '../../img/type/img1.png',
        title: "中西药品",
      },
      {
        image: '../../img/type/img2.png',
        title: "医疗器械",
      },
      {
        image: '../../img/type/img3.png',
        title: "传统滋补",
      },
      {
        image: '../../img/type/img4.png',
        title: "计生情趣",
      },
      {
        image: '../../img/type/img5.png',
        title: "保健品",
      },
      {
        image: '../../img/type/img6.png',
        title: "日用品",
      },
      {
        image: '../../img/type/img7.png',
        title: "食品",
      },
    ],
    indexId: 0,
  },
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },
  opentype: function (e) {
    var url = e.currentTarget.dataset.url
    url = '../' + url
    wx.navigateTo({
      url: url
    })
  },
  //显示隐藏
  tigger: function (e) {
    var that = this;
    var num = e.currentTarget.dataset.num
    statusArrs[num] = !statusArrs[num]
    that.setData({
      showArr: statusArrs
    })
  },
  //滑动时当前页面的index
  onSlideChangeEnd: function (e) {
    var that = this;
    console.log(e.detail.current)
    that.setData({
      indexSize: e.detail.current
    })
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