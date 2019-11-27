
/* 
* 1 轮播图 
    0 在页面的onLoad事件中来发送异步请求 
    1 发送异步请求或者数据 ？
    2 把数据动态渲染出来
      1 利用 swiper标签
      2 利用 image标签 
! 2 
? 3 

 */
Page({
  data:{
    //轮播图
    imgsrc:[],
    //分类数据
    fenlei:[],
    //楼层数据
    louceng:[]
  },
onLoad(){
  //轮播图
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    success: (result) => {
      // console.log(result.data);
      this.setData({imgsrc:result.data.message})
    }
  });
  //导航数据
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
    success: (result) => {
      // console.log(result.data.message);
      this.setData({fenlei:result.data.message})
    }
  });
  //分类数据
  wx.request({
    url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
    success: (result) => {
      console.log(result.data.message);
      this.setData({louceng:result.data.message})
    }
  });
     
    
}
})
