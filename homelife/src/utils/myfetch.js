import 'whatwg-fetch'
import 'es6-promise'

//导出get请求
export function fetchget(url) {
    var result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    });
    return result.then(response => response.json());
}


// 发送 post 请求
export function fetchpost(url, paramsObj) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
    return result.then(response => response.json());
}

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}