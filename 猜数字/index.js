window.onload = function () {
  function $(name) {
    console.log(document.querySelector(name));
    return document.querySelector(name);
  }
  // 设置随机数 100以内
  // Math.random()可以获取0-1之间的数，但不包含0,1   比如：0.2345 0.9999
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  // 获取输入框
  var _input = $(".guessInput");
  // 获取提示信息
  var _info = $(".info");
  // 1、次数确认 ==== 设置猜数字次数
  // var count = 1;
  // 2、不限制次数 ==== 设置开关
  var flag = true;
  // 输入框输入时验证
  _input.oninput = function () {
    var value = this.value;
    // 1、次数确认
    // while (count <= 5) {
    //   // 猜数字
    //   if (value < randomNumber) {
    //     _info.innerHTML = `猜小了！还有${5-count}次机会`;
    //     count++;
    //     break;
    //   } else if (value > randomNumber) {
    //     _info.innerHTML =  `猜大了！还有${5-count}次机会`;
    //     count++;
    //     break;
    //   } else if (value == randomNumber) {
    //     _info.innerHTML = "恭喜你，猜对了";
    //     count++;
    //     break;
    //   }
    // }
    // if (count > 5) {
    //   _info.innerHTML = "游戏结束";
    // }

    // 2、不限制次数
    while (flag) {
      if (value < randomNumber) {
        _info.innerHTML = `猜小了！`;
        break;
      } else if (value > randomNumber) {
        _info.innerHTML = `猜大了！`;
        break;
      } else if (value == randomNumber) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      _info.innerHTML = "恭喜你，猜对了，游戏结束";
    }
  };
};
