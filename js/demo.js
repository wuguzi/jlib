var map = new Map();
console.log('---Map---Map对象');
console.log('设置：' + map.put('a', 1));
console.log('得到key：' + map.getKey(1));
console.log('得到value：' + map.getValue('a'));
console.log('得到key数组：' + map.toArrayKey());
console.log('得到value数组：' + map.toArrayValue());
console.log('得到长度：' + map.size());
console.log('得到String类型：' + map.toString());
console.log('删除key：' + map.remove('a'));
console.log('\n');


var array = new Array('1','2','3','4','5','4','2','4');
console.log('---Array---数组');
console.log('按下标找到：' + array.ix(4));
console.log('按下标全部找到：' + array.ixAll(4));
console.log('按值删除：' + array.rmVal(2));
console.log('按值全部删除：' + array.rmValAll(2));
console.log('按下标删除：' + array.rmIx(0));
console.log('去重：' + array.unique());
console.log('加强排序：' + array.sort());
console.log('\n');


var error = new Error();
console.log('---Error---错误');
console.log('null，undefined，NaN，\'\'，0返回undefined：' + error.init(NaN));
console.log('\n');


var type = new Type();
console.log('---Type---类型');
console.log('找到类型：' + type.init(123));
console.log('Array类型：' + type.isArray([1,2,3,4]));
console.log('Object类型：' + type.isObject({ jlib: 1024 }));
console.log('Number类型：' + type.isNumber(1024));
console.log('String类型：' + type.isString('1024'));
console.log('\n');


var localstor = new Localstor();
console.log('---Localstor---持久缓存');
console.log('支持：' + localstor.init());
console.log('设置：' + localstor.set('jlib', 512));
console.log('得到：' + localstor.get('jlib'));
console.log('删除：' + localstor.remove('jlib'));
console.log('清空：' + localstor.clear());
console.log('\n');


var sessionstor = new Sessionstor();
console.log('---Sessionstor---会话缓存');
console.log('支持：' + sessionstor.init());
console.log('设置：' + sessionstor.set('jlib', 1024));
console.log('得到：' + sessionstor.get('jlib'));
console.log('删除：' + sessionstor.remove('jlib'));
console.log('清空：' + sessionstor.clear());
console.log('\n');


var getsearch = new getSearch();
console.log('---getSearch---查询url');
console.log('url参数对象：');
console.log(getsearch);
console.log('\n');


var verify = new Verify();
console.log('---Verify---验证');
console.log('验证数字：' + verify.number(1024));
console.log('验证手机号：' + verify.mobile(13877442211));
console.log('验证E-mail：' + verify.email('co_wgz@jlib.com'));
console.log('\n');