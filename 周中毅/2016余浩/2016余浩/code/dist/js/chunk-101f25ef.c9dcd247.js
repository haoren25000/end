(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101f25ef"],{"210d":function(t,e,o){"use strict";var i=o("2f7f"),s=o.n(i);s.a},"2f7f":function(t,e,o){},"643d":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{attrs:{action:"/"}},[o("van-search",{attrs:{"show-action":"",placeholder:"请输入关键词"},on:{search:t.onSearch,cancel:t.onCancel}})],1),o("bscroll"),o("vantabbar",{attrs:{activevue:1}})],1)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"head"},[t._v("head")]),o("div",{staticClass:"content"},[o("div",{ref:"left",staticClass:"left"},[o("ul",t._l(t.left,(function(e,i){return o("li",{key:i,class:{current:i==t.currentIndex},on:{click:function(e){return t.selectItem(i,e)}}},[o("span",[t._v(t._s(e))])])})),0)]),o("div",{ref:"right",staticClass:"right"},[o("ul",t._l(t.right,(function(e,i){return o("li",{key:i,staticClass:"right-item-hook"},[o("h2",[t._v(t._s(e.name))]),o("ul",t._l(e.content,(function(e){return o("li",{key:e+i,staticClass:"lis"},[t._m(0,!0)])})),0)])})),0)])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"ulThree"},[o("li",[o("img",{attrs:{src:"//img11.360buyimg.com/focus/s140x140_jfs/t1/130205/33/377/11997/5eccb5fdE4c3b46b6/a03fb2c9e640722b.jpg"}}),o("p",[t._v("5G")])]),o("li",[o("img",{attrs:{src:"//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png"}}),o("p",[t._v("电脑")])]),o("li",[o("img",{attrs:{src:"//img20.360buyimg.com/focus/s140x140_jfs/t1/86638/37/11918/19572/5e3e4307E7606f742/0210ac72c0d9275e.jpg"}}),o("p",[t._v("全屏手机")])])])])}],h=function(t,e){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},h(t,e)};function a(t,e){function o(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var c=function(){return c=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var s in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},c.apply(this,arguments)};function l(t){console.error("[BScroll warn]: "+t)}var u="undefined"!==typeof window,p=u&&navigator.userAgent.toLowerCase(),f=p&&/wechatdevtools/.test(p),d=p&&p.indexOf("android")>0;function v(){return window.performance&&window.performance.now&&window.performance.timing?window.performance.now()+window.performance.timing.navigationStart:+new Date}function m(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];for(var i=0;i<e.length;i++){var s=e[i];for(var n in s)t[n]=s[n]}return t}function y(t){return void 0===t||null===t}var g=u&&document.createElement("div").style,k=function(){if(!u)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==g[t[e]])return e;return!1}();function b(t){return!1===k?t:"standard"===k?"transitionEnd"===t?"transitionend":t:k+t.charAt(0).toUpperCase()+t.substr(1)}function T(t){return"string"===typeof t?document.querySelector(t):t}function w(t,e,o,i){t.addEventListener(e,o,{passive:!1,capture:!!i})}function P(t,e,o,i){t.removeEventListener(e,o,{capture:!!i})}function S(t){var e=0,o=0;while(t)e-=t.offsetLeft,o-=t.offsetTop,t=t.offsetParent;return{left:e,top:o}}k&&"standard"!==k&&k.toLowerCase();var E=b("transform"),B=b("transition"),Y=u&&b("perspective")in g,X=u&&("ontouchstart"in window||f),x=u&&B in g,D={transform:E,transition:B,transitionTimingFunction:b("transitionTimingFunction"),transitionDuration:b("transitionDuration"),transitionDelay:b("transitionDelay"),transformOrigin:b("transformOrigin"),transitionEnd:b("transitionEnd")},C={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2};function O(t){if(t instanceof window.SVGElement){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function L(t,e){for(var o in e)if(e[o].test(t[o]))return!0;return!1}var M=L;function _(t,e){var o=document.createEvent("Event");o.initEvent(e,!0,!0),o.pageX=t.pageX,o.pageY=t.pageY,t.target.dispatchEvent(o)}function H(t,e){var o;void 0===e&&(e="click"),"mouseup"===t.type?o=t:"touchend"!==t.type&&"touchcancel"!==t.type||(o=t.changedTouches[0]);var i,s={};o&&(s.screenX=o.screenX||0,s.screenY=o.screenY||0,s.clientX=o.clientX||0,s.clientY=o.clientY||0);var n=!0,r=!0;if("undefined"!==typeof MouseEvent)try{i=new MouseEvent(e,m({bubbles:n,cancelable:r},s))}catch(t){h()}else h();function h(){i=document.createEvent("Event"),i.initEvent(e,n,r),m(i,s)}i.forwardedTouchEvent=!0,i._constructed=!0,t.target.dispatchEvent(i)}function z(t){H(t,"dblclick")}var A={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},j=100/60,F=u&&window;function K(){}var R=function(){return u?F.requestAnimationFrame||F.webkitRequestAnimationFrame||F.mozRequestAnimationFrame||F.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||j)/2)}:K}(),I=function(){return u?F.cancelAnimationFrame||F.webkitCancelAnimationFrame||F.mozCancelAnimationFrame||F.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:K}(),$=function(t){},N={enumerable:!0,configurable:!0,get:$,set:$},W=function(t,e){for(var o=e.split("."),i=0;i<o.length-1;i++)if(t=t[o[i]],"object"!==typeof t||!t)return;var s=o.pop();return"function"===typeof t[s]?function(){return t[s].apply(t,arguments)}:t[s]},q=function(t,e,o){for(var i,s=e.split("."),n=0;n<s.length-1;n++)i=s[n],t[i]||(t[i]={}),t=t[i];t[s.pop()]=o};function U(t,e,o){N.get=function(){return W(this,e)},N.set=function(t){q(this,e,t)},Object.defineProperty(t,o,N)}var Z=function(){function t(t){this.events={},this.eventTypes={},this.registerType(t)}return t.prototype.on=function(t,e,o){return void 0===o&&(o=this),this.hasType(t),this.events[t]||(this.events[t]=[]),this.events[t].push([e,o]),this},t.prototype.once=function(t,e,o){var i=this;void 0===o&&(o=this),this.hasType(t);var s=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];i.off(t,s),e.apply(o,n)};return s.fn=e,this.on(t,s),this},t.prototype.off=function(t,e){if(!t&&!e)return this.events={},this;if(t){if(this.hasType(t),!e)return this.events[t]=[],this;var o=this.events[t];if(!o)return this;var i=o.length;while(i--)(o[i][0]===e||o[i][0]&&o[i][0].fn===e)&&o.splice(i,1);return this}},t.prototype.trigger=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];this.hasType(t);var i=this.events[t];if(i)for(var s,n=i.length,r=i.slice(),h=0;h<n;h++){var a=r[h],c=a[0],l=a[1];if(c&&(s=c.apply(l,e),!0===s))return s}},t.prototype.registerType=function(t){var e=this;t.forEach((function(t){e.eventTypes[t]=t}))},t.prototype.destroy=function(){this.events={},this.eventTypes={}},t.prototype.hasType=function(t){var e=this.eventTypes,o=e[t]===t;o||l('EventEmitter has used unknown event type: "'+t+'", should be oneof ['+Object.keys(e).map((function(t){return JSON.stringify(t)}))+"]")},t}(),J=function(){function t(t,e){this.wrapper=t,this.events=e,this.addDOMEvents()}return t.prototype.destroy=function(){this.removeDOMEvents(),this.events=[]},t.prototype.addDOMEvents=function(){this.handleDOMEvents(w)},t.prototype.removeDOMEvents=function(){this.handleDOMEvents(P)},t.prototype.handleDOMEvents=function(t){var e=this,o=this.wrapper;this.events.forEach((function(i){t(o,i.name,e,!!i.capture)}))},t.prototype.handleEvent=function(t){var e=t.type;this.events.some((function(o){return o.name===e&&(o.handler(t),!0)}))},t}(),G=function(){function t(){this.startX=0,this.startY=0,this.scrollX=!1,this.scrollY=!0,this.freeScroll=!1,this.directionLockThreshold=5,this.eventPassthrough="",this.click=!1,this.dblclick=!1,this.tap="",this.bounce={top:!0,bottom:!0,left:!0,right:!0},this.bounceTime=800,this.momentum=!0,this.momentumLimitTime=300,this.momentumLimitDistance=15,this.swipeTime=2500,this.swipeBounceTime=500,this.deceleration=.0015,this.flickLimitTime=200,this.flickLimitDistance=100,this.resizePolling=60,this.probeType=0,this.stopPropagation=!1,this.preventDefault=!0,this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/},this.tagException={tagName:/^TEXTAREA$/},this.HWCompositing=!0,this.useTransition=!0,this.bindToWrapper=!1,this.disableMouse=X,this.disableTouch=!X,this.autoBlur=!0}return t.prototype.merge=function(t){if(!t)return this;for(var e in t)this[e]=t[e];return this},t.prototype.process=function(){return this.translateZ=this.HWCompositing&&Y?" translateZ(0)":"",this.useTransition=this.useTransition&&x,this.preventDefault=!this.eventPassthrough&&this.preventDefault,this.resolveBounce(),this.scrollX="horizontal"!==this.eventPassthrough&&this.scrollX,this.scrollY="vertical"!==this.eventPassthrough&&this.scrollY,this.freeScroll=this.freeScroll&&!this.eventPassthrough,this.scrollX=!!this.freeScroll||this.scrollX,this.scrollY=!!this.freeScroll||this.scrollY,this.directionLockThreshold=this.eventPassthrough?0:this.directionLockThreshold,this},t.prototype.resolveBounce=function(){var t=["top","right","bottom","left"],e=this.bounce;!1!==e&&!0!==e||(this.bounce=V(t,e))},t}();function V(t,e){void 0===e&&(e=!0);var o={};return t.forEach((function(t){o[t]=e})),o}var Q=function(){function t(t,e){this.wrapper=t,this.options=e,this.hooks=new Z(["beforeStart","start","move","end","click"]),this.handleDOMEvents()}return t.prototype.handleDOMEvents=function(){var t=this.options,e=t.bindToWrapper,o=t.disableMouse,i=t.disableTouch,s=t.click,n=this.wrapper,r=e?n:window,h=[],a=[],c=X&&!i,l=!o;s&&h.push({name:"click",handler:this.click.bind(this),capture:!0}),c&&(h.push({name:"touchstart",handler:this.start.bind(this)}),a.push({name:"touchmove",handler:this.move.bind(this)},{name:"touchend",handler:this.end.bind(this)},{name:"touchcancel",handler:this.end.bind(this)})),l&&(h.push({name:"mousedown",handler:this.start.bind(this)}),a.push({name:"mousemove",handler:this.move.bind(this)},{name:"mouseup",handler:this.end.bind(this)})),this.wrapperEventRegister=new J(n,h),this.targetEventRegister=new J(r,a)},t.prototype.beforeHandler=function(t,e){var o=this.options,i=o.preventDefault,s=o.stopPropagation,n=o.preventDefaultException,r={start:function(){return i&&!L(t.target,n)},end:function(){return i&&!L(t.target,n)},move:function(){return i}};r[e]()&&t.preventDefault(),s&&t.stopPropagation()},t.prototype.setInitiated=function(t){void 0===t&&(t=0),this.initiated=t},t.prototype.start=function(t){var e=C[t.type];if(!this.initiated||this.initiated===e)if(this.setInitiated(e),M(t.target,this.options.tagException))this.setInitiated();else if((2!==e||0===t.button)&&!this.hooks.trigger(this.hooks.eventTypes.beforeStart,t)){this.beforeHandler(t,"start");var o=t.touches?t.touches[0]:t;this.pointX=o.pageX,this.pointY=o.pageY,this.hooks.trigger(this.hooks.eventTypes.start,t)}},t.prototype.move=function(t){if(C[t.type]===this.initiated){this.beforeHandler(t,"move");var e=t.touches?t.touches[0]:t,o=e.pageX-this.pointX,i=e.pageY-this.pointY;if(this.pointX=e.pageX,this.pointY=e.pageY,!this.hooks.trigger(this.hooks.eventTypes.move,{deltaX:o,deltaY:i,e:t})){var s=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,r=this.pointX-s,h=this.pointY-n;(r>document.documentElement.clientWidth-this.options.momentumLimitDistance||r<this.options.momentumLimitDistance||h<this.options.momentumLimitDistance||h>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this.end(t)}}},t.prototype.end=function(t){C[t.type]===this.initiated&&(this.setInitiated(),this.beforeHandler(t,"end"),this.hooks.trigger(this.hooks.eventTypes.end,t))},t.prototype.click=function(t){this.hooks.trigger(this.hooks.eventTypes.click,t)},t.prototype.destroy=function(){this.wrapperEventRegister.destroy(),this.targetEventRegister.destroy(),this.hooks.destroy()},t}(),tt={x:["translateX","px"],y:["translateY","px"]},et=function(){function t(t){this.content=t,this.style=t.style,this.hooks=new Z(["beforeTranslate","translate"])}return t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.content,null),e=t[D.transform].split(")")[0].split(", "),o=+(e[12]||e[4]),i=+(e[13]||e[5]);return{x:o,y:i}},t.prototype.translate=function(t){var e=[];Object.keys(t).forEach((function(o){if(tt[o]){var i=tt[o][0];if(i){var s=tt[o][1],n=t[o];e.push(i+"("+n+s+")")}}})),this.hooks.trigger(this.hooks.eventTypes.beforeTranslate,e,t),this.style[D.transform]=e.join(" "),this.hooks.trigger(this.hooks.eventTypes.translate,t)},t.prototype.destroy=function(){this.hooks.destroy()},t}(),ot=function(){function t(t,e,o){this.content=t,this.translater=e,this.options=o,this.hooks=new Z(["move","end","beforeForceStop","forceStop","time","timeFunction"]),this.style=t.style}return t.prototype.translate=function(t){this.translater.translate(t)},t.prototype.setPending=function(t){this.pending=t},t.prototype.setForceStopped=function(t){this.forceStopped=t},t.prototype.destroy=function(){this.hooks.destroy(),I(this.timer)},t}(),it=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.startProbe=function(){var t=this,e=function(){var o=t.translater.getComputedPosition();t.hooks.trigger(t.hooks.eventTypes.move,o),t.pending?t.timer=R(e):t.hooks.trigger(t.hooks.eventTypes.end,o)};I(this.timer),this.timer=R(e)},e.prototype.transitionTime=function(t){void 0===t&&(t=0),this.style[D.transitionDuration]=t+"ms",this.hooks.trigger(this.hooks.eventTypes.time,t)},e.prototype.transitionTimingFunction=function(t){this.style[D.transitionTimingFunction]=t,this.hooks.trigger(this.hooks.eventTypes.timeFunction,t)},e.prototype.move=function(t,e,o,i,s){this.setPending(o>0&&(t.x!==e.x||t.y!==e.y)),this.transitionTimingFunction(i),this.transitionTime(o),this.translate(e),o&&3===this.options.probeType&&this.startProbe(),o||(this._reflow=this.content.offsetHeight),o||s||(this.hooks.trigger(this.hooks.eventTypes.move,e),this.hooks.trigger(this.hooks.eventTypes.end,e))},e.prototype.stop=function(){if(this.pending){this.setPending(!1),I(this.timer);var t=this.translater.getComputedPosition(),e=t.x,o=t.y;if(this.transitionTime(),this.translate({x:e,y:o}),this.setForceStopped(!0),this.hooks.trigger(this.hooks.eventTypes.beforeForceStop,{x:e,y:o}))return;this.hooks.trigger(this.hooks.eventTypes.forceStop,{x:e,y:o})}},e}(ot),st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.move=function(t,e,o,i,s){if(!o){if(this.translate(e),this._reflow=this.content.offsetHeight,s)return;return this.hooks.trigger(this.hooks.eventTypes.move,e),void this.hooks.trigger(this.hooks.eventTypes.end,e)}this.animate(t,e,o,i)},e.prototype.animate=function(t,e,o,i){var s=this,n=v(),r=n+o,h=function(){var a=v();if(a>=r)return s.translate(e),s.hooks.trigger(s.hooks.eventTypes.move,e),void s.hooks.trigger(s.hooks.eventTypes.end,e);a=(a-n)/o;var c=i(a),l={};Object.keys(e).forEach((function(o){var i=t[o],s=e[o];l[o]=(s-i)*c+i})),s.translate(l),s.pending&&(s.timer=R(h)),3===s.options.probeType&&s.hooks.trigger(s.hooks.eventTypes.move,l)};this.setPending(!0),I(this.timer),h()},e.prototype.stop=function(){if(this.pending){this.setPending(!1),I(this.timer);var t=this.translater.getComputedPosition();if(this.setForceStopped(!0),this.hooks.trigger(this.hooks.eventTypes.beforeForceStop,t))return;this.hooks.trigger(this.hooks.eventTypes.forceStop,t)}},e}(ot);function nt(t,e,o){var i=o.useTransition,s={};return Object.defineProperty(s,"probeType",{enumerable:!0,configurable:!1,get:function(){return o.probeType}}),i?new it(t,e,s):new st(t,e,s)}var rt,ht,at,ct,lt=function(){function t(t,e){this.wrapper=t,this.options=e,this.hooks=new Z(["momentum","end"]),this.content=this.wrapper.children[0],this.currentPos=0,this.startPos=0}return t.prototype.start=function(){this.direction=0,this.movingDirection=0,this.dist=0},t.prototype.move=function(t){t=this.hasScroll?t:0,this.movingDirection=t>0?-1:t<0?1:0;var e=this.currentPos+t;return(e>this.minScrollPos||e<this.maxScrollPos)&&(e=e>this.minScrollPos&&this.options.bounces[0]||e<this.maxScrollPos&&this.options.bounces[1]?this.currentPos+t/3:e>this.minScrollPos?this.minScrollPos:this.maxScrollPos),e},t.prototype.end=function(t){var e={duration:0},o=Math.abs(this.currentPos-this.startPos);if(this.options.momentum&&t<this.options.momentumLimitTime&&o>this.options.momentumLimitDistance){var i=-1===this.direction&&this.options.bounces[0]||1===this.direction&&this.options.bounces[1]?this.wrapperSize:0;e=this.hasScroll?this.momentum(this.currentPos,this.startPos,t,this.maxScrollPos,this.minScrollPos,i,this.options):{destination:this.currentPos,duration:0}}else this.hooks.trigger(this.hooks.eventTypes.end,e);return e},t.prototype.momentum=function(t,e,o,i,s,n,r){void 0===r&&(r=this.options);var h=t-e,a=Math.abs(h)/o,c=r.deceleration,l=r.swipeBounceTime,u=r.swipeTime,p={destination:t+a/c*(h<0?-1:1),duration:u,rate:15};return this.hooks.trigger(this.hooks.eventTypes.momentum,p,h),p.destination<i?(p.destination=n?Math.max(i-n/4,i-n/p.rate*a):i,p.duration=l):p.destination>s&&(p.destination=n?Math.min(s+n/4,s+n/p.rate*a):s,p.duration=l),p.destination=Math.round(p.destination),p},t.prototype.updateDirection=function(){var t=Math.round(this.currentPos)-this.absStartPos;this.direction=t>0?-1:t<0?1:0},t.prototype.refresh=function(){var t=this.options.rect,e=t.size,o=t.position,i="static"===window.getComputedStyle(this.wrapper,null).position,s=O(this.wrapper);this.wrapperSize=s[e];var n=O(this.content);this.contentSize=n[e],this.relativeOffset=n[o],i&&(this.relativeOffset-=s[o]),this.minScrollPos=0,this.maxScrollPos=this.wrapperSize-this.contentSize,this.maxScrollPos<0&&(this.maxScrollPos-=this.relativeOffset,this.minScrollPos=-this.relativeOffset),this.hasScroll=this.options.scrollable&&this.maxScrollPos<this.minScrollPos,this.hasScroll||(this.maxScrollPos=this.minScrollPos,this.contentSize=this.wrapperSize),this.direction=0},t.prototype.updatePosition=function(t){this.currentPos=t},t.prototype.getCurrentPos=function(){return Math.round(this.currentPos)},t.prototype.checkInBoundary=function(){var t=this.adjustPosition(this.currentPos),e=t===this.getCurrentPos();return{position:t,inBoundary:e}},t.prototype.adjustPosition=function(t){var e=Math.round(t);return!this.hasScroll||e>this.minScrollPos?e=this.minScrollPos:e<this.maxScrollPos&&(e=this.maxScrollPos),e},t.prototype.updateStartPos=function(){this.startPos=this.currentPos},t.prototype.updateAbsStartPos=function(){this.absStartPos=this.currentPos},t.prototype.resetStartPos=function(){this.updateStartPos(),this.updateAbsStartPos()},t.prototype.getAbsDist=function(t){return this.dist+=t,Math.abs(this.dist)},t.prototype.destroy=function(){this.hooks.destroy()},t}(),ut=(rt={},rt["yes"]=function(t){return!0},rt["no"]=function(t){return t.preventDefault(),!1},rt),pt=(ht={},ht["horizontal"]=(at={},at["yes"]="horizontal",at["no"]="vertical",at),ht["vertical"]=(ct={},ct["yes"]="vertical",ct["no"]="horizontal",ct),ht),ft=function(){function t(t,e,o){this.directionLockThreshold=t,this.freeScroll=e,this.eventPassthrough=o,this.reset()}return t.prototype.reset=function(){this.directionLocked=""},t.prototype.checkMovingDirection=function(t,e,o){return this.computeDirectionLock(t,e),this.handleEventPassthrough(o)},t.prototype.adjustDelta=function(t,e){return"horizontal"===this.directionLocked?e=0:"vertical"===this.directionLocked&&(t=0),{deltaX:t,deltaY:e}},t.prototype.computeDirectionLock=function(t,e){""!==this.directionLocked||this.freeScroll||(t>e+this.directionLockThreshold?this.directionLocked="horizontal":e>=t+this.directionLockThreshold?this.directionLocked="vertical":this.directionLocked="none")},t.prototype.handleEventPassthrough=function(t){var e=pt[this.directionLocked];if(e){if(this.eventPassthrough===e["yes"])return ut["yes"](t);if(this.eventPassthrough===e["no"])return ut["no"](t)}return!1},t}(),dt=function(){function t(t,e,o,i,s){this.hooks=new Z(["start","beforeMove","scrollStart","scroll","beforeEnd","end","scrollEnd"]),this.scrollBehaviorX=t,this.scrollBehaviorY=e,this.actionsHandler=o,this.animater=i,this.options=s,this.directionLockAction=new ft(s.directionLockThreshold,s.freeScroll,s.eventPassthrough),this.enabled=!0,this.bindActionsHandler()}return t.prototype.bindActionsHandler=function(){var t=this;this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start,(function(e){return!t.enabled||t.handleStart(e)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move,(function(e){var o=e.deltaX,i=e.deltaY,s=e.e;return!t.enabled||t.handleMove(o,i,s)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end,(function(e){return!t.enabled||t.handleEnd(e)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click,(function(e){t.enabled&&!e._constructed&&t.handleClick(e)}))},t.prototype.handleStart=function(t){var e=v();this.moved=!1,this.startTime=e,this.directionLockAction.reset(),this.scrollBehaviorX.start(),this.scrollBehaviorY.start(),this.animater.stop(),this.scrollBehaviorX.resetStartPos(),this.scrollBehaviorY.resetStartPos(),this.hooks.trigger(this.hooks.eventTypes.start,t)},t.prototype.handleMove=function(t,e,o){if(!this.hooks.trigger(this.hooks.eventTypes.beforeMove,o)){var i=this.scrollBehaviorX.getAbsDist(t),s=this.scrollBehaviorY.getAbsDist(e),n=v();if(this.checkMomentum(i,s,n))return!0;if(this.directionLockAction.checkMovingDirection(i,s,o))return this.actionsHandler.setInitiated(),!0;var r=this.directionLockAction.adjustDelta(t,e),h=this.scrollBehaviorX.move(r.deltaX),a=this.scrollBehaviorY.move(r.deltaY);this.moved||(this.moved=!0,this.hooks.trigger(this.hooks.eventTypes.scrollStart)),this.animater.translate({x:h,y:a}),this.dispatchScroll(n)}},t.prototype.dispatchScroll=function(t){t-this.startTime>this.options.momentumLimitTime&&(this.startTime=t,this.scrollBehaviorX.updateStartPos(),this.scrollBehaviorY.updateStartPos(),1===this.options.probeType&&this.hooks.trigger(this.hooks.eventTypes.scroll,this.getCurrentPos())),this.options.probeType>1&&this.hooks.trigger(this.hooks.eventTypes.scroll,this.getCurrentPos())},t.prototype.checkMomentum=function(t,e,o){return o-this.endTime>this.options.momentumLimitTime&&e<this.options.momentumLimitDistance&&t<this.options.momentumLimitDistance},t.prototype.handleEnd=function(t){if(!this.hooks.trigger(this.hooks.eventTypes.beforeEnd,t)){var e=this.getCurrentPos();if(this.scrollBehaviorX.updateDirection(),this.scrollBehaviorY.updateDirection(),this.hooks.trigger(this.hooks.eventTypes.end,t,e))return!0;this.animater.translate(e),this.endTime=v();var o=this.endTime-this.startTime;this.hooks.trigger(this.hooks.eventTypes.scrollEnd,e,o)}},t.prototype.handleClick=function(t){L(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation())},t.prototype.getCurrentPos=function(){return{x:this.scrollBehaviorX.getCurrentPos(),y:this.scrollBehaviorY.getCurrentPos()}},t.prototype.refresh=function(){this.endTime=0},t.prototype.destroy=function(){this.hooks.destroy()},t}();function vt(t){var e=["click","bindToWrapper","disableMouse","disableTouch","preventDefault","stopPropagation","tagException","preventDefaultException"].reduce((function(e,o){return e[o]=t[o],e}),{});return e}function mt(t,e,o,i){var s=["momentum","momentumLimitTime","momentumLimitDistance","deceleration","swipeBounceTime","swipeTime"].reduce((function(e,o){return e[o]=t[o],e}),{});return s.scrollable=t[e],s.bounces=o,s.rect=i,s}function yt(t,e,o){o.forEach((function(o){var i,s;"string"===typeof o?i=s=o:(i=o.source,s=o.target),t.on(i,(function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.trigger.apply(e,[s].concat(t))}))}))}var gt=function(){function t(t,e){this.hooks=new Z(["beforeStart","beforeMove","beforeScrollStart","scrollStart","scroll","beforeEnd","scrollEnd","refresh","touchEnd","end","flick","scrollCancel","momentum","scrollTo","ignoreDisMoveForSamePos","scrollToElement","resize"]),this.wrapper=t,this.content=t.children[0],this.options=e;var o=this.options.bounce,i=o.left,s=void 0===i||i,n=o.right,r=void 0===n||n,h=o.top,a=void 0===h||h,c=o.bottom,l=void 0===c||c;this.scrollBehaviorX=new lt(t,mt(e,"scrollX",[s,r],{size:"width",position:"left"})),this.scrollBehaviorY=new lt(t,mt(e,"scrollY",[a,l],{size:"height",position:"top"})),this.translater=new et(this.content),this.animater=nt(this.content,this.translater,this.options),this.actionsHandler=new Q(t,vt(this.options)),this.actions=new dt(this.scrollBehaviorX,this.scrollBehaviorY,this.actionsHandler,this.animater,this.options);var u=this.resize.bind(this);this.resizeRegister=new J(window,[{name:"orientationchange",handler:u},{name:"resize",handler:u}]),this.transitionEndRegister=new J(this.content,[{name:D.transitionEnd,handler:this.transitionEnd.bind(this)}]),this.init()}return t.prototype.init=function(){var t=this;this.bindTranslater(),this.bindAnimater(),this.bindActions(),this.hooks.on(this.hooks.eventTypes.scrollEnd,(function(){t.togglePointerEvents(!0)}))},t.prototype.bindTranslater=function(){var t=this,e=this.translater.hooks;e.on(e.eventTypes.beforeTranslate,(function(e){t.options.translateZ&&e.push(t.options.translateZ)})),e.on(e.eventTypes.translate,(function(e){t.updatePositions(e),t.togglePointerEvents(!1)}))},t.prototype.bindAnimater=function(){var t=this;this.animater.hooks.on(this.animater.hooks.eventTypes.end,(function(e){t.resetPosition(t.options.bounceTime)||(t.animater.setPending(!1),t.hooks.trigger(t.hooks.eventTypes.scrollEnd,e))})),yt(this.animater.hooks,this.hooks,[{source:this.animater.hooks.eventTypes.move,target:this.hooks.eventTypes.scroll},{source:this.animater.hooks.eventTypes.forceStop,target:this.hooks.eventTypes.scrollEnd}])},t.prototype.bindActions=function(){var t=this,e=this.actions;yt(e.hooks,this.hooks,[{source:e.hooks.eventTypes.start,target:this.hooks.eventTypes.beforeStart},{source:e.hooks.eventTypes.start,target:this.hooks.eventTypes.beforeScrollStart},{source:e.hooks.eventTypes.beforeMove,target:this.hooks.eventTypes.beforeMove},{source:e.hooks.eventTypes.scrollStart,target:this.hooks.eventTypes.scrollStart},{source:e.hooks.eventTypes.scroll,target:this.hooks.eventTypes.scroll},{source:e.hooks.eventTypes.beforeEnd,target:this.hooks.eventTypes.beforeEnd}]),e.hooks.on(e.hooks.eventTypes.end,(function(o,i){return t.hooks.trigger(t.hooks.eventTypes.touchEnd,i),!!t.hooks.trigger(t.hooks.eventTypes.end,i)||(!e.moved&&t.checkClick(o)?(t.animater.setForceStopped(!1),t.hooks.trigger(t.hooks.eventTypes.scrollCancel),!0):(t.animater.setForceStopped(!1),!!t.resetPosition(t.options.bounceTime,A.bounce)||void 0))})),e.hooks.on(e.hooks.eventTypes.scrollEnd,(function(e,o){var i=Math.abs(e.x-t.scrollBehaviorX.startPos),s=Math.abs(e.y-t.scrollBehaviorY.startPos);t.checkFlick(o,i,s)?t.hooks.trigger(t.hooks.eventTypes.flick):t.momentum(e,o)||t.hooks.trigger(t.hooks.eventTypes.scrollEnd,e)}))},t.prototype.checkFlick=function(t,e,o){if(this.hooks.events.flick.length>1&&t<this.options.flickLimitTime&&e<this.options.flickLimitDistance&&o<this.options.flickLimitDistance)return!0},t.prototype.momentum=function(t,e){var o={time:0,easing:A.swiper,newX:t.x,newY:t.y},i=this.scrollBehaviorX.end(e),s=this.scrollBehaviorY.end(e);if(o.newX=y(i.destination)?o.newX:i.destination,o.newY=y(s.destination)?o.newY:s.destination,o.time=Math.max(i.duration,s.duration),this.hooks.trigger(this.hooks.eventTypes.momentum,o,this),o.newX!==t.x||o.newY!==t.y)return(o.newX>this.scrollBehaviorX.minScrollPos||o.newX<this.scrollBehaviorX.maxScrollPos||o.newY>this.scrollBehaviorY.minScrollPos||o.newY<this.scrollBehaviorY.maxScrollPos)&&(o.easing=A.swipeBounce),this.scrollTo(o.newX,o.newY,o.time,o.easing),!0},t.prototype.checkClick=function(t){var e={preventClick:this.animater.forceStopped};if(this.hooks.trigger(this.hooks.eventTypes.checkClick))return!0;if(!e.preventClick){var o=this.options.dblclick,i=!1;if(o&&this.lastClickTime){var s=o.delay,n=void 0===s?300:s;v()-this.lastClickTime<n&&(i=!0,z(t))}return this.options.tap&&_(t,this.options.tap),this.options.click&&!L(t.target,this.options.preventDefaultException)&&H(t),this.lastClickTime=i?null:v(),!0}return!1},t.prototype.resize=function(){var t=this;this.actions.enabled&&(d&&(this.wrapper.scrollTop=0),this.hooks.trigger(this.hooks.eventTypes.resize)||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout((function(){t.refresh()}),this.options.resizePolling)))},t.prototype.transitionEnd=function(t){if(t.target===this.content&&this.animater.pending){var e=this.animater;e.transitionTime(),this.resetPosition(this.options.bounceTime,A.bounce)||(this.animater.setPending(!1),3!==this.options.probeType&&this.hooks.trigger(this.hooks.eventTypes.scrollEnd,this.getCurrentPos()))}},t.prototype.togglePointerEvents=function(t){void 0===t&&(t=!0);for(var e=this.content.children.length?this.content.children:[this.content],o=t?"auto":"none",i=0;i<e.length;i++){var s=e[i];s.isBScrollContainer||(s.style.pointerEvents=o)}},t.prototype.refresh=function(){this.scrollBehaviorX.refresh(),this.scrollBehaviorY.refresh(),this.actions.refresh(),this.wrapperOffset=S(this.wrapper)},t.prototype.scrollBy=function(t,e,o,i){void 0===o&&(o=0);var s=this.getCurrentPos(),n=s.x,r=s.y;i=i||A.bounce,t+=n,e+=r,this.scrollTo(t,e,o,i)},t.prototype.scrollTo=function(t,e,o,i,s,n){void 0===o&&(o=0),void 0===s&&(s={start:{},end:{}}),i=i||A.bounce;var r=this.options.useTransition?i.style:i.fn,h=this.getCurrentPos(),a=c({x:h.x,y:h.y},s.start),l=c({x:t,y:e},s.end);this.hooks.trigger(this.hooks.eventTypes.scrollTo,l),(this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos)||a.x!==l.x||a.y!==l.y)&&this.animater.move(a,l,o,r,n)},t.prototype.scrollToElement=function(t,e,o,i,s){var n=T(t),r=S(n),h=function(t,e,o){return"number"===typeof t?t:t?Math.round(e/2-o/2):0};o=h(o,n.offsetWidth,this.wrapper.offsetWidth),i=h(i,n.offsetHeight,this.wrapper.offsetHeight);var a=function(t,e,o,i){return t-=e,t=i.adjustPosition(t-o),t};r.left=a(r.left,this.wrapperOffset.left,o,this.scrollBehaviorX),r.top=a(r.top,this.wrapperOffset.top,i,this.scrollBehaviorY),this.hooks.trigger(this.hooks.eventTypes.scrollToElement,n,r)||this.scrollTo(r.left,r.top,e,s)},t.prototype.resetPosition=function(t,e){void 0===t&&(t=0),e=e||A.bounce;var o=this.scrollBehaviorX.checkInBoundary(),i=o.position,s=o.inBoundary,n=this.scrollBehaviorY.checkInBoundary(),r=n.position,h=n.inBoundary;return(!s||!h)&&(this.scrollTo(i,r,t,e),!0)},t.prototype.updatePositions=function(t){this.scrollBehaviorX.updatePosition(t.x),this.scrollBehaviorY.updatePosition(t.y)},t.prototype.getCurrentPos=function(){return this.actions.getCurrentPos()},t.prototype.enable=function(){this.actions.enabled=!0},t.prototype.disable=function(){I(this.animater.timer),this.actions.enabled=!1},t.prototype.destroy=function(){var t=this,e=["resizeRegister","transitionEndRegister","actionsHandler","actions","hooks","animater","translater","scrollBehaviorX","scrollBehaviorY"];e.forEach((function(e){return t[e].destroy()}))},t}(),kt=[{sourceKey:"scroller.scrollBehaviorX.currentPos",key:"x"},{sourceKey:"scroller.scrollBehaviorY.currentPos",key:"y"},{sourceKey:"scroller.scrollBehaviorX.hasScroll",key:"hasHorizontalScroll"},{sourceKey:"scroller.scrollBehaviorY.hasScroll",key:"hasVerticalScroll"},{sourceKey:"scroller.scrollBehaviorX.contentSize",key:"scrollerWidth"},{sourceKey:"scroller.scrollBehaviorY.contentSize",key:"scrollerHeight"},{sourceKey:"scroller.scrollBehaviorX.maxScrollPos",key:"maxScrollX"},{sourceKey:"scroller.scrollBehaviorY.maxScrollPos",key:"maxScrollY"},{sourceKey:"scroller.scrollBehaviorX.minScrollPos",key:"minScrollX"},{sourceKey:"scroller.scrollBehaviorY.minScrollPos",key:"minScrollY"},{sourceKey:"scroller.scrollBehaviorX.movingDirection",key:"movingDirectionX"},{sourceKey:"scroller.scrollBehaviorY.movingDirection",key:"movingDirectionY"},{sourceKey:"scroller.scrollBehaviorX.direction",key:"directionX"},{sourceKey:"scroller.scrollBehaviorY.direction",key:"directionY"},{sourceKey:"scroller.actions.enabled",key:"enabled"},{sourceKey:"scroller.animater.pending",key:"pending"},{sourceKey:"scroller.animater.stop",key:"stop"},{sourceKey:"scroller.scrollTo",key:"scrollTo"},{sourceKey:"scroller.scrollBy",key:"scrollBy"},{sourceKey:"scroller.scrollToElement",key:"scrollToElement"},{sourceKey:"scroller.resetPosition",key:"resetPosition"}],bt=function(t){function e(e,o){var i=t.call(this,["refresh","enable","disable","beforeScrollStart","scrollStart","scroll","scrollEnd","scrollCancel","touchEnd","flick","destroy"])||this,s=T(e);if(!s)return l("Can not resolve the wrapper DOM."),i;var n=s.children[0];return n?(i.plugins={},i.options=(new G).merge(o).process(),i.hooks=new Z(["init","refresh","enable","disable","destroy"]),i.init(s),i):(l("The wrapper need at least one child element to be scroller."),i)}return a(e,t),e.use=function(t){var e=t.pluginName,o=this.plugins.some((function(e){return t===e.ctor}));return o?this:y(e)?(l("Plugin Class must specify plugin's name in static property by 'pluginName' field."),this):this.pluginsMap[e]?(l("This plugin has been registered, maybe you need change plugin's name"),this):(this.pluginsMap[e]=!0,this.plugins.push({name:e,applyOrder:t.applyOrder,ctor:t}),this)},e.prototype.init=function(t){this.wrapper=t,t.isBScrollContainer=!0,this.scroller=new gt(t,this.options),this.eventBubbling(),this.handleAutoBlur(),this.innerRefresh(),this.scroller.scrollTo(this.options.startX,this.options.startY),this.enable(),this.proxy(kt),this.applyPlugins()},e.prototype.applyPlugins=function(){var t=this,e=this.options;this.constructor.plugins.sort((function(t,e){var o,i=(o={},o["pre"]=-1,o["post"]=1,o),s=t.applyOrder?i[t.applyOrder]:0,n=e.applyOrder?i[e.applyOrder]:0;return s-n})).forEach((function(o){var i=o.ctor;e[o.name]&&"function"===typeof i&&(t.plugins[o.name]=new i(t))}))},e.prototype.handleAutoBlur=function(){this.options.autoBlur&&this.on(this.eventTypes.beforeScrollStart,(function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()}))},e.prototype.eventBubbling=function(){yt(this.scroller.hooks,this,["beforeScrollStart","scrollStart","scroll","scrollEnd","scrollCancel","touchEnd","flick"])},e.prototype.innerRefresh=function(){this.scroller.refresh(),this.hooks.trigger(this.hooks.eventTypes.refresh),this.trigger(this.eventTypes.refresh)},e.prototype.proxy=function(t){var e=this;t.forEach((function(t){var o=t.key,i=t.sourceKey;U(e,i,o)}))},e.prototype.refresh=function(){this.innerRefresh(),this.scroller.resetPosition()},e.prototype.enable=function(){this.scroller.enable(),this.hooks.trigger(this.hooks.eventTypes.enable),this.trigger(this.eventTypes.enable)},e.prototype.disable=function(){this.scroller.disable(),this.hooks.trigger(this.hooks.eventTypes.disable),this.trigger(this.eventTypes.disable)},e.prototype.destroy=function(){this.hooks.trigger(this.hooks.eventTypes.destroy),this.trigger(this.eventTypes.destroy),this.scroller.destroy()},e.prototype.eventRegister=function(t){this.registerType(t)},e.plugins=[],e.pluginsMap={},e}(Z),Tt=bt,wt={data:function(){return{msg:"欢迎来到vue.js学习",left:["热门推荐","手机数码","电脑办公","家用电器","计生情趣","美妆护肤"],right:[{name:"热门推荐",content:[1,2,3]},{name:"手机数码",content:[1,2,3,4]},{name:"电脑办公",content:[1,2,3]},{name:"家用电器",content:[1,2,3,4]},{name:"计生情趣",content:[1,2,3]},{name:"美妆护肤",content:[1,2,3,4,5]}],listHeight:[],scrollY:0}},methods:{_initScroll:function(){this.lefts=new Tt(this.$refs.left,{click:!0,probeType:3}),this.rights=new Tt(this.$refs.right,{probeType:3}),this.rights.on("scroll",this.onScrollfun)},onScrollfun:function(t){this.scrollY=Math.abs(Math.round(t.y))},_getHeight:function(){var t=this.$refs.right.getElementsByClassName("right-item-hook"),e=0;this.listHeight.push(e);for(var o=0;o<t.length;o++){var i=t[o];e+=i.clientHeight,this.listHeight.push(e)}},selectItem:function(t,e){if(e._constructed){var o=this.$refs.right.getElementsByClassName("right-item-hook"),i=o[t];this.rights.scrollToElement(i)}}},mounted:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._getHeight()}))},beforeDestroy:function(){this.rights.off("scroll",this.onScrollfun)},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],o=this.listHeight[t+1];if(!o||this.scrollY>=e&&this.scrollY<o){var i=this.$refs.left.getElementsByTagName("li"),s=i[t];return this.lefts.scrollToElement(s),t}}return 0}}},Pt=wt,St=(o("210d"),o("2877")),Et=Object(St["a"])(Pt,n,r,!1,null,"cfcc14d4",null),Bt=Et.exports,Yt=o("aed8"),Xt=o("d399"),xt={components:{bscroll:Bt,vantabbar:Yt["a"]},methods:{onSearch:function(t){Object(Xt["a"])(t),this.$router.push("/search")},onCancel:function(){Object(Xt["a"])("取消")}}},Dt=xt,Ct=Object(St["a"])(Dt,i,s,!1,null,null,null);e["default"]=Ct.exports},aed8:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-tabbar",{attrs:{"active-color":"#e43130"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[o("van-tabbar-item",{attrs:{to:"/home",icon:"home-o"}},[t._v("首页")]),o("van-tabbar-item",{attrs:{to:"/classify",icon:"bar-chart-o"}},[t._v("分类")]),o("van-tabbar-item",{attrs:{to:"/cart",icon:"shopping-cart-o"}},[t._v("购物车")]),t.$store.state.username?o("van-tabbar-item",{attrs:{to:"/myjd",icon:"user-circle-o"}},[t._v("我的")]):o("van-tabbar-item",{attrs:{to:"/login",icon:"user-o"}},[t._v("未登录")])],1)],1)},s=[],n={data:function(){return{active:0}},props:["activevue"],created:function(){this.active=this.activevue}},r=n,h=o("2877"),a=Object(h["a"])(r,i,s,!1,null,"8b027310",null);e["a"]=a.exports}}]);
//# sourceMappingURL=chunk-101f25ef.c9dcd247.js.map