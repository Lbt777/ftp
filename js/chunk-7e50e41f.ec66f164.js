(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e50e41f"],{7352:function(t,e,n){"use strict";n("db8c")},b88b:function(t,e,n){t.exports=n.p+"img/bian.f449fb5f.png"},db8c:function(t,e,n){},e132:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"destroy"},[n("div",{staticClass:"main"},[n("div",{staticClass:"icon"},[t._m(0),n("div",{staticClass:"balc"},[t._v(t._s(t.balance))])]),n("div",{staticClass:"content"},[n("div",{staticClass:"box"},[n("div",{staticClass:"my"},[n("div",{staticClass:"tip"},[t._v(t._s(t.$t("destroy")))]),n("div",{staticClass:"records",on:{click:function(e){return t.to(1)}}},[n("span",[t._v(t._s(t.$t("meta.destroyRecords")))]),n("i",{staticClass:"van-icon van-icon-arrow-left van-nav-bar__arrow"})])]),n("div",{staticClass:"input"},[n("van-field",{staticClass:"inputStyle",attrs:{clearable:"",placeholder:"0",type:"number"},on:{input:t.changeInput},model:{value:t.number,callback:function(e){t.number=t._n(e)},expression:"number"}}),n("div",{staticClass:"times"},[t._v(t._s(t.times)+t._s(t.$t("times")))])],1),n("div",{staticClass:"option"},t._l(t.time,(function(e,a){return n("div",{key:a,staticClass:"items",class:t.current==e.name?"active":"",on:{click:function(n){t.current=e.name,t.all[0].num=t.accMul(t.number,t.times)}}},[t._v(t._s(e.name)+t._s(t.$t("month")))])})),0),n("div",{staticClass:"all"},t._l(t.all,(function(e,a){return n("div",{key:a,staticClass:"line"},[n("div",[t._v(t._s(t.$t(e.name)))]),n("span",[t._v(t._s(e.num))])])})),0)]),n("van-button",{staticClass:"btn",attrs:{type:"primary",color:"#1F75D9",loading:t.btnLoading,block:""},on:{click:t.userOperation}},[t._v(t._s(t.$t(t.btnText)))])],1),n("div",{staticClass:"profit"},[n("div",{staticClass:"my"},[n("div",{staticClass:"tip"},[t._v(t._s(t.$t("myHarvest")))]),n("div",{staticClass:"records",on:{click:function(e){return t.to(2)}}},[n("span",[t._v(t._s(t.$t("meta.NFTrecords")))]),n("i",{staticClass:"van-icon van-icon-arrow-left van-nav-bar__arrow"})])]),n("div",{staticClass:"receive"},[n("div",{staticClass:"lpNum"},[n("div",{staticClass:"n"},[t._v(t._s(t._f("NumFormat")(t.grandTotalAward)))]),n("div",{staticClass:"unit"},[t._v("SRS")])]),n("van-button",{staticClass:"btns",attrs:{type:"primary",color:"#1F75D9",loading:t.awardLoading,disabled:t.awardDisabled,block:""},on:{click:t.IncomeCollection}},[t._v(t._s(t.$t("receive")))])],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide"},[a("div",{staticClass:"images"},[a("img",{attrs:{src:n("b88b"),alt:""}})]),a("div",{staticClass:"lp"},[t._v("SRS")])])}],s=n("291b"),i=(n("e186"),n("8300"),n("eba8"),n("2ce8"),n("42ca"),n("4582"),n("792c"),n("7141"),n("6770"),n("08db")),c=n("2ff6"),o=n.n(c),u=n("49d2"),l=n("0c6d"),d=n("89e3"),m=n("727b"),g={data:function(){return{number:"",current:3,type:0,balance:"",btnLoading:!1,awardLoading:!1,userRefuseSign:!1,awardDisabled:!1,btnText:"approve",sign:"",timer:null,allowance:0,grandTotalAward:0,time:[{name:3},{name:6},{name:12}],all:[{name:"expectedEarnings",num:0},{name:"allProfit",num:0},{name:"teamDestroy",num:0}]}},filters:{NumFormat:i["a"]},computed:{address:function(){return this.$store.state.address},srscontractInstance:function(){return this.$store.state.srscontractInstance},destroyContractInstance:function(){return this.$store.state.destroyContractInstance},web3:function(){return this.$store.state.WEB3},times:function(){return 3==this.current?1.2:6==this.current?1.5:12==this.current?1.8:void 0}},watch:{srscontractInstance:function(t,e){this.getBalanceOf(t,this.address),this.getAllowance(),this.getsign()}},mounted:function(){this.btnLoading=!0,this.srscontractInstance&&(this.getBalanceOf(this.srscontractInstance,this.address),this.getAllowance(),this.getsign()),this.userRefuseSign=localStorage.getItem("userRefuseSign")||!1},methods:{accMul:function(t,e){var n=0,a=t.toString(),r=e.toString();try{n+=a.split(".")[1].length}catch(s){}try{n+=r.split(".")[1].length}catch(s){}return Number(a.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,n)},changeInput:function(t){+t>this.balance&&(Object(d["a"])("余额不足"),this.number=this.balance),this.all[0].num=this.accMul(+t,this.times)},IncomeCollection:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.awardLoading=!0,e.next=3,t.getsign();case 3:if(n=localStorage.getItem("token"),!n){e.next=12;break}return e.next=7,Object(l["a"])();case 7:a=e.sent,console.log(a),t.awardLoading=!1,t.grandTotalAward=0,t.receiveAward(a);case 12:case"end":return e.stop()}}),e)})))()},receiveAward:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=o.a.pow(t.amount,18),n.next=3,e.$store.state.destroyContractInstance.methods.receiveAward(t.address,a,t.sign).send({from:e.address}).then((function(t){e.awardLoading=!1,e.getBalanceOf(e.srscontractInstance,e.address),console.log("res",t)})).catch((function(t){Object(d["a"])(e.$t("cancel")),e.awardLoading=!1}));case 3:case"end":return n.stop()}}),n)})))()},information:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),a={address:t.address,sign:t.sign},n){e.next=9;break}return e.next=5,Object(l["h"])(a);case 5:r=e.sent,localStorage.setItem("token",r.data),e.next=14;break;case 9:return e.next=11,Object(l["d"])();case 11:s=e.sent,s&&0==+s.grandTotalAward?t.awardDisabled=!0:t.awardDisabled=!1,s&&(t.grandTotalAward=s.grandTotalAward,t.all[1].num=s.historyTotalAward,t.all[2].num=s.teamBurnAmount);case 14:case"end":return e.stop()}}),e)})))()},getsign:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(clearInterval(t.timer),n=JSON.parse(localStorage.getItem("signDestry")),a=localStorage.getItem("token"),!n||n.address!=t.address){e.next=9;break}t.sign=n.sign,t.information(a),t.timer=setInterval((function(){t.information(a)}),3e3),e.next=26;break;case 9:return e.prev=9,e.next=12,web3.eth.personal.sign("welcome to SRS-NFT-DAO",t.address);case 12:return t.sign=e.sent,console.log("地址签名",t.sign),r={sign:t.sign,address:t.address},t.sign&&localStorage.setItem("signDestry",JSON.stringify(r)),t.information(a),t.timer=setInterval((function(){t.information(a)}),3e3),e.abrupt("return",t.sign);case 21:e.prev=21,e.t0=e["catch"](9),t.awardLoading=!1,t.address&&0==t.userRefuseSign&&m["a"].confirm({title:t.$t("prompt"),confirmButtonColor:"#1F75D9",message:t.$t("signature")}).then((function(){t.getsign()})).catch((function(){t.userRefuseSign=!0,localStorage.setItem("userRefuseSign",!0),localStorage.removeItem("signDestry"),localStorage.removeItem("token")})),console.log("error",e.t0);case 26:case"end":return e.stop()}}),e,null,[[9,21]])})))()},userOperation:function(){0==+this.allowance?this.obtainAuthorization():this.userDestroy()},getBalanceOf:function(t,e){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t,e),a.next=3,t.methods.balanceOf(e).call();case 3:r=a.sent,n.balance=+r?(r/Math.pow(10,18)).toFixed(4):0,n.$store.dispatch("ActionsSetMySRS",n.balance),n.btnLoading=!1,console.log("我的srs余额",n.balance);case 8:case"end":return a.stop()}}),a)})))()},obtainAuthorization:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,n=o.a.pow(1e8,18),e.next=4,t.$store.state.srscontractInstance.methods.approve(u["e"],n).send({from:t.address}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!1,console.log("res",n),e.next=4,t.getAllowance();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){Object(d["a"])(t.$t("cancel")),t.btnLoading=!1}));case 4:case"end":return e.stop()}}),e)})))()},getAllowance:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.srscontractInstance.methods.allowance(t.address,u["e"]).call();case 2:n=e.sent,t.allowance=n/o.a.pow(10,18),console.log(t.allowance,"destroy"),t.allowance?t.btnText="destroy":t.btnText="approve",t.btnLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},userDestroy:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.number){e.next=2;break}return e.abrupt("return");case 2:return t.btnLoading=!0,n=o.a.pow(t.number,18),e.next=6,t.$store.state.destroyContractInstance.methods.burn(n,t.current).send({from:t.address}).then((function(e){t.btnLoading=!1,Object(d["a"])(t.$t("success")),t.number="",t.getBalanceOf(t.srscontractInstance,t.address),console.log("res",e)})).catch((function(e){Object(d["a"])(t.$t("cancel")),t.btnLoading=!1}));case 6:case"end":return e.stop()}}),e)})))()},to:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.type=t,a=localStorage.getItem("token"),a){n.next=9;break}return n.next=5,e.getsign();case 5:r=n.sent,r&&setTimeout((function(){e.$router.push({path:"NFTrecords",query:{type:t}})}),500),n.next=10;break;case 9:e.$router.push({path:"NFTrecords",query:{type:t}});case 10:case"end":return n.stop()}}),n)})))()}},beforeRouteLeave:function(t,e,n){1==this.type&&(t.meta.title="meta.destroyRecords"),2==this.type&&(t.meta.title="meta.NFTrecords"),n()},destroyed:function(){clearInterval(this.timer)}},f=g,v=(n("7352"),n("cba8")),b=Object(v["a"])(f,a,r,!1,null,"33f218c9",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-7e50e41f.ec66f164.js.map