/*
功能：返回顶部
使用：调用smoothscroll()
*/
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};

/*
功能：金额输入框
使用：调用clearNoNum() 
onkeyup="clearNoNum(this)"
@keyup="numberAmount(amount)"
*/
function clearNoNum(obj){  
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符   
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的   
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");  
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数   
    if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
        obj.value= parseFloat(obj.value);  
    }  
}

/*
功能：获取地址栏参数
使用：getQueryString('str')
*/
function getQueryString(name) {
  var search = document.location.href;
  var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
  var matcher = pattern.exec(search);
  var items = null;
  if (null != matcher) {
    try {
      items = decodeURIComponent(decodeURIComponent(matcher[1]));
    } catch (e) {
      try {
        items = decodeURIComponent(matcher[1]);
      } catch (e) {
        items = matcher[1];
      }
    }
  }
  return items;
}

//js 字符串操作函数/字符函数

/*
concat() – 将两个或多个字符的文本组合起来，返回一个新的字符串。

indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。

charAt() – 返回指定位置的字符。

lastIndexOf() – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。

match() – 检查一个字符串是否匹配一个正则表达式。

substr() 函数 -- 返回从string的startPos位置，长度为length的字符串

substring() – 返回字符串的一个子串。传入参数是起始位置和结束位置。

slice() – 提取字符串的一部分，并返回一个新字符串。

replace() – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。

search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。

split() – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。

length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。

toLowerCase() – 将整个字符串转成小写字母。

toUpperCase() – 将整个字符串转成大写字母。
*/
