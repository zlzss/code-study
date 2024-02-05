// 面向对象方式写
var BigFileUpload = {
  // 分片大小：设置为2M
  chunkSize: 2 * 1024 * 1024,
  // 对文件进行分割 H5特性(File.prototype.slice)
  fileSlice: File.prototype.slice,
  init() {
    $('#submitBtn').on('click', () => {
      // 获取文件
      var files = document.getElementById('file').files
      var file = files[0]
      if (!file) return
      console.log(file)
      // 获取分片总数
      var count = Math.ceil(file.size / this.chunkSize)
      // 时间戳  
      var timestamp = new Date().geiTime() + ""
    })
  },
};

window.onload = function () {
  BigFileUpload.init();
};
