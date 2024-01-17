window.onload = function () {
  function $(name) {
    return document.querySelector(name);
  }

  var _input = $("input"),
    _span = $("span");

  var regex1 = /^g[abc]+gle$/,
    regex2 = new RegExp("foo*");
  _input.onblur = function () {
    var val = this.value;
    if (regex1.test(val)) {
      _span.innerHTML = "正确";
      _span.style.color = "green";
    } else {
      _span.innerHTML = "错误";
      _span.style.color = "red";
    }
  };
};
