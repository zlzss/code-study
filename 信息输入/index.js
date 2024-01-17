window.addEventListener("load", (event) => {
  // 需求 表格成为焦点 提示不显示，失去焦点 提示显示
  // 输入的值小于1 ，提示信息内容小于10
  // 输入的值小于10大于10 ，提示信息内容小于100大于10
  // 输入的值大于10 ，提示信息内容大于100

  // 获取元素
  var select = function (name) {
    return document.querySelectorAll(name);
  };
  var _input = select("input")[0];
  var _span = select("span")[0];
  // 监听输入框的值
  _input.oninput = function () {
    // 获取输入框的值
    var val = this.value;
    // 输入的值小于1 ，提示信息内容小于10
    if (!val) {
      _span.innerText = "信息不能为空";
    } else if (val < 10) {
      _span.innerText = "信息不能小于10";
    } else if (val >= 10 && val < 100) {
      _span.innerText = "信息内容小于100大于10";
    } else {
      _span.innerText = "信息大于100";
    }
    _span.style.display = "inline";
  };
  // 失去焦点
  _input.onblur = function () {
    _span.style.display = "none";
  };
  // 成为焦点
  _input.onfocus = function () {
    _span.style.display = "inline";
  };
});
