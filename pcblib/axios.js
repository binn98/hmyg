function axios({url,...parms}){
    let baseURL = 'https://api.zbztb.cn/api/public/v1'
    return new Promise((resolve,reject) =>{ 
        wx.request({
            url: baseURL + url ,
            ...parms,
            success: (result) => {
                resolve(result)
            },
            fail: (error) => {
                reject(error)
            }
        });
          
    })
}
export default axios