!function(){var t={10:function(t,e,n){"use strict";var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]),e.Z=o},645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},537:function(t){"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof D},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},w=_;w.l=b,w.i=g,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,u=!!w.u(e)||e,f=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(o)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case c:return u?h(1,0):h(31,11);case l:return u?h(1,v):h(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(u?_-g:_+(6-g),v);case o:case d:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,u=w.p(t),f="set"+(this.$u?"UTC":""),h=(a={},a[o]=f+"Date",a[d]=f+"Date",a[l]=f+"Month",a[c]=f+"FullYear",a[r]=f+"Hours",a[s]=f+"Minutes",a[i]=f+"Seconds",a[n]=f+"Milliseconds",a)[u],p=u===o?this.$D+(e-this.$W):e;if(u===l||u===c){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,u){var d,f=this;n=Number(n);var h=w.p(u),p=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===o)return p(1);if(h===a)return p(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=w.m(this,m);return y=(h={},h[c]=y/12,h[l]=y,h[u]=y/3,h[a]=(_-v)/6048e5,h[o]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[p]||_,f?y:w.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),x=D.prototype;return M.prototype=x,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},f=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function p(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*c[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(u);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,u=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+u+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*c[h(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:function(t){"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],u=i.base?l[0]+i.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var f=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),u=0;u<r.length;u++){var c=n(r[u]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:function(t){"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(t){"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nc=void 0,function(){"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),u=n(216),c=n.n(u),d=n(589),f=n.n(d),h=n(10),p={};p.styleTagTransform=f(),p.setAttributes=l(),p.insert=o().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=c(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class v{#t=null;constructor(){if(new.target===v)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),t?.()}),600)}}const _={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function y(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_.BEFOREEND;if(!(t instanceof v))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function $(t,e){if(!(t instanceof v&&e instanceof v))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var g=n(484),b=n(646);g.extend(b);const M=36e5,w=864e5,D=(t,e)=>{const n=Math.ceil(Math.min(Math.abs(t),Math.abs(e))),i=Math.floor(Math.max(Math.abs(t),Math.abs(e))),s=Math.random()*(i-n+1)+n;return Math.floor(s)},x=t=>t[D(0,t.length-1)],S=t=>g(t).format("DD/MM/YY HH:mm"),E=t=>g(t).format("MMM DD"),A=t=>g(t).format("HH:mm");class k extends v{get template(){return'<ul class="trip-events__list"></ul>'}}const O=[{id:"day",text:"Day",checked:!0},{id:"event",text:"Event",disabled:!0},{id:"time",text:"Time"},{id:"price",text:"Price"},{id:"offer",text:"Offers",disabled:!0}];function C(){let{id:t,text:e,checked:n,disabled:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return`<div class="trip-sort__item  trip-sort__item--${t}">\n  <input id="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t}" ${n?"checked":""} ${i?"disabled":""}>\n  <label class="trip-sort__btn" for="sort-${t}">${e}</label>\n</div>`}class T extends v{get template(){return`\n  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n\n    ${O.map(C).join("")}\n\n</form>\n`}}const F=["Moscow","Tokyo","Baku","Berlin","Paris","Lissabon","Madrid","Rim"],H={basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:!1,offers:[],type:"train"},P=5,Y=5,B=59;class L extends v{#e=null;#n=null;#i=null;#s=null;constructor(t){let{point:e=H,pointDestinations:n,pointOffers:i,onFormSubmit:s}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#s=s,this.element.querySelector("form").addEventListener("submit",this.#r),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(t){let{point:e,pointDestination:n,pointOffers:i}=t;const{basePrice:s,dateFrom:r,dateTo:o,offers:a,type:l}=e,u=i.find((t=>t.type===l)).offers.filter((t=>{let{id:e}=t;return-1!==a.indexOf(e)})),c=n.find((t=>t.id===e.destination)),d=c.pictures.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.description}">`)).join(""),f=[{text:"Taxi",id:"taxi"},{text:"Bus",id:"bus"},{text:"Train",id:"train"},{text:"Ship",id:"ship"},{text:"Drive",id:"drive"},{text:"Flight",id:"flight"},{text:"Check-in",id:"check-in"},{text:"Sightseeing",id:"sightseeing"},{text:"Restaurant",id:"restaurant"}].map((t=>`<div class="event__type-item">\n      <input id="event-type-${t.id}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.id}">\n      <label class="event__type-label  event__type-label--${t.id}" for="event-type-${t.id}-1">${t.text}</label>\n    </div>`)).join(""),h=u.map((t=>`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n    <label class="event__offer-label" for="event-offer-luggage-1">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n    </label>\n  </div>`)).join("");return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${l}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${f}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${l}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${S(r)}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${S(o)}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${h}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${c.description}</p>\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                    ${d}\n                      </div>\n                    </div>\n                  </section>\n                </section>\n              </form>\n              </li>\n`}({point:this.#e,pointDestination:this.#n,pointOffers:this.#i})}#r=t=>{t.preventDefault(),this.#s()}}class I extends v{#e=null;#i=null;#o=null;constructor(t){let{point1:e,pointOffers:n,onEditClickHandler:i}=t;super(),this.#e=e,this.#i=n,this.#o=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(t){let{point:e,pointOffers:n}=t;const{basePrice:i,dateFrom:s,dateTo:r,offers:o,type:a}=e,l=n.find((t=>t.type===a)).offers.filter((t=>{let{id:e}=t;return-1!==o.indexOf(e)})).map((t=>`<li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join("");return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${s}">${E(s)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${a} Amsterdam</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${s}">${A(s)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${A(r)}</time>\n      </p>\n      <p class="event__duration">${function(t,e){const n=g(e).diff(g(t));let i=0;switch(!0){case n>=w:i=g.duration(n).format("DD[D] HH[H] mm[M]");break;case n>=M:i=g.duration(n).format("HH[H] mm[M]");break;case n<w:i=g.duration(n).format("mm[M]")}return i}(s,r)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${l}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`}({point:this.#e,pointOffers:this.#i})}#a=t=>{t.preventDefault(),this.#o()}}function j(t){return`<div class="trip-filters__filter">\n    <input id="filter-${t.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t.type}" ${t.hasPoints?"":"disabled"}>\n    <label class="trip-filters__filter-label" for="filter-${t.type}">${t.type}</label>\n  </div>`}class N extends v{#l=null;constructor(t){super(),this.#l=t}get template(){return`\n    <form class="trip-filters" action="#" method="get">\n      ${this.#l.map(j).join("")}\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}}const U={everything:t=>[...t],future:t=>t.filter((t=>function(t){return g().isBefore(t.dateFrom)}(t))),present:t=>t.filter((t=>function(t){return g().isAfter(t.dateFrom)&&g().isBefore(t.dateTo)}(t))),past:t=>t.filter((t=>function(t){return g().isAfter(t.dateTo)}(t)))};let q=g().subtract(D(0,Y),"day").toDate();function R(t){let{next:e}=t;const n=D(0,B),i=D(1,P),s=D(0,Y);return e&&(q=g(q).add(n,"minute").add(i,"hour").add(s,"day").toDate()),q}const W=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];g.extend(b);const Z=document.querySelector(".trip-main"),z=document.querySelector(".trip-controls__filters"),J=document.querySelector(".trip-events"),X=new class{destination=[];offers=[];points=[];constructor(){this.destinations=this.generateDestinations(),this.offers=this.generateOffers(),this.points=this.generatePoints()}getDestinations(){return this.destinations}getOffers(){return this.offers}getPoints(){return this.points}generateDestinations(){return Array.from({length:5},(()=>function(){const t=x(F);return{id:crypto.randomUUID(),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:t,pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${t} description`},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:`${t} description`}]}}()))}generateOffers(){return W.map((t=>({type:t,offers:Array.from({length:D(0,5)},(()=>function(t){return{id:crypto.randomUUID(),title:`Offer ${t}`,price:D(1,100)}}(t)))})))}generatePoints(){return Array.from({length:5},(()=>{const t=x(W),e=x(this.destinations),{offers:n}=this.offers.find((e=>e.type===t)),i=n.length>=5?5:n.length,s=Array.from({length:D(0,i)},((t,e)=>n[e].id));return function(t,e,n){return{id:crypto.randomUUID(),basePrice:D(1,1e3),dateFrom:R({next:!1}),dateTo:R({next:!0}),destination:e,isFavorite:Boolean(D(0,1)),offers:n,type:t}}(t,e.id,s)}))}},G=new class{#u=null;#c=null;constructor(t){this.#u=t,this.#c=this.#u.getDestinations()}get destinations(){return this.#c}}(X),V=new class{#u=null;#d=null;constructor(t){this.#u=t,this.#d=this.#u.getOffers()}get offers(){return this.#d}}(X),K=new class{#u=null;#f=null;constructor(t){this.#u=t,this.#f=this.#u.getPoints()}get points(){return this.#f}}(X),Q=new class{#h=null;#p=null;#l=[];constructor(t){let{container:e,pointsModel:n}=t;var i;this.#h=e,this.#p=n,this.#l=(i=this.#p.points,Object.entries(U).map((t=>{let[e,n]=t;return{type:e,hasPoints:n(i).length>0}})))}init(){y(new N(this.#l),this.#h)}}({container:z,pointsModel:K}),tt=new class{#m=new k;#h=null;#v=null;#_=null;#p=null;#y=null;constructor(t){let{container:e,destinationsModel:n,offersModel:i,pointsModel:s}=t;this.#h=e,this.#v=n,this.#_=i,this.#p=s,this.#y=[...s.points]}init(){y(new T,this.#h),y(this.#m,this.#h),this.#y.forEach((t=>{this.#$(t)}))}#$(t){const e=t=>{"Escape"===t.key&&(t.preventDefault(),s(),document.removeEventListener("keydown",e))},n=new I({point1:t,pointOffers:this.#_.offers,onEditClickHandler:()=>{$(i,n),document.addEventListener("keydown",e)}}),i=new L({point:t,pointDestinations:this.#v.destinations,pointOffers:this.#_.offers,onFormSubmit:()=>{s(),document.removeEventListener("keydown",e)}});function s(){$(n,i)}y(n,this.#m.element)}}({container:J,destinationsModel:G,offersModel:V,pointsModel:K});y(new class extends v{#g=null;#b=null;#M=null;#w=null;constructor(t){let{title:e,dateFrom:n,dateTo:i,price:s}=t;super(),this.#g=e,this.#b=n,this.#M=i,this.#w=s}get template(){const t=`${E(this.#b)} - ${E(this.#M)}`;return function(t,e,n){return` <section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">${t}</h1>\n\n    <p class="trip-info__dates">${e}</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">${n}</span>\n  </p>\n</section>`}(this.#g,t,this.#w)}}({title:"Amsterdam - Chamonix - Geneva",dateFrom:g(new Date).subtract(20,"day").toDate(),dateTo:new Date,price:1230}),Z,_.AFTERBEGIN),Q.init(),tt.init()}()}();
//# sourceMappingURL=bundle.23aa669a71889db56ccd.js.map