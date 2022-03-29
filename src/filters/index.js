function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

export function formatDate(time, fmt) {
  if (time == null) return "";
  let date
  if (typeof time === 'object') {
    date = time
  } else if (typeof time === 'string') {
    date = new Date(time.replace("T", " ").replace(/-/g, "/"))
  } else {
    date = new Date(parseInt(time))
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

export function formatSeconds(value) {
  if (value == null) return "";
  var theTime = parseInt(value); // 秒 
  var theTime1 = 0; // 分 
  var theTime2 = 0; // 小时 
  var theTime3 = 0; // 天 
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
      if (theTime2 > 24) {
        theTime3 = parseInt(theTime2 / 24);
        theTime2 = parseInt(theTime2 % 24);
      }
    }
  }
  var result = "" + parseInt(theTime) + "秒";
  if (theTime1 > 0) {
    result = "" + parseInt(theTime1) + "分" + result;
  }
  if (theTime2 > 0) {
    result = "" + parseInt(theTime2) + "小时" + result;
  }
  if (theTime3 > 0) {
    result = "" + parseInt(theTime3) + "天" + result;
  }
  return result;
}

// 计算创建日期与当前时间相差天数
export function formatDiffer(end_date) {
  // 创建时间
  let date1 = new Date(end_date);
  // 当前时间
  let date2 = new Date();
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  let diff = date2.getTime() - date1.getTime(); //当前时间减去创建时间
  let diffDate = diff / (24 * 60 * 60 * 1000); //计算当前时间与结束时间之间相差天数
  return diffDate + '天'
}

// 判断超出5个字显示省略号 
export function ellipsis(value) {
  if (!value) return "";
  if (value.length > 6) {
    return value.slice(0, 6) + "...";
  }
  return value;
}

// 薪资格式转换
export function formatSalary(str, sign) {
  if (str == '' || str == null || str == undefined) {
    return ''
  } else {
    var salary = parseInt((str || '').split(sign));
    return salary / 1000
  }
}