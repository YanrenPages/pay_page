(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(t,e,n){t.exports=n(12)},12:function(t,e,n){"use strict";n.r(e);var a=n(3),o=n.n(a),r=n(10),i=n.n(r);function l(t,e,n,a,o,r,i){try{var l=t[r](i),c=l.value}catch(s){return void n(s)}l.done?e(c):Promise.resolve(c).then(a,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(t){l(r,a,o,i,c,"next",t)}function c(t){l(r,a,o,i,c,"throw",t)}i(void 0)}))}}var s=n(39),p=s.createCanvas,d=s.loadImage,u=n(41)(navigator.userAgent);function m(t){return y.apply(this,arguments)}function y(){return(y=c(o.a.mark((function t(e){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("showqrcode").style.display="flex",n=p(320,320),i.a.toCanvas(n,e,{width:320,height:320},(function(t){t&&console.error(t),console.log("success!")})),(a=n.getContext("2d")).imageSmoothingEnabled=!1,t.next=7,d("statics/avatar.jpg");case 7:return r=t.sent,a.drawImage(r,138,138,44,44),t.abrupt("return",n.toDataURL("image/png"));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=c(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e.url);case 2:n=t.sent,document.getElementById("currentqrcode").src=n,document.getElementById("titleinfo").innerHTML=e.othertitle,"QQ"==u.browser.name?document.getElementById("titleinfo").innerHTML=e.othertitle:"WeChat"==u.browser.name?(document.getElementById("titleinfo").innerHTML="\ud83d\ude18\u957f\u6309\u56fe\u7247\u626b\u4e00\u626b",saveqrbtn.style.display="none",document.getElementById("qrcodeclose").style.display="none",document.getElementById("openinbrower").style.display="block"):"iOS"==u.os.name||-1!=["MIUI Browser","UCBrowser","Quark","baidu"].indexOf(u.browser.name)?document.getElementById("titleinfo").innerHTML=e.othertitle:(document.getElementById("titleinfo").innerHTML=e.title,(a=document.getElementById("saveqrbtn")).style.display="inline-block",a.innerHTML=e.savetext,a.href=n,a.download="qrcode.png");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(u),document.getElementById("qrcodeclose").onclick=function(){document.getElementById("currentqrcode").innerHTML="","flex"==document.getElementById("showqrcode").style.display&&(document.getElementById("showqrcode").style.display="")};var b=document.getElementById("toappbtn");({title:"\ud83d\ude18\u652f\u4ed8\u5b9d\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u652f\u4ed8\u5b9d\u6253\u5f00<br />",url:"https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",open_url:"alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801"})&&(document.getElementById("alipaybtn").onclick=function(){b.style.display="none";var t="alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb";location.assign(t),f({title:"\ud83d\ude18\u652f\u4ed8\u5b9d\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u652f\u4ed8\u5b9d\u6253\u5f00<br />",url:"https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",open_url:"alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801"})}),{title:"\ud83d\ude18\u5fae\u4fe1\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u5fae\u4fe1\u6253\u5f00<br />",url:"wxp://f2f0tkJn97xBE_AALRqk5GQGYH5cu7L9keLG",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801",wechattitle:"\ud83d\ude18\u957f\u6309\u56fe\u7247\u626b\u4e00\u626b",wechattext:"\u5982\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u4ed8\u6b3e\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2<br />\u5e76\u9009\u62e9\u201d\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u201c",toapptext:"\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u5fae\u4fe1\u626b\u4e00\u626b"}&&(document.getElementById("wechatpaybtn").onclick=function(){"iOS"==u.os.name&&"WeChat"!=u.browser.name&&(b.style.display="",b.href="weixin://scanqrcode",b.innerHTML="\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u5fae\u4fe1\u626b\u4e00\u626b"),f({title:"\ud83d\ude18\u5fae\u4fe1\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u5fae\u4fe1\u6253\u5f00<br />",url:"wxp://f2f0tkJn97xBE_AALRqk5GQGYH5cu7L9keLG",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801",wechattitle:"\ud83d\ude18\u957f\u6309\u56fe\u7247\u626b\u4e00\u626b",wechattext:"\u5982\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u4ed8\u6b3e\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2<br />\u5e76\u9009\u62e9\u201d\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u201c",toapptext:"\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u5fae\u4fe1\u626b\u4e00\u626b"})}),{title:"\ud83d\ude18\u624b\u673a QQ \u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u624b\u673a QQ \u6253\u5f00<br />",url:"https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=F18F01A9E9104C71F8C43BE384C96F6213F4F51B993ACEA8806A94F08944E1C9&u=2323355219&n=%E6%B1%9D%E5%8D%97%E4%BA%AC",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801",toapptext:"\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u624b\u673a QQ \u626b\u4e00\u626b"}&&(document.getElementById("tenpaybtn").onclick=function(){"iOS"!=u.os.name&&"Android"!=u.os.name||(b.style.display="",b.href="mqq://qrcode/scan_qrcode?version=1&src_type=app",b.innerHTML="\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u624b\u673a QQ \u626b\u4e00\u626b"),f({title:"\ud83d\ude18\u624b\u673a QQ \u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u624b\u673a QQ \u6253\u5f00<br />",url:"https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=F18F01A9E9104C71F8C43BE384C96F6213F4F51B993ACEA8806A94F08944E1C9&u=2323355219&n=%E6%B1%9D%E5%8D%97%E4%BA%AC",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801",toapptext:"\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u624b\u673a QQ \u626b\u4e00\u626b"})}),window.onload=function(){document.getElementById("qrcodeclose").click();var t=new RegExp("(^|&)open=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(t);if(null!=e&&"true"==e[2]&&{title:"\ud83d\ude18\u652f\u4ed8\u5b9d\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u652f\u4ed8\u5b9d\u6253\u5f00<br />",url:"https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",open_url:"alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801"}){console.log("instant open set to true");var n="alipays://platformapi/startapp?appId=10000007&qrcode=https://qr.alipay.com/fkx07170tzxfnbs56z5ejdb";location.assign(n)}"QQ"==u.browser.name&&(document.getElementById("tip-img").src="https://i.loli.net/2019/06/25/5d11d9c19065848452.png",document.getElementById("tip").style.display="block"),{title:"\ud83d\ude18\u5fae\u4fe1\u626b\u4e00\u626b",othertitle:"\u957f\u6309\u56fe\u7247\u4fdd\u5b58\uff0c\u5728\u5fae\u4fe1\u6253\u5f00<br />",url:"wxp://f2f0tkJn97xBE_AALRqk5GQGYH5cu7L9keLG",savetext:"\u4fdd\u5b58\u4e8c\u7ef4\u7801",wechattitle:"\ud83d\ude18\u957f\u6309\u56fe\u7247\u626b\u4e00\u626b",wechattext:"\u5982\u4f7f\u7528\u5176\u4ed6\u65b9\u5f0f\u4ed8\u6b3e\uff0c\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2<br />\u5e76\u9009\u62e9\u201d\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u201c",toapptext:"\u4fdd\u5b58\u5b8c\u6210\uff0c\u53bb\u5fae\u4fe1\u626b\u4e00\u626b"}&&"WeChat"==u.browser.name&&document.getElementById("wechatpaybtn").click()}}},[[11,2,0]]]);