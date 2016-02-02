(function(e,t,n){"use strict";t.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){var e="$$ngAnimateChildren";return function(n,r,i){var s=i.ngAnimateChildren;if(t.isString(s)&&s.length===0){r.data(e,true)}else{n.$watch(s,function(t){r.data(e,!!t)})}}}).factory("$$animateReflow",["$$rAF","$document",function(e,t){var n=t[0].body;return function(t){return e(function(){var e=n.offsetWidth+1;t()})}}]).config(["$provide","$animateProvider",function(r,i){function m(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.nodeType==c){return n}}}function g(e){return e&&t.element(e)}function y(e){return t.element(m(e))}function b(e,t){return m(e)==m(t)}var s=t.noop;var o=t.forEach;var u=i.$$selectors;var a=t.isArray;var f=t.isString;var l=t.isObject;var c=1;var h="$$ngAnimateState";var p="$$ngAnimateChildren";var d="ng-animate";var v={running:true};var w;r.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(e,n,r,c,E,S,x,T,N,C){function M(e,t){var n=e.data(h)||{};if(t){n.running=true;n.structural=true;e.data(h,n)}return n.disabled||n.running&&n.structural}function _(e){var t,r=n.defer();r.promise.$$cancelFn=function(){t&&t()};x.$$postDigest(function(){t=e(function(){r.resolve()})});return r.promise}function D(e){if(l(e)){if(e.tempClasses&&f(e.tempClasses)){e.tempClasses=e.tempClasses.split(/\s+/)}return e}}function P(e,t,n){n=n||{};var r={};o(n,function(e,t){o(t.split(" "),function(t){r[t]=e})});var i=Object.create(null);o((e.attr("class")||"").split(/\s+/),function(e){i[e]=true});var s=[],u=[];o(t&&t.classes||[],function(e,t){var n=i[t];var o=r[t]||{};if(e===false){if(n||o.event=="addClass"){u.push(t)}}else if(e===true){if(!n||o.event=="removeClass"){s.push(t)}}});return s.length+u.length>0&&[s.join(" "),u.join(" ")]}function H(e){if(e){var t=[],n={},i=e.substr(1).split(".");if(c.transitions||c.animations){t.push(r.get(u[""]))}for(var s=0;s<i.length;s++){var o=i[s],a=u[o];if(a&&!n[o]){t.push(r.get(a));n[o]=true}}return t}}function B(e,n,r,i){function S(e,t){var n=e[t];var r=e["before"+t.charAt(0).toUpperCase()+t.substr(1)];if(n||r){if(t=="leave"){r=n;n=null}w.push({event:t,fn:n});g.push({event:t,fn:r});return true}}function x(t,n,u){function h(e){if(n){(n[e]||s)();if(++c<a.length)return;n=null}u()}var a=[];o(t,function(e){e.fn&&a.push(e)});var c=0;o(a,function(t,s){var o=function(){h(s)};switch(t.event){case"setClass":n.push(t.fn(e,f,l,o,i));break;case"animate":n.push(t.fn(e,r,i.from,i.to,o));break;case"addClass":n.push(t.fn(e,f||r,o,i));break;case"removeClass":n.push(t.fn(e,l||r,o,i));break;default:n.push(t.fn(e,o,i));break}});if(n&&n.length===0){u()}}var u=e[0];if(!u){return}if(i){i.to=i.to||{};i.from=i.from||{}}var f;var l;if(a(r)){f=r[0];l=r[1];if(!f){r=l;n="removeClass"}else if(!l){r=f;n="addClass"}else{r=f+" "+l}}var c=n=="setClass";var h=c||n=="addClass"||n=="removeClass"||n=="animate";var p=e.attr("class");var d=p+" "+r;if(!O(d)){return}var v=s,m=[],g=[],y=s,b=[],w=[];var E=(" "+d).replace(/\s+/g,".");o(H(E),function(e){var t=S(e,n);if(!t&&c){S(e,"addClass");S(e,"removeClass")}});return{node:u,event:n,className:r,isClassBased:h,isSetClassOperation:c,applyStyles:function(){if(i){e.css(t.extend(i.from||{},i.to||{}))}},before:function(e){v=e;x(g,m,function(){v=s;e()})},after:function(e){y=e;x(w,b,function(){y=s;e()})},cancel:function(){if(m){o(m,function(e){(e||s)(true)});v(true)}if(b){o(b,function(e){(e||s)(true)});y(true)}}}}function j(e,n,r,i,u,a,f,l){function k(t){var i="$animate:"+t;if(v&&v[i]&&v[i].length>0){S(function(){r.triggerHandler(i,{event:e,className:n})})}}function A(){k("before")}function O(){k("after")}function M(){k("close");l()}function _(){if(!_.hasBeenRun){_.hasBeenRun=true;a()}}function D(){if(!D.hasBeenRun){if(p){p.applyStyles()}D.hasBeenRun=true;if(f&&f.tempClasses){o(f.tempClasses,function(e){w.removeClass(r,e)})}var t=r.data(h);if(t){if(p&&p.isClassBased){I(r,n)}else{S(function(){var t=r.data(h)||{};if(C==t.index){I(r,n,e)}});r.data(h,t)}}M()}}var c=s;var p=B(r,e,n,f);if(!p){_();A();O();D();return c}e=p.event;n=p.className;var v=t.element._data(p.node);v=v&&v.events;if(!i){i=u?u.parent():r.parent()}if(q(r,i)){_();A();O();D();return c}var m=r.data(h)||{};var g=m.active||{};var y=m.totalActive||0;var b=m.last;var E=false;if(y>0){var x=[];if(!p.isClassBased){if(e=="leave"&&g["ng-leave"]){E=true}else{for(var T in g){x.push(g[T])}m={};I(r,true)}}else if(b.event=="setClass"){x.push(b);I(r,n)}else if(g[n]){var N=g[n];if(N.event==e){E=true}else{x.push(N);I(r,n)}}if(x.length>0){o(x,function(e){e.cancel()})}}if(p.isClassBased&&!p.isSetClassOperation&&e!="animate"&&!E){E=e=="addClass"==r.hasClass(n)}if(E){_();A();O();M();return c}g=m.active||{};y=m.totalActive||0;if(e=="leave"){r.one("$destroy",function(e){var n=t.element(this);var r=n.data(h);if(r){var i=r.active["ng-leave"];if(i){i.cancel();I(n,"ng-leave")}}})}w.addClass(r,d);if(f&&f.tempClasses){o(f.tempClasses,function(e){w.addClass(r,e)})}var C=L++;y++;g[n]=p;r.data(h,{last:p,active:g,index:C,totalActive:y});A();p.before(function(t){var i=r.data(h);t=t||!i||!i.active[n]||p.isClassBased&&i.active[n].event!=e;_();if(t===true){D()}else{O();p.after(D)}});return p.cancel}function F(e){var n=m(e);if(n){var r=t.isFunction(n.getElementsByClassName)?n.getElementsByClassName(d):n.querySelectorAll("."+d);o(r,function(e){e=t.element(e);var n=e.data(h);if(n&&n.active){o(n.active,function(e){e.cancel()})}})}}function I(e,t){if(b(e,E)){if(!v.disabled){v.running=false;v.structural=false}}else if(t){var n=e.data(h)||{};var r=t===true;if(!r&&n.active&&n.active[t]){n.totalActive--;delete n.active[t]}if(r||!n.totalActive){w.removeClass(e,d);e.removeData(h)}}}function q(e,n){if(v.disabled){return true}if(b(e,E)){return v.running}var r,i,s;do{if(n.length===0)break;var o=b(n,E);var u=o?v:n.data(h)||{};if(u.disabled){return true}if(o){s=true}if(r!==false){var a=n.data(p);if(t.isDefined(a)){r=a}}i=i||u.running||u.last&&!u.last.isClassBased}while(n=n.parent());return!s||!r&&i}w=C;E.data(h,v);var k=x.$watch(function(){return N.totalPendingRequests},function(e,t){if(e!==0)return;k();x.$$postDigest(function(){x.$$postDigest(function(){v.running=false})})});var L=0;var A=i.classNameFilter();var O=!A?function(){return true}:function(e){return A.test(e)};return{animate:function(e,t,n,r,i){r=r||"ng-inline-animate";i=D(i)||{};i.from=n?t:null;i.to=n?n:t;return _(function(t){return j("animate",r,y(e),null,null,s,i,t)})},enter:function(n,r,i,o){o=D(o);n=t.element(n);r=g(r);i=g(i);M(n,true);e.enter(n,r,i);return _(function(e){return j("enter","ng-enter",y(n),r,i,s,o,e)})},leave:function(n,r){r=D(r);n=t.element(n);F(n);M(n,true);return _(function(t){return j("leave","ng-leave",y(n),null,null,function(){e.leave(n)},r,t)})},move:function(n,r,i,o){o=D(o);n=t.element(n);r=g(r);i=g(i);F(n);M(n,true);e.move(n,r,i);return _(function(e){return j("move","ng-move",y(n),r,i,s,o,e)})},addClass:function(e,t,n){return this.setClass(e,t,[],n)},removeClass:function(e,t,n){return this.setClass(e,[],t,n)},setClass:function(n,r,i,s){s=D(s);var u="$$animateClasses";n=t.element(n);n=y(n);if(M(n)){return e.$$setClassImmediately(n,r,i,s)}var f,l=n.data(u);var c=!!l;if(!l){l={};l.classes={}}f=l.classes;r=a(r)?r:r.split(" ");o(r,function(e){if(e&&e.length){f[e]=true}});i=a(i)?i:i.split(" ");o(i,function(e){if(e&&e.length){f[e]=false}});if(c){if(s&&l.options){l.options=t.extend(l.options||{},s)}return l.promise}else{n.data(u,l={classes:f,options:s})}return l.promise=_(function(t){var r=n.parent();var i=m(n);var s=i.parentNode;if(!s||s["$$NG_REMOVED"]||i["$$NG_REMOVED"]){t();return}var o=n.data(u);n.removeData(u);var a=n.data(h)||{};var f=P(n,o,a.active);return!f?t():j("setClass",f,n,r,null,function(){if(f[0])e.$$addClassImmediately(n,f[0]);if(f[1])e.$$removeClassImmediately(n,f[1])},o.options,t)})},cancel:function(e){e.$$cancelFn()},enabled:function(e,t){switch(arguments.length){case 2:if(e){I(t)}else{var n=t.data(h)||{};n.disabled=true;t.data(h,n)}break;case 1:v.disabled=!e;break;default:e=!v.disabled;break}return!!e}}}]);i.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,i,u,l){function D(){if(!_){_=l(function(){M=[];_=null;A={}})}}function P(e,t){if(_){_()}M.push(t);_=l(function(){o(M,function(e){e()});M=[];_=null;A={}})}function F(e,n){var r=m(e);e=t.element(r);j.push(e);var i=Date.now()+n;if(i<=B){return}u.cancel(H);B=i;H=u(function(){I(j);j=[]},n,false)}function I(e){o(e,function(e){var t=e.data(N);if(t){o(t.closeAnimationFns,function(e){e()})}})}function q(e,t){var n=t?A[t]:null;if(!n){var i=0;var s=0;var u=0;var a=0;o(e,function(e){if(e.nodeType==c){var t=r.getComputedStyle(e)||{};var n=t[p+y];i=Math.max(R(n),i);var o=t[p+E];s=Math.max(R(o),s);var f=t[v+E];a=Math.max(R(t[v+E]),a);var l=R(t[v+y]);if(l>0){l*=parseInt(t[v+S],10)||1}u=Math.max(l,u)}});n={total:0,transitionDelay:s,transitionDuration:i,animationDelay:a,animationDuration:u};if(t){A[t]=n}}return n}function R(e){var t=0;var n=f(e)?e.split(/\s*,\s*/):[];o(n,function(e){t=Math.max(parseFloat(e)||0,t)});return t}function U(e){var t=e.parent();var n=t.data(T);if(!n){t.data(T,++O);n=O}return n+"-"+m(e).getAttribute("class")}function z(e,t,n,r){var i=["ng-enter","ng-leave","ng-move"].indexOf(n)>=0;var s=U(t);var o=s+" "+n;var u=A[o]?++A[o].total:0;var a={};if(u>0){var f=n+"-stagger";var l=s+" "+f;var c=!A[l];c&&w.addClass(t,f);a=q(t,l);c&&w.removeClass(t,f)}w.addClass(t,n);var h=t.data(N)||{};var p=q(t,o);var d=p.transitionDuration;var v=p.animationDuration;if(i&&d===0&&v===0){w.removeClass(t,n);return false}var g=r||i&&d>0;var y=v>0&&a.animationDelay>0&&a.animationDuration===0;var b=h.closeAnimationFns||[];t.data(N,{stagger:a,cacheKey:o,running:h.running||0,itemIndex:u,blockTransition:g,closeAnimationFns:b});var E=m(t);if(g){X(E,true);if(r){t.css(r)}}if(y){V(E,true)}return true}function W(e,t,n,r,i){function I(){t.off(P,R);w.removeClass(t,f);w.removeClass(t,l);if(j){u.cancel(j)}Q(t,n);var e=m(t);for(var r in p){e.style.removeProperty(p[r])}}function R(e){e.stopPropagation();var t=e.originalEvent||e;var n=t.$manualTimeStamp||t.timeStamp||Date.now();var i=parseFloat(t.elapsedTime.toFixed(C));if(Math.max(n-D,0)>=M&&i>=A){r()}}var s=m(t);var a=t.data(N);if(s.getAttribute("class").indexOf(n)==-1||!a){r();return}var f="";var l="";o(n.split(" "),function(e,t){var n=(t>0?" ":"")+e;f+=n+"-active";l+=n+"-pending"});var c="";var p=[];var v=a.itemIndex;var y=a.stagger;var b=0;if(v>0){var E=0;if(y.transitionDelay>0&&y.transitionDuration===0){E=y.transitionDelay*v}var S=0;if(y.animationDelay>0&&y.animationDuration===0){S=y.animationDelay*v;p.push(h+"animation-play-state")}b=Math.round(Math.max(E,S)*100)/100}if(!b){w.addClass(t,f);if(a.blockTransition){X(s,false)}}var x=a.cacheKey+" "+f;var T=q(t,x);var A=Math.max(T.transitionDuration,T.animationDuration);if(A===0){w.removeClass(t,f);Q(t,n);r();return}if(!b&&i){if(!T.transitionDuration){t.css("transition",T.animationDuration+"s linear all");p.push("transition")}t.css(i)}var O=Math.max(T.transitionDelay,T.animationDelay);var M=O*L;if(p.length>0){var _=s.getAttribute("style")||"";if(_.charAt(_.length-1)!==";"){_+=";"}s.setAttribute("style",_+" "+c)}var D=Date.now();var P=g+" "+d;var H=(O+A)*k;var B=(b+H)*L;var j;if(b>0){w.addClass(t,l);j=u(function(){j=null;if(T.transitionDuration>0){X(s,false)}if(T.animationDuration>0){V(s,false)}w.addClass(t,f);w.removeClass(t,l);if(i){if(T.transitionDuration===0){t.css("transition",T.animationDuration+"s linear all")}t.css(i);p.push("transition")}},b*L,false)}t.on(P,R);a.closeAnimationFns.push(function(){I();r()});a.running++;F(t,B);return I}function X(e,t){e.style[p+b]=t?"none":""}function V(e,t){e.style[v+x]=t?"paused":""}function $(e,t,n,r){if(z(e,t,n,r)){return function(e){e&&Q(t,n)}}}function J(e,t,n,r,i){if(t.data(N)){return W(e,t,n,r,i)}else{Q(t,n);r()}}function K(e,t,n,r,i){var o=$(e,t,n,i.from);if(!o){D();r();return}var u=o;P(t,function(){u=J(e,t,n,r,i.to)});return function(e){(u||s)(e)}}function Q(e,t){w.removeClass(e,t);var n=e.data(N);if(n){if(n.running){n.running--}if(!n.running||n.running===0){e.removeData(N)}}}function G(e,t){var n="";e=a(e)?e:e.split(/\s+/);o(e,function(e,r){if(e&&e.length>0){n+=(r>0?" ":"")+e+t}});return n}var h="",p,d,v,g;if(e.ontransitionend===n&&e.onwebkittransitionend!==n){h="-webkit-";p="WebkitTransition";d="webkitTransitionEnd transitionend"}else{p="transition";d="transitionend"}if(e.onanimationend===n&&e.onwebkitanimationend!==n){h="-webkit-";v="WebkitAnimation";g="webkitAnimationEnd animationend"}else{v="animation";g="animationend"}var y="Duration";var b="Property";var E="Delay";var S="IterationCount";var x="PlayState";var T="$$ngAnimateKey";var N="$$ngAnimateCSS3Data";var C=3;var k=1.5;var L=1e3;var A={};var O=0;var M=[];var _;var H=null;var B=0;var j=[];return{animate:function(e,t,n,r,i,s){s=s||{};s.from=n;s.to=r;return K("animate",e,t,i,s)},enter:function(e,t,n){n=n||{};return K("enter",e,"ng-enter",t,n)},leave:function(e,t,n){n=n||{};return K("leave",e,"ng-leave",t,n)},move:function(e,t,n){n=n||{};return K("move",e,"ng-move",t,n)},beforeSetClass:function(e,t,n,r,i){i=i||{};var s=G(n,"-remove")+" "+G(t,"-add");var o=$("setClass",e,s,i.from);if(o){P(e,r);return o}D();r()},beforeAddClass:function(e,t,n,r){r=r||{};var i=$("addClass",e,G(t,"-add"),r.from);if(i){P(e,n);return i}D();n()},beforeRemoveClass:function(e,t,n,r){r=r||{};var i=$("removeClass",e,G(t,"-remove"),r.from);if(i){P(e,n);return i}D();n()},setClass:function(e,t,n,r,i){i=i||{};n=G(n,"-remove");t=G(t,"-add");var s=n+" "+t;return J("setClass",e,s,r,i.to)},addClass:function(e,t,n,r){r=r||{};return J("addClass",e,G(t,"-add"),n,r.to)},removeClass:function(e,t,n,r){r=r||{};return J("removeClass",e,G(t,"-remove"),n,r.to)}}}])}])})(window,window.angular)