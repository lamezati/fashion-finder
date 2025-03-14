function LT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qy={exports:{}},Ql={},Yy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),MT=Symbol.for("react.portal"),jT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),UT=Symbol.for("react.profiler"),zT=Symbol.for("react.provider"),BT=Symbol.for("react.context"),$T=Symbol.for("react.forward_ref"),WT=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),am=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jy=Object.assign,Zy={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=Zy,this.updater=n||Xy}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ev(){}ev.prototype=Xi.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=Zy,this.updater=n||Xy}var pd=fd.prototype=new ev;pd.constructor=fd;Jy(pd,Xi.prototype);pd.isPureReactComponent=!0;var lm=Array.isArray,tv=Object.prototype.hasOwnProperty,md={current:null},nv={key:!0,ref:!0,__self:!0,__source:!0};function rv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tv.call(e,r)&&!nv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oo,type:t,key:s,ref:o,props:i,_owner:md.current}}function GT(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function QT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QT(""+t.key):e.toString(36)}function Fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case MT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ic(o,0):r,lm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Fa(i,e,n,"",function(c){return c})):i!=null&&(gd(i)&&(i=GT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ic(s,l);o+=Fa(s,e,n,u,i)}else if(u=KT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ic(s,l++),o+=Fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return Fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Ua={transition:null},XT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:md};function iv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Xi;Z.Fragment=jT;Z.Profiler=UT;Z.PureComponent=fd;Z.StrictMode=FT;Z.Suspense=WT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XT;Z.act=iv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)tv.call(e,u)&&!nv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:BT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zT,_context:t},t.Consumer=t};Z.createElement=rv;Z.createFactory=function(t){var e=rv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:$T,render:t}};Z.isValidElement=gd;Z.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:YT}};Z.memo=function(t,e){return{$$typeof:HT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};Z.unstable_act=iv;Z.useCallback=function(t,e){return ot.current.useCallback(t,e)};Z.useContext=function(t){return ot.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ot.current.useEffect(t,e)};Z.useId=function(){return ot.current.useId()};Z.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ot.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};Z.useRef=function(t){return ot.current.useRef(t)};Z.useState=function(t){return ot.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ot.current.useTransition()};Z.version="18.3.1";Yy.exports=Z;var j=Yy.exports;const yd=Gy(j),JT=LT({__proto__:null,default:yd},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=j,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iI={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!iI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:eI,type:t,key:s,ref:o,props:i,_owner:rI.current}}Ql.Fragment=tI;Ql.jsx=sv;Ql.jsxs=sv;Qy.exports=Ql;var _=Qy.exports,ov={exports:{}},St={},av={exports:{}},lv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var me=J-1>>>1,le=B[me];if(0<i(le,G))B[me]=G,B[J]=le,J=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var me=0,le=B.length,Ie=le>>>1;me<Ie;){var ln=2*(me+1)-1,un=B[ln],cn=ln+1,hn=B[cn];if(0>i(un,J))cn<le&&0>i(hn,un)?(B[me]=hn,B[cn]=J,me=cn):(B[me]=un,B[ln]=J,me=ln);else if(cn<le&&0>i(hn,J))B[me]=hn,B[cn]=J,me=cn;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,S=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function b(B){if(N=!1,T(B),!R)if(n(u)!==null)R=!0,ls(V);else{var G=n(c);G!==null&&an(b,G.startTime-B)}}function V(B,G){R=!1,N&&(N=!1,I(v),v=-1),S=!0;var J=m;try{for(T(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!C());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var le=me(p.expirationTime<=G);G=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),T(G)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var ln=n(c);ln!==null&&an(b,ln.startTime-G),Ie=!1}return Ie}finally{p=null,m=J,S=!1}}var U=!1,w=null,v=-1,E=5,A=-1;function C(){return!(t.unstable_now()-A<E)}function x(){if(w!==null){var B=t.unstable_now();A=B;var G=!0;try{G=w(!0,B)}finally{G?k():(U=!1,w=null)}}else U=!1}var k;if(typeof y=="function")k=function(){y(x)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,wr=kt.port2;kt.port1.onmessage=x,k=function(){wr.postMessage(null)}}else k=function(){O(x,0)};function ls(B){w=B,U||(U=!0,k())}function an(B,G){v=O(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,ls(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var J=m;m=G;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return G()}finally{m=J}},t.unstable_scheduleCallback=function(B,G,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:G,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>me?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(N?(I(v),v=-1):N=!0,an(b,J-me))):(B.sortIndex=le,e(u,B),R||S||(R=!0,ls(V))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var G=m;return function(){var J=m;m=G;try{return B.apply(this,arguments)}finally{m=J}}}})(lv);av.exports=lv;var sI=av.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=j,It=sI;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uv=new Set,to={};function Xr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(to[t]=e,t=0;t<e.length;t++)uv.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,aI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},hm={};function lI(t){return qc.call(hm,t)?!0:qc.call(cm,t)?!1:aI.test(t)?hm[t]=!0:(cm[t]=!0,!1)}function uI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cI(t,e,n,r){if(e===null||typeof e>"u"||uI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,_d);$e[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,_d);$e[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,_d);$e[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cI(e,n,i,r)&&(n=null),r||i===null?lI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Mn=Symbol.for("react.lazy"),dv=Symbol.for("react.offscreen"),dm=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,sc;function Ns(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ns(t):""}function hI(t){switch(t.tag){case 5:return Ns(t.type);case 16:return Ns("Lazy");case 13:return Ns("Suspense");case 19:return Ns("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Yc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case fi:return"Portal";case Kc:return"Profiler";case Ed:return"StrictMode";case Gc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hv:return(t.displayName||"Context")+".Consumer";case cv:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:Yc(t.type)||"Memo";case Mn:e=t._payload,t=t._init;try{return Yc(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yc(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=fv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=fI(t))}function pv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mv(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function Jc(t,e){mv(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zc(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(bs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function gv(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,vv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var mI=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nh(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function rh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sh=null,Ri=null,Ci=null;function ym(t){if(t=Mo(t)){if(typeof sh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=eu(e),sh(t.stateNode,t.type,e))}}function Ev(t){Ri?Ci?Ci.push(t):Ci=[t]:Ri=t}function Tv(){if(Ri){var t=Ri,e=Ci;if(Ci=Ri=null,ym(t),e)for(t=0;t<e.length;t++)ym(e[t])}}function Iv(t,e){return t(e)}function Sv(){}var lc=!1;function Av(t,e,n){if(lc)return t(e,n);lc=!0;try{return Iv(t,e,n)}finally{lc=!1,(Ri!==null||Ci!==null)&&(Sv(),Tv())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var oh=!1;if(In)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){oh=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{oh=!1}function gI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var zs=!1,al=null,ll=!1,ah=null,yI={onError:function(t){zs=!0,al=t}};function vI(t,e,n,r,i,s,o,l,u){zs=!1,al=null,gI.apply(yI,arguments)}function _I(t,e,n,r,i,s,o,l,u){if(vI.apply(this,arguments),zs){if(zs){var c=al;zs=!1,al=null}else throw Error(F(198));ll||(ll=!0,ah=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(Jr(t)!==t)throw Error(F(188))}function wI(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Rv(t){return t=wI(t),t!==null?Cv(t):null}function Cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=It.unstable_scheduleCallback,_m=It.unstable_cancelCallback,EI=It.unstable_shouldYield,TI=It.unstable_requestPaint,Ae=It.unstable_now,II=It.unstable_getCurrentPriorityLevel,Ad=It.unstable_ImmediatePriority,xv=It.unstable_UserBlockingPriority,ul=It.unstable_NormalPriority,SI=It.unstable_LowPriority,Nv=It.unstable_IdlePriority,Yl=null,Yt=null;function AI(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:CI,kI=Math.log,RI=Math.LN2;function CI(t){return t>>>=0,t===0?32:31-(kI(t)/RI|0)|0}var va=64,_a=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ds(l):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function PI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bv(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function NI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ov,Rd,Vv,Lv,Mv,uh=!1,wa=[],Qn=null,Yn=null,Xn=null,io=new Map,so=new Map,Fn=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function Ss(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mo(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DI(t,e,n,r,i){switch(e){case"focusin":return Qn=Ss(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=Ss(Yn,t,e,n,r,i),!0;case"mouseover":return Xn=Ss(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return io.set(s,Ss(io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,so.set(s,Ss(so.get(s)||null,t,e,n,r,i)),!0}return!1}function jv(t){var e=xr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,Mv(t.priority,function(){Vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ih=r,n.target.dispatchEvent(r),ih=null}else return e=Mo(n),e!==null&&Rd(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){za(t)&&n.delete(e)}function OI(){uh=!1,Qn!==null&&za(Qn)&&(Qn=null),Yn!==null&&za(Yn)&&(Yn=null),Xn!==null&&za(Xn)&&(Xn=null),io.forEach(Em),so.forEach(Em)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,uh||(uh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,OI)))}function oo(t){function e(i){return As(i,t)}if(0<wa.length){As(wa[0],t);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&As(Qn,t),Yn!==null&&As(Yn,t),Xn!==null&&As(Xn,t),io.forEach(e),so.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)jv(n),n.blockedOn===null&&Fn.shift()}var Pi=Nn.ReactCurrentBatchConfig,hl=!0;function VI(t,e,n,r){var i=oe,s=Pi.transition;Pi.transition=null;try{oe=1,Cd(t,e,n,r)}finally{oe=i,Pi.transition=s}}function LI(t,e,n,r){var i=oe,s=Pi.transition;Pi.transition=null;try{oe=4,Cd(t,e,n,r)}finally{oe=i,Pi.transition=s}}function Cd(t,e,n,r){if(hl){var i=ch(t,e,n,r);if(i===null)_c(t,e,r,dl,n),wm(t,r);else if(DI(i,t,e,n,r))r.stopPropagation();else if(wm(t,r),e&4&&-1<bI.indexOf(t)){for(;i!==null;){var s=Mo(i);if(s!==null&&Ov(s),s=ch(t,e,n,r),s===null&&_c(t,e,r,dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(t,e,r,null,n)}}var dl=null;function ch(t,e,n,r){if(dl=null,t=Sd(r),t=xr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case Ad:return 1;case xv:return 4;case ul:case SI:return 16;case Nv:return 536870912;default:return 16}default:return 16}}var Hn=null,Pd=null,Ba=null;function Uv(){if(Ba)return Ba;var t,e=Pd,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ba=i.slice(t,1<r?1-r:void 0)}function $a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function Tm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:Tm,this.isPropagationStopped=Tm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=At(Ji),Lo=ve({},Ji,{view:0,detail:0}),MI=At(Lo),cc,hc,ks,Xl=ve({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(cc=t.screenX-ks.screenX,hc=t.screenY-ks.screenY):hc=cc=0,ks=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Im=At(Xl),jI=ve({},Xl,{dataTransfer:0}),FI=At(jI),UI=ve({},Lo,{relatedTarget:0}),dc=At(UI),zI=ve({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),BI=At(zI),$I=ve({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WI=At($I),HI=ve({},Ji,{data:0}),Sm=At(HI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=GI[t])?!!e[t]:!1}function Nd(){return QI}var YI=ve({},Lo,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?$a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=At(YI),JI=ve({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=At(JI),ZI=ve({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),eS=At(ZI),tS=ve({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=At(tS),rS=ve({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=At(rS),sS=[9,13,27,32],bd=In&&"CompositionEvent"in window,Bs=null;In&&"documentMode"in document&&(Bs=document.documentMode);var oS=In&&"TextEvent"in window&&!Bs,zv=In&&(!bd||Bs&&8<Bs&&11>=Bs),km=" ",Rm=!1;function Bv(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $v(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function aS(t,e){switch(t){case"compositionend":return $v(e);case"keypress":return e.which!==32?null:(Rm=!0,km);case"textInput":return t=e.data,t===km&&Rm?null:t;default:return null}}function lS(t,e){if(mi)return t==="compositionend"||!bd&&Bv(t,e)?(t=Uv(),Ba=Pd=Hn=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zv&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uS[t.type]:e==="textarea"}function Wv(t,e,n,r){Ev(r),e=fl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $s=null,ao=null;function cS(t){t_(t,0)}function Jl(t){var e=vi(t);if(pv(e))return t}function hS(t,e){if(t==="change")return e}var Hv=!1;if(In){var fc;if(In){var pc="oninput"in document;if(!pc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),pc=typeof Pm.oninput=="function"}fc=pc}else fc=!1;Hv=fc&&(!document.documentMode||9<document.documentMode)}function xm(){$s&&($s.detachEvent("onpropertychange",qv),ao=$s=null)}function qv(t){if(t.propertyName==="value"&&Jl(ao)){var e=[];Wv(e,ao,t,Sd(t)),Av(cS,e)}}function dS(t,e,n){t==="focusin"?(xm(),$s=e,ao=n,$s.attachEvent("onpropertychange",qv)):t==="focusout"&&xm()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(ao)}function pS(t,e){if(t==="click")return Jl(e)}function mS(t,e){if(t==="input"||t==="change")return Jl(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:gS;function lo(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Kv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kv(n.ownerDocument.documentElement,n)){if(r!==null&&Dd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=bm(n,s);var o=bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vS=In&&"documentMode"in document&&11>=document.documentMode,gi=null,hh=null,Ws=null,dh=!1;function Dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dh||gi==null||gi!==ol(r)||(r=gi,"selectionStart"in r&&Dd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&lo(Ws,r)||(Ws=r,r=fl(hh,"onSelect"),0<r.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gi)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yi={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},mc={},Qv={};In&&(Qv=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Zl(t){if(mc[t])return mc[t];if(!yi[t])return t;var e=yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qv)return mc[t]=e[n];return t}var Yv=Zl("animationend"),Xv=Zl("animationiteration"),Jv=Zl("animationstart"),Zv=Zl("transitionend"),e_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){e_.set(t,e),Xr(e,[t])}for(var gc=0;gc<Om.length;gc++){var yc=Om[gc],_S=yc.toLowerCase(),wS=yc[0].toUpperCase()+yc.slice(1);dr(_S,"on"+wS)}dr(Yv,"onAnimationEnd");dr(Xv,"onAnimationIteration");dr(Jv,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Zv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_I(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Vm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Vm(i,l,c),s=u}}}if(ll)throw t=ah,ll=!1,ah=null,t}function de(t,e){var n=e[yh];n===void 0&&(n=e[yh]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Ia]){t[Ia]=!0,uv.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,vc("selectionchange",!1,e))}}function n_(t,e,n,r){switch(Fv(e)){case 1:var i=VI;break;case 4:i=LI;break;default:i=Cd}n=i.bind(null,e,n,t),i=void 0,!oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Av(function(){var c=s,f=Sd(n),p=[];e:{var m=e_.get(t);if(m!==void 0){var S=xd,R=t;switch(t){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":S=XI;break;case"focusin":R="focus",S=dc;break;case"focusout":R="blur",S=dc;break;case"beforeblur":case"afterblur":S=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=eS;break;case Yv:case Xv:case Jv:S=BI;break;case Zv:S=nS;break;case"scroll":S=MI;break;case"wheel":S=iS;break;case"copy":case"cut":case"paste":S=WI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Am}var N=(e&4)!==0,O=!N&&t==="scroll",I=N?m!==null?m+"Capture":null:m;N=[];for(var y=c,T;y!==null;){T=y;var b=T.stateNode;if(T.tag===5&&b!==null&&(T=b,I!==null&&(b=ro(y,I),b!=null&&N.push(co(y,b,T)))),O)break;y=y.return}0<N.length&&(m=new S(m,R,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==ih&&(R=n.relatedTarget||n.fromElement)&&(xr(R)||R[Sn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=c,R=R?xr(R):null,R!==null&&(O=Jr(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=c),S!==R)){if(N=Im,b="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Am,b="onPointerLeave",I="onPointerEnter",y="pointer"),O=S==null?m:vi(S),T=R==null?m:vi(R),m=new N(b,y+"leave",S,n,f),m.target=O,m.relatedTarget=T,b=null,xr(f)===c&&(N=new N(I,y+"enter",R,n,f),N.target=T,N.relatedTarget=O,b=N),O=b,S&&R)t:{for(N=S,I=R,y=0,T=N;T;T=li(T))y++;for(T=0,b=I;b;b=li(b))T++;for(;0<y-T;)N=li(N),y--;for(;0<T-y;)I=li(I),T--;for(;y--;){if(N===I||I!==null&&N===I.alternate)break t;N=li(N),I=li(I)}N=null}else N=null;S!==null&&Lm(p,m,S,N,!1),R!==null&&O!==null&&Lm(p,O,R,N,!0)}}e:{if(m=c?vi(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var V=hS;else if(Cm(m))if(Hv)V=mS;else{V=fS;var U=dS}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=pS);if(V&&(V=V(t,c))){Wv(p,V,n,f);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Zc(m,"number",m.value)}switch(U=c?vi(c):window,t){case"focusin":(Cm(U)||U.contentEditable==="true")&&(gi=U,hh=c,Ws=null);break;case"focusout":Ws=hh=gi=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,Dm(p,n,f);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":Dm(p,n,f)}var w;if(bd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else mi?Bv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(zv&&n.locale!=="ko"&&(mi||v!=="onCompositionStart"?v==="onCompositionEnd"&&mi&&(w=Uv()):(Hn=f,Pd="value"in Hn?Hn.value:Hn.textContent,mi=!0)),U=fl(c,v),0<U.length&&(v=new Sm(v,t,null,n,f),p.push({event:v,listeners:U}),w?v.data=w:(w=$v(n),w!==null&&(v.data=w)))),(w=oS?aS(t,n):lS(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(f=new Sm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}t_(p,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(t,n),s!=null&&r.unshift(co(t,s,i)),s=ro(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ro(n,s),u!=null&&o.unshift(co(n,u,l))):i||(u=ro(n,s),u!=null&&o.push(co(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(IS,"")}function Sa(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(F(425))}function pl(){}var fh=null,ph=null;function mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(t){return jm.resolve(null).then(t).catch(kS)}:gh;function kS(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Zi,ho="__reactProps$"+Zi,Sn="__reactContainer$"+Zi,yh="__reactEvents$"+Zi,RS="__reactListeners$"+Zi,CS="__reactHandles$"+Zi;function xr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[Gt])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function Mo(t){return t=t[Gt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function eu(t){return t[ho]||null}var vh=[],_i=-1;function fr(t){return{current:t}}function fe(t){0>_i||(t.current=vh[_i],vh[_i]=null,_i--)}function ce(t,e){_i++,vh[_i]=t.current,t.current=e}var lr={},et=fr(lr),dt=fr(!1),jr=lr;function Mi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function ml(){fe(dt),fe(et)}function Um(t,e,n){if(et.current!==lr)throw Error(F(168));ce(et,e),ce(dt,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,dI(t)||"Unknown",i));return ve({},n,r)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,jr=et.current,ce(et,t),ce(dt,dt.current),!0}function zm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=r_(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,fe(dt),fe(et),ce(et,t)):fe(dt),ce(dt,n)}var mn=null,tu=!1,Ec=!1;function i_(t){mn===null?mn=[t]:mn.push(t)}function PS(t){tu=!0,i_(t)}function pr(){if(!Ec&&mn!==null){Ec=!0;var t=0,e=oe;try{var n=mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,tu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),Pv(Ad,pr),i}finally{oe=e,Ec=!1}}return null}var wi=[],Ei=0,yl=null,vl=0,Rt=[],Ct=0,Fr=null,gn=1,yn="";function kr(t,e){wi[Ei++]=vl,wi[Ei++]=yl,yl=t,vl=e}function s_(t,e,n){Rt[Ct++]=gn,Rt[Ct++]=yn,Rt[Ct++]=Fr,Fr=t;var r=gn;t=yn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Ut(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Od(t){t.return!==null&&(kr(t,1),s_(t,1,0))}function Vd(t){for(;t===yl;)yl=wi[--Ei],wi[Ei]=null,vl=wi[--Ei],wi[Ei]=null;for(;t===Fr;)Fr=Rt[--Ct],Rt[Ct]=null,yn=Rt[--Ct],Rt[Ct]=null,gn=Rt[--Ct],Rt[Ct]=null}var wt=null,vt=null,pe=!1,jt=null;function o_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function _h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wh(t){if(pe){var e=vt;if(e){var n=e;if(!Bm(t,e)){if(_h(t))throw Error(F(418));e=Jn(n.nextSibling);var r=wt;e&&Bm(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,pe=!1,wt=t)}}else{if(_h(t))throw Error(F(418));t.flags=t.flags&-4097|2,pe=!1,wt=t}}}function $m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Aa(t){if(t!==wt)return!1;if(!pe)return $m(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mh(t.type,t.memoizedProps)),e&&(e=vt)){if(_h(t))throw a_(),Error(F(418));for(;e;)o_(t,e),e=Jn(e.nextSibling)}if($m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?Jn(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=vt;t;)t=Jn(t.nextSibling)}function ji(){vt=wt=null,pe=!1}function Ld(t){jt===null?jt=[t]:jt.push(t)}var xS=Nn.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wm(t){var e=t._init;return e(t._payload)}function l_(t){function e(I,y){if(t){var T=I.deletions;T===null?(I.deletions=[y],I.flags|=16):T.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=nr(I,y),I.index=0,I.sibling=null,I}function s(I,y,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<y?(I.flags|=2,y):T):(I.flags|=2,y)):(I.flags|=1048576,y)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,y,T,b){return y===null||y.tag!==6?(y=Cc(T,I.mode,b),y.return=I,y):(y=i(y,T),y.return=I,y)}function u(I,y,T,b){var V=T.type;return V===pi?f(I,y,T.props.children,b,T.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&Wm(V)===y.type)?(b=i(y,T.props),b.ref=Rs(I,y,T),b.return=I,b):(b=Ya(T.type,T.key,T.props,null,I.mode,b),b.ref=Rs(I,y,T),b.return=I,b)}function c(I,y,T,b){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=Pc(T,I.mode,b),y.return=I,y):(y=i(y,T.children||[]),y.return=I,y)}function f(I,y,T,b,V){return y===null||y.tag!==7?(y=Lr(T,I.mode,b,V),y.return=I,y):(y=i(y,T),y.return=I,y)}function p(I,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Cc(""+y,I.mode,T),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ma:return T=Ya(y.type,y.key,y.props,null,I.mode,T),T.ref=Rs(I,null,y),T.return=I,T;case fi:return y=Pc(y,I.mode,T),y.return=I,y;case Mn:var b=y._init;return p(I,b(y._payload),T)}if(bs(y)||Ts(y))return y=Lr(y,I.mode,T,null),y.return=I,y;ka(I,y)}return null}function m(I,y,T,b){var V=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return V!==null?null:l(I,y,""+T,b);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ma:return T.key===V?u(I,y,T,b):null;case fi:return T.key===V?c(I,y,T,b):null;case Mn:return V=T._init,m(I,y,V(T._payload),b)}if(bs(T)||Ts(T))return V!==null?null:f(I,y,T,b,null);ka(I,T)}return null}function S(I,y,T,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(T)||null,l(y,I,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ma:return I=I.get(b.key===null?T:b.key)||null,u(y,I,b,V);case fi:return I=I.get(b.key===null?T:b.key)||null,c(y,I,b,V);case Mn:var U=b._init;return S(I,y,T,U(b._payload),V)}if(bs(b)||Ts(b))return I=I.get(T)||null,f(y,I,b,V,null);ka(y,b)}return null}function R(I,y,T,b){for(var V=null,U=null,w=y,v=y=0,E=null;w!==null&&v<T.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var A=m(I,w,T[v],b);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(I,w),y=s(A,y,v),U===null?V=A:U.sibling=A,U=A,w=E}if(v===T.length)return n(I,w),pe&&kr(I,v),V;if(w===null){for(;v<T.length;v++)w=p(I,T[v],b),w!==null&&(y=s(w,y,v),U===null?V=w:U.sibling=w,U=w);return pe&&kr(I,v),V}for(w=r(I,w);v<T.length;v++)E=S(w,I,v,T[v],b),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),y=s(E,y,v),U===null?V=E:U.sibling=E,U=E);return t&&w.forEach(function(C){return e(I,C)}),pe&&kr(I,v),V}function N(I,y,T,b){var V=Ts(T);if(typeof V!="function")throw Error(F(150));if(T=V.call(T),T==null)throw Error(F(151));for(var U=V=null,w=y,v=y=0,E=null,A=T.next();w!==null&&!A.done;v++,A=T.next()){w.index>v?(E=w,w=null):E=w.sibling;var C=m(I,w,A.value,b);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(I,w),y=s(C,y,v),U===null?V=C:U.sibling=C,U=C,w=E}if(A.done)return n(I,w),pe&&kr(I,v),V;if(w===null){for(;!A.done;v++,A=T.next())A=p(I,A.value,b),A!==null&&(y=s(A,y,v),U===null?V=A:U.sibling=A,U=A);return pe&&kr(I,v),V}for(w=r(I,w);!A.done;v++,A=T.next())A=S(w,I,v,A.value,b),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?v:A.key),y=s(A,y,v),U===null?V=A:U.sibling=A,U=A);return t&&w.forEach(function(x){return e(I,x)}),pe&&kr(I,v),V}function O(I,y,T,b){if(typeof T=="object"&&T!==null&&T.type===pi&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ma:e:{for(var V=T.key,U=y;U!==null;){if(U.key===V){if(V=T.type,V===pi){if(U.tag===7){n(I,U.sibling),y=i(U,T.props.children),y.return=I,I=y;break e}}else if(U.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Mn&&Wm(V)===U.type){n(I,U.sibling),y=i(U,T.props),y.ref=Rs(I,U,T),y.return=I,I=y;break e}n(I,U);break}else e(I,U);U=U.sibling}T.type===pi?(y=Lr(T.props.children,I.mode,b,T.key),y.return=I,I=y):(b=Ya(T.type,T.key,T.props,null,I.mode,b),b.ref=Rs(I,y,T),b.return=I,I=b)}return o(I);case fi:e:{for(U=T.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(I,y.sibling),y=i(y,T.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=Pc(T,I.mode,b),y.return=I,I=y}return o(I);case Mn:return U=T._init,O(I,y,U(T._payload),b)}if(bs(T))return R(I,y,T,b);if(Ts(T))return N(I,y,T,b);ka(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,T),y.return=I,I=y):(n(I,y),y=Cc(T,I.mode,b),y.return=I,I=y),o(I)):n(I,y)}return O}var Fi=l_(!0),u_=l_(!1),_l=fr(null),wl=null,Ti=null,Md=null;function jd(){Md=Ti=wl=null}function Fd(t){var e=_l.current;fe(_l),t._currentValue=e}function Eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xi(t,e){wl=t,Md=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(Md!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(wl===null)throw Error(F(308));Ti=t,wl.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Nr=null;function Ud(t){Nr===null?Nr=[t]:Nr.push(t)}function c_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ud(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,Ud(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(m=e,S=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=ve({},p,m);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=p}}function qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var jo={},Xt=fr(jo),fo=fr(jo),po=fr(jo);function br(t){if(t===jo)throw Error(F(174));return t}function Bd(t,e){switch(ce(po,e),ce(fo,t),ce(Xt,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=th(e,t)}fe(Xt),ce(Xt,e)}function Ui(){fe(Xt),fe(fo),fe(po)}function d_(t){br(po.current);var e=br(Xt.current),n=th(e,t.type);e!==n&&(ce(fo,t),ce(Xt,n))}function $d(t){fo.current===t&&(fe(Xt),fe(fo))}var ge=fr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Wd(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Ha=Nn.ReactCurrentDispatcher,Ic=Nn.ReactCurrentBatchConfig,Ur=0,ye=null,Pe=null,Oe=null,Il=!1,Hs=!1,mo=0,NS=0;function Ge(){throw Error(F(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function qd(t,e,n,r,i,s){if(Ur=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ha.current=t===null||t.memoizedState===null?VS:LS,t=n(r,i),Hs){s=0;do{if(Hs=!1,mo=0,25<=s)throw Error(F(301));s+=1,Oe=Pe=null,e.updateQueue=null,Ha.current=MS,t=n(r,i)}while(Hs)}if(Ha.current=Sl,e=Pe!==null&&Pe.next!==null,Ur=0,Oe=Pe=ye=null,Il=!1,e)throw Error(F(300));return t}function Kd(){var t=mo!==0;return mo=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Dt(){if(Pe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Oe===null?ye.memoizedState:Oe.next;if(e!==null)Oe=e,Pe=t;else{if(t===null)throw Error(F(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function go(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Ur&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ye.lanes|=f,zr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Bt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function f_(){}function p_(t,e){var n=ye,r=Dt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Gd(y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,yo(9,g_.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(F(349));Ur&30||m_(n,e,i)}return i}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,r){e.value=n,e.getSnapshot=r,v_(e)&&__(t)}function y_(t,e,n){return n(function(){v_(e)&&__(t)})}function v_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function __(t){var e=An(t,1);e!==null&&zt(e,t,1,-1)}function Km(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,ye,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w_(){return Dt().memoizedState}function qa(t,e,n,r){var i=Kt();ye.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function nu(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}ye.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function Gm(t,e){return qa(8390656,8,t,e)}function Gd(t,e){return nu(2048,8,t,e)}function E_(t,e){return nu(4,2,t,e)}function T_(t,e){return nu(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,nu(4,4,I_.bind(null,e,t),n)}function Qd(){}function A_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k_(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return Ur&21?(Bt(n,e)||(n=bv(),ye.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function bS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Ic.transition;Ic.transition={};try{t(!1),e()}finally{oe=n,Ic.transition=r}}function C_(){return Dt().memoizedState}function DS(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))x_(e,n);else if(n=c_(t,e,n,r),n!==null){var i=st();zt(n,t,r,i),N_(n,e,r)}}function OS(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))x_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var u=e.interleaved;u===null?(i.next=i,Ud(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=c_(t,e,i,r),n!==null&&(i=st(),zt(n,t,r,i),N_(n,e,r))}}function P_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function x_(t,e){Hs=Il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}var Sl={readContext:bt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},VS={readContext:bt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qa(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return qa(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DS.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Km,useDebugValue:Qd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Km(!1),e=t[0];return t=bS.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Kt();if(pe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ve===null)throw Error(F(349));Ur&30||m_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gm(y_.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,g_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Ve.identifierPrefix;if(pe){var n=yn,r=gn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:bt,useCallback:A_,useContext:bt,useEffect:Gd,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:k_,useReducer:Sc,useRef:w_,useState:function(){return Sc(go)},useDebugValue:Qd,useDeferredValue:function(t){var e=Dt();return R_(e,Pe.memoizedState,t)},useTransition:function(){var t=Sc(go)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1},MS={readContext:bt,useCallback:A_,useContext:bt,useEffect:Gd,useImperativeHandle:S_,useInsertionEffect:E_,useLayoutEffect:T_,useMemo:k_,useReducer:Ac,useRef:w_,useState:function(){return Ac(go)},useDebugValue:Qd,useDeferredValue:function(t){var e=Dt();return Pe===null?e.memoizedState=t:R_(e,Pe.memoizedState,t)},useTransition:function(){var t=Ac(go)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:f_,useSyncExternalStore:p_,useId:C_,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=tr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(zt(e,t,i,r),Wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=tr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(zt(e,t,i,r),Wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=tr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(zt(e,t,r,n),Wa(e,t,r))}};function Qm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,r)||!lo(i,s):!0}function b_(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=ft(e)?jr:et.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function Ih(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=ft(e)?jr:et.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ru.enqueueReplaceState(i,i.state,null),El(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=hI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jS=typeof WeakMap=="function"?WeakMap:Map;function D_(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kl||(kl=!0,Oh=r),Sh(t,e)},n}function O_(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var FS=Nn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?u_(e,null,n,r):Fi(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return xi(e,i),r=qd(t,e,n,r,s,i),n=Kd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&n&&Od(e),e.flags|=1,it(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,r,i)):(t=Ya(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(lo(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,kn(t,e,i)}return Ah(t,e,n,r,i)}function L_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Si,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Si,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Si,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Si,yt),yt|=r;return it(t,e,i,n),e.child}function M_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ah(t,e,n,r,i){var s=ft(n)?jr:et.current;return s=Mi(e,s),xi(e,i),n=qd(t,e,n,r,s,i),r=Kd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(pe&&r&&Od(e),e.flags|=1,it(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(ft(n)){var s=!0;gl(e)}else s=!1;if(xi(e,i),e.stateNode===null)Ka(t,e),b_(e,n,r),Ih(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=ft(n)?jr:et.current,c=Mi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ym(e,o,r,c),jn=!1;var m=e.memoizedState;o.state=m,El(e,r,o,i),u=e.memoizedState,l!==r||m!==u||dt.current||jn?(typeof f=="function"&&(Th(e,n,f,r),u=e.memoizedState),(l=jn||Qm(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Lt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=ft(n)?jr:et.current,u=Mi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ym(e,o,r,u),jn=!1,m=e.memoizedState,o.state=m,El(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||dt.current||jn?(typeof S=="function"&&(Th(e,n,S,r),R=e.memoizedState),(c=jn||Qm(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return kh(t,e,n,r,s,i)}function kh(t,e,n,r,i,s){M_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zm(e,n,!1),kn(t,e,s);r=e.stateNode,FS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&zm(e,n,!0),e.child}function j_(t){var e=t.stateNode;e.pendingContext?Um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Um(t,e.context,!1),Bd(t,e.containerInfo)}function rg(t,e,n,r,i){return ji(),Ld(i),e.flags|=256,it(t,e,n,r),e.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function F_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ge,i&1),t===null)return wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ou(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=Rh,t):Yd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return US(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nr(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rh,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yd(t,e){return e=ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,r){return r!==null&&Ld(r),Fi(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(F(422))),Ra(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ou({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=Rh,s);if(!(e.mode&1))return Ra(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=kc(s,r,void 0),Ra(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),zt(r,t,i,-1))}return nf(),r=kc(Error(F(421))),Ra(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Jn(i.nextSibling),wt=e,pe=!0,jt=null,t!==null&&(Rt[Ct++]=gn,Rt[Ct++]=yn,Rt[Ct++]=Fr,gn=t.id,yn=t.overflow,Fr=e),e=Yd(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eh(t.return,e,n)}function Rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function U_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rc(e,!0,n,null,s);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zS(t,e,n){switch(e.tag){case 3:j_(e),ji();break;case 5:d_(e);break;case 1:ft(e.type)&&gl(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(_l,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?F_(t,e,n):(ce(ge,ge.current&1),t=kn(t,e,n),t!==null?t.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return U_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,L_(t,e,n)}return kn(t,e,n)}var z_,Ph,B_,$_;z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};B_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(Xt.current);var s=null;switch(n){case"input":i=Xc(t,i),r=Xc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=eh(t,i),r=eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pl)}nh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(to.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(to.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BS(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return ft(e.type)&&ml(),Qe(e),null;case 3:return r=e.stateNode,Ui(),fe(dt),fe(et),Wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Mh(jt),jt=null))),Ph(t,e),Qe(e),null;case 5:$d(e);var i=br(po.current);if(n=e.type,t!==null&&e.stateNode!=null)B_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=br(Xt.current),Aa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gt]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)de(Os[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":fm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":mm(r,s),de("invalid",r)}nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,l,t),i=["children",""+l]):to.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ga(r),pm(r,s,!0);break;case"textarea":ga(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gt]=e,t[ho]=r,z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=rh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)de(Os[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":fm(t,r),i=Xc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":mm(t,r),i=eh(t,r),de("invalid",t);break;default:i=r}nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?wv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&no(t,u):typeof u=="number"&&no(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&wd(t,s,u,o))}switch(n){case"input":ga(t),pm(t,r,!1);break;case"textarea":ga(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=br(po.current),br(Xt.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return Qe(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&vt!==null&&e.mode&1&&!(e.flags&128))a_(),ji(),e.flags|=98560,s=!1;else if(s=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Gt]=e}else ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else jt!==null&&(Mh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Ne===0&&(Ne=3):nf())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Ui(),Ph(t,e),t===null&&uo(e.stateNode.containerInfo),Qe(e),null;case 10:return Fd(e.type._context),Qe(e),null;case 17:return ft(e.type)&&ml(),Qe(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Bi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function $S(t,e){switch(Vd(e),e.tag){case 1:return ft(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),fe(dt),fe(et),Wd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return Ui(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var Ca=!1,Je=!1,WS=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function xh(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var sg=!1;function HS(t,e){if(fh=hl,t=Gv(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ph={focusedElem:t,selectionRange:n},hl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Lt(e.type,N),O);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ee(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=sg,sg=!1,R}function qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xh(e,n,s)}i=i.next}while(i!==r)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[ho],delete e[yh],delete e[RS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(r!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var je=null,Mt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)q_(t,e,n),n=n.sibling}function q_(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:Je||Ii(n,e);case 6:var r=je,i=Mt;je=null,Vn(t,e,n),je=r,Mt=i,je!==null&&(Mt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Mt?(t=je,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),oo(t)):wc(je,n.stateNode));break;case 4:r=je,i=Mt,je=n.stateNode.containerInfo,Mt=!0,Vn(t,e,n),je=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xh(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(Ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WS),e.forEach(function(r){var i=e1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Mt=!1;break e;case 3:je=l.stateNode.containerInfo,Mt=!0;break e;case 4:je=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(je===null)throw Error(F(160));q_(s,o,i),je=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ee(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K_(e,t),e=e.sibling}function K_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),qt(t),r&4){try{qs(3,t,t.return),iu(3,t)}catch(N){Ee(t,t.return,N)}try{qs(5,t,t.return)}catch(N){Ee(t,t.return,N)}}break;case 1:Vt(e,t),qt(t),r&512&&n!==null&&Ii(n,n.return);break;case 5:if(Vt(e,t),qt(t),r&512&&n!==null&&Ii(n,n.return),t.flags&32){var i=t.stateNode;try{no(i,"")}catch(N){Ee(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&mv(i,s),rh(l,o);var c=rh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?wv(i,p):f==="dangerouslySetInnerHTML"?vv(i,p):f==="children"?no(i,p):wd(i,f,p,c)}switch(l){case"input":Jc(i,s);break;case"textarea":gv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?ki(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(N){Ee(t,t.return,N)}}break;case 6:if(Vt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ee(t,t.return,N)}}break;case 3:if(Vt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(N){Ee(t,t.return,N)}break;case 4:Vt(e,t),qt(t);break;case 13:Vt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=Ae())),r&4&&ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(c=Je)||f,Vt(e,t),Je=c):Vt(e,t),qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(m=$,S=m.child,m.tag){case 0:case 11:case 14:case 15:qs(4,m,m.return);break;case 1:Ii(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ee(r,n,N)}}break;case 5:Ii(m,m.return);break;case 22:if(m.memoizedState!==null){ug(p);continue}}S!==null?(S.return=m,$=S):ug(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=_v("display",o))}catch(N){Ee(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Ee(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vt(e,t),qt(t),r&4&&ag(t);break;case 21:break;default:Vt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var s=og(t);Dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=og(t);bh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){$=t,G_(t)}function G_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ca;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Ca;var c=Je;if(Ca=o,(Je=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?cg(i):u!==null?(u.return=o,$=u):cg(i);for(;s!==null;)$=s,G_(s),s=s.sibling;$=i,Ca=l,Je=c}lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):lg(t)}}function lg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&Nh(e)}catch(m){Ee(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function ug(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function cg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{Nh(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{Nh(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var KS=Math.ceil,Al=Nn.ReactCurrentDispatcher,Xd=Nn.ReactCurrentOwner,xt=Nn.ReactCurrentBatchConfig,re=0,Ve=null,Ce=null,ze=0,yt=0,Si=fr(0),Ne=0,vo=null,zr=0,su=0,Jd=0,Ks=null,ut=null,Zd=0,Bi=1/0,pn=null,kl=!1,Oh=null,er=null,Pa=!1,qn=null,Rl=0,Gs=0,Vh=null,Ga=-1,Qa=0;function st(){return re&6?Ae():Ga!==-1?Ga:Ga=Ae()}function tr(t){return t.mode&1?re&2&&ze!==0?ze&-ze:xS.transition!==null?(Qa===0&&(Qa=bv()),Qa):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Fv(t.type)),t):1}function zt(t,e,n,r){if(50<Gs)throw Gs=0,Vh=null,Error(F(185));Vo(t,n,r),(!(re&2)||t!==Ve)&&(t===Ve&&(!(re&2)&&(su|=n),Ne===4&&Un(t,ze)),pt(t,r),n===1&&re===0&&!(e.mode&1)&&(Bi=Ae()+500,tu&&pr()))}function pt(t,e){var n=t.callbackNode;xI(t,e);var r=cl(t,t===Ve?ze:0);if(r===0)n!==null&&_m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_m(n),e===1)t.tag===0?PS(hg.bind(null,t)):i_(hg.bind(null,t)),AS(function(){!(re&6)&&pr()}),n=null;else{switch(Dv(r)){case 1:n=Ad;break;case 4:n=xv;break;case 16:n=ul;break;case 536870912:n=Nv;break;default:n=ul}n=n0(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(Ga=-1,Qa=0,re&6)throw Error(F(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=cl(t,t===Ve?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cl(t,r);else{e=r;var i=re;re|=2;var s=X_();(Ve!==t||ze!==e)&&(pn=null,Bi=Ae()+500,Vr(t,e));do try{YS();break}catch(l){Y_(t,l)}while(!0);jd(),Al.current=s,re=i,Ce!==null?e=0:(Ve=null,ze=0,e=Ne)}if(e!==0){if(e===2&&(i=lh(t),i!==0&&(r=i,e=Lh(t,i))),e===1)throw n=vo,Vr(t,0),Un(t,r),pt(t,Ae()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!GS(i)&&(e=Cl(t,r),e===2&&(s=lh(t),s!==0&&(r=s,e=Lh(t,s))),e===1))throw n=vo,Vr(t,0),Un(t,r),pt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Rr(t,ut,pn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Zd+500-Ae(),10<e)){if(cl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gh(Rr.bind(null,t,ut,pn),e);break}Rr(t,ut,pn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KS(r/1960))-r,10<r){t.timeoutHandle=gh(Rr.bind(null,t,ut,pn),r);break}Rr(t,ut,pn);break;case 5:Rr(t,ut,pn);break;default:throw Error(F(329))}}}return pt(t,Ae()),t.callbackNode===n?Q_.bind(null,t):null}function Lh(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=ut,ut=n,e!==null&&Mh(e)),t}function Mh(t){ut===null?ut=t:ut.push.apply(ut,t)}function GS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Jd,e&=~su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function hg(t){if(re&6)throw Error(F(327));Ni();var e=cl(t,0);if(!(e&1))return pt(t,Ae()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var r=lh(t);r!==0&&(e=r,n=Lh(t,r))}if(n===1)throw n=vo,Vr(t,0),Un(t,e),pt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ut,pn),pt(t,Ae()),null}function ef(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Bi=Ae()+500,tu&&pr())}}function Br(t){qn!==null&&qn.tag===0&&!(re&6)&&Ni();var e=re;re|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,re=e,!(re&6)&&pr()}}function tf(){yt=Si.current,fe(Si)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Ui(),fe(dt),fe(et),Wd();break;case 5:$d(r);break;case 4:Ui();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Fd(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Ve=t,Ce=t=nr(t.current,null),ze=yt=e,Ne=0,vo=null,Jd=su=zr=0,ut=Ks=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function Y_(t,e){do{var n=Ce;try{if(jd(),Ha.current=Sl,Il){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(Ur=0,Oe=Pe=ye=null,Hs=!1,mo=0,Xd.current=null,n===null||n.return===null){Ne=1,vo=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Jm(o);if(S!==null){S.flags&=-257,Zm(S,o,l,s,e),S.mode&1&&Xm(s,c,e),e=S,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Xm(s,c,e),nf();break e}u=Error(F(426))}}else if(pe&&l.mode&1){var O=Jm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Zm(O,o,l,s,e),Ld(zi(u,l));break e}}s=u=zi(u,l),Ne!==4&&(Ne=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=D_(s,u,e);Hm(s,I);break e;case 1:l=u;var y=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(er===null||!er.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=O_(s,l,e);Hm(s,b);break e}}s=s.return}while(s!==null)}Z_(n)}catch(V){e=V,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function X_(){var t=Al.current;return Al.current=Sl,t===null?Sl:t}function nf(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ve===null||!(zr&268435455)&&!(su&268435455)||Un(Ve,ze)}function Cl(t,e){var n=re;re|=2;var r=X_();(Ve!==t||ze!==e)&&(pn=null,Vr(t,e));do try{QS();break}catch(i){Y_(t,i)}while(!0);if(jd(),re=n,Al.current=r,Ce!==null)throw Error(F(261));return Ve=null,ze=0,Ne}function QS(){for(;Ce!==null;)J_(Ce)}function YS(){for(;Ce!==null&&!EI();)J_(Ce)}function J_(t){var e=t0(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Z_(t):Ce=e,Xd.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ce=null;return}}else if(n=BS(n,e,yt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Ne===0&&(Ne=5)}function Rr(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,XS(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function XS(t,e,n,r){do Ni();while(qn!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NI(t,s),t===Ve&&(Ce=Ve=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,n0(ul,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var l=re;re|=4,Xd.current=null,HS(t,n),K_(n,t),yS(ph),hl=!!fh,ph=fh=null,t.current=n,qS(n),TI(),re=l,oe=o,xt.transition=s}else t.current=n;if(Pa&&(Pa=!1,qn=t,Rl=i),s=t.pendingLanes,s===0&&(er=null),AI(n.stateNode),pt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,t=Oh,Oh=null,t;return Rl&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===Vh?Gs++:(Gs=0,Vh=t):Gs=0,pr(),null}function Ni(){if(qn!==null){var t=Dv(Rl),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,Rl=0,re&6)throw Error(F(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:qs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var m=f.sibling,S=f.return;if(W_(f),f===c){$=null;break}if(m!==null){m.return=S,$=m;break}$=S}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var y=t.current;for($=y;$!==null;){o=$;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,$=T;else e:for(o=y;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:iu(9,l)}}catch(V){Ee(l,l.return,V)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(re=i,pr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Yl,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function dg(t,e,n){e=zi(n,e),e=D_(t,e,1),t=Zn(t,e,1),e=st(),t!==null&&(Vo(t,1,e),pt(t,e))}function Ee(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=zi(n,t),t=O_(e,t,1),e=Zn(e,t,1),t=st(),e!==null&&(Vo(e,1,t),pt(e,t));break}}e=e.return}}function JS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>Ae()-Zd?Vr(t,0):Jd|=n),pt(t,e)}function e0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=st();t=An(t,e),t!==null&&(Vo(t,e,n),pt(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e0(t,n)}function e1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),e0(t,n)}var t0;t0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,zS(t,e,n);ht=!!(t.flags&131072)}else ht=!1,pe&&e.flags&1048576&&s_(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ka(t,e),t=e.pendingProps;var i=Mi(e,et.current);xi(e,n),i=qd(null,e,r,t,i,n);var s=Kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(e),i.updater=ru,e.stateNode=i,i._reactInternals=e,Ih(e,r,t,n),e=kh(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Od(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=n1(r),t=Lt(r,t),i){case 0:e=Ah(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,Lt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),ng(t,e,r,i,n);case 3:e:{if(j_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h_(t,e),El(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(F(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(F(424)),e),e=rg(t,e,r,n,i);break e}else for(vt=Jn(e.stateNode.containerInfo.firstChild),wt=e,pe=!0,jt=null,n=u_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){e=kn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return d_(e),t===null&&wh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mh(r,i)?o=null:s!==null&&mh(r,s)&&(e.flags|=32),M_(t,e),it(t,e,o,n),e.child;case 6:return t===null&&wh(e),null;case 13:return F_(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),eg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(_l,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!dt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Eh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xi(e,n),i=bt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),tg(t,e,r,i,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Ka(t,e),e.tag=1,ft(r)?(t=!0,gl(e)):t=!1,xi(e,n),b_(e,r,i),Ih(e,r,i,n),kh(null,e,r,!0,t,n);case 19:return U_(t,e,n);case 22:return L_(t,e,n)}throw Error(F(156,e.tag))};function n0(t,e){return Pv(t,e)}function t1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new t1(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n1(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ya(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return Lr(n.children,i,s,e);case Ed:o=8,i|=8;break;case Kc:return t=Pt(12,n,e,i|2),t.elementType=Kc,t.lanes=s,t;case Gc:return t=Pt(13,n,e,i),t.elementType=Gc,t.lanes=s,t;case Qc:return t=Pt(19,n,e,i),t.elementType=Qc,t.lanes=s,t;case dv:return ou(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cv:o=10;break e;case hv:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case Mn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function ou(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=dv,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function r1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,i,s,o,l,u){return t=new r1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function i1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function r0(t){if(!t)return lr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ft(n))return r_(t,n,e)}return e}function i0(t,e,n,r,i,s,o,l,u){return t=sf(n,r,!0,t,i,s,o,l,u),t.context=r0(null),n=t.current,r=st(),i=tr(n),s=En(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,Vo(t,i,r),pt(t,r),t}function au(t,e,n,r){var i=e.current,s=st(),o=tr(i);return n=r0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(zt(t,i,o,s),Wa(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function s1(){return null}var s0=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}lu.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));au(t,e,null,null)};lu.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){au(null,t,null,null)}),e[Sn]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&jv(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function o1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pl(o);s.call(c)}}var o=i0(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[Sn]=o.current,uo(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Pl(u);l.call(c)}}var u=sf(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=u,t[Sn]=u.current,uo(t.nodeType===8?t.parentNode:t),Br(function(){au(e,u,n,r)}),u}function cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Pl(o);l.call(u)}}au(e,o,t,i)}else o=o1(n,e,t,i,r);return Pl(o)}Ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(kd(e,n|1),pt(e,Ae()),!(re&6)&&(Bi=Ae()+500,pr()))}break;case 13:Br(function(){var r=An(t,1);if(r!==null){var i=st();zt(r,t,1,i)}}),of(t,1)}};Rd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=st();zt(e,t,134217728,n)}of(t,134217728)}};Vv=function(t){if(t.tag===13){var e=tr(t),n=An(t,e);if(n!==null){var r=st();zt(n,t,e,r)}of(t,e)}};Lv=function(){return oe};Mv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};sh=function(t,e,n){switch(e){case"input":if(Jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eu(r);if(!i)throw Error(F(90));pv(r),Jc(r,i)}}}break;case"textarea":gv(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};Iv=ef;Sv=Br;var a1={usingClientEntryPoint:!1,Events:[Mo,vi,eu,Ev,Tv,ef]},Ps={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l1={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||s1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{Yl=xa.inject(l1),Yt=xa}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(F(200));return i1(t,e,null,n)};St.createRoot=function(t,e){if(!lf(t))throw Error(F(299));var n=!1,r="",i=s0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,uo(t.nodeType===8?t.parentNode:t),new af(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Br(t)};St.hydrate=function(t,e,n){if(!uu(e))throw Error(F(200));return cu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=s0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=i0(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lu(e)};St.render=function(t,e,n){if(!uu(e))throw Error(F(200));return cu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!uu(t))throw Error(F(40));return t._reactRootContainer?(Br(function(){cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};St.unstable_batchedUpdates=ef;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return cu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(t){console.error(t)}}o0(),ov.exports=St;var u1=ov.exports,a0,mg=u1;a0=mg.createRoot,mg.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const gg="popstate";function c1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return jh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xl(i)}return d1(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function l0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h1(){return Math.random().toString(36).substr(2,8)}function yg(t,e){return{usr:t.state,key:t.key,idx:e}}function jh(t,e,n,r){return n===void 0&&(n=null),_o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?es(e):e,{state:n,key:e&&e.key||r||h1()})}function xl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function d1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Kn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(_o({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Kn.Pop;let O=f(),I=O==null?null:O-c;c=O,u&&u({action:l,location:N.location,delta:I})}function m(O,I){l=Kn.Push;let y=jh(N.location,O,I);c=f()+1;let T=yg(y,c),b=N.createHref(y);try{o.pushState(T,"",b)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(b)}s&&u&&u({action:l,location:N.location,delta:1})}function S(O,I){l=Kn.Replace;let y=jh(N.location,O,I);c=f();let T=yg(y,c),b=N.createHref(y);o.replaceState(T,"",b),s&&u&&u({action:l,location:N.location,delta:0})}function R(O){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof O=="string"?O:xl(O);return y=y.replace(/ $/,"%20"),ke(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let N={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(gg,p),u=O,()=>{i.removeEventListener(gg,p),u=null}},createHref(O){return e(i,O)},createURL:R,encodeLocation(O){let I=R(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:S,go(O){return o.go(O)}};return N}var vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vg||(vg={}));function f1(t,e,n){return n===void 0&&(n="/"),p1(t,e,n)}function p1(t,e,n,r){let i=typeof e=="string"?es(e):e,s=uf(i.pathname||"/",n);if(s==null)return null;let o=u0(t);m1(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=R1(s);l=S1(o[u],c)}return l}function u0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=rr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),u0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:T1(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of c0(s.path))i(s,o,u)}),e}function c0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=c0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function m1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:I1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const g1=/^:[\w-]+$/,y1=3,v1=2,_1=1,w1=10,E1=-2,_g=t=>t==="*";function T1(t,e){let n=t.split("/"),r=n.length;return n.some(_g)&&(r+=E1),e&&(r+=v1),n.filter(i=>!_g(i)).reduce((i,s)=>i+(g1.test(s)?y1:s===""?_1:w1),r)}function I1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function S1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=A1({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:rr([s,p.pathname]),pathnameBase:N1(rr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=rr([s,p.pathnameBase]))}return o}function A1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=k1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const R=l[p];return S&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function k1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),l0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function R1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return l0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function uf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function C1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?es(t):t;return{pathname:n?n.startsWith("/")?n:P1(n,e):e,search:b1(r),hash:D1(i)}}function P1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cf(t,e){let n=x1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=es(t):(i=_o({},t),ke(!i.pathname||!i.pathname.includes("?"),xc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),xc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=C1(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),N1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function O1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const h0=["post","put","patch","delete"];new Set(h0);const V1=["get",...h0];new Set(V1);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(this,arguments)}const df=j.createContext(null),L1=j.createContext(null),mr=j.createContext(null),hu=j.createContext(null),gr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),d0=j.createContext(null);function M1(t,e){let{relative:n}=e===void 0?{}:e;ts()||ke(!1);let{basename:r,navigator:i}=j.useContext(mr),{hash:s,pathname:o,search:l}=p0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:rr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ts(){return j.useContext(hu)!=null}function ns(){return ts()||ke(!1),j.useContext(hu).location}function f0(t){j.useContext(mr).static||j.useLayoutEffect(t)}function du(){let{isDataRoute:t}=j.useContext(gr);return t?Y1():j1()}function j1(){ts()||ke(!1);let t=j.useContext(df),{basename:e,future:n,navigator:r}=j.useContext(mr),{matches:i}=j.useContext(gr),{pathname:s}=ns(),o=JSON.stringify(cf(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return f0(()=>{l.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=hf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:rr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function p0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(mr),{matches:i}=j.useContext(gr),{pathname:s}=ns(),o=JSON.stringify(cf(i,r.v7_relativeSplatPath));return j.useMemo(()=>hf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function F1(t,e){return U1(t,e)}function U1(t,e,n,r){ts()||ke(!1);let{navigator:i,static:s}=j.useContext(mr),{matches:o}=j.useContext(gr),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let f=ns(),p;if(e){var m;let I=typeof e=="string"?es(e):e;c==="/"||(m=I.pathname)!=null&&m.startsWith(c)||ke(!1),p=I}else p=f;let S=p.pathname||"/",R=S;if(c!=="/"){let I=c.replace(/^\//,"").split("/");R="/"+S.replace(/^\//,"").split("/").slice(I.length).join("/")}let N=f1(t,{pathname:R}),O=H1(N&&N.map(I=>Object.assign({},I,{params:Object.assign({},u,I.params),pathname:rr([c,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?c:rr([c,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),o,n,r);return e&&O?j.createElement(hu.Provider,{value:{location:wo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Kn.Pop}},O):O}function z1(){let t=Q1(),e=O1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const B1=j.createElement(z1,null);class $1 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(gr.Provider,{value:this.props.routeContext},j.createElement(d0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W1(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(df);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(gr.Provider,{value:e},r)}function H1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:S}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let S,R=!1,N=null,O=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||B1,u&&(c<0&&m===0?(X1("route-fallback"),R=!0,O=null):c===m&&(R=!0,O=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),y=()=>{let T;return S?T=N:R?T=O:p.route.Component?T=j.createElement(p.route.Component,null):p.route.element?T=p.route.element:T=f,j.createElement(W1,{match:p,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:T})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement($1,{location:n.location,revalidation:n.revalidation,component:N,error:S,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var m0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(m0||{}),g0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(g0||{});function q1(t){let e=j.useContext(df);return e||ke(!1),e}function K1(t){let e=j.useContext(L1);return e||ke(!1),e}function G1(t){let e=j.useContext(gr);return e||ke(!1),e}function y0(t){let e=G1(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function Q1(){var t;let e=j.useContext(d0),n=K1(),r=y0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Y1(){let{router:t}=q1(m0.UseNavigateStable),e=y0(g0.UseNavigateStable),n=j.useRef(!1);return f0(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,wo({fromRouteId:e},s)))},[t,e])}const wg={};function X1(t,e,n){wg[t]||(wg[t]=!0)}function J1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ui(t){let{to:e,replace:n,state:r,relative:i}=t;ts()||ke(!1);let{future:s,static:o}=j.useContext(mr),{matches:l}=j.useContext(gr),{pathname:u}=ns(),c=du(),f=hf(e,cf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return j.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Cr(t){ke(!1)}function Z1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1,future:l}=t;ts()&&ke(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:wo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=es(r));let{pathname:f="/",search:p="",hash:m="",state:S=null,key:R="default"}=r,N=j.useMemo(()=>{let O=uf(f,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:S,key:R},navigationType:i}},[u,f,p,m,S,R,i]);return N==null?null:j.createElement(mr.Provider,{value:c},j.createElement(hu.Provider,{children:n,value:N}))}function eA(t){let{children:e,location:n}=t;return F1(Fh(e),n)}new Promise(()=>{});function Fh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Fh(r.props.children,s));return}r.type!==Cr&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uh.apply(this,arguments)}function tA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rA(t,e){return t.button===0&&(!e||e==="_self")&&!nA(t)}const iA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sA="6";try{window.__reactRouterVersion=sA}catch{}const oA="startTransition",Eg=JT[oA];function aA(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=c1({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=j.useCallback(p=>{c&&Eg?Eg(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>J1(r),[r]),j.createElement(Z1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const lA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=tA(e,iA),{basename:S}=j.useContext(mr),R,N=!1;if(typeof c=="string"&&uA.test(c)&&(R=c,lA))try{let T=new URL(window.location.href),b=c.startsWith("//")?new URL(T.protocol+c):new URL(c),V=uf(b.pathname,S);b.origin===T.origin&&V!=null?c=V+b.search+b.hash:N=!0}catch{}let O=M1(c,{relative:i}),I=cA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function y(T){r&&r(T),T.defaultPrevented||I(T)}return j.createElement("a",Uh({},m,{href:R||O,onClick:N||s?r:y,ref:n,target:u}))});var Tg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Tg||(Tg={}));var Ig;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ig||(Ig={}));function cA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=du(),c=ns(),f=p0(t,{relative:o});return j.useCallback(p=>{if(rA(p,n)){p.preventDefault();let m=r!==void 0?r:xl(c)===xl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}const hA={},Sg=t=>{let e;const n=new Set,r=(f,p)=>{const m=typeof f=="function"?f(e):f;if(!Object.is(m,e)){const S=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(R=>R(e,S))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(hA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},dA=t=>t?Sg(t):Sg;var v0={exports:{}},_0={},w0={exports:{}},E0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=j;function fA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pA=typeof Object.is=="function"?Object.is:fA,mA=$i.useState,gA=$i.useEffect,yA=$i.useLayoutEffect,vA=$i.useDebugValue;function _A(t,e){var n=e(),r=mA({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return yA(function(){i.value=n,i.getSnapshot=e,Nc(i)&&s({inst:i})},[t,n,e]),gA(function(){return Nc(i)&&s({inst:i}),t(function(){Nc(i)&&s({inst:i})})},[t]),vA(n),n}function Nc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pA(t,n)}catch{return!0}}function wA(t,e){return e()}var EA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?wA:_A;E0.useSyncExternalStore=$i.useSyncExternalStore!==void 0?$i.useSyncExternalStore:EA;w0.exports=E0;var TA=w0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=j,IA=TA;function SA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var AA=typeof Object.is=="function"?Object.is:SA,kA=IA.useSyncExternalStore,RA=fu.useRef,CA=fu.useEffect,PA=fu.useMemo,xA=fu.useDebugValue;_0.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=RA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=PA(function(){function u(S){if(!c){if(c=!0,f=S,S=r(S),i!==void 0&&o.hasValue){var R=o.value;if(i(R,S))return p=R}return p=S}if(R=p,AA(f,S))return R;var N=r(S);return i!==void 0&&i(R,N)?(f=S,R):(f=S,p=N)}var c=!1,f,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var l=kA(t,s[0],s[1]);return CA(function(){o.hasValue=!0,o.value=l},[l]),xA(l),l};v0.exports=_0;var NA=v0.exports;const bA=Gy(NA),T0={},{useDebugValue:DA}=yd,{useSyncExternalStoreWithSelector:OA}=bA;let Ag=!1;const VA=t=>t;function LA(t,e=VA,n){(T0?"production":void 0)!=="production"&&n&&!Ag&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ag=!0);const r=OA(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return DA(r),r}const kg=t=>{(T0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?dA(t):t,n=(r,i)=>LA(e,r,i);return Object.assign(n,e),n},MA=t=>t?kg(t):kg;var Rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new FA;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UA=function(t){const e=I0(t);return S0.encodeByteArray(e,!0)},Nl=function(t){return UA(t).replace(/\./g,"")},A0=function(t){try{return S0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=()=>zA().__FIREBASE_DEFAULTS__,$A=()=>{if(typeof process>"u"||typeof Rg>"u")return;const t=Rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A0(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return BA()||$A()||WA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k0=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HA=t=>{const e=k0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R0=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},C0=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function QA(){var t;const e=(t=pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function P0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JA(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZA(){return!QA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x0(){try{return typeof indexedDB=="object"}catch{return!1}}function N0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ek(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tk,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,l,r)}}function nk(t,e){return t.replace(rk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rk=/\{\$([^}]+)}/g;function ik(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cg(s)&&Cg(o)){if(!Eo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sk(t,e){const n=new ok(t,e);return n.subscribe.bind(n)}class ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ak(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=1e3,uk=2,ck=4*60*60*1e3,hk=.5;function Pg(t,e=lk,n=uk){const r=e*Math.pow(n,t),i=Math.round(hk*r*(Math.random()-.5)*2);return Math.min(ck,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pk(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fk(t){return t===Pr?void 0:t}function pk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const gk={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},yk=te.INFO,vk={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},_k=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=vk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mu{constructor(e){this.name=e,this._logLevel=yk,this._logHandler=_k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const wk=(t,e)=>e.some(n=>t instanceof n);let xg,Ng;function Ek(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tk(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b0=new WeakMap,zh=new WeakMap,D0=new WeakMap,Dc=new WeakMap,ff=new WeakMap;function Ik(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b0.set(n,t)}).catch(()=>{}),ff.set(e,t),e}function Sk(t){if(zh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zh.set(t,e)}let Bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ak(t){Bh=t(Bh)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return D0.set(r,e.sort?e.sort():[e]),ir(r)}:Tk().includes(t)?function(...e){return t.apply(Oc(this),e),ir(b0.get(this))}:function(...e){return ir(t.apply(Oc(this),e))}}function Rk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Sk(t),wk(t,Ek())?new Proxy(t,Bh):t)}function ir(t){if(t instanceof IDBRequest)return Ik(t);if(Dc.has(t))return Dc.get(t);const e=Rk(t);return e!==t&&(Dc.set(t,e),ff.set(e,t)),e}const Oc=t=>ff.get(t);function O0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ir(o.result),u.oldVersion,u.newVersion,ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ck=["get","getKey","getAll","getAllKeys","count"],Pk=["put","add","delete","clear"],Vc=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ck.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Vc.set(e,s),s}Ak(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",Dg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new mu("@firebase/app"),bk="@firebase/app-compat",Dk="@firebase/analytics-compat",Ok="@firebase/analytics",Vk="@firebase/app-check-compat",Lk="@firebase/app-check",Mk="@firebase/auth",jk="@firebase/auth-compat",Fk="@firebase/database",Uk="@firebase/data-connect",zk="@firebase/database-compat",Bk="@firebase/functions",$k="@firebase/functions-compat",Wk="@firebase/installations",Hk="@firebase/installations-compat",qk="@firebase/messaging",Kk="@firebase/messaging-compat",Gk="@firebase/performance",Qk="@firebase/performance-compat",Yk="@firebase/remote-config",Xk="@firebase/remote-config-compat",Jk="@firebase/storage",Zk="@firebase/storage-compat",eR="@firebase/firestore",tR="@firebase/vertexai-preview",nR="@firebase/firestore-compat",rR="firebase",iR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="[DEFAULT]",sR={[$h]:"fire-core",[bk]:"fire-core-compat",[Ok]:"fire-analytics",[Dk]:"fire-analytics-compat",[Lk]:"fire-app-check",[Vk]:"fire-app-check-compat",[Mk]:"fire-auth",[jk]:"fire-auth-compat",[Fk]:"fire-rtdb",[Uk]:"fire-data-connect",[zk]:"fire-rtdb-compat",[Bk]:"fire-fn",[$k]:"fire-fn-compat",[Wk]:"fire-iid",[Hk]:"fire-iid-compat",[qk]:"fire-fcm",[Kk]:"fire-fcm-compat",[Gk]:"fire-perf",[Qk]:"fire-perf-compat",[Yk]:"fire-rc",[Xk]:"fire-rc-compat",[Jk]:"fire-gcs",[Zk]:"fire-gcs-compat",[eR]:"fire-fst",[nR]:"fire-fst-compat",[tR]:"fire-vertex","fire-js":"fire-js",[rR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new Map,oR=new Map,Hh=new Map;function Og(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(Hh.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of bl.values())Og(n,t);for(const n of oR.values())Og(n,t);return!0}function ei(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Zr("app","Firebase",aR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=iR;function V0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=R0()),!n)throw sr.create("no-options");const s=bl.get(i);if(s){if(Eo(n,s.options)&&Eo(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new mk(i);for(const u of Hh.values())o.addComponent(u);const l=new lR(n,r,o);return bl.set(i,l),l}function pf(t=Wh){const e=bl.get(t);if(!e&&t===Wh&&R0())return V0();if(!e)throw sr.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let i=(r=sR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(l.join(" "));return}rn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="firebase-heartbeat-database",cR=1,To="firebase-heartbeat-store";let Lc=null;function L0(){return Lc||(Lc=O0(uR,cR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function hR(t){try{const n=(await L0()).transaction(To),r=await n.objectStore(To).get(M0(t));return await n.done,r}catch(e){if(e instanceof Ht)Rn.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function Vg(t,e){try{const r=(await L0()).transaction(To,"readwrite");await r.objectStore(To).put(e,M0(t)),await r.done}catch(n){if(n instanceof Ht)Rn.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function M0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=1024,fR=30*24*60*60*1e3;class pR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lg(),{heartbeatsToSend:r,unsentEntries:i}=mR(this._heartbeatsCache.heartbeats),s=Nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rn.warn(n),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function mR(t,e=dR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x0()?N0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){rn(new $t("platform-logger",e=>new xk(e),"PRIVATE")),rn(new $t("heartbeat",e=>new pR(e),"PRIVATE")),Nt($h,Dg,t),Nt($h,Dg,"esm2017"),Nt("fire-js","")}yR("");function mf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function j0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vR=j0,F0=new Zr("auth","Firebase",j0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new mu("@firebase/auth");function _R(t,...e){Dl.logLevel<=te.WARN&&Dl.warn(`Auth (${rs}): ${t}`,...e)}function Xa(t,...e){Dl.logLevel<=te.ERROR&&Dl.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw gf(t,...e)}function Jt(t,...e){return gf(t,...e)}function U0(t,e,n){const r=Object.assign(Object.assign({},vR()),{[e]:n});return new Zr("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return U0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return F0.create(t,...e)}function K(t,e,...n){if(!t)throw gf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function Cn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wR(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wR()||P0()||"connection"in navigator)?navigator.onLine:!0}function TR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=GA()||XA()}get(){return ER()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Uo(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,i={}){return B0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Fo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return YA()||(c.referrerPolicy="no-referrer"),z0.fetch()($0(t,t.config.apiHost,n,l),c)})}async function B0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IR),e);try{const i=new kR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw U0(t,f,c);Wt(t,f)}}catch(i){if(i instanceof Ht)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function zo(t,e,n,r,i={}){const s=await vr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yf(t.config,i):`${t.config.apiScheme}://${i}`}function AR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),SR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class RR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CR(t,e){return vr(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function W0(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xR(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=vf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(Mc(i.auth_time)),issuedAtTime:Qs(Mc(i.iat)),expirationTime:Qs(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=A0(n);return i?JSON.parse(i):(Xa("Failed to decode base64 JWT payload"),null)}catch(i){return Xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(t){const e=vf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&NR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Io(t,W0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?H0(s.providerUserInfo):[],l=OR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function DR(t){const e=Le(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H0(t){return t.map(e=>{var{providerId:n}=e,r=mf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){const n=await B0(t,{},async()=>{const r=Fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",z0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LR(t,e){return vr(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Io(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xR(this,e)}reload(){return DR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Io(this,PR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:b,isAnonymous:V,providerData:U,stsTokenManager:w}=n;K(T&&w,e,"internal-error");const v=bi.fromJSON(this.name,w);K(typeof T=="string",e,"internal-error"),Ln(p,e.name),Ln(m,e.name),K(typeof b=="boolean",e,"internal-error"),K(typeof V=="boolean",e,"internal-error"),Ln(S,e.name),Ln(R,e.name),Ln(N,e.name),Ln(O,e.name),Ln(I,e.name),Ln(y,e.name);const E=new _n({uid:T,auth:e,email:m,emailVerified:b,displayName:p,isAnonymous:V,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:v,createdAt:I,lastLoginAt:y});return U&&Array.isArray(U)&&(E.providerData=U.map(A=>Object.assign({},A))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?H0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bi;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function wn(t){Cn(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q0.type="NONE";const Bg=q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(wn(Bg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||wn(Bg);const o=Ja(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=_n._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Di(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J0(e))return"Blackberry";if(Z0(e))return"Webos";if(G0(e))return"Safari";if((e.includes("chrome/")||Q0(e))&&!e.includes("edge/"))return"Chrome";if(X0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function K0(t=tt()){return/firefox\//i.test(t)}function G0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q0(t=tt()){return/crios\//i.test(t)}function Y0(t=tt()){return/iemobile/i.test(t)}function X0(t=tt()){return/android/i.test(t)}function J0(t=tt()){return/blackberry/i.test(t)}function Z0(t=tt()){return/webos/i.test(t)}function _f(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MR(t=tt()){var e;return _f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jR(){return JA()&&document.documentMode===10}function ew(t=tt()){return _f(t)||X0(t)||Z0(t)||J0(t)||/windows phone/i.test(t)||Y0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e=[]){let n;switch(t){case"Browser":n=$g(tt());break;case"Worker":n=`${$g(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e={}){return vr(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=6;class BR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new FR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await W0(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(Tn(this));const n=e?Le(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UR(this),n=new BR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_R(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return Le(t)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sk(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WR(t){gu=t}function nw(t){return gu.loadJS(t)}function HR(){return gu.recaptchaEnterpriseScript}function qR(){return gu.gapiScript}function KR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GR="recaptcha-enterprise",QR="NO_RECAPTCHA";class YR{constructor(e){this.type=GR,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{CR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new RR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(QR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=HR();u.length!==0&&(u+=l),nw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Hg(t,e,n,r=!1){const i=new YR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Gh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e){const n=ei(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eo(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function JR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZR(t,e,n){const r=ti(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rw(e),{host:o,port:l}=eC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tC()}function rw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eC(t){const e=rw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qg(o)}}}function qg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function nC(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return zo(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function sC(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends wf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new So(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new So(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gh(e,n,"signInWithPassword",rC);case"emailLink":return iC(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gh(e,r,"signUpPassword",nC);case"emailLink":return sC(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e){return zo(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="http://localhost";class $r extends wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oi(e,n)}buildRequest(){const e={requestUri:oC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lC(t){const e=Vs(Ls(t)).link,n=e?Vs(Ls(e)).deep_link_id:null,r=Vs(Ls(t)).deep_link_id;return(r?Vs(Ls(r)).link:null)||r||n||e||t}class Ef{constructor(e){var n,r,i,s,o,l;const u=Vs(Ls(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=aC((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=lC(e);try{return new Ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return So._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ef.parseLink(n);return K(r,"argument-error"),So._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends iw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Bo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Bo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Bo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return zo(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=Kg(r);return new Wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kg(r);return new Wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vl(e,n,r,i)}}function sw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(t,s,e,r):s})}async function cC(t,e,n=!1){const r=await Io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const s=await Io(t,sw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=vf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Wr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t,e,n=!1){if(Qt(t.app))return Promise.reject(Tn(t));const r="signIn",i=await sw(t,r,e),s=await Wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dC(t,e){return ow(ti(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fC(t,e,n){if(Qt(t.app))return Promise.reject(Tn(t));const r=ti(t),o=await Gh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&aw(t),u}),l=await Wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function pC(t,e,n){return Qt(t.app)?Promise.reject(Tn(t)):dC(Le(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aw(t),r})}function mC(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function gC(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function yC(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function vC(t){return Le(t).signOut()}const Ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=1e3,wC=10;class uw extends lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uw.type="LOCAL";const EC=uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cw.type="SESSION";const hw=cw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await TC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Tf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function SC(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function AC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RC(){return dw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebaseLocalStorageDb",CC=1,Ml="firebaseLocalStorage",pw="fbase_key";class $o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function PC(){const t=indexedDB.deleteDatabase(fw);return new $o(t).toPromise()}function Qh(){const t=indexedDB.open(fw,CC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await PC(),e(await Qh()))})})}async function Gg(t,e,n){const r=vu(t,!0).put({[pw]:e,value:n});return new $o(r).toPromise()}async function xC(t,e){const n=vu(t,!1).get(e),r=await new $o(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=vu(t,!0).delete(e);return new $o(n).toPromise()}const NC=800,bC=3;class mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yu._getInstance(RC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AC(),!this.activeServiceWorker)return;this.sender=new IC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await Gg(e,Ll,"1"),await Qg(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vu(i,!1).getAll();return new $o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mw.type="LOCAL";const DC=mw;new Uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){return e?wn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VC(t){return ow(t.auth,new If(t),t.bypassAuthState)}function LC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),hC(n,new If(t),t.bypassAuthState)}async function MC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),cC(n,new If(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return MC;case"reauthViaPopup":case"reauthViaRedirect":return LC;default:Wt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new Uo(2e3,1e4);class Ai extends gw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jC.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="pendingRedirect",Za=new Map;class UC extends gw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await zC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zC(t,e){const n=WC(e),r=$C(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BC(t,e){Za.set(t._key(),e)}function $C(t){return wn(t._redirectPersistence)}function WC(t){return Ja(FC,t.config.apiKey,t.name)}async function HC(t,e,n=!1){if(Qt(t.app))return Promise.reject(Tn(t));const r=ti(t),i=OC(r,e),o=await new UC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=10*60*1e3;class KC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XC=/^https?/;async function JC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QC(t);for(const n of e)try{if(ZC(n))return}catch{}Wt(t,"unauthorized-domain")}function ZC(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XC.test(n))return!1;if(YC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new Uo(3e4,6e4);function Xg(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tP(t){return new Promise((e,n)=>{var r,i,s;function o(){Xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xg(),n(Jt(t,"network-request-failed"))},timeout:eP.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zt().gapi)===null||s===void 0)&&s.load)o();else{const l=KR("iframefcb");return Zt()[l]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},nw(`${qR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw el=null,e})}let el=null;function nP(t){return el=el||tP(t),el}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Uo(5e3,15e3),iP="__/auth/iframe",sP="emulator/auth/iframe",oP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yf(e,sP):`https://${t.config.authDomain}/${iP}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=aP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fo(r).slice(1)}`}async function uP(t){const e=await nP(t),n=Zt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:lP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),l=Zt().setTimeout(()=>{s(o)},rP.get());function u(){Zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hP=500,dP=600,fP="_blank",pP="http://localhost";class Jg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mP(t,e,n,r=hP,i=dP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},cP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=tt().toLowerCase();n&&(l=Q0(c)?fP:n),K0(c)&&(e=e||pP,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(MR(c)&&l!=="_self")return gP(e||"",l),new Jg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Jg(p)}function gP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="__/auth/handler",vP="emulator/auth/handler",_P=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof iw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ik(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Bo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${_P}=${encodeURIComponent(u)}`:"";return`${wP(t)}?${Fo(l).slice(1)}${c}`}function wP({config:t}){return t.emulator?yf(t,vP):`https://${t.authDomain}/${yP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hw,this._completeRedirectFn=HC,this._overrideRedirectResult=BC}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zg(e,n,r,qh(),i);return mP(e,o,Tf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,qh(),i);return SC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uP(e),r=new KC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ew()||G0()||_f()}}const TP=EP;var ey="@firebase/auth",ty="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AP(t){rn(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tw(t)},c=new $R(r,i,s,u);return JR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rn(new $t("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new IP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(ey,ty,SP(t)),Nt(ey,ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=5*60,RP=C0("authIdTokenMaxAge")||kP;let ny=null;const CP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RP)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PP(t=pf()){const e=ei(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XR(t,{popupRedirectResolver:TP,persistence:[DC,EC,hw]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=CP(s.toString());gC(n,o,()=>o(n.currentUser)),mC(n,l=>o(l))}}const i=k0("auth");return i&&ZR(n,`http://${i}`),n}function xP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AP("Browser");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,vw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.D=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(A,C,x){for(var k=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)k[kt-2]=arguments[kt];return v.prototype[C].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,E){E||(E=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(C=0;16>C;++C)A[C]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],C=w.g[2];var x=w.g[3],k=v+(x^E&(C^x))+A[0]+3614090360&4294967295;v=E+(k<<7&4294967295|k>>>25),k=x+(C^v&(E^C))+A[1]+3905402710&4294967295,x=v+(k<<12&4294967295|k>>>20),k=C+(E^x&(v^E))+A[2]+606105819&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(v^C&(x^v))+A[3]+3250441966&4294967295,E=C+(k<<22&4294967295|k>>>10),k=v+(x^E&(C^x))+A[4]+4118548399&4294967295,v=E+(k<<7&4294967295|k>>>25),k=x+(C^v&(E^C))+A[5]+1200080426&4294967295,x=v+(k<<12&4294967295|k>>>20),k=C+(E^x&(v^E))+A[6]+2821735955&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(v^C&(x^v))+A[7]+4249261313&4294967295,E=C+(k<<22&4294967295|k>>>10),k=v+(x^E&(C^x))+A[8]+1770035416&4294967295,v=E+(k<<7&4294967295|k>>>25),k=x+(C^v&(E^C))+A[9]+2336552879&4294967295,x=v+(k<<12&4294967295|k>>>20),k=C+(E^x&(v^E))+A[10]+4294925233&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(v^C&(x^v))+A[11]+2304563134&4294967295,E=C+(k<<22&4294967295|k>>>10),k=v+(x^E&(C^x))+A[12]+1804603682&4294967295,v=E+(k<<7&4294967295|k>>>25),k=x+(C^v&(E^C))+A[13]+4254626195&4294967295,x=v+(k<<12&4294967295|k>>>20),k=C+(E^x&(v^E))+A[14]+2792965006&4294967295,C=x+(k<<17&4294967295|k>>>15),k=E+(v^C&(x^v))+A[15]+1236535329&4294967295,E=C+(k<<22&4294967295|k>>>10),k=v+(C^x&(E^C))+A[1]+4129170786&4294967295,v=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(v^E))+A[6]+3225465664&4294967295,x=v+(k<<9&4294967295|k>>>23),k=C+(v^E&(x^v))+A[11]+643717713&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^v&(C^x))+A[0]+3921069994&4294967295,E=C+(k<<20&4294967295|k>>>12),k=v+(C^x&(E^C))+A[5]+3593408605&4294967295,v=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(v^E))+A[10]+38016083&4294967295,x=v+(k<<9&4294967295|k>>>23),k=C+(v^E&(x^v))+A[15]+3634488961&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^v&(C^x))+A[4]+3889429448&4294967295,E=C+(k<<20&4294967295|k>>>12),k=v+(C^x&(E^C))+A[9]+568446438&4294967295,v=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(v^E))+A[14]+3275163606&4294967295,x=v+(k<<9&4294967295|k>>>23),k=C+(v^E&(x^v))+A[3]+4107603335&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^v&(C^x))+A[8]+1163531501&4294967295,E=C+(k<<20&4294967295|k>>>12),k=v+(C^x&(E^C))+A[13]+2850285829&4294967295,v=E+(k<<5&4294967295|k>>>27),k=x+(E^C&(v^E))+A[2]+4243563512&4294967295,x=v+(k<<9&4294967295|k>>>23),k=C+(v^E&(x^v))+A[7]+1735328473&4294967295,C=x+(k<<14&4294967295|k>>>18),k=E+(x^v&(C^x))+A[12]+2368359562&4294967295,E=C+(k<<20&4294967295|k>>>12),k=v+(E^C^x)+A[5]+4294588738&4294967295,v=E+(k<<4&4294967295|k>>>28),k=x+(v^E^C)+A[8]+2272392833&4294967295,x=v+(k<<11&4294967295|k>>>21),k=C+(x^v^E)+A[11]+1839030562&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^v)+A[14]+4259657740&4294967295,E=C+(k<<23&4294967295|k>>>9),k=v+(E^C^x)+A[1]+2763975236&4294967295,v=E+(k<<4&4294967295|k>>>28),k=x+(v^E^C)+A[4]+1272893353&4294967295,x=v+(k<<11&4294967295|k>>>21),k=C+(x^v^E)+A[7]+4139469664&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^v)+A[10]+3200236656&4294967295,E=C+(k<<23&4294967295|k>>>9),k=v+(E^C^x)+A[13]+681279174&4294967295,v=E+(k<<4&4294967295|k>>>28),k=x+(v^E^C)+A[0]+3936430074&4294967295,x=v+(k<<11&4294967295|k>>>21),k=C+(x^v^E)+A[3]+3572445317&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^v)+A[6]+76029189&4294967295,E=C+(k<<23&4294967295|k>>>9),k=v+(E^C^x)+A[9]+3654602809&4294967295,v=E+(k<<4&4294967295|k>>>28),k=x+(v^E^C)+A[12]+3873151461&4294967295,x=v+(k<<11&4294967295|k>>>21),k=C+(x^v^E)+A[15]+530742520&4294967295,C=x+(k<<16&4294967295|k>>>16),k=E+(C^x^v)+A[2]+3299628645&4294967295,E=C+(k<<23&4294967295|k>>>9),k=v+(C^(E|~x))+A[0]+4096336452&4294967295,v=E+(k<<6&4294967295|k>>>26),k=x+(E^(v|~C))+A[7]+1126891415&4294967295,x=v+(k<<10&4294967295|k>>>22),k=C+(v^(x|~E))+A[14]+2878612391&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~v))+A[5]+4237533241&4294967295,E=C+(k<<21&4294967295|k>>>11),k=v+(C^(E|~x))+A[12]+1700485571&4294967295,v=E+(k<<6&4294967295|k>>>26),k=x+(E^(v|~C))+A[3]+2399980690&4294967295,x=v+(k<<10&4294967295|k>>>22),k=C+(v^(x|~E))+A[10]+4293915773&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~v))+A[1]+2240044497&4294967295,E=C+(k<<21&4294967295|k>>>11),k=v+(C^(E|~x))+A[8]+1873313359&4294967295,v=E+(k<<6&4294967295|k>>>26),k=x+(E^(v|~C))+A[15]+4264355552&4294967295,x=v+(k<<10&4294967295|k>>>22),k=C+(v^(x|~E))+A[6]+2734768916&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~v))+A[13]+1309151649&4294967295,E=C+(k<<21&4294967295|k>>>11),k=v+(C^(E|~x))+A[4]+4149444226&4294967295,v=E+(k<<6&4294967295|k>>>26),k=x+(E^(v|~C))+A[11]+3174756917&4294967295,x=v+(k<<10&4294967295|k>>>22),k=C+(v^(x|~E))+A[2]+718787259&4294967295,C=x+(k<<15&4294967295|k>>>17),k=E+(x^(C|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var E=v-this.blockSize,A=this.B,C=this.h,x=0;x<v;){if(C==0)for(;x<=E;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<v;)if(A[C++]=w.charCodeAt(x++),C==this.blockSize){i(this,A),C=0;break}}else for(;x<v;)if(A[C++]=w[x++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var E=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=E&255,E/=256;for(this.u(w),w=Array(16),v=E=0;4>v;++v)for(var A=0;32>A;A+=8)w[E++]=this.g[v]>>>A&255;return w};function s(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;for(var E=[],A=!0,C=w.length-1;0<=C;C--){var x=w[C]|0;A&&x==v||(E[C]=x,A=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(c(-w));for(var v=[],E=1,A=0;w>=E;A++)v[A]=w/E|0,E*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return O(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),A=p,C=0;C<w.length;C+=8){var x=Math.min(8,w.length-C),k=parseInt(w.substring(C,C+x),v);8>x?(x=c(Math.pow(v,x)),A=A.j(x).add(c(k))):(A=A.j(E),A=A.add(c(k)))}return A}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var w=0,v=1,E=0;E<this.g.length;E++){var A=this.i(E);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(N(this))return"-"+O(this).toString(w);for(var v=c(Math.pow(w,6)),E=this,A="";;){var C=b(E,v).g;E=I(E,C.j(v));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=C,R(E))return x+A;for(;6>x.length;)x="0"+x;A=x+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=I(this,w),N(w)?-1:R(w)?0:1};function O(w){for(var v=w.g.length,E=[],A=0;A<v;A++)E[A]=~w.g[A];return new o(E,~w.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0,C=0;C<=v;C++){var x=A+(this.i(C)&65535)+(w.i(C)&65535),k=(x>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);A=k>>>16,x&=65535,k&=65535,E[C]=k<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(w,v){return w.add(O(v))}t.j=function(w){if(R(this)||R(w))return p;if(N(this))return N(w)?O(this).j(O(w)):O(O(this).j(w));if(N(w))return O(this.j(O(w)));if(0>this.l(S)&&0>w.l(S))return c(this.m()*w.m());for(var v=this.g.length+w.g.length,E=[],A=0;A<2*v;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<w.g.length;C++){var x=this.i(A)>>>16,k=this.i(A)&65535,kt=w.i(C)>>>16,wr=w.i(C)&65535;E[2*A+2*C]+=k*wr,y(E,2*A+2*C),E[2*A+2*C+1]+=x*wr,y(E,2*A+2*C+1),E[2*A+2*C+1]+=k*kt,y(E,2*A+2*C+1),E[2*A+2*C+2]+=x*kt,y(E,2*A+2*C+2)}for(A=0;A<v;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=v;A<2*v;A++)E[A]=0;return new o(E,0)};function y(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function T(w,v){this.g=w,this.h=v}function b(w,v){if(R(v))throw Error("division by zero");if(R(w))return new T(p,p);if(N(w))return v=b(O(w),v),new T(O(v.g),O(v.h));if(N(v))return v=b(w,O(v)),new T(O(v.g),v.h);if(30<w.g.length){if(N(w)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=v;0>=A.l(w);)E=V(E),A=V(A);var C=U(E,1),x=U(A,1);for(A=U(A,2),E=U(E,2);!R(A);){var k=x.add(A);0>=k.l(w)&&(C=C.add(E),x=k),A=U(A,1),E=U(E,1)}return v=I(w,C.j(v)),new T(C,v)}for(C=p;0<=w.l(v);){for(E=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),x=c(E),k=x.j(v);N(k)||0<k.l(w);)E-=A,x=c(E),k=x.j(v);R(x)&&(x=m),C=C.add(x),w=I(w,k)}return new T(C,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)&w.i(A);return new o(E,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)|w.i(A);return new o(E,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)^w.i(A);return new o(E,this.h^w.h)};function V(w){for(var v=w.g.length+1,E=[],A=0;A<v;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(E,w.h)}function U(w,v){var E=v>>5;v%=32;for(var A=w.g.length-E,C=[],x=0;x<A;x++)C[x]=0<v?w.i(x+E)>>>v|w.i(x+E+1)<<32-v:w.i(x+E);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Mr=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _w,Ms,ww,tl,Yh,Ew,Tw,Iw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var z=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)z[ue-2]=arguments[ue];return h.prototype[P].apply(g,z)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let z=0;z<D;z++)a[P+z]=g[z]}else a.push(g)}}class I{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function T(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var V=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function U(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function k(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class kt{constructor(){this.h=this.g=null}add(h,d){const g=wr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var wr=new I(()=>new ls,a=>a.reset());class ls{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let an,B=!1,G=new kt,J=()=>{const a=l.Promise.resolve(void 0);an=()=>{a.then(me)}};var me=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){x(d)}var h=wr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function un(a,h){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{b(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}R(un,Ie);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),sT=0;function oT(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++sT,this.da=this.fa=!1}function Yo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xo(a){this.src=a,this.g={},this.h=0}Xo.prototype.add=function(a,h,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Lu(a,h,g,P);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new oT(h,this.src,D,!!g,P),h.fa=d,a.push(h)),h};function Vu(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Yo(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Lu(a,h,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return P}return-1}var Mu="closure_lm_"+(1e6*Math.random()|0),ju={};function lp(a,h,d,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)lp(a,h[D],d,g,P);return null}return d=hp(d),a&&a[hn]?a.K(h,d,c(g)?!!g.capture:!1,P):aT(a,h,d,!1,g,P)}function aT(a,h,d,g,P,D){if(!h)throw Error("Invalid event type");var z=c(P)?!!P.capture:!!P,ue=Uu(a);if(ue||(a[Mu]=ue=new Xo(a)),d=ue.add(h,d,g,z,D),d.proxy)return d;if(g=lT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ln||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(cp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function lT(){function a(d){return h.call(a.src,a.listener,d)}const h=uT;return a}function up(a,h,d,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)up(a,h[D],d,g,P);else g=c(g)?!!g.capture:!!g,d=hp(d),a&&a[hn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=Lu(D,d,g,P),-1<d&&(Yo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Uu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Lu(h,d,g,P)),(d=-1<a?h[a]:null)&&Fu(d))}function Fu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[hn])Vu(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(cp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Uu(h))?(Vu(d,a),d.h==0&&(d.src=null,h[Mu]=null)):Yo(a)}}}function cp(a){return a in ju?ju[a]:ju[a]="on"+a}function uT(a,h){if(a.da)a=!0;else{h=new un(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&Fu(a),a=d.call(g,h)}return a}function Uu(a){return a=a[Mu],a instanceof Xo?a:null}var zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function hp(a){return typeof a=="function"?a:(a[zu]||(a[zu]=function(h){return a.handleEvent(h)}),a[zu])}function He(){le.call(this),this.i=new Xo(this),this.M=this,this.F=null}R(He,le),He.prototype[hn]=!0,He.prototype.removeEventListener=function(a,h,d,g){up(this,a,h,d,g)};function nt(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ie(h,a);else if(h instanceof Ie)h.target=h.target||a;else{var P=h;h=new Ie(g,a),A(h,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var z=h.g=d[D];P=Jo(z,g,!0,h)&&P}if(z=h.g=a,P=Jo(z,g,!0,h)&&P,P=Jo(z,g,!1,h)&&P,d)for(D=0;D<d.length;D++)z=h.g=d[D],P=Jo(z,g,!1,h)&&P}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)Yo(d[g]);delete a.g[h],a.h--}}this.F=null},He.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},He.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Jo(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==d){var ue=z.listener,Me=z.ha||z.src;z.fa&&Vu(a.i,z),P=ue.call(Me,g)!==!1&&P}}return P&&!g.defaultPrevented}function dp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function fp(a){a.g=dp(()=>{a.g=null,a.i&&(a.i=!1,fp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class cT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:fp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){le.call(this),this.h=a,this.g={}}R(us,le);var pp=[];function mp(a){U(a.g,function(h,d){this.g.hasOwnProperty(d)&&Fu(h)},a),a.g={}}us.prototype.N=function(){us.aa.N.call(this),mp(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bu=l.JSON.stringify,hT=l.JSON.parse,dT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function $u(){}$u.prototype.h=null;function gp(a){return a.h||(a.h=a.i())}function yp(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wu(){Ie.call(this,"d")}R(Wu,Ie);function Hu(){Ie.call(this,"c")}R(Hu,Ie);var Er={},vp=null;function Zo(){return vp=vp||new He}Er.La="serverreachability";function _p(a){Ie.call(this,Er.La,a)}R(_p,Ie);function hs(a){const h=Zo();nt(h,new _p(h))}Er.STAT_EVENT="statevent";function wp(a,h){Ie.call(this,Er.STAT_EVENT,a),this.stat=h}R(wp,Ie);function rt(a){const h=Zo();nt(h,new wp(h,a))}Er.Ma="timingevent";function Ep(a,h){Ie.call(this,Er.Ma,a),this.size=h}R(Ep,Ie);function ds(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function fT(a,h,d,g,P,D){a.info(function(){if(a.g)if(D)for(var z="",ue=D.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var qe=ie[0];ie=ie[1];var Ke=qe.split("_");z=2<=Ke.length&&Ke[1]=="type"?z+(qe+"="+ie+"&"):z+(qe+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+z})}function pT(a,h,d,g,P,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+D+" "+z})}function ii(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+gT(a,d)+(g?" "+g:"")})}function mT(a,h){a.info(function(){return"TIMEOUT: "+h})}fs.prototype.info=function(){};function gT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Bu(d)}catch{return h}}var ea={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qu;function ta(){}R(ta,$u),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},qu=new ta;function bn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var Sp={},Ku={};function Gu(a,h,d){a.L=1,a.v=sa(dn(h)),a.m=d,a.P=!0,Ap(a,null)}function Ap(a,h){a.F=Date.now(),na(a),a.A=dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Fp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ip,a.g=rm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new cT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(pp[0]=P.toString()),P=pp);for(var D=0;D<P.length;D++){var z=lp(d,P[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),hs(),fT(a.i,a.u,a.A,a.l,a.R,a.m)}bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=fn(this.g);var h=this.g.Ba();const ai=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||qp(this.g)))){this.J||Ke!=4||h==7||(h==8||0>=ai?hs(3):hs(2)),Qu(this);var d=this.g.Z();this.X=d;t:if(kp(this)){var g=qp(this.g);a="";var P=g.length,D=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),ps(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,pT(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ue)){var ie=ue;break t}}ie=null}if(d=ie)ii(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,d);else{this.o=!1,this.s=3,rt(12),Tr(this),ps(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<z.length;)if(Ot=yT(this,z),Ot==Ku){Ke==4&&(this.s=4,rt(14),d=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Sp){this.s=4,rt(15),ii(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else ii(this.i,this.l,Ot,null),Yu(this,Ot);if(kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||z.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)ii(this.i,this.l,z,"[Invalid Chunked Response]"),Tr(this),ps(this);else if(0<z.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),nc(qe),qe.M=!0,rt(11))}}else ii(this.i,this.l,z,null),Yu(this,z);Ke==4&&Tr(this),this.o&&!this.J&&(Ke==4?Zp(this.j,this):(this.o=!1,na(this)))}else OT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Tr(this),ps(this)}}}catch{}finally{}};function kp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function yT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Ku:(d=Number(h.substring(d,g)),isNaN(d)?Sp:(g+=1,g+d>h.length?Ku:(h=h.slice(g,g+d),a.C=g+d,h)))}bn.prototype.cancel=function(){this.J=!0,Tr(this)};function na(a){a.S=Date.now()+a.I,Rp(a,a.I)}function Rp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ds(m(a.ba,a),h)}function Qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(mT(this.i,this.A),this.L!=2&&(hs(),rt(17)),Tr(this),this.s=2,ps(this)):Rp(this,this.S-a)};function ps(a){a.j.G==0||a.J||Zp(a.j,a)}function Tr(a){Qu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,mp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yu(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Xu(d.h,a))){if(!a.K&&Xu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ha(d),ua(d);else break e;tc(d),rt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ds(m(d.Za,d),6e3));if(1>=xp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Sr(d,11)}else if((a.K||d.g==a)&&ha(d),!y(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let ie=P[h];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const qe=ie[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const ai=ie[5];ai!=null&&typeof ai=="number"&&0<ai&&(g=1.5*ai,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ot=a.g;if(Ot){const fa=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fa){var D=g.h;D.g||fa.indexOf("spdy")==-1&&fa.indexOf("quic")==-1&&fa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ju(D,D.h),D.h=null))}if(g.D){const rc=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(g.ya=rc,he(g.I,g.D,rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=nm(g,g.J?g.ia:null,g.W),z.K){Np(g.h,z);var ue=z,Me=g.L;Me&&(ue.I=Me),ue.B&&(Qu(ue),na(ue)),g.g=z}else Xp(g);0<d.i.length&&ca(d)}else ie[0]!="stop"&&ie[0]!="close"||Sr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Sr(d,7):ec(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}hs(4)}catch{}}var vT=class{constructor(a,h){this.g=a,this.map=h}};function Cp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xp(a){return a.h?1:a.g?a.g.size:0}function Xu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ju(a,h){a.g?a.g.add(h):a.h=h}function Np(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Cp.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function bp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function _T(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function wT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Dp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=wT(a),g=_T(a),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],d&&d[D],a)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ir(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ir){this.h=a.h,ra(this,a.j),this.o=a.o,this.g=a.g,ia(this,a.s),this.l=a.l;var h=a.i,d=new ys;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Vp(this,d),this.m=a.m}else a&&(h=String(a).match(Op))?(this.h=!1,ra(this,h[1]||"",!0),this.o=ms(h[2]||""),this.g=ms(h[3]||"",!0),ia(this,h[4]),this.l=ms(h[5]||"",!0),Vp(this,h[6]||"",!0),this.m=ms(h[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}Ir.prototype.toString=function(){var a=[],h=this.j;h&&a.push(gs(h,Lp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(gs(h,Lp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(gs(d,d.charAt(0)=="/"?ST:IT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",gs(d,kT)),a.join("")};function dn(a){return new Ir(a)}function ra(a,h,d){a.j=d?ms(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ia(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Vp(a,h,d){h instanceof ys?(a.i=h,RT(a.i,a.h)):(d||(h=gs(h,AT)),a.i=new ys(h,a.h))}function he(a,h,d){a.i.set(h,d)}function sa(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ms(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,TT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function TT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lp=/[#\/\?@]/g,IT=/[#\?:]/g,ST=/[#\?]/g,AT=/[#\?@]/g,kT=/#/g;function ys(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&ET(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ys.prototype,t.add=function(a,h){Dn(this),this.i=null,a=si(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Mp(a,h){Dn(a),h=si(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function jp(a,h){return Dn(a),h=si(a,h),a.g.has(h)}t.forEach=function(a,h){Dn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(h[g])}return d},t.V=function(a){Dn(this);let h=[];if(typeof a=="string")jp(this,a)&&(h=h.concat(this.g.get(si(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Dn(this),this.i=null,a=si(this,a),jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Fp(a,h,d){Mp(a,h),0<d.length&&(a.i=null,a.g.set(si(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function si(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function RT(a,h){h&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Mp(this,g),Fp(this,P,d))},a)),a.j=h}function CT(a,h){const d=new fs;if(l.Image){const g=new Image;g.onload=S(On,d,"TestLoadImage: loaded",!0,h,g),g.onerror=S(On,d,"TestLoadImage: error",!1,h,g),g.onabort=S(On,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=S(On,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PT(a,h){const d=new fs,g=new AbortController,P=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?On(d,"TestPingServer: ok",!0,h):On(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),On(d,"TestPingServer: error",!1,h)})}function On(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function xT(){this.g=new dT}function NT(a,h,d){const g=d||"";try{Dp(a,function(P,D){let z=P;c(P)&&(z=Bu(P)),h.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function oa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(oa,$u),oa.prototype.g=function(){return new aa(this.l,this.j)},oa.prototype.i=function(a){return function(){return a}}({});function aa(a,h){He.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(aa,He),t=aa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vs(this):_s(this),this.readyState==3&&Up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,vs(this))},t.Qa=function(a){this.g&&(this.response=a,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function _s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zp(a){let h="";return U(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Zu(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=zp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(we,He);var bT=/^https?$/i,DT=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qu.g(),this.v=this.o?gp(this.o):gp(qu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Bp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DT,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Bp(this,D)}};function Bp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,$p(a),la(a)}function $p(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wp(this):this.bb())},t.bb=function(){Wp(this)};function Wp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)dp(a.Ea,0,a);else if(nt(a,"readystatechange"),fn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var P=String(a.D).match(Op)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!bT.test(P?P.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<fn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",$p(a)}}finally{la(a)}}}}function la(a,h){if(a.g){Hp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function Hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),hT(h)}};function qp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function OT(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var d=C(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[P]||[];h[P]=D,D.push(d)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Kp(a){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ws("baseRetryDelayMs",5e3,a),this.cb=ws("retryDelaySeedMs",1e4,a),this.Wa=ws("forwardChannelMaxRetries",2,a),this.wa=ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cp(a&&a.concurrentRequestLimit),this.Da=new xT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kp.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=nm(this,null,this.W),ca(this)};function ec(a){if(Gp(a),a.G==3){var h=a.U++,d=dn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),Es(a,d),h=new bn(a,a.j,h),h.L=2,h.v=sa(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=rm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),na(h)}tm(a)}function ua(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function Gp(a){ua(a),a.u&&(l.clearTimeout(a.u),a.u=null),ha(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ca(a){if(!Pp(a.h)&&!a.s){a.s=!0;var h=a.Ga;an||J(),B||(an(),B=!0),G.add(h,a),a.B=0}}function VT(a,h){return xp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ds(m(a.Ga,a,h),em(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new bn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yp(this,P,h),d=dn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Es(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(zp(D)))+"&"+h:this.m&&Zu(d,this.m,D)),Ju(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),P.T=!0,Gu(P,d,null)):Gu(P,d,h),this.G=2}}else this.G==3&&(a?Qp(this,a):this.i.length==0||Pp(this.h)||Qp(this))};function Qp(a,h){var d;h?d=h.l:d=a.U++;const g=dn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),Es(a,g),a.m&&a.o&&Zu(g,a.m,a.o),d=new bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Yp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ju(a.h,d),Gu(d,g,h)}function Es(a,h){a.H&&U(a.H,function(d,g){he(h,g,d)}),a.l&&Dp({},function(d,g){he(h,g,d)})}function Yp(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ue=!0;for(let Me=0;Me<d;Me++){let ie=P[Me].g;const qe=P[Me].map;if(ie-=D,0>ie)D=Math.max(0,P[Me].g-100),ue=!1;else try{NT(qe,z,"req"+ie+"_")}catch{g&&g(qe)}}if(ue){g=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Xp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;an||J(),B||(an(),B=!0),G.add(h,a),a.v=0}}function tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ds(m(a.Fa,a),em(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ds(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ua(this),Jp(this))};function nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jp(a){a.g=new bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Es(a,h),a.m&&a.o&&Zu(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=sa(dn(h)),d.m=null,d.P=!0,Ap(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ua(this),tc(this),rt(19))};function ha(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Zp(a,h){var d=null;if(a.g==h){ha(a),nc(a),a.g=null;var g=2}else if(Xu(a.h,h))d=h.D,Np(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=Zo(),nt(g,new Ep(g,d)),ca(a)}else Xp(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&VT(a,h)||g==2&&tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function em(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Sr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Ir(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ra(g,"https"),sa(g),P?CT(g.toString(),d):PT(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(h),tm(a),Gp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function tm(a){if(a.G=0,a.ka=[],a.l){const h=bp(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function nm(a,h,d){var g=d instanceof Ir?dn(d):new Ir(d);if(g.g!="")h&&(g.g=h+"."+g.g),ia(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new Ir(null);g&&ra(D,g),h&&(D.g=h),P&&ia(D,P),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),Es(a,g),g}function rm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new we(new oa({eb:d})):new we(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function im(){}t=im.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function da(){}da.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){He.call(this),this.g=new Kp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new oi(this)}R(gt,He),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){ec(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Bu(a),a=d);h.i.push(new vT(h.Ya++,a)),h.G==3&&ca(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,gt.aa.N.call(this)};function sm(a){Wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(sm,Wu);function om(){Hu.call(this),this.status=1}R(om,Hu);function oi(a){this.g=a}R(oi,im),oi.prototype.ua=function(){nt(this.g,"a")},oi.prototype.ta=function(a){nt(this.g,new sm(a))},oi.prototype.sa=function(a){nt(this.g,new om)},oi.prototype.ra=function(){nt(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Iw=function(){return new da},Tw=function(){return Zo()},Ew=Er,Yh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ea.NO_ERROR=0,ea.TIMEOUT=8,ea.HTTP_ERROR=6,tl=ea,Tp.COMPLETE="complete",ww=Tp,yp.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",He.prototype.listen=He.prototype.K,Ms=yp,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,_w=we}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new mu("@firebase/firestore");function xs(){return Hr.logLevel}function W(t,...e){if(Hr.logLevel<=te.DEBUG){const n=e.map(Sf);Hr.debug(`Firestore (${ss}): ${t}`,...n)}}function Pn(t,...e){if(Hr.logLevel<=te.ERROR){const n=e.map(Sf);Hr.error(`Firestore (${ss}): ${t}`,...n)}}function Wi(t,...e){if(Hr.logLevel<=te.WARN){const n=e.map(Sf);Hr.warn(`Firestore (${ss}): ${t}`,...n)}}function Sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function ae(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class bP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DP{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Sw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class OP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new OP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new LP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=jP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new be(0,0))}static max(){return new Y(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ao{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const FP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Ao{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return FP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function UP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new ur(i,q.empty(),e)}function zP(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(Y.min(),q.empty(),-1)}static max(){return new ur(Y.max(),q.empty(),-1)}}function BP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==$P)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Af.oe=-1;function _u(t){return t==null}function jl(t){return t===0&&1/t==-1/0}function qP(t){return typeof t=="number"&&Number.isInteger(t)&&!jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}}class Oa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oy(this.data.getIterator())}getIteratorFrom(e){return new oy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class oy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new _t([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Rw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const KP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=KP.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rf(t){const e=t.mapValue.fields.__previous_value__;return kf(e)?Rf(e):e}function ko(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={mapValue:{}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kf(t)?4:YP(t)?9007199254740991:QP(t)?10:11:Q()}function sn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ko(t).isEqual(ko(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),l=cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qr(i.bytesValue).isEqual(qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?jl(o)===jl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sy(o)!==sy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!sn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Co(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ay(t.timestampValue,e.timestampValue);case 4:return ay(ko(t),ko(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=qr(s),u=qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ly(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,N=se(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:ly(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Va.mapValue&&o===Va.mapValue)return 0;if(s===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=se(u[p],f[p]);if(m!==0)return m;const S=qi(l[u[p]],c[f[p]]);if(S!==0)return S}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=cr(t),r=cr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function ly(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Ki(t){return Xh(t)}function Xh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Xh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Jh(t){return!!t&&"integerValue"in t}function Cf(t){return!!t&&"arrayValue"in t}function uy(t){return!!t&&"nullValue"in t}function cy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nl(t){return!!t&&"mapValue"in t}function QP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Ys(this.value))}}function Cw(t){const e=[];return ni(t.fields,(n,r)=>{const i=new Ue([n]);if(nl(r)){const s=Cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.position=e,this.inclusive=n}}function hy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function XP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{}class xe extends Pw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZP(e,n,r):n==="array-contains"?new nx(e,r):n==="in"?new rx(e,r):n==="not-in"?new ix(e,r):n==="array-contains-any"?new sx(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ex(e,r):new tx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends Pw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xw(t){return t.op==="and"}function Nw(t){return JP(t)&&xw(t)}function JP(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Zh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(Nw(t))return t.filters.map(e=>Zh(e)).join(",");{const e=t.filters.map(n=>Zh(n)).join(",");return`${t.op}(${e})`}}function bw(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&bw(o,i.filters[l]),!0):!1}(t,e):void Q()}function Dw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(Dw).join(" ,")+"}"}(t):"Filter"}class ZP extends xe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class ex extends xe{constructor(e,n){super(e,"in",n),this.keys=Ow("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tx extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Ow("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ow(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class nx extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cf(n)&&Co(n.arrayValue,this.value)}}class rx extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class ix extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class sx extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function fy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ox(t,e,n,r,i,s,o)}function Pf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_u(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.ue=n}return e.ue}function xf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dy(t.startAt,e.startAt)&&dy(t.endAt,e.endAt)}function ed(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ax(t,e,n,r,i,s,o,l){return new wu(t,e,n,r,i,s,o,l)}function Nf(t){return new wu(t)}function py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lx(t){return t.collectionGroup!==null}function Xs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ul(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new Ul(Ue.keyField(),r))}return e.ce}function en(t){const e=X(t);return e.le||(e.le=ux(e,Xs(t))),e.le}function ux(t,e){if(t.limitType==="F")return fy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ul(i.field,s)});const n=t.endAt?new Fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Fl(t.startAt.position,t.startAt.inclusive):null;return fy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function td(t,e,n){return new wu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eu(t,e){return xf(en(t),en(e))&&t.limitType===e.limitType}function Vw(t){return`${Pf(en(t))}|lt:${t.limitType}`}function ci(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Dw(i)).join(", ")}]`),_u(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ki(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ki(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Xs(r),i)||r.endAt&&!function(o,l,u){const c=hy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Xs(r),i))}(t,e)}function cx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lw(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=hx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hx(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?qi(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new _e(q.comparator);function xn(){return dx}const Mw=new _e(q.comparator);function js(...t){let e=Mw;for(const n of t)e=e.insert(n.key,n);return e}function jw(t){let e=Mw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Js()}function Fw(){return Js()}function Js(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const fx=new _e(q.comparator),px=new Be(q.comparator);function ee(...t){let e=px;for(const n of t)e=e.add(n);return e}const mx=new Be(se);function gx(){return mx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jl(e)?"-0":e}}function Uw(t){return{integerValue:""+t}}function yx(t,e){return qP(e)?Uw(e):bf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this._=void 0}}function vx(t,e,n){return t instanceof zl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kf(s)&&(s=Rf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Po?Bw(t,e):t instanceof xo?$w(t,e):function(i,s){const o=zw(i,s),l=my(o)+my(i.Pe);return Jh(o)&&Jh(i.Pe)?Uw(l):bf(i.serializer,l)}(t,e)}function _x(t,e,n){return t instanceof Po?Bw(t,e):t instanceof xo?$w(t,e):n}function zw(t,e){return t instanceof Bl?function(r){return Jh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zl extends Iu{}class Po extends Iu{constructor(e){super(),this.elements=e}}function Bw(t,e){const n=Ww(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends Iu{constructor(e){super(),this.elements=e}}function $w(t,e){let n=Ww(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class Bl extends Iu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function my(t){return Se(t.integerValue||t.doubleValue)}function Ww(t){return Cf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Po&&i instanceof Po||r instanceof xo&&i instanceof xo?Hi(r.elements,i.elements,sn):r instanceof Bl&&i instanceof Bl?sn(r.Pe,i.Pe):r instanceof zl&&i instanceof zl}(t.transform,e.transform)}class Ex{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Su{}function Hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kw(t.key,tn.none()):new qo(t.key,t.data,tn.none());{const n=t.data,r=ct.empty();let i=new Be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new _r(t.key,r,new _t(i.toArray()),tn.none())}}function Tx(t,e,n){t instanceof qo?function(i,s,o){const l=i.value.clone(),u=yy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(i,s,o){if(!rl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof qo?function(s,o,l,u){if(!rl(s.precondition,o))return l;const c=s.value.clone(),f=vy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(s,o,l,u){if(!rl(s.precondition,o))return l;const c=vy(s.fieldTransforms,u,o),f=o.data;return f.setAll(qw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return rl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ix(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zw(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>wx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends Su{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _r extends Su{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yy(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,_x(o,l,n[i]))}return r}function vy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vx(s,o,e))}return r}class Kw extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sx extends Su{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Tx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Hw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>gy(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>gy(n,r))}}class Df{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return fx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Df(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ne;function Cx(t){switch(t){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Gw(t){if(t===void 0)return Pn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(ne=Re||(Re={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Mr([4294967295,4294967295],0);function _y(t){const e=Px().encode(t),n=new vw;return n.update(e),new Uint8Array(n.digest())}function wy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([i,s],0)]}class Of{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Mr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Mr.fromNumber(r)));return i.compare(xx)===1&&(i=new Mr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Of(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_y(e),[r,i]=wy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(Y.min(),i,new _e(se),xn(),ee())}}class Ko{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ko(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Qw{constructor(e,n){this.targetId=e,this.me=n}}class Yw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ey{constructor(){this.fe=0,this.ge=Iy(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Ko(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Iy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Nx{constructor(e){this.Le=e,this.Be=new Map,this.ke=xn(),this.qe=Ty(),this.Qe=new _e(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ed(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=qr(r).toUint8Array()}catch(u){if(u instanceof Rw)return Wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Of(o,i,s)}catch(u){return Wi(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ed(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Au(e,n,this.Qe,this.ke,r);return this.ke=xn(),this.qe=Ty(),this.Qe=new _e(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ey,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ey),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ty(){return new _e(q.comparator)}function Iy(){return new _e(q.comparator)}const bx={asc:"ASCENDING",desc:"DESCENDING"},Dx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ox={and:"AND",or:"OR"};class Vx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nd(t,e){return t.useProto3Json||_u(e)?e:{value:e}}function $l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Lx(t,e){return $l(t,e.toTimestamp())}function nn(t){return ae(!!t),Y.fromTimestamp(function(n){const r=cr(n);return new be(r.seconds,r.nanos)}(t))}function Vf(t,e){return rd(t,e).canonicalString()}function rd(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jw(t){const e=Te.fromString(t);return ae(rE(e)),e}function id(t,e){return Vf(t.databaseId,e.path)}function Fc(t,e){const n=Jw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(eE(n))}function Zw(t,e){return Vf(t.databaseId,e)}function Mx(t){const e=Jw(t);return e.length===4?Te.emptyPath():eE(e)}function sd(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eE(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sy(t,e,n){return{name:id(t,e),fields:n.value.mapValue.fields}}function jx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:Gw(c.code);return new H(f,c.message||"")}(o);n=new Yw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fc(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Y.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new il(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fc(t,r.document),s=r.readTime?nn(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new il([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fc(t,r.document),s=r.removedTargetIds||[];n=new il([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Rx(i,s),l=r.targetId;n=new Qw(l,o)}}return n}function Fx(t,e){let n;if(e instanceof qo)n={update:Sy(t,e.key,e.value)};else if(e instanceof Kw)n={delete:id(t,e.key)};else if(e instanceof _r)n={update:Sy(t,e.key,e.data),updateMask:Gx(e.fieldMask)};else{if(!(e instanceof Sx))return Q();n={verify:id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Po)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Bl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Lx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Ux(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(Y.min())&&(o=nn(s)),new Ex(o,i.transformResults||[])}(n,e))):[]}function zx(t,e){return{documents:[Zw(t,e.path)]}}function Bx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Zw(t,i);const s=function(c){if(c.length!==0)return nE(on.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:hi(m.field),direction:Hx(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function $x(t){let e=Mx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=tE(p);return m instanceof on&&Nw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Ul(di(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,_u(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Fl(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new Fl(S,m)}(n.endAt)),ax(e,i,o,s,l,"F",u,c)}function Wx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=di(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=di(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=di(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=di(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>tE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Hx(t){return bx[t]}function qx(t){return Dx[t]}function Kx(t){return Ox[t]}function hi(t){return{fieldPath:t.canonicalString()}}function di(t){return Ue.fromServerFormat(t.fieldPath)}function nE(t){return t instanceof xe?function(n){if(n.op==="=="){if(cy(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NAN"}};if(uy(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cy(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NOT_NAN"}};if(uy(n.value))return{unaryFilter:{field:hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(n.field),op:qx(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>nE(i));return r.length===1?r[0]:{compositeFilter:{op:Kx(n.op),filters:r}}}(t):Q()}function Gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.ct=e}}function Yx(t){const e=$x({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?td(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.un=new Jx}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ur.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Jx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gi(0)}static kn(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,_t.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=xn();const o=Js(),l=function(){return Js()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof _r)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Zs(f.mutation,c,f.mutation.getFieldMask(),be.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new eN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new _e((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||_t.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Fw();f.forEach(m=>{if(!s.has(m)){const S=Hw(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Dr());let l=-1,u=s;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:jw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=js();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new wu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=js();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Zs(f.mutation,c,_t.empty(),be.now()),Tu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Yx(i.bundledQuery),readTime:nn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.overlays=new _e(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Dr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kx(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.Tr=new Be(De.Er),this.dr=new Be(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new De(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new De(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Te([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Te([])),r=new De(n,e),i=new De(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(De.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ax(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(se);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new De(new q(s),0);let l=new Be(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new De(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.Mr=e,this.docs=function(){return new _e(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||BP(zP(f),r)<=0||(i.has(f.key)||Tu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new aN(this)}getSize(e){return L.resolve(this.size)}}class aN extends Zx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.persistence=e,this.Nr=new os(n=>Pf(n),xf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lf,this.targetCount=0,this.kr=Gi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Af(0),this.Kr=!1,this.Kr=!0,this.$r=new iN,this.referenceDelegate=e(this),this.Ur=new lN(this),this.indexManager=new Xx,this.remoteDocumentCache=function(i){return new oN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Qx(n),this.Gr=new nN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new sN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new cN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cN extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class Mf{constructor(e){this.persistence=e,this.Jr=new Lf,this.Yr=null}static Zr(e){return new Mf(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ZA()?8:HP(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new hN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(xs()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ci(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(xs()<=te.DEBUG&&W("QueryEngine","Query:",ci(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(xs()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ci(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):L.resolve())}Yi(e,n){if(py(n))return L.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=td(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,td(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return py(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(xs()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ci(n)),this.rs(e,o,n,UP(i,-1)).next(l=>l))})}ts(e,n){let r=new Be(Lw(e));return n.forEach((i,s)=>{Tu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return xs()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ci(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new _e(se),this._s=new os(s=>Pf(s),xf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pN(t,e,n,r){return new fN(t,e,n,r)}async function iE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function mN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let S=L.resolve();return m.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(N=>{const O=c.docVersions.get(R);ae(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(N,O,I){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=xn(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(yN(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function yN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function vN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _N(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function od(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ho(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ay(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),m=p._s.get(f);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(wN(r,cx(e),l),{documents:l,Ts:s})))}function wN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ky{constructor(){this.activeTargetIds=gx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EN{constructor(){this.so=new ky,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La=null;function Uc(){return La===null?La=function(){return 268435456+Math.round(2147483648*Math.random())}():La++,"0x"+La.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class AN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Uc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Wi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=IN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Uc();return new Promise((o,l)=>{const u=new _w;u.setWithCredentials(!0),u.listenOnce(ww.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case tl.NO_ERROR:const f=u.getResponseJson();W(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case tl.TIMEOUT:W(Ye,`RPC '${e}' ${s} timed out`),l(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case tl.HTTP_ERROR:const p=u.getStatus();if(W(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const R=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(S.status);l(new H(R,S.message))}else l(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(Ye,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Uc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Iw(),l=Tw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,S=!1;const R=new SN({Io:O=>{S?W(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(W(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(Ye,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),N=(O,I,y)=>{O.listen(I,T=>{try{y(T)}catch(b){setTimeout(()=>{throw b},0)}})};return N(p,Ms.EventType.OPEN,()=>{S||(W(Ye,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),N(p,Ms.EventType.CLOSE,()=>{S||(S=!0,W(Ye,`RPC '${e}' stream ${i} transport closed`),R.So())}),N(p,Ms.EventType.ERROR,O=>{S||(S=!0,Wi(Ye,`RPC '${e}' stream ${i} transport errored:`,O),R.So(new H(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ms.EventType.MESSAGE,O=>{var I;if(!S){const y=O.data[0];ae(!!y);const T=y,b=T.error||((I=T[0])===null||I===void 0?void 0:I.error);if(b){W(Ye,`RPC '${e}' stream ${i} received error:`,b);const V=b.status;let U=function(E){const A=Re[E];if(A!==void 0)return Gw(A)}(V),w=b.message;U===void 0&&(U=M.INTERNAL,w="Unknown error status: "+V+" with message "+b.message),S=!0,R.So(new H(U,w)),p.close()}else W(Ye,`RPC '${e}' stream ${i} received:`,y),R.bo(y)}}),N(l,Ew.STAT_EVENT,O=>{O.stat===Yh.PROXY?W(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Yh.NOPROXY&&W(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){return new Vx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new oE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kN extends aE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=jx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?nn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=sd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ed(u)?{documents:zx(s,u)}:{query:Bx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Xw(s,o.resumeToken);const c=nd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=$l(s,o.snapshotVersion.toTimestamp());const c=nd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Wx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=sd(this.serializer),n.removeTarget=e,this.a_(n)}}class RN extends aE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Ux(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=sd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Fx(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,rd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,rd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class PN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ri(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Go(c),c.q_.set("Unknown"),c.L_.delete(4),await Ru(c)}(this))})}),this.q_=new PN(r,i)}}async function Ru(t){if(ri(t))for(const e of t.B_)await e(!0)}async function Go(t){for(const e of t.B_)await e(!1)}function lE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Bf(n)?zf(n):as(n).r_()&&Uf(n,e))}function Ff(t,e){const n=X(t),r=as(n);n.N_.delete(e),r.r_()&&uE(n,e),n.N_.size===0&&(r.r_()?r.o_():ri(n)&&n.q_.set("Unknown"))}function Uf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}as(t).A_(e)}function uE(t,e){t.Q_.xe(e),as(t).R_(e)}function zf(t){t.Q_=new Nx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),as(t).start(),t.q_.v_()}function Bf(t){return ri(t)&&!as(t).n_()&&t.N_.size>0}function ri(t){return X(t).L_.size===0}function cE(t){t.Q_=void 0}async function NN(t){t.q_.set("Online")}async function bN(t){t.N_.forEach((e,n)=>{Uf(t,e)})}async function DN(t,e){cE(t),Bf(t)?(t.q_.M_(e),zf(t)):t.q_.set("Unknown")}async function ON(t,e,n){if(t.q_.set("Online"),e instanceof Yw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wl(t,r)}else if(e instanceof il?t.Q_.Ke(e):e instanceof Qw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await sE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),uE(s,u);const p=new Gn(f.target,u,c,f.sequenceNumber);Uf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Wl(t,r)}}async function Wl(t,e,n){if(!Ho(e))throw e;t.L_.add(1),await Go(t),t.q_.set("Offline"),n||(n=()=>sE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ru(t)})}function hE(t,e){return e().catch(n=>Wl(t,n,e))}async function Cu(t){const e=X(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;VN(e);)try{const i=await vN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,LN(e,i)}catch(i){await Wl(e,i)}dE(e)&&fE(e)}function VN(t){return ri(t)&&t.O_.length<10}function LN(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function dE(t){return ri(t)&&!hr(t).n_()&&t.O_.length>0}function fE(t){hr(t).start()}async function MN(t){hr(t).p_()}async function jN(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function FN(t,e,n){const r=t.O_.shift(),i=Df.from(r,e,n);await hE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cu(t)}async function UN(t,e){e&&hr(t).V_&&await async function(r,i){if(function(o){return Cx(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();hr(r).s_(),await hE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cu(r)}}(t,e),dE(t)&&fE(t)}async function Cy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ri(n);n.L_.add(3),await Go(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ru(n)}async function zN(t,e){const n=X(t);e?(n.L_.delete(2),await Ru(n)):e||(n.L_.add(2),await Go(n),n.q_.set("Unknown"))}function as(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new kN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:NN.bind(null,t),Ro:bN.bind(null,t),mo:DN.bind(null,t),d_:ON.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Bf(t)?zf(t):t.q_.set("Unknown")):(await t.K_.stop(),cE(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new RN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:MN.bind(null,t),mo:UN.bind(null,t),f_:jN.bind(null,t),g_:FN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new $f(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wf(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Ho(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=js(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.W_=new _e(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qi{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Qi(e,n,Vi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class $N{constructor(){this.queries=xy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=xy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function xy(){return new os(t=>Vw(t),Eu)}async function WN(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new BN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Wf(o,`Initialization of query '${ci(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Hf(n)}async function HN(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Hf(n)}function KN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Hf(t){t.Y_.forEach(e=>{e.next()})}var ad,Ny;(Ny=ad||(ad={})).ea="default",Ny.Cache="cache";class GN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.key=e}}class mE{constructor(e){this.key=e}}class QN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Lw(e),this.Ra=new Vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Py,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=Tu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;m&&S?m.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),O=!0):this.ga(m,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),O=!0):m&&!S&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(S)-N(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Qi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Py,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new mE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new pE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class YN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XN{constructor(e){this.key=e,this.va=!1}}class JN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new os(l=>Vw(l),Eu),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(q.comparator),this.Na=new Map,this.La=new Lf,this.Ba={},this.ka=new Map,this.qa=Gi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ZN(t,e,n=!0){const r=EE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await gE(r,e,n,!0),i}async function e2(t,e){const n=EE(t);await gE(n,e,!0,!1)}async function gE(t,e,n,r){const i=await _N(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await t2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lE(t.remoteStore,i),l}async function t2(t,e,n,r,i){t.Ka=(p,m,S)=>async function(N,O,I,y){let T=O.view.ma(I);T.ns&&(T=await Ay(N.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,T)));const b=y&&y.targetChanges.get(O.targetId),V=y&&y.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(T,N.isPrimaryClient,b,V);return Dy(N,O.targetId,U.wa),U.snapshot}(t,p,m,S);const s=await Ay(t.localStore,e,!0),o=new QN(e,s.Ts),l=o.ma(s.documents),u=Ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Dy(t,n,c.wa);const f=new YN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function n2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Eu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await od(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ff(r.remoteStore,i.targetId),ld(r,i.targetId)}).catch(Wo)):(ld(r,i.targetId),await od(r.localStore,i.targetId,!0))}async function r2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function i2(t,e,n){const r=h2(t);try{const i=await function(o,l){const u=X(o),c=be.now(),f=l.reduce((S,R)=>S.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=xn(),N=ee();return u.cs.getEntries(S,f).next(O=>{R=O,R.forEach((I,y)=>{y.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(O=>{p=O;const I=[];for(const y of l){const T=Ix(y,p.get(y.key).overlayedDocument);T!=null&&I.push(new _r(y.key,T,Cw(T.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,I,l)}).next(O=>{m=O;const I=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(S,O.batchId,I)})}).then(()=>({batchId:m.batchId,changes:jw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new _e(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Qo(r,i.changes),await Cu(r.remoteStore)}catch(i){const s=Wf(i,"Failed to persist write");n.reject(s)}}async function yE(t,e){const n=X(t);try{const r=await gN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Qo(n,r,e)}catch(r){await Wo(r)}}function by(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Hf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function s2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new _e(q.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Au(Y.min(),new Map,new _e(se),o,l);await yE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),qf(r)}else await od(r.localStore,e,!1).then(()=>ld(r,e,n)).catch(Wo)}async function o2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await mN(n.localStore,e);_E(n,r,null),vE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qo(n,i)}catch(i){await Wo(i)}}async function a2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);_E(r,e,n),vE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qo(r,i)}catch(i){await Wo(i)}}function vE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _E(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||wE(t,r)})}function wE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ff(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),qf(t))}function Dy(t,e,n){for(const r of n)r instanceof pE?(t.La.addReference(r.key,e),l2(t,r)):r instanceof mE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||wE(t,r.key)):Q()}function l2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),qf(t))}function qf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new XN(n)),t.Oa=t.Oa.insert(n,r),lE(t.remoteStore,new Gn(en(Nf(n.path)),r,"TargetPurposeLimboResolution",Af.oe))}}async function Qo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=jf.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.$i,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>L.forEach(m.Ui,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!Ho(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=f.os.get(m),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,N)}}}(r.localStore,s))}async function u2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await iE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qo(n,r.hs)}}function c2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function EE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=c2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s2.bind(null,e),e.Ca.d_=qN.bind(null,e.eventManager),e.Ca.$a=KN.bind(null,e.eventManager),e}function h2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=o2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a2.bind(null,e),e}class Hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return pN(this.persistence,new dN,e.initialUser,this.serializer)}Ga(e){return new uN(Mf.Zr,this.serializer)}Wa(e){return new EN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hl.provider={build:()=>new Hl};class ud{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>by(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u2.bind(null,this.syncEngine),await zN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $N}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=function(s){return new AN(s)}(e.databaseInfo);return function(s,o,l,u){return new CN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new xN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>by(this.syncEngine,n,0),function(){return Ry.D()?new Ry:new TN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new JN(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Go(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ud.provider={build:()=>new ud};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=Aw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p2(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Cy(e.remoteStore,i)),t._onlineComponents=e}async function p2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new Hl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new Hl);return t._offlineComponents}async function TE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Oy(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Oy(t,new ud))),t._onlineComponents}function m2(t){return TE(t).then(e=>e.syncEngine)}async function g2(t){const e=await TE(t),n=e.eventManager;return n.onListen=ZN.bind(null,e.syncEngine),n.onUnlisten=n2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=e2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=r2.bind(null,e.syncEngine),n}function y2(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new d2({next:m=>{f.Za(),o.enqueueAndForget(()=>HN(s,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new GN(Nf(l.path),f,{includeMetadataChanges:!0,_a:!0});return WN(s,p)}(await g2(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _2(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ly(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kf(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new NP;switch(r.type){case"firstParty":return new VP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vy.get(n);r&&(W("ComponentProvider","Removing Datastore"),Vy.delete(n),r.terminate())}(this),Promise.resolve()}}function w2(t,e,n,r={}){var i;const s=(t=Gr(t,Gf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=KA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(c)}t._authCredentials=new bP(new Sw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qf(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new No(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class No extends Qf{constructor(e,n,r){super(e,n,Nf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new q(e))}withConverter(e){return new No(this.firestore,e,this._path)}}function bo(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Aw.newId()),v2("doc","path",e),t instanceof Gf){const r=Te.fromString(e,...n);return Ly(r),new Et(t,null,new q(r))}{if(!(t instanceof Et||t instanceof No))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ly(r),new Et(t.firestore,t instanceof No?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new oE(this,"async_queue_retry"),this.Vu=()=>{const r=zc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ho(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=$f.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Pu extends Gf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function E2(t,e){const n=typeof t=="object"?t:pf(),r=typeof t=="string"?t:"(default)",i=ei(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HA("firestore");s&&w2(i,...s)}return i}function SE(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||T2(t),t._firestoreClient}function T2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new GP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,IE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new f2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi(We.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yi(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/^__.*__$/;class S2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class AE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Zf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ql(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(kE(this.Cu)&&I2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class A2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}Qu(e,n,r,i=!1){return new Zf({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RE(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new A2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function k2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ep("Data must be an object, but it was:",o,r);const l=CE(r,o);let u,c;if(s.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=cd(e,p,n);if(!o.contains(m))throw new H(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xE(f,m)||f.push(m)}u=new _t(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new S2(new ct(l),u,c)}class Nu extends Yf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nu}}function R2(t,e,n,r){const i=t.Qu(1,e,n);ep("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ni(r,(u,c)=>{const f=tp(e,u,n);c=Le(c);const p=i.Nu(f);if(c instanceof Nu)s.push(f);else{const m=bu(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new _t(s);return new AE(o,l,i.fieldTransforms)}function C2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[cd(e,r,n)],u=[i];if(s.length%2!=0)throw new H(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(cd(e,s[m])),u.push(s[m+1]);const c=[],f=ct.empty();for(let m=l.length-1;m>=0;--m)if(!xE(c,l[m])){const S=l[m];let R=u[m];R=Le(R);const N=o.Nu(S);if(R instanceof Nu)c.push(S);else{const O=bu(R,N);O!=null&&(c.push(S),f.set(S,O))}}const p=new _t(c);return new AE(f,p,o.fieldTransforms)}function bu(t,e){if(PE(t=Le(t)))return ep("Unsupported field value:",e,t),CE(t,e);if(t instanceof Yf)return function(r,i){if(!kE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=bu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:$l(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$l(i.serializer,s)}}if(r instanceof Xf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yi)return{bytesValue:Xw(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Vf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Jf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return bf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Kf(r)}`)}(t,e)}function CE(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,i)=>{const s=bu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Xf||t instanceof Yi||t instanceof Et||t instanceof Yf||t instanceof Jf)}function ep(t,e,n){if(!PE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Kf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function cd(t,e,n){if((e=Le(e))instanceof xu)return e._internalPath;if(typeof e=="string")return tp(t,e);throw ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const P2=new RegExp("[~\\*/\\[\\]]");function tp(t,e,n){if(e.search(P2)>=0)throw ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xu(...e.split("."))._internalPath}catch{throw ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function xE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x2 extends NE{data(){return super.data()}}function bE(t,e){return typeof e=="string"?tp(t,e):e instanceof xu?e._internalPath:e._delegate._internalPath}class N2{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new Jf(s)}convertGeoPoint(e){return new Xf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ko(e));default:return null}}convertTimestamp(e){const n=cr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ae(rE(r));const i=new Ro(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class DE extends NE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new O2(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class O2 extends DE{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){t=Gr(t,Et);const e=Gr(t.firestore,Pu);return y2(SE(e),t._key).then(n=>j2(e,t,n))}class L2 extends N2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function M2(t,e,n){t=Gr(t,Et);const r=Gr(t.firestore,Pu),i=b2(t.converter,e);return OE(r,[k2(RE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function hd(t,e,n,...r){t=Gr(t,Et);const i=Gr(t.firestore,Pu),s=RE(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof xu?C2(s,"updateDoc",t._key,e,n,r):R2(s,"updateDoc",t._key,e),OE(i,[o.toMutation(t._key,tn.exists(!0))])}function OE(t,e){return function(r,i){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>i2(await m2(r),i,s)),s.promise}(SE(t),e)}function j2(t,e,n){const r=n.docs.get(e._key),i=new L2(t);return new DE(t,i,e._key,r,new D2(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ss=i})(rs),rn(new $t("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Pu(new DP(r.getProvider("auth-internal")),new MP(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Nt(iy,"4.7.3",e),Nt(iy,"4.7.3","esm2017")})();var F2="firebase",U2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(F2,U2,"app");const VE="@firebase/installations",np="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=1e4,ME=`w:${np}`,jE="FIS_v2",z2="https://firebaseinstallations.googleapis.com/v1",B2=60*60*1e3,$2="installations",W2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new Zr($2,W2,H2);function FE(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE({projectId:t}){return`${z2}/projects/${t}/installations`}function zE(t){return{token:t.token,requestStatus:2,expiresIn:K2(t.expiresIn),creationTime:Date.now()}}async function BE(t,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $E({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function q2(t,{refreshToken:e}){const n=$E(t);return n.append("Authorization",G2(e)),n}async function WE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K2(t){return Number(t.replace("s","000"))}function G2(t){return`${jE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=UE(t),i=$E(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:jE,appId:t.appId,sdkVersion:ME},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await WE(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:zE(c.authToken)}}else throw await BE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=/^[cdef][\w-]{21}$/,dd="";function J2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Z2(t);return X2.test(n)?n:dd}catch{return dd}}function Z2(t){return Y2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Map;function KE(t,e){const n=Du(t);GE(n,e),eb(n,e)}function GE(t,e){const n=qE.get(t);if(n)for(const r of n)r(e)}function eb(t,e){const n=tb();n&&n.postMessage({key:t,fid:e}),nb()}let Or=null;function tb(){return!Or&&"BroadcastChannel"in self&&(Or=new BroadcastChannel("[Firebase] FID Change"),Or.onmessage=t=>{GE(t.data.key,t.data.fid)}),Or}function nb(){qE.size===0&&Or&&(Or.close(),Or=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="firebase-installations-database",ib=1,Yr="firebase-installations-store";let $c=null;function rp(){return $c||($c=O0(rb,ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}})),$c}async function Kl(t,e){const n=Du(t),i=(await rp()).transaction(Yr,"readwrite"),s=i.objectStore(Yr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&KE(t,e.fid),e}async function QE(t){const e=Du(t),r=(await rp()).transaction(Yr,"readwrite");await r.objectStore(Yr).delete(e),await r.done}async function Ou(t,e){const n=Du(t),i=(await rp()).transaction(Yr,"readwrite"),s=i.objectStore(Yr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&KE(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(t){let e;const n=await Ou(t.appConfig,r=>{const i=sb(r),s=ob(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sb(t){const e=t||{fid:J2(),registrationStatus:0};return YE(e)}function ob(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ab(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lb(t)}:{installationEntry:e}}async function ab(t,e){try{const n=await Q2(t,e);return Kl(t.appConfig,n)}catch(n){throw FE(n)&&n.customData.serverCode===409?await QE(t.appConfig):await Kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lb(t){let e=await Fy(t.appConfig);for(;e.registrationStatus===1;)await HE(100),e=await Fy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ip(t);return r||n}return e}function Fy(t){return Ou(t,e=>{if(!e)throw Qr.create("installation-not-found");return YE(e)})}function YE(t){return ub(t)?{fid:t.fid,registrationStatus:0}:t}function ub(t){return t.registrationStatus===1&&t.registrationTime+LE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb({appConfig:t,heartbeatServiceProvider:e},n){const r=hb(t,n),i=q2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ME,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await WE(()=>fetch(r,l));if(u.ok){const c=await u.json();return zE(c)}else throw await BE("Generate Auth Token",u)}function hb(t,{fid:e}){return`${UE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e=!1){let n;const r=await Ou(t.appConfig,s=>{if(!XE(s))throw Qr.create("not-registered");const o=s.authToken;if(!e&&pb(o))return s;if(o.requestStatus===1)return n=db(t,e),s;{if(!navigator.onLine)throw Qr.create("app-offline");const l=gb(s);return n=fb(t,l),l}});return n?await n:r.authToken}async function db(t,e){let n=await Uy(t.appConfig);for(;n.authToken.requestStatus===1;)await HE(100),n=await Uy(t.appConfig);const r=n.authToken;return r.requestStatus===0?sp(t,e):r}function Uy(t){return Ou(t,e=>{if(!XE(e))throw Qr.create("not-registered");const n=e.authToken;return yb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fb(t,e){try{const n=await cb(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kl(t.appConfig,r),n}catch(n){if(FE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kl(t.appConfig,r)}throw n}}function XE(t){return t!==void 0&&t.registrationStatus===2}function pb(t){return t.requestStatus===2&&!mb(t)}function mb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+B2}function gb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yb(t){return t.requestStatus===1&&t.requestTime+LE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t){const e=t,{installationEntry:n,registrationPromise:r}=await ip(e);return r?r.catch(console.error):sp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e=!1){const n=t;return await wb(n),(await sp(n,e)).token}async function wb(t){const{registrationPromise:e}=await ip(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){if(!t||!t.options)throw Wc("App Configuration");if(!t.name)throw Wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wc(t){return Qr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="installations",Tb="installations-internal",Ib=t=>{const e=t.getProvider("app").getImmediate(),n=Eb(e),r=ei(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sb=t=>{const e=t.getProvider("app").getImmediate(),n=ei(e,JE).getImmediate();return{getId:()=>vb(n),getToken:i=>_b(n,i)}};function Ab(){rn(new $t(JE,Ib,"PUBLIC")),rn(new $t(Tb,Sb,"PRIVATE"))}Ab();Nt(VE,np);Nt(VE,np,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="analytics",kb="firebase_id",Rb="origin",Cb=60*1e3,Pb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",op="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new mu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Zr("analytics","Analytics",xb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){if(!t.startsWith(op)){const e=Tt.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function ZE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function bb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Db(t,e){const n=bb("firebase-js-sdk-policy",{createScriptURL:Nb}),r=document.createElement("script"),i=`${op}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ob(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Vb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await ZE(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){mt.error(l)}t("config",i,s)}async function Lb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await ZE(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function Mb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Lb(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Vb(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){mt.error(l)}}return i}function jb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Mb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Fb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(op)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=30,zb=1e3;class Bb{constructor(e={},n=zb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const eT=new Bb;function $b(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:$b(r)},s=Pb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Hb(t,e=eT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Tt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Gb;return setTimeout(async()=>{l.abort()},Cb),tT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function tT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=eT){var s;const{appId:o,measurementId:l}=t;try{await qb(r,e)}catch(u){if(l)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Wb(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Kb(c)){if(i.deleteThrottleMetadata(o),l)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pg(n,i.intervalMillis,Ub):Pg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),mt.debug(`Calling attemptFetch again in ${f} millis`),tT(t,p,r,i)}}function qb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kb(t){if(!(t instanceof Ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(){if(x0())try{await N0()}catch(t){return mt.warn(Tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xb(t,e,n,r,i,s,o){var l;const u=Hb(t);u.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>mt.error(S)),e.push(u);const c=Yb().then(S=>{if(S)return r.getId()}),[f,p]=await Promise.all([u,c]);Fb(s)||Db(s,f.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Rb]="firebase",m.update=!0,p!=null&&(m[kb]=p),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.app=e}_delete(){return delete eo[this.app.options.appId],Promise.resolve()}}let eo={},zy=[];const By={};let Hc="dataLayer",Zb="gtag",$y,nT,Wy=!1;function eD(){const t=[];if(P0()&&t.push("This is a browser extension environment."),ek()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function tD(t,e,n){eD();const r=t.options.appId;if(!r)throw Tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(eo[r]!=null)throw Tt.create("already-exists",{id:r});if(!Wy){Ob(Hc);const{wrappedGtag:s,gtagCore:o}=jb(eo,zy,By,Hc,Zb);nT=s,$y=o,Wy=!0}return eo[r]=Xb(t,zy,By,e,$y,Hc,n),new Jb(t)}function nD(t=pf()){t=Le(t);const e=ei(t,Gl);return e.isInitialized()?e.getImmediate():rD(t)}function rD(t,e={}){const n=ei(t,Gl);if(n.isInitialized()){const i=n.getImmediate();if(Eo(e,n.getOptions()))return i;throw Tt.create("already-initialized")}return n.initialize({options:e})}function iD(t,e,n,r){t=Le(t),Qb(nT,eo[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const Hy="@firebase/analytics",qy="0.10.8";function sD(){rn(new $t(Gl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tD(r,i,n)},"PUBLIC")),rn(new $t("analytics-internal",t,"PRIVATE")),Nt(Hy,qy),Nt(Hy,qy,"esm2017");function t(e){try{const n=e.getProvider(Gl).getImmediate();return{logEvent:(r,i,s)=>iD(n,r,i,s)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}sD();const Ar={apiKey:"AIzaSyAk8snhF2gMPr45nQGKa22oYfohl70BhuQ",authDomain:"fashion-96787.firebaseapp.com",projectId:"fashion-96787",storageBucket:"fashion-96787.firebasestorage.app",messagingSenderId:"806045730430",appId:"1:806045730430:web:60eb864051595bef477a2f",measurementId:"G-HHZRWVQTFQ"},oD={apiKey:Ar.apiKey,authDomain:Ar.authDomain,projectId:Ar.projectId,storageBucket:Ar.storageBucket,messagingSenderId:Ar.messagingSenderId,appId:Ar.appId,measurementId:Ar.measurementId},ap=V0(oD);typeof window<"u"&&nD(ap);const sl=PP(ap),Do=E2(ap);console.log("Firebase initialized with","default config");const Ft=MA((t,e)=>({user:null,loading:!0,signIn:async(n,r)=>{try{await pC(sl,n,r)}catch(i){throw i}},signUp:async(n,r)=>{try{const{user:i}=await fC(sl,n,r);console.log("User created in Firebase Auth:",i.uid);const s={email:i.email,style_preferences:{},budget:{},is_new_user:!0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};await M2(bo(Do,"profiles",i.uid),s),console.log("User profile created in Firestore with is_new_user=true")}catch(i){throw console.error("Signup error:",i),i}},signOut:async()=>{try{await vC(sl),t({user:null})}catch(n){throw n}},debugUserState:()=>{const n=e();console.log("Current auth state:",{user:n.user?{...n.user,is_new_user:n.user.is_new_user===!0?"true (boolean)":n.user.is_new_user===!1?"false (boolean)":n.user.is_new_user?"truthy (not boolean true)":"falsy (not boolean false)"}:null,loading:n.loading})}}));yC(sl,async t=>{if(t)try{const e=bo(Do,"profiles",t.uid),n=await V2(e);if(n.exists()){const r=n.data();console.log("User data from Firestore:",r);const i=r.is_new_user===!0;console.log("Is new user flag:",i);const s={id:t.uid,email:t.email||"",style_preferences:r.style_preferences||{style_types:[],favorite_colors:[],size:"",occasions:[]},budget:r.budget||{min:0,max:1e3,currency:"USD"},physical_attributes:r.physical_attributes,is_new_user:i};Ft.setState({user:s,loading:!1})}else{const r={id:t.uid,email:t.email||"",style_preferences:{style_types:[],favorite_colors:[],size:"",occasions:[]},budget:{min:0,max:1e3,currency:"USD"},is_new_user:!1};Ft.setState({user:r,loading:!1})}}catch(e){console.error("Error fetching user data:",e),Ft.setState({user:null,loading:!1})}else Ft.setState({user:null,loading:!1})});const aD=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(!1),[o,l]=j.useState(""),[u,c]=j.useState(!1),{signIn:f,signUp:p}=Ft(),m=async S=>{S.preventDefault(),l(""),c(!0);try{i?(await p(t,n),sessionStorage.setItem("newUserRegistration","true")):(await f(t,n),sessionStorage.removeItem("newUserRegistration"))}catch(R){l(R instanceof Error?R.message:"An error occurred")}finally{c(!1)}};return _.jsx("div",{className:"min-h-screen bg-black flex items-center justify-center px-4",children:_.jsxs("div",{className:"max-w-md w-full bg-gray-900 p-8 rounded-xl shadow-md",children:[_.jsx("h2",{className:"text-2xl font-bold mb-6 text-white text-center",children:i?"Create an Account":"Welcome Back"}),o&&_.jsx("div",{className:"mb-4 p-3 bg-red-900/50 text-red-200 rounded-md text-sm",children:o}),_.jsxs("form",{onSubmit:m,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email"}),_.jsx("input",{type:"email",value:t,onChange:S=>e(S.target.value),className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring-pink-500",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Password"}),_.jsx("input",{type:"password",value:n,onChange:S=>r(S.target.value),className:"mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-pink-500 focus:ring-pink-500",required:!0})]}),_.jsx("button",{type:"submit",disabled:u,className:`w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors ${u?"opacity-70 cursor-not-allowed":""}`,children:u?i?"Creating Account...":"Signing In...":i?"Sign Up":"Sign In"})]}),_.jsx("div",{className:"mt-4 text-center",children:_.jsx("button",{onClick:()=>s(!i),className:"text-pink-400 hover:text-pink-300",disabled:u,children:i?"Already have an account? Sign In":"Don't have an account? Sign Up"})})]})})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),lt=(t,e)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>j.createElement("svg",{ref:f,...lD,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${uD(t)}`,l].join(" "),...c},[...e.map(([p,m])=>j.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=lt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=lt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=lt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=lt("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=lt("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=lt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=lt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=lt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=lt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=lt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=lt("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=lt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=lt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=lt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=lt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ED=["Casual","Business Casual","Formal","Bohemian","Minimalist","Vintage","Streetwear","Athleisure"],TD=["Black","White","Navy","Beige","Gray","Red","Pink","Purple","Blue","Green"],ID=["Everyday","Work","Special Events","Date Night","Workout","Travel","Beach","Party"],SD=["XS","S","M","L","XL","XXL"],AD=()=>{const t=du(),{user:e}=Ft(),[n,r]=j.useState(1),[i,s]=j.useState(""),[o,l]=j.useState({style_types:[],favorite_colors:[],size:"",occasions:[],unsure_categories:[],budget:{min:0,max:500,currency:"USD"}}),[u,c]=j.useState({height:170,weight:70,age:25}),f=(y,T)=>{l(T==="not_sure"?b=>({...b,[y]:[],unsure_categories:b.unsure_categories.includes(y)?b.unsure_categories.filter(V=>V!==y):[...b.unsure_categories,y]}):b=>({...b,unsure_categories:b.unsure_categories.filter(V=>V!==y),[y]:b[y].includes(T)?b[y].filter(V=>V!==T):[...b[y],T]})),s("")},p=y=>{l(y==="not_sure"?T=>({...T,size:"",unsure_categories:T.unsure_categories.includes("size")?T.unsure_categories.filter(b=>b!=="size"):[...T.unsure_categories,"size"]}):T=>({...T,size:y,unsure_categories:T.unsure_categories.filter(b=>b!=="size")})),s("")},m=(y,T)=>{const b=parseInt(T);isNaN(b)||c(V=>({...V,[y]:b}))},S=(y,T)=>{const b=parseInt(y);isNaN(b)||(l(V=>{let U=T==="min"?b:V.budget.min,w=T==="max"?b:V.budget.max;return T==="min"?U=Math.min(U,V.budget.max):T==="max"&&(w=Math.max(w,V.budget.min)),{...V,budget:{...V.budget,min:U,max:w}}}),s(""))},R=()=>{switch(n){case 1:if(o.style_types.length===0&&!o.unsure_categories.includes("style_types"))return s(`Please select at least one style or choose "I'm not sure"`),!1;break;case 2:if(o.favorite_colors.length===0&&!o.unsure_categories.includes("favorite_colors"))return s(`Please select at least one color or choose "I'm not sure"`),!1;break;case 3:if(!o.size&&!o.unsure_categories.includes("size"))return s(`Please select a size or choose "I'm not sure"`),!1;break;case 4:if(o.occasions.length===0&&!o.unsure_categories.includes("occasions"))return s(`Please select at least one occasion or choose "I'm not sure"`),!1;break;case 5:if(o.budget.max<o.budget.min)return s("Maximum budget cannot be less than minimum budget"),!1;break;case 6:if(u.age<13||u.age>120)return s("Please enter a valid age between 13 and 120"),!1;if(u.height<100||u.height>250)return s("Please enter a valid height between 100cm and 250cm"),!1;if(u.weight<30||u.weight>300)return s("Please enter a valid weight between 30kg and 300kg"),!1;break}return!0},N=async()=>{if(e)try{console.log("Submitting preferences...");const y={style_preferences:{style_types:o.style_types,favorite_colors:o.favorite_colors,size:o.size,occasions:o.occasions,unsure_categories:o.unsure_categories},physical_attributes:u,budget:o.budget,is_new_user:!1,updated_at:new Date().toISOString()},T=bo(Do,"profiles",e.id);await hd(T,y),console.log("Firestore updated successfully");const b={...e,style_preferences:y.style_preferences,physical_attributes:y.physical_attributes,budget:y.budget,is_new_user:!1};Ft.setState({user:b,loading:!1}),console.log("Local state updated to:",b),t("/")}catch(y){console.error("Error saving preferences:",y),s("Failed to save preferences. Please try again.")}},O=async()=>{if(e)try{console.log("Skipping preferences from style page...");const y={style_preferences:{style_types:["Casual"],favorite_colors:[],size:"",occasions:[],unsure_categories:["style_types","favorite_colors","size","occasions"]},is_new_user:!1,updated_at:new Date().toISOString()},T=bo(Do,"profiles",e.id);await hd(T,y),console.log("Firestore updated successfully");const b={...e,style_preferences:y.style_preferences,is_new_user:!1};Ft.setState({user:b,loading:!1}),console.log("Local state updated to:",b),t("/")}catch(y){console.error("Error updating preferences:",y),s("Failed to skip. Please try again.")}},I=()=>{switch(n){case 1:return _.jsxs("div",{className:"space-y-2",children:[_.jsx("h3",{className:"text-base font-semibold",children:"What's your style?"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[ED.map(y=>_.jsx("button",{onClick:()=>f("style_types",y),className:`py-2 px-3 text-sm rounded-lg border ${o.style_types.includes(y)?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:y},y)),_.jsx("button",{onClick:()=>f("style_types","not_sure"),className:`py-2 px-3 text-sm rounded-lg border col-span-2 ${o.unsure_categories.includes("style_types")?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:_.jsxs("div",{className:"flex items-center justify-center gap-1",children:[_.jsx(Ma,{size:16}),_.jsx("span",{children:"I'm not sure about my style"})]})})]})]});case 2:return _.jsxs("div",{className:"space-y-2",children:[_.jsx("h3",{className:"text-base font-semibold",children:"Select your favorite colors"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[TD.map(y=>_.jsx("button",{onClick:()=>f("favorite_colors",y),className:`py-2 px-3 text-sm rounded-lg border ${o.favorite_colors.includes(y)?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:y},y)),_.jsx("button",{onClick:()=>f("favorite_colors","not_sure"),className:`py-2 px-3 text-sm rounded-lg border col-span-2 ${o.unsure_categories.includes("favorite_colors")?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:_.jsxs("div",{className:"flex items-center justify-center gap-1",children:[_.jsx(Ma,{size:16}),_.jsx("span",{children:"I'm not sure about colors"})]})})]})]});case 3:return _.jsxs("div",{className:"space-y-2",children:[_.jsx("h3",{className:"text-base font-semibold",children:"What's your size?"}),_.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[SD.map(y=>_.jsx("button",{onClick:()=>p(y),className:`py-2 px-3 text-sm rounded-lg border ${o.size===y?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:y},y)),_.jsx("button",{onClick:()=>p("not_sure"),className:`py-2 px-3 text-sm rounded-lg border col-span-3 ${o.unsure_categories.includes("size")?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:_.jsxs("div",{className:"flex items-center justify-center gap-1",children:[_.jsx(Ma,{size:16}),_.jsx("span",{children:"I'm not sure about my size"})]})})]})]});case 4:return _.jsxs("div",{className:"space-y-2",children:[_.jsx("h3",{className:"text-base font-semibold",children:"What occasions do you shop for?"}),_.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[ID.map(y=>_.jsx("button",{onClick:()=>f("occasions",y),className:`py-2 px-3 text-sm rounded-lg border ${o.occasions.includes(y)?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:y},y)),_.jsx("button",{onClick:()=>f("occasions","not_sure"),className:`py-2 px-3 text-sm rounded-lg border col-span-2 ${o.unsure_categories.includes("occasions")?"bg-purple-100 border-purple-500 text-purple-700":"border-gray-300 hover:border-purple-500"}`,children:_.jsxs("div",{className:"flex items-center justify-center gap-1",children:[_.jsx(Ma,{size:16}),_.jsx("span",{children:"I'm not sure about occasions"})]})})]})]});case 5:return _.jsxs("div",{className:"space-y-4",children:[_.jsx("h3",{className:"text-base font-semibold",children:"What's your budget range?"}),_.jsx("div",{className:"space-y-6",children:_.jsxs("div",{className:"space-y-2",children:[_.jsxs("div",{className:"flex justify-between text-sm text-gray-600",children:[_.jsxs("span",{children:["$",o.budget.min]}),_.jsxs("span",{children:["$",o.budget.max,"+"]})]}),_.jsxs("div",{className:"range-slider",children:[_.jsx("div",{className:"slider-track",children:_.jsx("div",{className:"slider-track-active",style:{left:`${o.budget.min/500*100}%`,width:`${(o.budget.max-o.budget.min)/500*100}%`}})}),_.jsx("input",{type:"range",min:"0",max:"500",step:"25",value:o.budget.min,onChange:y=>S(y.target.value,"min")}),_.jsx("input",{type:"range",min:"0",max:"500",step:"25",value:o.budget.max,onChange:y=>S(y.target.value,"max")})]}),_.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[_.jsx("span",{children:"$0"}),_.jsx("span",{children:"$500+"})]})]})})]});case 6:return _.jsxs("div",{className:"space-y-3",children:[_.jsx("h3",{className:"text-base font-semibold",children:"Tell us about yourself"}),_.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Age"}),_.jsx("input",{type:"number",value:u.age,onChange:y=>m("age",y.target.value),min:"13",max:"120",className:"w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Height (cm)"}),_.jsx("input",{type:"number",value:u.height,onChange:y=>m("height",y.target.value),min:"100",max:"250",className:"w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Weight (kg)"}),_.jsx("input",{type:"number",value:u.weight,onChange:y=>m("weight",y.target.value),min:"30",max:"300",className:"w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md"})]})]})]});default:return null}};return _.jsxs("div",{className:"fixed inset-0 flex flex-col bg-white",children:[_.jsxs("div",{className:"px-4 py-3 border-b",children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsx("h2",{className:"text-lg font-bold",children:"Style Preferences"}),_.jsxs("span",{className:"text-xs text-gray-500",children:["Step ",n," of 6"]})]}),_.jsx("div",{className:"h-1.5 bg-gray-200 rounded-full",children:_.jsx("div",{className:"h-full bg-purple-600 rounded-full transition-all duration-300",style:{width:`${n/6*100}%`}})})]}),i&&_.jsx("div",{className:"px-4 pt-3",children:_.jsx("div",{className:"p-2 text-sm bg-red-100 text-red-700 rounded-md",children:i})}),_.jsx("div",{className:"flex-1 px-4 flex items-center justify-center",children:_.jsx("div",{className:"w-full max-w-sm",children:I()})}),_.jsxs("div",{className:"border-t p-3 flex justify-between bg-white",children:[n>1?_.jsx("button",{onClick:()=>{s(""),r(n-1)},className:"px-4 py-2 text-sm text-purple-600 hover:text-purple-700",children:"Back"}):_.jsx("div",{}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx("button",{onClick:O,className:"px-4 py-2 text-sm text-gray-600 hover:text-gray-800",children:"Skip"}),_.jsx("button",{onClick:()=>{R()&&(n===6?N():r(n+1))},className:"px-6 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700",children:n===6?"Finish":"Next"})]})]})]})},kD=()=>{const t=du(),{user:e}=Ft(),n=async()=>{if(e)try{console.log("Handling skip preferences");const i={style_preferences:{style_types:["Casual"],favorite_colors:[],size:"",occasions:[],unsure_categories:["style_types","favorite_colors","size","occasions"]},is_new_user:!1,updated_at:new Date().toISOString()},s=bo(Do,"profiles",e.id);await hd(s,i),console.log("Firestore updated successfully");const o={...e,style_preferences:i.style_preferences,is_new_user:!1};Ft.setState({user:o,loading:!1}),console.log("Local state updated to:",o),t("/")}catch(i){console.error("Error updating preferences:",i)}},r=()=>{t("/preferences")};return _.jsx("div",{className:"fixed inset-0 flex flex-col items-center justify-center bg-white p-4",children:_.jsxs("div",{className:"text-center max-w-md",children:[_.jsx("div",{className:"flex justify-center mb-6",children:_.jsx(vD,{className:"h-16 w-16 text-purple-600"})}),_.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Welcome to FashionFinder!"}),_.jsx("p",{className:"text-gray-600 mb-8",children:"Would you like to set up your style preferences now? This helps us recommend fashion items tailored to your taste."}),_.jsxs("div",{className:"flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center",children:[_.jsx("button",{onClick:n,className:"px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",children:"Skip for now"}),_.jsx("button",{onClick:r,className:"px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors",children:"Set up preferences"})]})]})})},RD=({product:t,onLike:e=()=>{},onComment:n=()=>{},onShare:r=()=>{},onBuyNow:i=()=>{},isActive:s=!1})=>{const[o,l]=j.useState(!1),[u,c]=j.useState(!1),f=j.useRef(null),p=t.images[0],m=()=>{l(!o),e()},S=()=>{c(!u)};return yd.useEffect(()=>{f.current&&(s?f.current.play().catch(R=>console.log("Video play error:",R)):f.current.pause())},[s]),_.jsxs("div",{className:"relative w-full h-full bg-black overflow-hidden snap-start",children:[_.jsx("div",{className:"absolute inset-0 w-full h-full",children:_.jsx("img",{src:p,alt:t.name,className:"w-full h-full object-cover"})}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"}),_.jsxs("div",{className:"absolute top-0 left-0 right-0 p-4 flex items-center z-10",children:[_.jsxs("div",{className:"flex items-center",children:[_.jsx("div",{className:"w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white",children:t.brand.charAt(0)}),_.jsxs("div",{className:"ml-2",children:[_.jsx("p",{className:"text-white font-medium",children:t.brand}),_.jsx("p",{className:"text-white/70 text-xs",children:"Fashion Brand"})]})]}),_.jsx("button",{className:"ml-auto bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium",children:"Follow"})]}),_.jsxs("div",{className:"absolute right-4 bottom-24 flex flex-col items-center space-y-6 z-10",children:[_.jsxs("button",{onClick:m,className:"flex flex-col items-center",children:[_.jsx("div",{className:`w-10 h-10 rounded-full bg-black/30 flex items-center justify-center ${o?"text-red-500":"text-white"}`,children:_.jsx(rT,{size:24,fill:o?"currentColor":"none"})}),_.jsx("span",{className:"text-white text-xs mt-1",children:Math.floor(Math.random()*1e3)+100})]}),_.jsxs("button",{onClick:n,className:"flex flex-col items-center",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white",children:_.jsx(fD,{size:24})}),_.jsx("span",{className:"text-white text-xs mt-1",children:Math.floor(Math.random()*100)+10})]}),_.jsxs("button",{onClick:r,className:"flex flex-col items-center",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white",children:_.jsx(yD,{size:24})}),_.jsx("span",{className:"text-white text-xs mt-1",children:"Share"})]}),_.jsxs("button",{onClick:i,className:"flex flex-col items-center",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white",children:_.jsx(Ky,{size:24})}),_.jsx("span",{className:"text-white text-xs mt-1",children:"Shop"})]})]}),_.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 z-10",children:[_.jsxs("div",{className:"mb-2",children:[_.jsx("h3",{className:"text-white font-bold text-lg",children:t.name}),_.jsx("p",{className:"text-white/80 text-sm line-clamp-2",children:t.description})]}),_.jsx("div",{className:"flex items-center mb-3",children:_.jsxs("div",{className:"flex items-center bg-black/30 rounded-full px-3 py-1.5",children:[_.jsx(mD,{size:16,className:"text-white mr-2"}),_.jsx("div",{className:"overflow-hidden",children:_.jsx("p",{className:"text-white text-sm whitespace-nowrap animate-marquee",children:"Fashion Trend Music - Popular TikTok Song"})})]})}),_.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[t.sizes.map(R=>_.jsxs("span",{className:"bg-black/30 text-white text-xs px-2 py-1 rounded-full",children:["Size: ",R]},R)),t.colors.map(R=>_.jsx("span",{className:"bg-black/30 text-white text-xs px-2 py-1 rounded-full",children:R},R)),_.jsxs("span",{className:"bg-black/30 text-white text-xs px-2 py-1 rounded-full",children:[t.currency,t.price]})]}),_.jsxs("button",{onClick:i,className:"w-full bg-pink-500 text-white py-2 rounded-full font-medium flex items-center justify-center",children:[_.jsx(Ky,{size:18,className:"mr-2"}),"Buy Now - ",t.currency,t.price]})]}),u&&_.jsxs("div",{className:"absolute inset-0 bg-black/90 z-50 p-4 overflow-y-auto",children:[_.jsx("button",{onClick:S,className:"absolute top-4 right-4 text-white",children:_.jsx(cD,{size:24})}),_.jsxs("div",{className:"mt-10",children:[_.jsx("h2",{className:"text-white text-xl font-bold mb-4",children:t.name}),_.jsxs("div",{className:"flex items-center mb-4",children:[_.jsx("div",{className:"w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white",children:t.brand.charAt(0)}),_.jsxs("div",{className:"ml-3",children:[_.jsx("p",{className:"text-white font-medium",children:t.brand}),_.jsx("p",{className:"text-white/70 text-xs",children:"Official Store"})]})]}),_.jsx("p",{className:"text-white/80 mb-4",children:t.description}),_.jsxs("div",{className:"mb-4",children:[_.jsx("h3",{className:"text-white font-medium mb-2",children:"Sizes"}),_.jsx("div",{className:"flex flex-wrap gap-2",children:t.sizes.map(R=>_.jsx("span",{className:"bg-white/10 text-white px-3 py-1 rounded-md",children:R},R))})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("h3",{className:"text-white font-medium mb-2",children:"Colors"}),_.jsx("div",{className:"flex flex-wrap gap-2",children:t.colors.map(R=>_.jsx("span",{className:"bg-white/10 text-white px-3 py-1 rounded-md",children:R},R))})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("h3",{className:"text-white font-medium mb-2",children:"Price"}),_.jsxs("p",{className:"text-white text-xl font-bold",children:[t.currency,t.price]})]}),_.jsx("button",{onClick:i,className:"w-full bg-pink-500 text-white py-3 rounded-md font-medium",children:"Buy Now"})]})]})]})},CD=({products:t,onLike:e,onComment:n,onShare:r,onBuyNow:i})=>{const[s,o]=j.useState(0),l=j.useRef(null),u=()=>{if(!l.current)return;const c=l.current,f=c.scrollTop,p=c.clientHeight,m=Math.round(f/p);m!==s&&m>=0&&m<t.length&&o(m)};return j.useEffect(()=>{const c=l.current;if(c)return c.addEventListener("scroll",u),()=>c.removeEventListener("scroll",u)},[s,t.length]),_.jsx("div",{ref:l,className:"h-full overflow-y-scroll snap-y snap-mandatory",style:{scrollSnapType:"y mandatory"},children:t.map((c,f)=>_.jsx("div",{className:"h-full snap-start",children:_.jsx(RD,{product:c,isActive:f===s,onLike:()=>e==null?void 0:e(c),onComment:()=>n==null?void 0:n(c),onShare:()=>r==null?void 0:r(c),onBuyNow:()=>i==null?void 0:i(c)})},c.id))})},ja=()=>{const e=ns().pathname;return _.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-2 z-50",children:_.jsxs("div",{className:"flex justify-around items-center",children:[_.jsxs(Na,{to:"/",className:`flex flex-col items-center ${e==="/"?"text-white":"text-gray-500"}`,children:[_.jsx(dD,{size:24}),_.jsx("span",{className:"text-xs mt-1",children:"Home"})]}),_.jsxs(Na,{to:"/discover",className:`flex flex-col items-center ${e==="/discover"?"text-white":"text-gray-500"}`,children:[_.jsx(iT,{size:24}),_.jsx("span",{className:"text-xs mt-1",children:"Discover"})]}),_.jsx("button",{className:"flex flex-col items-center",children:_.jsx("div",{className:"w-12 h-8 flex items-center justify-center bg-gradient-to-r from-pink-500 to-blue-500 rounded-md",children:_.jsx(gD,{size:20,className:"text-white"})})}),_.jsxs(Na,{to:"/inbox",className:`flex flex-col items-center ${e==="/inbox"?"text-white":"text-gray-500"}`,children:[_.jsx(pD,{size:24}),_.jsx("span",{className:"text-xs mt-1",children:"Inbox"})]}),_.jsxs(Na,{to:"/profile",className:`flex flex-col items-center ${e==="/profile"?"text-white":"text-gray-500"}`,children:[_.jsx(wD,{size:24}),_.jsx("span",{className:"text-xs mt-1",children:"Profile"})]})]})})},PD=["All","Trending","New Arrivals","Summer","Winter","Casual","Formal","Streetwear","Vintage","Sustainable","Luxury","Accessories","Shoes","Dresses","Tops","Bottoms"],xD=["#SummerStyle","#Minimalist","#Vintage","#Sustainable","#OfficeWear","#PartyOutfit","#CasualChic","#StreetStyle"],ND=({products:t})=>{const[e,n]=j.useState("All"),[r,i]=j.useState(""),[s,o]=j.useState([]);j.useEffect(()=>{const u=[...t].sort(()=>.5-Math.random()).slice(0,4);o(u)},[t]);const l=t.filter(u=>{const c=r?u.name.toLowerCase().includes(r.toLowerCase())||u.brand.toLowerCase().includes(r.toLowerCase())||u.category.toLowerCase().includes(r.toLowerCase()):!0,f=e==="All"?!0:u.category===e||e==="Trending"&&s.some(p=>p.id===u.id);return c&&f});return _.jsxs("div",{className:"flex flex-col h-screen overflow-hidden",children:[_.jsxs("div",{className:"flex justify-between items-center py-3 px-4 border-b border-gray-800",children:[_.jsx("div",{className:"text-xl font-bold",children:"Discover"}),_.jsxs("div",{className:"relative w-1/3",children:[_.jsx("input",{type:"text",placeholder:"Search products...",value:r,onChange:u=>i(u.target.value),className:"w-full bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-pink-500"}),_.jsx(iT,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"})]})]}),_.jsxs("div",{className:"flex-1 overflow-y-auto hide-scrollbar",children:[_.jsx("div",{className:"sticky top-0 z-10 bg-black overflow-x-auto whitespace-nowrap py-3 px-4 border-b border-gray-800 hide-scrollbar",children:PD.map(u=>_.jsx("button",{onClick:()=>n(u),className:`px-4 py-1.5 mr-2 rounded-full text-sm font-medium ${e===u?"bg-pink-600 text-white":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,children:u},u))}),(e==="All"||e==="Trending")&&!r&&_.jsxs("div",{className:"px-4 py-5",children:[_.jsxs("div",{className:"flex items-center mb-3",children:[_.jsx(hD,{className:"h-5 w-5 text-pink-500 mr-2"}),_.jsx("h2",{className:"text-lg font-bold",children:"Featured Collections"})]}),_.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:s.map(u=>_.jsxs("div",{className:"relative rounded-lg overflow-hidden bg-gray-900 cursor-pointer",children:[_.jsx("div",{className:"aspect-square overflow-hidden",children:_.jsx("img",{src:u.images[0],alt:u.name,className:"w-full h-full object-cover transition-transform hover:scale-110 duration-500"})}),_.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3",children:[_.jsx("p",{className:"text-white font-medium truncate",children:u.name}),_.jsx("p",{className:"text-gray-300 text-sm",children:u.brand})]}),_.jsx("div",{className:"absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full",children:"Featured"})]},`featured-${u.id}`))})]}),!r&&_.jsxs("div",{className:"px-4 py-3 border-t border-gray-800",children:[_.jsxs("div",{className:"flex items-center mb-3",children:[_.jsx(_D,{className:"h-5 w-5 text-blue-400 mr-2"}),_.jsx("h2",{className:"text-lg font-bold",children:"Trending Tags"})]}),_.jsx("div",{className:"flex flex-wrap gap-2",children:xD.map(u=>_.jsx("button",{className:"bg-gray-800/50 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm flex items-center",children:_.jsx("span",{children:u})},u))})]}),_.jsx("div",{className:"p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",children:l.length>0?l.map(u=>_.jsxs("div",{className:"relative group rounded-lg overflow-hidden bg-gray-900 cursor-pointer transition-all hover:shadow-lg hover:shadow-pink-500/10",children:[_.jsx("div",{className:"aspect-[3/4] overflow-hidden",children:_.jsx("img",{src:u.images[0],alt:u.name,className:"w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"})}),_.jsxs("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3",children:[_.jsx("p",{className:"text-white font-medium truncate",children:u.name}),_.jsxs("div",{className:"flex justify-between items-center mt-1",children:[_.jsx("p",{className:"text-gray-300 text-sm",children:u.brand}),_.jsxs("p",{className:"text-white font-bold",children:[u.currency,u.price]})]})]}),_.jsx("div",{className:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",children:_.jsx("button",{className:"bg-black/50 hover:bg-pink-600 p-1.5 rounded-full text-white",children:_.jsx(rT,{className:"h-4 w-4"})})}),_.jsx("div",{className:"absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full",children:u.category})]},u.id)):_.jsxs("div",{className:"col-span-full flex flex-col justify-center items-center h-40",children:[_.jsx("p",{className:"text-gray-400 mb-2",children:"No products found"}),_.jsx("button",{onClick:()=>{i(""),n("All")},className:"text-pink-500 hover:text-pink-400",children:"Clear filters"})]})})]}),_.jsx("style",{children:`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `})]})};function bD(){const{user:t,loading:e,debugUserState:n}=Ft();j.useEffect(()=>{n()},[n,t]);const r=[{id:"1",name:"Elegant Red Evening Dress",brand:"Versace",price:90,currency:"$",description:"Stunning red evening dress with asymmetric design",images:["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500","https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500","https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500"],category:"Dresses",sizes:["XS","S","M","L"],colors:["Red"],affiliate_url:"https://example.com/dress"},{id:"2",name:"Designer Denim Jacket",brand:"Gucci",price:120,currency:"$",description:"Premium denim jacket with embroidered details",images:["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500","https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500","https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"],category:"Jackets",sizes:["S","M","L","XL"],colors:["Blue"],affiliate_url:"https://example.com/jacket"},{id:"3",name:"Casual Summer Dress",brand:"Zara",price:45,currency:"$",description:"Light and comfortable summer dress with floral pattern",images:["https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?w=500","https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=500","https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500"],category:"Dresses",sizes:["XS","S","M","L"],colors:["White","Floral"],affiliate_url:"https://example.com/summer-dress"},{id:"4",name:"Leather Biker Jacket",brand:"AllSaints",price:299,currency:"$",description:"Classic black leather biker jacket with silver hardware",images:["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500","https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500"],category:"Jackets",sizes:["S","M","L"],colors:["Black"],affiliate_url:"https://example.com/leather-jacket"},{id:"5",name:"Slim Fit Jeans",brand:"Levi's",price:79,currency:"$",description:"Classic blue slim fit jeans with stretch comfort",images:["https://images.unsplash.com/photo-1542272604-787c3835535d?w=500","https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500"],category:"Bottoms",sizes:["28","30","32","34","36"],colors:["Blue"],affiliate_url:"https://example.com/jeans"},{id:"6",name:"Cashmere Sweater",brand:"Uniqlo",price:89,currency:"$",description:"Soft and warm cashmere sweater for winter",images:["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500","https://images.unsplash.com/photo-1611911813383-67769b37a149?w=500"],category:"Tops",sizes:["XS","S","M","L","XL"],colors:["Beige","Gray","Black"],affiliate_url:"https://example.com/sweater"},{id:"7",name:"Floral Maxi Dress",brand:"H&M",price:49,currency:"$",description:"Flowing floral maxi dress perfect for summer",images:["https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500","https://images.unsplash.com/photo-1583846552345-d9650d2c9cca?w=500"],category:"Dresses",sizes:["XS","S","M","L"],colors:["Floral"],affiliate_url:"https://example.com/maxi-dress"},{id:"8",name:"White Sneakers",brand:"Adidas",price:110,currency:"$",description:"Classic white sneakers with comfortable cushioning",images:["https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500","https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500"],category:"Shoes",sizes:["7","8","9","10","11"],colors:["White"],affiliate_url:"https://example.com/sneakers"},{id:"9",name:"Silk Blouse",brand:"Everlane",price:88,currency:"$",description:"Elegant silk blouse for professional settings",images:["https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500","https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500"],category:"Tops",sizes:["XS","S","M","L"],colors:["White","Black","Navy"],affiliate_url:"https://example.com/blouse"},{id:"10",name:"Leather Crossbody Bag",brand:"Coach",price:195,currency:"$",description:"Stylish leather crossbody bag with gold hardware",images:["https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500","https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"],category:"Accessories",sizes:["One Size"],colors:["Brown","Black"],affiliate_url:"https://example.com/bag"},{id:"11",name:"Linen Shirt",brand:"J.Crew",price:65,currency:"$",description:"Breathable linen shirt for summer days",images:["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500","https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=500"],category:"Tops",sizes:["S","M","L","XL"],colors:["White","Blue","Beige"],affiliate_url:"https://example.com/linen-shirt"},{id:"12",name:"Pleated Midi Skirt",brand:"COS",price:99,currency:"$",description:"Elegant pleated midi skirt for office or evening",images:["https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500","https://images.unsplash.com/photo-1577900232427-18219b8349fd?w=500"],category:"Bottoms",sizes:["XS","S","M","L"],colors:["Black","Navy","Beige"],affiliate_url:"https://example.com/skirt"}],i=c=>{console.log(`Liked product: ${c.name}`)},s=c=>{console.log(`Comment on product: ${c.name}`)},o=c=>{console.log(`Share product: ${c.name}`)},l=c=>{console.log(`Buy product: ${c.name}`),window.open(c.affiliate_url,"_blank")};return e?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"})}):_.jsx(aA,{basename:"/fashion-finder",children:_.jsx("div",{className:"min-h-screen bg-black text-white",children:_.jsxs(eA,{children:[_.jsx(Cr,{path:"/",element:t?(console.log("Current user state:",t),t.is_new_user===!0?(sessionStorage.setItem("newUserRegistration","true"),_.jsx(kD,{})):_.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx("div",{className:"flex justify-center items-center py-3 border-b border-gray-800",children:_.jsx("div",{className:"text-lg font-bold",children:"For You"})}),_.jsx("div",{className:"flex-1 overflow-hidden",children:_.jsx(CD,{products:r,onLike:i,onComment:s,onShare:o,onBuyNow:l})}),_.jsx(ja,{})]})):_.jsx(ui,{to:"/auth",replace:!0})}),_.jsx(Cr,{path:"/auth",element:t?_.jsx(ui,{to:"/",replace:!0}):_.jsx(aD,{})}),_.jsx(Cr,{path:"/preferences",element:t?_.jsx(AD,{}):_.jsx(ui,{to:"/auth",replace:!0})}),_.jsx(Cr,{path:"/discover",element:t?_.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx(ND,{products:r}),_.jsx(ja,{})]}):_.jsx(ui,{to:"/auth",replace:!0})}),_.jsx(Cr,{path:"/inbox",element:t?_.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx("div",{className:"flex justify-center items-center py-3 border-b border-gray-800",children:_.jsx("div",{className:"text-lg font-bold",children:"Inbox"})}),_.jsx("div",{className:"flex-1 flex items-center justify-center",children:_.jsx("p",{className:"text-gray-400",children:"Inbox page coming soon"})}),_.jsx(ja,{})]}):_.jsx(ui,{to:"/auth",replace:!0})}),_.jsx(Cr,{path:"/profile",element:t?_.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx("div",{className:"flex justify-center items-center py-3 border-b border-gray-800",children:_.jsx("div",{className:"text-lg font-bold",children:"Profile"})}),_.jsx("div",{className:"flex-1 flex items-center justify-center",children:_.jsx("p",{className:"text-gray-400",children:"Profile page coming soon"})}),_.jsx(ja,{})]}):_.jsx(ui,{to:"/auth",replace:!0})})]})})})}a0(document.getElementById("root")).render(_.jsx(j.StrictMode,{children:_.jsx(bD,{})}));
