import request from '../../pcblib/axios'
Page({
  data: {
    //菜单列表
    menu: [],
    //右边数据
    rightdata: [],
    //被点击时的样式
    clickIndex: 0,
    //滚动条位置
    scroll: 0
  },
  //所有数据
  moredata: [],

  onLoad() {
    const cache = wx.getStorageSync('cache')
    if (!cache) {
      this.get()
    } else {
      if (Date.now() - cache.time > 10 * 1000) {
        this.get()
      } else {
        this.moredata = cache.list

      }
    }


  },
  muenIndex(e) {
    this.setData({
      clickIndex: e.currentTarget.dataset.index,
      rightdata: this.moredata[this.data.clickIndex].children,
      scroll: 0
    })
  },
  get() {
    request({
      url: '/categories'
    }).then(res => {
      //  console.log(res.data.message);
      this.moredata = res.data.message
      this.setData({
        menu: this.moredata.map(v => v.cat_name)
      })
      this.setData({
        rightdata: this.moredata[this.data.clickIndex].children
      })
      // console.log(res.data.message);
      wx.setStorageSync("cache", {
        list: this.moredata,
        time: Date.now()
      });
    })

  }
})