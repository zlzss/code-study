$(function () {
  // 提交
  $(".submit").click(function () {
    var _name = $(".name").val(),
      _msg = $(".message").val();
    if (_name !== "" && _msg !== "") {
      console.log(_name, _msg);
      window.localStorage.setItem(_name, _msg);
      showMsg();
    }
  });
  // 查看留言
  $(".viewMes").click(function () {
    showMsg();
  });
  // 删除留言
  $(".deleteMes").click(function () {
    localStorage.clear();
  });
  // 留言列表删除某留言
  $(".messageList").on("click", ".deleteItem", function (e) {
    console.log(e);
  });

  function showMsg() {
    console.log(localStorage.length);
    for (var i = 0; i < localStorage.length; i++) {
      var _key = localStorage.key(i),
        _value = localStorage.getItem(_key);
      $(".messageList").append(
        `<li class="list-group-item"><span>${_key}说</span>:${_value} <button class="deleteItem">删除</button></li>`
      );
    }
  }
});
