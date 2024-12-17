import dayjs from 'dayjs'; 
import relativeTime from 'dayjs/plugin/relativeTime';
import BigNumber from 'big.js';
export function toThousands(num: string) {
  let numArr = num.split('.');
  if (numArr.length > 1) {
    return parseFloat(numArr[0]).toLocaleString() + '.' + numArr[1];
  } else {
    return parseFloat(numArr[0]).toLocaleString();
  }
}
//用户地址处理方法
export function AddrHandle(addr: string, start = 4, end = 4, replace = '...'): string | undefined {
  if (!addr) {
    return;
  }
  let r = new RegExp('(.{' + start + '}).*(.{' + end + '})');
  let addrArr: RegExpMatchArray | null = addr.match(r);
  return addrArr![1] + replace + addrArr![2];
}
export function HowLongAgo(time: number) {
  dayjs.extend(relativeTime);
  var a = dayjs();
  return a.to(new Date(time));
}

export function GetQueryString(name: string) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // console.log(window.location)
  var r = window.location.search.slice(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export function JudgmentNumber(number: string) {
  let numArr = number.split('.');
  if (numArr.length > 1) {
    return numArr[1].length > 18;
  }
  return false;
}
// 不四舍五入
export function NumSplic(val: any, len: number = 6) {
  var f = parseFloat(val);
  if (isNaN(f)) {
    return false;
  }
  var s = val.toString();
  if (s.indexOf('.') > 0) {
    let f = s.split('.')[1].substring(0, len);
    s = s.split('.')[0] + '.' + f;
  }
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + len) {
    s += '0';
  }
  return s;
}
// 不补0
export function NumSplic1(val: any, len: number = 6) {
  var f = parseFloat(val);
  if (isNaN(f)) {
    return false;
  }
  var s = val.toString();
  if (s.indexOf('.') > 0) {
    let f = s.split('.')[1].substring(0, len);
    s = s.split('.')[0] + '.' + f;
  }
  return s;
}
// 截断小数（不四舍五入）
export function getBit(value: number, bit = 5) {
  let str = value.toString();
  let strIndex = str.indexOf('.');
  if (strIndex === -1) return str;
  str = str.substring(0, strIndex + bit);
  // console.log(str, bit);
  // console.log(typeof str,'getBit值')
  return str;
}

export function numberDivision() { }
export function isApprove(price: number | string, Approve: string) {
  return new BigNumber(Approve).gte(price);
}
export function dateFormat(fmt: string, date: Date) {
  let ret;
  const opt: { [key: string]: string } = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
}
export function getFullNum(num: any) {
  //处理非数字
  if (isNaN(num)) {
    return num;
  }
  //处理不需要转换的数字
  var str = '' + num;
  if (!/e/i.test(str)) {
    return num;
  }
  return num.toFixed(18).replace(/\.?0+$/, '');
}

export function startWord(name: string) {
  if (name.startsWith('/View')) return name.slice(5);
  return '';
}

//时间戳转日期的函数
export function timestampToDateString(timestamp: any) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const dateString = `${month}/${day} ${hours}:${minutes}`;
  return dateString;
}

export function formatTimestamp(timestamp: number): string[] {
  // 将时间戳转换为 Date 对象
  const date = new Date(timestamp);

  // 获取当前时间
  const now = new Date();

  // 计算时间差（以毫秒为单位）
  const diffMs = date.getTime() - now.getTime();

  // 将时间差转换为秒
  const diffSec = Math.floor(diffMs / 1000);

  // 计算天数
  const days = Math.floor(diffSec / (24 * 60 * 60));
  const remainingSecAfterDays = diffSec % (24 * 60 * 60);

  // 计算小时数
  const hours = Math.floor(remainingSecAfterDays / (60 * 60));
  const remainingSecAfterHours = remainingSecAfterDays % (60 * 60);

  // 计算分钟数
  const minutes = Math.floor(remainingSecAfterHours / 60);
  const seconds = remainingSecAfterHours % 60;

  // 格式化时间为两位数
  const formattedDays = String(days).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // 返回格式化的数组
  return [`${formattedDays}`, `${formattedHours}`, `${formattedMinutes}`, `${formattedSeconds}`];
}

export function formatTimestamp2(timestamp: number): string {
  const date = new Date(timestamp);
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}`;
}

//input禁止输入中文
export function handleBeforeInput(event: any) {
  const regex = /[\u4e00-\u9fff]/;
  return regex.test(event);
}

// 新窗口打开
export function openLinkInNewTab(url: string) {
  try {
    // 尝试使用 window.open 方法打开链接
    const newWindow = window.open(url);
    if (!newWindow) {
      console.warn('window.open failed, falling back to location.href');
      window.location.href = url;
    }
  } catch (error) {
    // 如果window.open方法抛出异常 
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; // 在新标签页中打开
    setTimeout(() => {
      link.click();
    }, 100);
  }
  // if (typeof url === 'string' && url.length > 0) {

  // }
}

// 字符串转json
export function parseJsonString(jsonString: string) {
  try {
    // 使用 JSON.parse 将字符串转换为 JSON 对象
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {
    // 处理解析错误
    console.error('Failed to parse JSON string:', error);
    return null;
  }
}

// 随机生成数字
export function generateTwoDigitRandomNumber(min: number = 1, max: number = 99) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 把时间戳转为utc0时间戳
export function convertToLocalUtc0Timestamp(timeString: number): number {
  // 解析本地时间字符串
  const localDate = new Date(timeString);

  // 获取本地时间相对于 UTC 的偏移量（以分钟为单位）
  const offset = localDate.getTimezoneOffset();

  // 创建一个新的 Date 对象，表示 UTC 0 时区的时间
  const utc0Date = new Date(localDate.getTime() + offset * 60 * 1000);

  // 返回 UTC 0 时区的时间戳
  return utc0Date.getTime();
}

// 存储头部菜单栏索引
export function setTopBarIndex(min: string) {
  sessionStorage.setItem('topBarIndex', min);
}
// 获取头部菜单栏索引
export function getTopBarIndex() {
  return sessionStorage.getItem('topBarIndex');
}
