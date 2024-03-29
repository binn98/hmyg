// pages/goods_detail/index.js
import axios from '../../pcblib/axios'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   goodsInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({goods_id:options.id})
    const goods_id = options.id
    axios({
      url:'/goods/detail',
      data:{goods_id}
    }).then(res=>{
      this.setData({goodsInfo:res.data.message})
      console.log(this.data.goodsInfo);
      console.log(res.data);
      
    }
    )
  },
  // 轮播图大图展示
  imgbig(e){
    const urls = this.data.goodsInfo.pics.map(v=>v.pics_big)
    const current = e.currentTarget.dataset.src
    wx.previewImage({
      current, // 当前显示图片的http链接
      urls // 需要预览的图片http链接列表
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