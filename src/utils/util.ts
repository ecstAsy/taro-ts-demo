// 两位小数
export function toDecimal2(x) {
  let f = parseFloat(x);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

// 价格两位小数
export function toPrice2(x) {
  let f = parseFloat(x);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return false;
  }
  let rs = f.toString().split('.');
  if (rs.length !== 1 && rs[1].length > 2) {
    f = Math.ceil(x * 100) / 100;
  }
  return f;
}

// 数组求和
export function getArraySum(Arry, key) {
  const Sum = Arry.reduce((sum, list) => (list[`${key}`] || 0) * 100 + sum, 0);
  return Sum / 100;
}

// 两数求差
export function getBalance(num1, num2) {
  if (!num1 || !num2) return 0;
  const b = Number(num1) * 100 - Number(num2) * 100;
  return toDecimal2(b / 100)
}

export function throttle(fn, interval = 500) {
  let canDo = true;
  return () => {
    if (!canDo) return;
    setTimeout(() => {
      fn.apply(this, arguments);
      canDo = true;
    }, interval)
  }
}

export function timeSwatch(date) {
  return {
    YMDHms: `${date.substring(0, 4)}.${date.substring(4, 6)}.${date.substring(6, 8)} ${date.substring(8, 10)}:${date.substring(10, 12)}:${date.substring(12, 14)}`,
    Hm: `${date.substring(0, 2)}:${date.substring(2, 4)}`,
    YMD: `${date.substring(0, 4)}.${date.substring(4, 6)}.${date.substring(6, 8)}`
  }
}

/*
 * 判断obj是否为一个整数
 */
function isInteger(obj) {
  return Math.floor(obj) === obj;
}

/*
 * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
 * @param floatNum {number} 小数
 * @return {object}
 *   {times:100, num: 314}
 */
function toInteger(floatNum) {
  const ret = { times: 1, num: 0 };
  if (isInteger(floatNum)) {
    ret.num = floatNum;
    return ret;
  }
  const strfi = floatNum + '';
  const dotPos = strfi.indexOf('.');
  const len = strfi.substr(dotPos + 1).length;
  const times = Math.pow(10, len);
  const intNum = parseInt(floatNum * times + 0.5, 10);
  ret.times = times;
  ret.num = intNum;
  return ret;
}

/*
 * 核心方法，实现加减乘除运算，确保不丢失精度
 * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
 *
 * @param a {number} 运算数1
 * @param b {number} 运算数2
 * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
 * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
 *
 */

function operation(a, b, op) {
  const o1 = toInteger(a);
  const o2 = toInteger(b);
  const n1 = o1.num;
  const n2 = o2.num;
  const t1 = o1.times;
  const t2 = o2.times;
  const max = t1 > t2 ? t1 : t2;
  let result = 0;
  switch (op) {
    case 'add':
      if (t1 === t2) {
        // 两个小数位数相同
        result = n1 + n2;
      } else if (t1 > t2) {
        // o1 小数位 大于 o2
        result = n1 + n2 * (t1 / t2);
      } else {
        // o1 小数位 小于 o2
        result = n1 * (t2 / t1) + n2;
      }
      return result / max;
    case 'subtract':
      if (t1 === t2) {
        result = n1 - n2;
      } else if (t1 > t2) {
        result = n1 - n2 * (t1 / t2);
      } else {
        result = n1 * (t2 / t1) - n2;
      }
      return result / max;
    case 'multiply':
      result = (n1 * n2) / (t1 * t2);
      return result;
    case 'divide':
      return (result = (function () {
        const r1 = n1 / n2;
        const r2 = t2 / t1;
        return operation(r1, r2, 'multiply');
      })());
  }
}

export const FloatTool = {
  // 加减乘除的四个接口
  add(a, b) {
    return operation(a, b, 'add');
  },
  subtract(a, b) {
    return operation(a, b, 'subtract');
  },
  multiply(a, b) {
    return operation(a, b, 'multiply');
  },
  divide(a, b) {
    return operation(a, b, 'divide');
  },
};