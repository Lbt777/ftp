(function(e){function t(t){for(var o,a,i=t[0],s=t[1],u=t[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2b2e9034":"8d319063","chunk-751ab3e9":"6d2dec2d","chunk-1519c3aa":"e3502340","chunk-55cb8af8":"97388fe0","chunk-bbff52a8":"2f8666cd","chunk-da6cf070":"50b4820c"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2b2e9034":1,"chunk-1519c3aa":1,"chunk-55cb8af8":1,"chunk-bbff52a8":1,"chunk-da6cf070":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2b2e9034":"b3d503ca","chunk-751ab3e9":"31d6cfe0","chunk-1519c3aa":"a6017938","chunk-55cb8af8":"0d0ab385","chunk-bbff52a8":"d067cae2","chunk-da6cf070":"d5552ba3"}[e]+".css",c=s.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){u=m[i],l=u.getAttribute("data-href");if(l===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],d.parentNode.removeChild(d),n(r)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,n[1](m)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"plusXing",(function(){return q}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[e._v("看控制台打印")]),n("div",[e._v("console.log('web3.givenProvider', web3.givenProvider)")]),n("div",[e._v("console.log('window.ethereum', window.ethereum)")])])}],i=n("1da1"),s=(n("96cf"),n("99e5")),u=n.n(s),l={name:"App",created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("web3.givenProvider",u.a.givenProvider),console.log("window.ethereum",window.ethereum);case 2:case"end":return e.stop()}}),e)})))()}},m=l,d=n("2877"),f=Object(d["a"])(m,c,r,!1,null,null,null),p=f.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(h["a"]);var L=new h["a"]({routes:[{path:"/",name:"farm",component:function(){return Promise.all([n.e("chunk-751ab3e9"),n.e("chunk-1519c3aa")]).then(n.bind(null,"cdc4"))}},{path:"/NFT",component:function(){return n.e("chunk-2b2e9034").then(n.bind(null,"76e9"))}},{path:"/Me",component:function(){return Promise.all([n.e("chunk-751ab3e9"),n.e("chunk-55cb8af8")]).then(n.bind(null,"28ca"))}},{path:"/rules",component:function(){return n.e("chunk-da6cf070").then(n.bind(null,"44a5"))}},{path:"/submit",component:function(){return n.e("chunk-bbff52a8").then(n.bind(null,"e7f9"))}},{path:"*",redirect:"/"}]}),y=n("2f62"),P={address:null,WEB3:null,contractInstance:null,poolContractInstance:null,LPcontractInstance:null,WBNBcontractInstance:null,routercontractInstance:null,balance:0,myLp:0,getAccountInfoSum:""},g=P;a["a"].use(y["a"]);var k=new y["a"].Store({state:g,mutations:{getAddress:function(e,t){e.address=t},setWEB3:function(e,t){e.WEB3=t},setContractInstance:function(e,t){e.contractInstance=t},setBalance:function(e,t){e.balance=t},setpoolContractInstance:function(e,t){e.poolContractInstance=t},setMyLp:function(e,t){e.myLp=t},setGetAccountInfoSum:function(e,t){e.getAccountInfoSum=t},setLPcontractInstance:function(e,t){e.LPcontractInstance=t},setWBNBcontractInstance:function(e,t){e.WBNBcontractInstance=t},setroutercontractInstance:function(e,t){e.routercontractInstance=t}},actions:{ActionsGetAddress:function(e,t){e.commit("getAddress",t)},ActionsSetWEB3:function(e,t){e.commit("setWEB3",t)},ActionsSetContractInstance:function(e,t){e.commit("setContractInstance",t)},ActionsSetBalance:function(e,t){e.commit("setBalance",t)},ActionsSetpoolContractInstance:function(e,t){e.commit("setpoolContractInstance",t)},ActionsSetMyLp:function(e,t){e.commit("setMyLp",t)},ActionsSetGetAccountInfoSum:function(e,t){e.commit("setGetAccountInfoSum",t)},ActionsLPcontractInstance:function(e,t){e.commit("setLPcontractInstance",t)},ActionsWBNBcontractInstance:function(e,t){e.commit("setWBNBcontractInstance",t)},ActionsSetroutercontractInstance:function(e,t){e.commit("setroutercontractInstance",t)}}}),b=k,v=n("b970"),S=(n("157a"),n("5530")),w=n("a925"),I=n("3c69"),T=n("91f4"),C=n.n(T),R=n("b459"),A=n.n(R),N=n("0135"),O=n.n(N),E=n("88c8"),H=n.n(E),D="http://dapp.starshow.cc/",F={language:"English",success:"success",connect:"Connect",disconnect:"Disconnect",lp:"LP",pool:"Pool",myLp:"My LP",errtip:"The amount you have entered more than you have held",all:"All",differentPower:"Different amounts of Stake have different power",stakePeriod:"Stake Period",totalLPLocked:"Total LP Locked",myLPLocked:"My LP Locked",estimatedOfIncomeToday:"Estimated of Income Today",calculatedFormula:"Calculated Formula",income:"Income = Deposit amount * Deposit Hashrate * Stake period Hashrate * Current Exchange Rate",current:"Current Exchange Rate = (Total SRS Amount/Release Period)/Current Total Stake SRS Amount",actual:"* The actual calculation is based on the block",connectWallet:"Connect Wallet",stake:"Stake",ComingSoon:"Pool 2.0 Coming Soon...",NFT:"NFT",history:"History",days:"Days",redeem:"Redeem",me:"Me",mywallet:"My wallet",myLP:"My LP",myIncome:"My Income",harvest:"Harvest",cancel:"cancel",warning:"PHISHING WARNING: please make sure you’re visiting "+D+"  — check the URL carefully",NFTtip:"Coming Soon…",approve:"Approve",confirm:"Got it",btnDisabled:"There is no optional period now, please continue mining when it expires",minLpNum:"The number of staked LP is at least ",historyEmptyTip:"There‘s no record, go to stake to get income",goToStake:"Go to stake",isAboutToOpen:"Coming Soon...",hashrate:"Hashrate",totalHashrate:"Total Hashrate",dailyIncomeCoefficient:"Daily Income Coefficient",timesFaster:" times faster",SRSRulesDescription:"SRS Rules Description",LPLockedVolume:"LP Locked Volume",LPLockedperiod:"LP Locked period",value:"Value",times:"Times",computingPower:"Personal Hashrate = [ Locked LP  Volume Hashrate ] * [ Locked  LP Period Hashrate ]",rules:"Rules",is:"",copySuccess:"Copy success"},j="http://dapp.starshow.cc/",B={language:"简体中文",success:"成功",connect:"链接",disconnect:"断开链接",lp:"LP",pool:"Pool",myLp:"我的LP",errtip:"输入的LP数量已超过你持有的数量",all:"全部",differentPower:"不同的入金数量对应不同的算力系数",stakePeriod:"质押周期",totalLPLocked:"总锁定的LP",myLPLocked:"我锁定的LP",estimatedOfIncomeToday:"今日预估收入",calculatedFormula:"计算公式",income:"收入 = 入金数量*入金算力系数*质押周期算力系数*当前汇率",current:"当前汇率=（总SRS数量/释放周期）/当前总质押SRS数量",actual:"* 实际结果以内存块计算为准",connectWallet:"连接钱包",stake:"质押",ComingSoon:"Pool 2.0 敬请期待",NFT:"NFT",history:"历史记录",days:"天",redeem:"赎回",me:"我",mywallet:"我的钱包",myLP:"我的LP",myIncome:"我的收入",harvest:"收益",cancel:"取消",warning:"防钓鱼警示：请仔细检查URL，确保您正在访问"+j,NFTtip:"敬请期待",approve:"授权",confirm:"确认",btnDisabled:"暂无可选周期，到期再来继续挖矿吧",minLpNum:"输入的LP数量至少为 ",historyEmptyTip:"暂无记录，快去质押获取收益吧",goToStake:"去质押",isAboutToOpen:"即将启动",hashrate:"算力倍数",totalHashrate:"总算力倍数",dailyIncomeCoefficient:"日化收益系数",timesFaster:" 倍加速中",SRSRulesDescription:"关于SRS的规则说明",LPLockedVolume:"LP锁仓数量",LPLockedperiod:"LP锁仓周期",value:"价值",times:"倍",computingPower:"「个人算力」=「LP锁仓数量算力」*「LP锁仓周期算力」",rules:"规则",is:"的",copySuccess:"复制成功"},M="http://dapp.starshow.cc/",W={language:"簡體中文",success:"成功",connect:"鏈接",disconnect:"斷開鏈接",lp:"LP",pool:"Pool",myLp:"My LP",errtip:"輸入的數量已超過你持有的數量",all:"全部",differentPower:"不同的入金數量對應不同的算力係數",stakePeriod:"質押週期",totalLPLocked:"總鎖定的LP",myLPLocked:"我鎖定的LP",estimatedOfIncomeToday:"今日預估收入",calculatedFormula:"計算公式",income:"收入 = 入金數量 * 入金算力係數 * 質押週期算力係數 * 當前匯率",current:"當前匯率 = （總SRS數量 / 釋放週期）/當前總質押SRS數量",actual:"* 實際結果以區塊計算為準",connectWallet:"鏈接錢包",stake:"質押",ComingSoon:"Pool 2.0 敬請期待",NFT:"NFT",history:"歷史記錄",days:"天",redeem:"贖回",me:"我",mywallet:"我的錢包",myLP:"我的LP",myIncome:"我的收入",harvest:"收益",cancel:"取消",warning:"防釣魚警示：請仔細檢查 URL，確保您正在訪問"+M,NFTtip:"敬請期待",approve:"授權",confirm:"確認",btnDisabled:"暫無可選週期，到期再來繼續挖礦吧",minLpNum:"輸入的LP數量至少為 ",historyEmptyTip:"暫無記錄，快去質押獲取收益吧",goToStake:"去質押",isAboutToOpen:"即將啟動",hashrate:"算力倍數",totalHashrate:"總算力倍數",dailyIncomeCoefficient:"日化收益係數",timesFaster:" 倍加速中",SRSRulesDescription:"關於SRS的規則說明",LPLockedVolume:"LP鎖倉數量",LPLockedperiod:"LP鎖倉週期",value:"價值",times:"倍",computingPower:"「個人算力」 =  「LP鎖倉數量算力」* 「LP鎖倉週期算力」",rules:"規則",is:"的",copySuccess:"複製成功"},_="http://dapp.starshow.cc/",x={language:"English",success:"success",connect:"Connect",disconnect:"Disconnect",lp:"LP",pool:"Pool",myLp:"My LP",errtip:"The amount you have entered more than you have held",all:"All",differentPower:"Different amounts of Stake have different power",stakePeriod:"Stake Period",totalLPLocked:"Total LP Locked",myLPLocked:"My LP Locked",estimatedOfIncomeToday:"Estimated of Income Today",calculatedFormula:"Calculated Formula",income:"Income = Deposit amount * Deposit Hashrate * Stake period Hashrate * Current Exchange Rate",current:"Current Exchange Rate = (Total SRS Amount/Release Period)/Current Total Stake SRS Amount",actual:"* The actual calculation is based on the block",connectWallet:"Connect Wallet",stake:"Stake",ComingSoon:"Pool 2.0 Coming Soon...",NFT:"NFT",history:"History",days:"Days",redeem:"Redeem",me:"Me",mywallet:"My wallet",myLP:"My LP",myIncome:"My Income",harvest:"Harvest",cancel:"cancel",warning:"PHISHING WARNING: please make sure you’re visiting "+_+"  — check the URL carefully",NFTtip:"Coming Soon…",approve:"Approve",confirm:"Got it",btnDisabled:"There is no optional period now, please continue mining when it expires",minLpNum:"The number of staked LP is at least ",historyEmptyTip:"There‘s no record, go to stake to get income",goToStake:"Go to stake",isAboutToOpen:"Coming Soon...",hashrate:"Hashrate",totalHashrate:"Total Hashrate",dailyIncomeCoefficient:"Daily Income Coefficient",timesFaster:" times faster",SRSRulesDescription:"SRS Rules Description",LPLockedVolume:"LP Locked Volume",LPLockedperiod:"LP Locked period",value:"Value",times:"Times",computingPower:"Personal Hashrate = [ Locked LP  Volume Hashrate ] * [ Locked  LP Period Hashrate ]",rules:"Rules",is:"",copySuccess:"Copy success"};a["a"].use(w["a"]);var G={en:Object(S["a"])(Object(S["a"])({},C.a),F),zh:Object(S["a"])(Object(S["a"])({},A.a),B),hk:Object(S["a"])(Object(S["a"])({},O.a),W),vi:Object(S["a"])(Object(S["a"])({},H.a),x)},V="";if(localStorage.getItem("language"))V=localStorage.getItem("language");else{var z=navigator.language;switch(z.toLowerCase()){case"zh-cn":V="en";break;case"en-us":V="en";break;case"zh-tw":V="hk";break;case"zh-hk":V="hk";break;case"vi-vn":V="vi";break;default:V="en";break}}var $=new w["a"]({locale:V,messages:G});function U(e){"en"===e?I["a"].use(e,C.a):"zh"===e?I["a"].use(e,A.a):"hk"===e?I["a"].use(e,O.a):"zh"===e&&I["a"].use(e,H.a)}function q(e,t,n,o,a){for(var c=a||e.length-t-n,r="",i=0;i<c;i++)r+=o;return e.substring(0,t)+r+e.substring(e.length-n)}var J=new a["a"],K=J,X=n("3a34"),Q=n.n(X);a["a"].prototype.$bus=K,a["a"].prototype.$util=o,a["a"].prototype.$store=b,a["a"].use(v["a"]),U($.locale),new Q.a,a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(p)},router:L,i18n:$,store:b}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}});
//# sourceMappingURL=app.e862ce49.js.map