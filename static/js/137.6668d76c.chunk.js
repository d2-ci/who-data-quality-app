/*! For license information please see 137.6668d76c.chunk.js.LICENSE.txt */
(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[137],{177:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return R})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return $})),n.d(e,"h",(function(){return U}));var r=n(180),o=n(2),i=n.n(o),a=(n(4),n(186)),c=n(187),s=n(182),u=n(181),f=n(188),l=n.n(f),p=(n(184),n(185)),h=(n(191),function(t){var e=Object(c.a)();return e.displayName=t,e}("Router-History")),d=function(t){var e=Object(c.a)();return e.displayName=t,e}("Router"),v=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(r.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(d.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(h.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i.a.Component);i.a.Component;var m=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},e}(i.a.Component);var y={},g=0;function b(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:function(t){if(y[t])return y[t];var e=l.a.compile(t);return g<1e4&&(y[t]=e,g++),e}(t)(e,{pretty:!0})}function O(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return i.a.createElement(d.Consumer,null,(function(t){t||Object(s.a)(!1);var r=t.history,c=t.staticContext,f=o?r.push:r.replace,l=Object(a.c)(e?"string"===typeof n?b(n,e.params):Object(u.a)({},n,{pathname:b(n.pathname,e.params)}):n);return c?(f(l),null):i.a.createElement(m,{onMount:function(){f(l)},onUpdate:function(t,e){var n=Object(a.c)(e.to);Object(a.f)(n,Object(u.a)({},l,{key:n.key}))||f(l)},to:n})}))}var w={},j=0;function x(t,e){void 0===e&&(e={}),("string"===typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,s=n.sensitive,u=void 0!==s&&s;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=w[n]||(w[n]={});if(r[t])return r[t];var o=[],i={regexp:l()(t,o,e),keys:o};return j<1e4&&(r[t]=i,j++),i}(n,{end:i,strict:c,sensitive:u}),o=r.regexp,a=r.keys,s=o.exec(t);if(!s)return null;var f=s[0],p=s.slice(1),h=t===f;return i&&!h?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:h,params:a.reduce((function(t,e,n){return t[e.name]=p[n],t}),{})}}),null)}var S=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(d.Consumer,null,(function(e){e||Object(s.a)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?x(n.pathname,t.props):e.match,o=Object(u.a)({},e,{location:n,match:r}),a=t.props,c=a.children,f=a.component,l=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(d.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:f?i.a.createElement(f,o):l?l(o):null:"function"===typeof c?c(o):null)}))},e}(i.a.Component);function E(t){return"/"===t.charAt(0)?t:"/"+t}function P(t,e){if(!t)return e;var n=E(t);return 0!==e.pathname.indexOf(n)?e:Object(u.a)({},e,{pathname:e.pathname.substr(n.length)})}function C(t){return"string"===typeof t?t:Object(a.e)(t)}function A(t){return function(){Object(s.a)(!1)}}function k(){}i.a.Component;var R=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(d.Consumer,null,(function(e){e||Object(s.a)(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?x(o.pathname,Object(u.a)({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);var T=i.a.useContext;function $(){return T(h)}function U(t){var e=T(d).location,n=T(d).match;return t?x(e.pathname,t):n}},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(177),o=n(180),i=n(2),a=n.n(i),c=n(186),s=(n(4),n(181)),u=n(185),f=n(182);a.a.Component;var l=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=Object(c.b)(e.props),e}return Object(o.a)(e,t),e.prototype.render=function(){return a.a.createElement(r.c,{history:this.history,children:this.props.children})},e}(a.a.Component);var p=function(t,e){return"function"===typeof t?t(e):t},h=function(t,e){return"string"===typeof t?Object(c.c)(t,null,null,e):t},d=function(t){return t},v=a.a.forwardRef;"undefined"===typeof v&&(v=d);var m=v((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,i=Object(u.a)(t,["innerRef","navigate","onClick"]),c=i.target,f=Object(s.a)({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return f.ref=d!==v&&e||n,a.a.createElement("a",f)}));var y=v((function(t,e){var n=t.component,o=void 0===n?m:n,i=t.replace,c=t.to,l=t.innerRef,y=Object(u.a)(t,["component","replace","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(t){t||Object(f.a)(!1);var n=t.history,r=h(p(c,t.location),t.location),u=r?n.createHref(r):"",m=Object(s.a)({},y,{href:u,navigate:function(){var e=p(c,t.location);(i?n.replace:n.push)(e)}});return d!==v?m.ref=e||l:m.innerRef=l,a.a.createElement(o,m)}))})),g=function(t){return t},b=a.a.forwardRef;"undefined"===typeof b&&(b=g);b((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,l=t.activeStyle,d=t.className,v=t.exact,m=t.isActive,O=t.location,w=t.sensitive,j=t.strict,x=t.style,S=t.to,E=t.innerRef,P=Object(u.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(r.e.Consumer,null,(function(t){t||Object(f.a)(!1);var n=O||t.location,i=h(p(S,n),n),u=i.pathname,C=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=C?Object(r.f)(n.pathname,{path:C,exact:v,sensitive:w,strict:j}):null,k=!!(m?m(A,n):A),R=k?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(d,c):d,T=k?Object(s.a)({},x,{},l):x,$=Object(s.a)({"aria-current":k&&o||null,className:R,style:T,to:i},P);return g!==b?$.ref=e||E:$.innerRef=E,a.a.createElement(y,$)}))}))},180:function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},181:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},182:function(t,e,n){"use strict";e.a=function(t,e){if(!t)throw new Error("Invariant failed")}},184:function(t,e,n){"use strict";t.exports=n(190)},185:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},186:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return P})),n.d(e,"d",(function(){return A})),n.d(e,"c",(function(){return v})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return d}));var r=n(181);function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var a=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),s=e&&o(e),u=c||s;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var f=a[a.length-1];n="."===f||".."===f||""===f}else n=!1;for(var l=0,p=a.length;p>=0;p--){var h=a[p];"."===h?i(a,p):".."===h?(i(a,p),l++):l&&(i(a,p),l--)}if(!u)for(;l--;l)a.unshift("..");!u||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function c(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var s=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,r){return t(e,n[r])}));if("object"===typeof e||"object"===typeof n){var r=c(e),o=c(n);return r!==e||o!==n?t(r,o):Object.keys(Object.assign({},e,n)).every((function(r){return t(e[r],n[r])}))}return!1},u=n(182);function f(t){return"/"===t.charAt(0)?t:"/"+t}function l(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function h(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function d(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(t,e,n,o){var i;"string"===typeof t?(i=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(i=Object(r.a)({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function m(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&s(t.state,e.state)}function y(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"===typeof t?t(e,n):t;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(t,e){e(window.confirm(t))}function O(){try{return window.history.state||{}}catch(t){return{}}}function w(t){void 0===t&&(t={}),g||Object(u.a)(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,s=i.getUserConfirmation,l=void 0===s?b:s,m=i.keyLength,w=void 0===m?6:m,j=t.basename?h(f(t.basename)):"";function x(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return j&&(i=p(i,j)),v(i,r,n)}function S(){return Math.random().toString(36).substr(2,w)}var E=y();function P(t){Object(r.a)(I,t),I.length=e.length,E.notifyListeners(I.location,I.action)}function C(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||R(x(t.state))}function A(){R(x(O()))}var k=!1;function R(t){if(k)k=!1,P();else{E.confirmTransitionTo(t,"POP",l,(function(e){e?P({action:"POP",location:t}):function(t){var e=I.location,n=$.indexOf(e.key);-1===n&&(n=0);var r=$.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(k=!0,L(o))}(t)}))}}var T=x(O()),$=[T.key];function U(t){return j+d(t)}function L(t){e.go(t)}var M=0;function _(t){1===(M+=t)&&1===t?(window.addEventListener("popstate",C),o&&window.addEventListener("hashchange",A)):0===M&&(window.removeEventListener("popstate",C),o&&window.removeEventListener("hashchange",A))}var D=!1;var I={length:e.length,action:"POP",location:T,createHref:U,push:function(t,r){var o=v(t,r,S(),I.location);E.confirmTransitionTo(o,"PUSH",l,(function(t){if(t){var r=U(o),i=o.key,a=o.state;if(n)if(e.pushState({key:i,state:a},null,r),c)window.location.href=r;else{var s=$.indexOf(I.location.key),u=$.slice(0,s+1);u.push(o.key),$=u,P({action:"PUSH",location:o})}else window.location.href=r}}))},replace:function(t,r){var o=v(t,r,S(),I.location);E.confirmTransitionTo(o,"REPLACE",l,(function(t){if(t){var r=U(o),i=o.key,a=o.state;if(n)if(e.replaceState({key:i,state:a},null,r),c)window.location.replace(r);else{var s=$.indexOf(I.location.key);-1!==s&&($[s]=o.key),P({action:"REPLACE",location:o})}else window.location.replace(r)}}))},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var e=E.setPrompt(t);return D||(_(1),D=!0),function(){return D&&(D=!1,_(-1)),e()}},listen:function(t){var e=E.appendListener(t);return _(1),function(){_(-1),e()}}};return I}var j={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+l(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:l,decodePath:f},slash:{encodePath:f,decodePath:f}};function x(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function S(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function E(t){window.location.replace(x(window.location.href)+"#"+t)}function P(t){void 0===t&&(t={}),g||Object(u.a)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,i=void 0===o?b:o,a=n.hashType,c=void 0===a?"slash":a,s=t.basename?h(f(t.basename)):"",l=j[c],m=l.encodePath,O=l.decodePath;function w(){var t=O(S());return s&&(t=p(t,s)),v(t)}var P=y();function C(t){Object(r.a)(N,t),N.length=e.length,P.notifyListeners(N.location,N.action)}var A=!1,k=null;function R(){var t,e,n=S(),r=m(n);if(n!==r)E(r);else{var o=w(),a=N.location;if(!A&&(e=o,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(k===d(o))return;k=null,function(t){if(A)A=!1,C();else{P.confirmTransitionTo(t,"POP",i,(function(e){e?C({action:"POP",location:t}):function(t){var e=N.location,n=L.lastIndexOf(d(e));-1===n&&(n=0);var r=L.lastIndexOf(d(t));-1===r&&(r=0);var o=n-r;o&&(A=!0,M(o))}(t)}))}}(o)}}var T=S(),$=m(T);T!==$&&E($);var U=w(),L=[d(U)];function M(t){e.go(t)}var _=0;function D(t){1===(_+=t)&&1===t?window.addEventListener("hashchange",R):0===_&&window.removeEventListener("hashchange",R)}var I=!1;var N={length:e.length,action:"POP",location:U,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=x(window.location.href)),n+"#"+m(s+d(t))},push:function(t,e){var n=v(t,void 0,void 0,N.location);P.confirmTransitionTo(n,"PUSH",i,(function(t){if(t){var e=d(n),r=m(s+e);if(S()!==r){k=e,function(t){window.location.hash=t}(r);var o=L.lastIndexOf(d(N.location)),i=L.slice(0,o+1);i.push(e),L=i,C({action:"PUSH",location:n})}else C()}}))},replace:function(t,e){var n=v(t,void 0,void 0,N.location);P.confirmTransitionTo(n,"REPLACE",i,(function(t){if(t){var e=d(n),r=m(s+e);S()!==r&&(k=e,E(r));var o=L.indexOf(d(N.location));-1!==o&&(L[o]=e),C({action:"REPLACE",location:n})}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(t){void 0===t&&(t=!1);var e=P.setPrompt(t);return I||(D(1),I=!0),function(){return I&&(I=!1,D(-1)),e()}},listen:function(t){var e=P.appendListener(t);return D(1),function(){D(-1),e()}}};return N}function C(t,e,n){return Math.min(Math.max(t,e),n)}function A(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,i=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,s=e.keyLength,u=void 0===s?6:s,f=y();function l(t){Object(r.a)(O,t),O.length=O.entries.length,f.notifyListeners(O.location,O.action)}function p(){return Math.random().toString(36).substr(2,u)}var h=C(c,0,i.length-1),m=i.map((function(t){return v(t,void 0,"string"===typeof t?p():t.key||p())})),g=d;function b(t){var e=C(O.index+t,0,O.entries.length-1),r=O.entries[e];f.confirmTransitionTo(r,"POP",n,(function(t){t?l({action:"POP",location:r,index:e}):l()}))}var O={length:m.length,action:"POP",location:m[h],index:h,entries:m,createHref:g,push:function(t,e){var r=v(t,e,p(),O.location);f.confirmTransitionTo(r,"PUSH",n,(function(t){if(t){var e=O.index+1,n=O.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),l({action:"PUSH",location:r,index:e,entries:n})}}))},replace:function(t,e){var r=v(t,e,p(),O.location);f.confirmTransitionTo(r,"REPLACE",n,(function(t){t&&(O.entries[O.index]=r,l({action:"REPLACE",location:r}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var e=O.index+t;return e>=0&&e<O.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return O}},187:function(t,e,n){"use strict";(function(t){var r=n(2),o=n.n(r),i=n(180),a=n(4),c=n.n(a),s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function u(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var f=o.a.createContext||function(t,e){var n,o,a="__create-react-context-"+function(){var t="__global_unique_id__";return s[t]=(s[t]||0)+1}()+"__",f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=u(e.props.value),e}Object(i.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof e?e(r,o):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[a]=c.a.object.isRequired,n);var l=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!==((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(i.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return l.contextTypes=((o={})[a]=c.a.object,o),{Provider:f,Consumer:l}};e.a=f}).call(this,n(22))},188:function(t,e,n){var r=n(189);t.exports=h,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",f=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],p=n[1],h=n.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=n[2],m=n[3],y=n[4],g=n[5],b=n[6],O=n[7];c&&(r.push(c),c="");var w=null!=v&&null!=d&&d!==v,j="+"===b||"*"===b,x="?"===b||"*"===b,S=n[2]||f,E=y||g;r.push({name:m||i++,prefix:v||"",delimiter:S,optional:x,repeat:j,partial:w,asterisk:!!O,pattern:E?u(E):O?".*":"[^"+s(S)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},s=(o||{}).pretty?a:encodeURIComponent,u=0;u<t.length;u++){var f=t[u];if("string"!==typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=s(p[h]),!n[u].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):s(p),!n[u].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var u=t[c];if("string"===typeof u)a+=s(u);else{var p=s(u.prefix),h="(?:"+u.pattern+")";e.push(u),u.repeat&&(h+="(?:"+p+h+")*"),a+=h=u.optional?u.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=s(n.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(n)),e)}function h(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(h(t[o],e,n).source);return f(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},189:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},190:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function j(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case a:case s:case c:case d:return t;default:switch(t=t&&t.$$typeof){case f:case h:case y:case m:case u:return t;default:return e}}case i:return e}}}function x(t){return j(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=u,e.Element=o,e.ForwardRef=h,e.Fragment=a,e.Lazy=y,e.Memo=m,e.Portal=i,e.Profiler=s,e.StrictMode=c,e.Suspense=d,e.isAsyncMode=function(t){return x(t)||j(t)===l},e.isConcurrentMode=x,e.isContextConsumer=function(t){return j(t)===f},e.isContextProvider=function(t){return j(t)===u},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return j(t)===h},e.isFragment=function(t){return j(t)===a},e.isLazy=function(t){return j(t)===y},e.isMemo=function(t){return j(t)===m},e.isPortal=function(t){return j(t)===i},e.isProfiler=function(t){return j(t)===s},e.isStrictMode=function(t){return j(t)===c},e.isSuspense=function(t){return j(t)===d},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===p||t===s||t===c||t===d||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===m||t.$$typeof===u||t.$$typeof===f||t.$$typeof===h||t.$$typeof===b||t.$$typeof===O||t.$$typeof===w||t.$$typeof===g)},e.typeOf=j},191:function(t,e,n){"use strict";var r=n(184),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(d){var o=h(n);o&&o!==d&&t(e,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=s(e),v=s(n),m=0;m<a.length;++m){var y=a[m];if(!i[y]&&(!r||!r[y])&&(!v||!v[y])&&(!c||!c[y])){var g=p(n,y);try{u(e,y,g)}catch(b){}}}}return e}},195:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n(2),o=n.n(r),i=n(10),a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),c=new Uint8Array(16);function s(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(c)}for(var u=[],f=0;f<256;++f)u.push((f+256).toString(16).substr(1));var l=function(t,e){var n=e||0;return(u[t[n+0]]+u[t[n+1]]+u[t[n+2]]+u[t[n+3]]+"-"+u[t[n+4]]+u[t[n+5]]+"-"+u[t[n+6]]+u[t[n+7]]+"-"+u[t[n+8]]+u[t[n+9]]+"-"+u[t[n+10]]+u[t[n+11]]+u[t[n+12]]+u[t[n+13]]+u[t[n+14]]+u[t[n+15]]).toLowerCase()};var p=function(t,e,n){var r=(t=t||{}).random||(t.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return l(r)};const h=Object(r.createContext)(void 0);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}class y{constructor(){d(this,"events",{})}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}off(t,e){var n;this.events[t]&&(n=this.events[t].indexOf(e))>-1&&this.events[t].splice(n,1)}emit(t,...e){var n,r,o;if(this.events[t])for(o=(r=this.events[t].slice()).length,n=0;n<o;n++)r[n](...e)}once(t,e){const n=()=>{this.off(t,n),e.apply(this,arguments)};this.on(t,n)}}class g{constructor({engine:t,resource:e,namespace:n,item:r,defaults:o={}}){d(this,"engine",void 0),d(this,"resource",void 0),d(this,"dataStoreId",void 0),d(this,"settings",void 0),d(this,"eventEmitter",new y),this.engine=t,this.resource=e,this.dataStoreId=((...t)=>t.map(t=>t.replace(/^\/+/,"").replace(/\/+$/,"")).join("/"))(n,r),this.settings=o}async initialize(){await this.refresh()}async create(){await this.engine.mutate({resource:"".concat(this.resource,"/").concat(this.dataStoreId),type:"create",data:this.settings})}async refresh(){const t=this.settings;try{const t=await this.engine.query({settings:{resource:this.resource,id:this.dataStoreId}});this.settings=t.settings}catch(n){var e;if(404!==(null===(e=n.details)||void 0===e?void 0:e.httpStatusCode))throw n;await this.create()}Object.keys(t).forEach(e=>{t[e]!==this.settings[e]&&this.eventEmitter.emit("change ".concat(e),this.settings[e])}),this.eventEmitter.emit("change",this.settings)}get(t){return this.settings[t]}async set(t,e){const n=this.settings,r=m(m({},this.settings),{},{[t]:e});"undefined"===typeof e&&delete r[t],this.settings=r,this.eventEmitter.emit("change ".concat(t),e),this.eventEmitter.emit("change",this.settings);try{await this.engine.mutate({resource:this.resource,type:"update",id:this.dataStoreId,data:this.settings})}catch(o){throw this.settings=n,this.eventEmitter.emit("change ".concat(t),this.get(t)),this.eventEmitter.emit("change",this.settings),o}}subscribeAll(t){this.eventEmitter.on("change",t)}subscribe(t,e){this.eventEmitter.on("change ".concat(t),e)}unsubscribeAll(t){this.eventEmitter.off("change",t)}unsubscribe(t,e){this.eventEmitter.off("change ".concat(t),e)}}class b extends g{constructor({engine:t,resource:e,namespace:n,item:r}){super({engine:t,resource:e,namespace:n,item:r,defaults:{}})}has(t){return Object.keys(this.settings).includes(t)}async add(t){if("object"!==typeof t)throw new Error("Only objects are allowed in the SavedObjectStore, received ".concat(t));const e=p(),n=m(m({},t),{},{id:e});return await this.set(e,n),n}async update(t,e){const n=m(m({},this.get(t)),e);return await this.set(t,n),n}async replace(t,e){await this.set(t,e)}async remove(t){await this.set(t,void 0)}}class O{constructor({engine:t,namespace:e,defaultGlobalSettings:n,defaultUserSettings:r}){d(this,"globalSettings",void 0),d(this,"userSettings",void 0),d(this,"userSavedObjects",void 0),d(this,"globalSavedObjects",void 0),this.globalSettings=new g({engine:t,resource:"dataStore",namespace:e,item:"settings",defaults:n}),this.userSettings=new g({engine:t,resource:"userDataStore",namespace:e,item:"settings",defaults:r}),this.userSavedObjects=new b({engine:t,resource:"userDataStore",namespace:e,item:"savedObjects"}),this.globalSavedObjects=new b({engine:t,resource:"dataStore",namespace:e,item:"savedObjects"})}async initialize(){await Promise.all([this.globalSettings.initialize(),this.userSettings.initialize(),this.userSavedObjects.initialize(),this.globalSavedObjects.initialize()])}async shareSavedObject(t){this.userSavedObjects.has(t)&&(await this.globalSavedObjects.update(t,this.userSavedObjects.get(t)),await this.userSavedObjects.remove(t))}async unshareSavedObject(t){this.globalSavedObjects.has(t)&&(await this.userSavedObjects.update(t,this.globalSavedObjects.get(t)),await this.globalSavedObjects.remove(t))}}const w=({namespace:t,defaultGlobalSettings:e,defaultUserSettings:n,children:a,loadingComponent:c=null})=>{const[s,u]=Object(r.useState)(!0),f=Object(i.c)(),l=Object(r.useMemo)(()=>new O({engine:f,namespace:t,defaultGlobalSettings:e,defaultUserSettings:n}),[]);return Object(r.useEffect)(()=>{let t=!1;return(async()=>{await l.initialize(),t||u(!1)})(),()=>{t=!0}},[l]),o.a.createElement(h.Provider,{value:l},s?c:a)}}}]);
//# sourceMappingURL=137.6668d76c.chunk.js.map