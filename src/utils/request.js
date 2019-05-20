// 封装一个通用的接口调用
let request = (path) => {
  // 需要用到promise实例对象
  let url = 'https://www.zhengzhicheng.cn/api/public/v1/' + path;
  return new Promise(function (resolve, reject) {
    mpvue.request({
      url: url,
      success: function (res) {
        resolve(res)
      }
    })
  })
}

export default request;
