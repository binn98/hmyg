import axios from '../../pcblib/axios'
Page({
  data: {
    list: []
  },
  params: {
    query: "海信",
    cid: 6,
    pagenum: 1,
    pagesize: 10
  },
  pagesnum: 1,
  onLoad(e) {
    this.params.cid = +e.cid
    this.params.query = e.query
    this.getdataList()

  },
  getdataList() {
    axios({
      url: '/goods/search',
      data: this.params
    }).then(res => { 
      const {
        list
      } = this.data
      this.setData({
        list: [...list, ...res.data.message.goods]
      })
      console.log(this.data.list);
      
      this.pagesnum = Math.ceil(res.data.message.total / this.params.pagesize)
    })
  },
  //上拉触发函数
  onReachBottom() {
    console.log("出发上拉函数了");
    if (this.params.pagenum >= this.pagesnum) {
      console.log('没有更多数据了');
    } else {
      this.params.pagenum++
      this.getdataList()
    }

  },
  //下拉触发函数
  onPullDownRefresh(){
    this.params.pagenum = 1
    this.setData({list:[]})
    this.getdataList()
    console.log('触发了下拉');
  }
})