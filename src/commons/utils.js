/**
 * Created by yinshipeng on 2016/10/28.
 * 如果要定义一个函数是用作工具类，命名方式为 methodNameUtil，然后注册到commonUtils对象中
 */

/**
 * 将对象重新封装成{code:'',label:''}型对象
 * 原对象属性为code 原对象属性值为label
 * @param obj
 * @returns {Array}
 */
function packObjCodeAndLabelUtil(obj) {
  var objArr = [];
  for (var p in obj){
    if (typeof(obj[p]) == " function "){
      obj[p]() ;
    } else {
      var object = {};
      object.code = p;
      object.label = obj[p];
      objArr.push(object);
    }};
  return objArr;
};

/**
 * 根据属性名称和属性值从数组中删除
 * @param array
 * @param proprety
 * @param value
 * @returns {*}
 */
function removeFromArrayByPropertyVue(array,proprety ,value) {
  if(array.length == 0) return array;
  let result = _.remove(array,function (data) {
    if(data[proprety] != value){
      return data;
    }
  });
  return result;
}

export default {
  packObjCodeAndLabelUtil,
  removeFromArrayByPropertyVue
}


