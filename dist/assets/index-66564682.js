(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function ec(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ve={},rs=[],Ct=()=>{},Ug=()=>!1,Vg=/^on[^a-z]/,Fi=t=>Vg.test(t),tc=t=>t.startsWith("onUpdate:"),Fe=Object.assign,nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jg=Object.prototype.hasOwnProperty,ee=(t,e)=>jg.call(t,e),K=Array.isArray,is=t=>$i(t)==="[object Map]",Bh=t=>$i(t)==="[object Set]",Y=t=>typeof t=="function",ke=t=>typeof t=="string",sc=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",rc=t=>Ee(t)&&Y(t.then)&&Y(t.catch),Uh=Object.prototype.toString,$i=t=>Uh.call(t),zg=t=>$i(t).slice(8,-1),Vh=t=>$i(t)==="[object Object]",ic=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qg=/-(\w)/g,Ut=Bi(t=>t.replace(qg,(e,n)=>n?n.toUpperCase():"")),Hg=/\B([A-Z])/g,Ss=Bi(t=>t.replace(Hg,"-$1").toLowerCase()),Ui=Bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ao=Bi(t=>t?`on${Ui(t)}`:""),sr=(t,e)=>!Object.is(t,e),xo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kg=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Wg=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Rl;const ia=()=>Rl||(Rl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ke(s)?Xg(s):oc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ke(t))return t;if(Ee(t))return t}}const Gg=/;(?![^(]*\))/g,Qg=/:([^]+)/,Yg=/\/\*[^]*?\*\//g;function Xg(t){const e={};return t.replace(Yg,"").split(Gg).forEach(n=>{if(n){const s=n.split(Qg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vi(t){let e="";if(ke(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=Vi(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zg=ec(Jg);function jh(t){return!!t||t===""}const vt=t=>ke(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===Uh||!Y(t.toString))?JSON.stringify(t,zh,2):String(t),zh=(t,e)=>e&&e.__v_isRef?zh(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Bh(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!K(e)&&!Vh(e)?String(e):e;let _t;class em{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function tm(t,e=_t){e&&e.active&&e.effects.push(t)}function nm(){return _t}const ac=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qh=t=>(t.w&vn)>0,Hh=t=>(t.n&vn)>0,sm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vn},rm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];qh(r)&&!Hh(r)?r.delete(t):e[n++]=r,r.w&=~vn,r.n&=~vn}e.length=n}},oa=new WeakMap;let $s=0,vn=1;const aa=30;let It;const $n=Symbol(""),ca=Symbol("");class cc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tm(this,s)}run(){if(!this.active)return this.fn();let e=It,n=un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,un=!0,vn=1<<++$s,$s<=aa?sm(this):Nl(this),this.fn()}finally{$s<=aa&&rm(this),vn=1<<--$s,It=this.parent,un=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&(Nl(this),this.onStop&&this.onStop(),this.active=!1)}}function Nl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let un=!0;const Kh=[];function As(){Kh.push(un),un=!1}function xs(){const t=Kh.pop();un=t===void 0?!0:t}function ut(t,e,n){if(un&&It){let s=oa.get(t);s||oa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=ac()),Wh(r)}}function Wh(t,e){let n=!1;$s<=aa?Hh(t)||(t.n|=vn,n=!qh(t)):n=!t.has(It),n&&(t.add(It),It.deps.push(t))}function Gt(t,e,n,s,r,i){const o=oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?ic(n)&&a.push(o.get("length")):(a.push(o.get($n)),is(t)&&a.push(o.get(ca)));break;case"delete":K(t)||(a.push(o.get($n)),is(t)&&a.push(o.get(ca)));break;case"set":is(t)&&a.push(o.get($n));break}if(a.length===1)a[0]&&la(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);la(ac(c))}}function la(t,e){const n=K(t)?t:[...t];for(const s of n)s.computed&&Ol(s);for(const s of n)s.computed||Ol(s)}function Ol(t,e){(t!==It||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const im=ec("__proto__,__v_isRef,__isVue"),Gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sc)),om=lc(),am=lc(!1,!0),cm=lc(!0),Pl=lm();function lm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)ut(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As();const s=re(this)[e].apply(this,n);return xs(),s}}),t}function um(t){const e=re(this);return ut(e,"has",t),e.hasOwnProperty(t)}function lc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Sm:Zh:e?Jh:Xh).get(s))return s;const o=K(s);if(!t){if(o&&ee(Pl,r))return Reflect.get(Pl,r,i);if(r==="hasOwnProperty")return um}const a=Reflect.get(s,r,i);return(sc(r)?Gh.has(r):im(r))||(t||ut(s,"get",r),e)?a:Xe(a)?o&&ic(r)?a:a.value:Ee(a)?t?tf(a):Cr(a):a}}const hm=Qh(),fm=Qh(!0);function Qh(t=!1){return function(n,s,r,i){let o=n[s];if(ps(o)&&Xe(o)&&!Xe(r))return!1;if(!t&&(!gi(r)&&!ps(r)&&(o=re(o),r=re(r)),!K(n)&&Xe(o)&&!Xe(r)))return o.value=r,!0;const a=K(n)&&ic(s)?Number(s)<n.length:ee(n,s),c=Reflect.set(n,s,r,i);return n===re(i)&&(a?sr(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),c}}function dm(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function pm(t,e){const n=Reflect.has(t,e);return(!sc(e)||!Gh.has(e))&&ut(t,"has",e),n}function gm(t){return ut(t,"iterate",K(t)?"length":$n),Reflect.ownKeys(t)}const Yh={get:om,set:hm,deleteProperty:dm,has:pm,ownKeys:gm},mm={get:cm,set(t,e){return!0},deleteProperty(t,e){return!0}},ym=Fe({},Yh,{get:am,set:fm}),uc=t=>t,ji=t=>Reflect.getPrototypeOf(t);function Hr(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&ut(r,"get",e),ut(r,"get",i));const{has:o}=ji(r),a=s?uc:n?dc:rr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Kr(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&ut(s,"has",t),ut(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Wr(t,e=!1){return t=t.__v_raw,!e&&ut(re(t),"iterate",$n),Reflect.get(t,"size",t)}function Ml(t){t=re(t);const e=re(this);return ji(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Ll(t,e){e=re(e);const n=re(this),{has:s,get:r}=ji(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?sr(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Fl(t){const e=re(this),{has:n,get:s}=ji(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function $l(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function Gr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?uc:t?dc:rr;return!t&&ut(a,"iterate",$n),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Qr(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=is(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?uc:e?dc:rr;return!e&&ut(i,"iterate",c?ca:$n),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function vm(){const t={get(i){return Hr(this,i)},get size(){return Wr(this)},has:Kr,add:Ml,set:Ll,delete:Fl,clear:$l,forEach:Gr(!1,!1)},e={get(i){return Hr(this,i,!1,!0)},get size(){return Wr(this)},has:Kr,add:Ml,set:Ll,delete:Fl,clear:$l,forEach:Gr(!1,!0)},n={get(i){return Hr(this,i,!0)},get size(){return Wr(this,!0)},has(i){return Kr.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Gr(!0,!1)},s={get(i){return Hr(this,i,!0,!0)},get size(){return Wr(this,!0)},has(i){return Kr.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qr(i,!1,!1),n[i]=Qr(i,!0,!1),e[i]=Qr(i,!1,!0),s[i]=Qr(i,!0,!0)}),[t,n,e,s]}const[wm,Em,_m,bm]=vm();function hc(t,e){const n=e?t?bm:_m:t?Em:wm;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ee(n,r)&&r in s?n:s,r,i)}const Im={get:hc(!1,!1)},Tm={get:hc(!1,!0)},Cm={get:hc(!0,!1)},Xh=new WeakMap,Jh=new WeakMap,Zh=new WeakMap,Sm=new WeakMap;function Am(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Am(zg(t))}function Cr(t){return ps(t)?t:fc(t,!1,Yh,Im,Xh)}function ef(t){return fc(t,!1,ym,Tm,Jh)}function tf(t){return fc(t,!0,mm,Cm,Zh)}function fc(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=xm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function os(t){return ps(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function ps(t){return!!(t&&t.__v_isReadonly)}function gi(t){return!!(t&&t.__v_isShallow)}function nf(t){return os(t)||ps(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function sf(t){return pi(t,"__v_skip",!0),t}const rr=t=>Ee(t)?Cr(t):t,dc=t=>Ee(t)?tf(t):t;function rf(t){un&&It&&(t=re(t),Wh(t.dep||(t.dep=ac())))}function of(t,e){t=re(t);const n=t.dep;n&&la(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function pc(t){return af(t,!1)}function Dm(t){return af(t,!0)}function af(t,e){return Xe(t)?t:new km(t,e)}class km{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:rr(e)}get value(){return rf(this),this._value}set value(e){const n=this.__v_isShallow||gi(e)||ps(e);e=n?e:re(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rr(e),of(this))}}function ft(t){return Xe(t)?t.value:t}const Rm={get:(t,e,n)=>ft(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function cf(t){return os(t)?t:new Proxy(t,Rm)}class Nm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new cc(e,()=>{this._dirty||(this._dirty=!0,of(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return rf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Om(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new Nm(s,r,i||!r,n)}function hn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Sr(i,e,n)}return r}function St(t,e,n,s){if(Y(t)){const i=hn(t,e,n,s);return i&&rc(i)&&i.catch(o=>{Sr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(St(t[i],e,n,s));return r}function Sr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){hn(c,null,10,[t,o,a]);return}}Pm(t,n,r,s)}function Pm(t,e,n,s=!0){console.error(t)}let ir=!1,ua=!1;const Ye=[];let Nt=0;const as=[];let Kt=null,Rn=0;const lf=Promise.resolve();let gc=null;function uf(t){const e=gc||lf;return t?e.then(this?t.bind(this):t):e}function Mm(t){let e=Nt+1,n=Ye.length;for(;e<n;){const s=e+n>>>1;or(Ye[s])<t?e=s+1:n=s}return e}function mc(t){(!Ye.length||!Ye.includes(t,ir&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?Ye.push(t):Ye.splice(Mm(t.id),0,t),hf())}function hf(){!ir&&!ua&&(ua=!0,gc=lf.then(pf))}function Lm(t){const e=Ye.indexOf(t);e>Nt&&Ye.splice(e,1)}function ff(t){K(t)?as.push(...t):(!Kt||!Kt.includes(t,t.allowRecurse?Rn+1:Rn))&&as.push(t),hf()}function Bl(t,e=ir?Nt+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function df(t){if(as.length){const e=[...new Set(as)];if(as.length=0,Kt){Kt.push(...e);return}for(Kt=e,Kt.sort((n,s)=>or(n)-or(s)),Rn=0;Rn<Kt.length;Rn++)Kt[Rn]();Kt=null,Rn=0}}const or=t=>t.id==null?1/0:t.id,Fm=(t,e)=>{const n=or(t)-or(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pf(t){ua=!1,ir=!0,Ye.sort(Fm);const e=Ct;try{for(Nt=0;Nt<Ye.length;Nt++){const n=Ye[Nt];n&&n.active!==!1&&hn(n,null,14)}}finally{Nt=0,Ye.length=0,df(),ir=!1,gc=null,(Ye.length||as.length)&&pf()}}function $m(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ve;f&&(r=n.map(g=>ke(g)?g.trim():g)),h&&(r=n.map(Kg))}let a,c=s[a=Ao(e)]||s[a=Ao(Ut(e))];!c&&i&&(c=s[a=Ao(Ss(e))]),c&&St(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,r)}}function gf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=gf(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Fe(o,i),Ee(t)&&s.set(t,o),o)}function zi(t,e){return!t||!Fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Ss(e))||ee(t,e))}let Je=null,qi=null;function mi(t){const e=Je;return Je=t,qi=t&&t.type.__scopeId||null,e}function Ar(t){qi=t}function xr(){qi=null}function Hs(t,e=Je,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Xl(-1);const i=mi(e);let o;try{o=t(...r)}finally{mi(i),s._d&&Xl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Do(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:T}=t;let x,P;const N=mi(t);try{if(n.shapeFlag&4){const b=r||s;x=bt(u.call(b,b,h,i,g,f,y)),P=c}else{const b=e;x=bt(b.length>1?b(i,{attrs:c,slots:a,emit:l}):b(i,null)),P=e.props?c:Um(c)}}catch(b){Gs.length=0,Sr(b,t,1),x=_e(wn)}let z=x;if(P&&T!==!1){const b=Object.keys(P),{shapeFlag:H}=z;b.length&&H&7&&(o&&b.some(tc)&&(P=Vm(P,o)),z=ms(z,P))}return n.dirs&&(z=ms(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),x=z,mi(N),x}function Bm(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(cr(s)){if(s.type!==wn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Um=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fi(n))&&((e||(e={}))[n]=t[n]);return e},Vm=(t,e)=>{const n={};for(const s in t)(!tc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jm(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ul(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!zi(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ul(s,o,l):!0:!!o;return!1}function Ul(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!zi(n,i))return!0}return!1}function yc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zm=t=>t.__isSuspense,qm={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?Km(e,n,s,r,i,o,a,c,l):Wm(t,e,n,s,r,o,a,c,l)},hydrate:Gm,create:vc,normalize:Qm},Hm=qm;function ar(t,e){const n=t.props&&t.props[e];Y(n)&&n()}function Km(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=vc(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(ar(t,"onPending"),ar(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),cs(f,t.ssFallback)):f.resolve(!1,!0)}function Wm(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,g=e.ssFallback,{activeBranch:y,pendingBranch:T,isInFallback:x,isHydrating:P}=h;if(T)h.pendingBranch=f,an(f,T)?(c(T,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():x&&(c(y,g,n,s,r,null,i,o,a),cs(h,g))):(h.pendingId++,P?(h.isHydrating=!1,h.activeBranch=T):l(T,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),x?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(y,g,n,s,r,null,i,o,a),cs(h,g))):y&&an(f,y)?(c(y,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&an(f,y))c(y,f,n,s,r,h,i,o,a),cs(h,f);else if(ar(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:N,pendingId:z}=h;N>0?setTimeout(()=>{h.pendingId===z&&h.fallback(g)},N):N===0&&h.fallback(g)}}function vc(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:g,n:y,o:{parentNode:T,remove:x}}=l;let P;const N=Xm(t);N&&e!=null&&e.pendingBranch&&(P=e.pendingId,e.deps++);const z=t.props?Wg(t.props.timeout):void 0,b={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(H=!1,ie=!1){const{vnode:ye,activeBranch:pe,pendingBranch:Ie,pendingId:Oe,effects:qe,parentComponent:gt,container:He}=b;if(b.isHydrating)b.isHydrating=!1;else if(!H){const Te=pe&&Ie.transition&&Ie.transition.mode==="out-in";Te&&(pe.transition.afterLeave=()=>{Oe===b.pendingId&&f(Ie,He,se,0)});let{anchor:se}=b;pe&&(se=y(pe),g(pe,gt,b,!0)),Te||f(Ie,He,se,0)}cs(b,Ie),b.pendingBranch=null,b.isInFallback=!1;let wt=b.parent,zt=!1;for(;wt;){if(wt.pendingBranch){wt.effects.push(...qe),zt=!0;break}wt=wt.parent}zt||ff(qe),b.effects=[],N&&e&&e.pendingBranch&&P===e.pendingId&&(e.deps--,e.deps===0&&!ie&&e.resolve()),ar(ye,"onResolve")},fallback(H){if(!b.pendingBranch)return;const{vnode:ie,activeBranch:ye,parentComponent:pe,container:Ie,isSVG:Oe}=b;ar(ie,"onFallback");const qe=y(ye),gt=()=>{b.isInFallback&&(h(null,H,Ie,qe,pe,null,Oe,a,c),cs(b,H))},He=H.transition&&H.transition.mode==="out-in";He&&(ye.transition.afterLeave=gt),b.isInFallback=!0,g(ye,pe,null,!0),He||gt()},move(H,ie,ye){b.activeBranch&&f(b.activeBranch,H,ie,ye),b.container=H},next(){return b.activeBranch&&y(b.activeBranch)},registerDep(H,ie){const ye=!!b.pendingBranch;ye&&b.deps++;const pe=H.vnode.el;H.asyncDep.catch(Ie=>{Sr(Ie,H,0)}).then(Ie=>{if(H.isUnmounted||b.isUnmounted||b.pendingId!==H.suspenseId)return;H.asyncResolved=!0;const{vnode:Oe}=H;ma(H,Ie,!1),pe&&(Oe.el=pe);const qe=!pe&&H.subTree.el;ie(H,Oe,T(pe||H.subTree.el),pe?null:y(H.subTree),b,o,c),qe&&x(qe),yc(H,Oe.el),ye&&--b.deps===0&&b.resolve()})},unmount(H,ie){b.isUnmounted=!0,b.activeBranch&&g(b.activeBranch,n,H,ie),b.pendingBranch&&g(b.pendingBranch,n,H,ie)}};return b}function Gm(t,e,n,s,r,i,o,a,c){const l=e.suspense=vc(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Qm(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Vl(s?n.default:n),t.ssFallback=s?Vl(n.fallback):_e(wn)}function Vl(t){let e;if(Y(t)){const n=gs&&t._c;n&&(t._d=!1,De()),t=t(),n&&(t._d=!0,e=yt,Pf())}return K(t)&&(t=Bm(t)),t=bt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ym(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):ff(t)}function cs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,yc(s,r))}function Xm(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Yr={};function ai(t,e,n){return mf(t,e,n)}function mf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){var a;const c=nm()===((a=Le)==null?void 0:a.scope)?Le:null;let l,u=!1,h=!1;if(Xe(t)?(l=()=>t.value,u=gi(t)):os(t)?(l=()=>t,s=!0):K(t)?(h=!0,u=t.some(b=>os(b)||gi(b)),l=()=>t.map(b=>{if(Xe(b))return b.value;if(os(b))return ns(b);if(Y(b))return hn(b,c,2)})):Y(t)?e?l=()=>hn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),St(t,c,3,[g])}:l=Ct,e&&s){const b=l;l=()=>ns(b())}let f,g=b=>{f=N.onStop=()=>{hn(b,c,4)}},y;if(lr)if(g=Ct,e?n&&St(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const b=Hy();y=b.__watcherHandles||(b.__watcherHandles=[])}else return Ct;let T=h?new Array(t.length).fill(Yr):Yr;const x=()=>{if(N.active)if(e){const b=N.run();(s||u||(h?b.some((H,ie)=>sr(H,T[ie])):sr(b,T)))&&(f&&f(),St(e,c,3,[b,T===Yr?void 0:h&&T[0]===Yr?[]:T,g]),T=b)}else N.run()};x.allowRecurse=!!e;let P;r==="sync"?P=x:r==="post"?P=()=>ot(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),P=()=>mc(x));const N=new cc(l,P);e?n?x():T=N.run():r==="post"?ot(N.run.bind(N),c&&c.suspense):N.run();const z=()=>{N.stop(),c&&c.scope&&nc(c.scope.effects,N)};return y&&y.push(z),z}function Jm(t,e,n){const s=this.proxy,r=ke(t)?t.includes(".")?yf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Le;En(this);const a=mf(r,i.bind(s),n);return o?En(o):fn(),a}function yf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ns(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))ns(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)ns(t[n],e);else if(Bh(t)||is(t))t.forEach(n=>{ns(n,e)});else if(Vh(t))for(const n in t)ns(t[n],e);return t}function xn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(As(),St(c,n,8,[t.el,a,t,e]),xs())}}function vf(t,e){return Y(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const Ks=t=>!!t.type.__asyncLoader,wf=t=>t.type.__isKeepAlive;function Zm(t,e){Ef(t,"a",e)}function ey(t,e){Ef(t,"da",e)}function Ef(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wf(r.parent.vnode)&&ty(s,e,n,r),r=r.parent}}function ty(t,e,n,s){const r=Hi(e,t,s,!0);_f(()=>{nc(s[e],r)},n)}function Hi(t,e,n=Le,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As(),En(n);const a=St(e,n,t,o);return fn(),xs(),a});return s?r.unshift(i):r.push(i),i}}const Zt=t=>(e,n=Le)=>(!lr||t==="sp")&&Hi(t,(...s)=>e(...s),n),ny=Zt("bm"),sy=Zt("m"),ry=Zt("bu"),iy=Zt("u"),oy=Zt("bum"),_f=Zt("um"),ay=Zt("sp"),cy=Zt("rtg"),ly=Zt("rtc");function uy(t,e=Le){Hi("ec",t,e)}const bf="components";function If(t,e){return fy(bf,t,!0,e)||t}const hy=Symbol.for("v-ndc");function fy(t,e,n=!0,s=!1){const r=Je||Le;if(r){const i=r.type;if(t===bf){const a=jy(i,!1);if(a&&(a===e||a===Ut(e)||a===Ui(Ut(e))))return i}const o=jl(r[t]||i[t],e)||jl(r.appContext[t],e);return!o&&s?i:o}}function jl(t,e){return t&&(t[e]||t[Ut(e)]||t[Ui(Ut(e))])}function yi(t,e,n,s){let r;const i=n&&n[s];if(K(t)||ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function dy(t,e,n={},s,r){if(Je.isCE||Je.parent&&Ks(Je.parent)&&Je.parent.isCE)return e!=="default"&&(n.name=e),_e("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),De();const o=i&&Tf(i(n)),a=Lf(Me,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Tf(t){return t.some(e=>cr(e)?!(e.type===wn||e.type===Me&&!Tf(e.children)):!0)?t:null}const ha=t=>t?$f(t)?Tc(t)||t.proxy:ha(t.parent):null,Ws=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ha(t.parent),$root:t=>ha(t.root),$emit:t=>t.emit,$options:t=>wc(t),$forceUpdate:t=>t.f||(t.f=()=>mc(t.update)),$nextTick:t=>t.n||(t.n=uf.bind(t.proxy)),$watch:t=>Jm.bind(t)}),ko=(t,e)=>t!==ve&&!t.__isScriptSetup&&ee(t,e),py={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ko(s,e))return o[e]=1,s[e];if(r!==ve&&ee(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==ve&&ee(n,e))return o[e]=4,n[e];fa&&(o[e]=0)}}const u=Ws[e];let h,f;if(u)return e==="$attrs"&&ut(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ko(r,e)?(r[e]=n,!0):s!==ve&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ee(t,o)||ko(e,o)||(a=i[0])&&ee(a,o)||ee(s,o)||ee(Ws,o)||ee(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zl(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Cf(t){const e=Fy();let n=t();return fn(),rc(n)&&(n=n.catch(s=>{throw En(e),s})),[n,()=>En(e)]}let fa=!0;function gy(t){const e=wc(t),n=t.proxy,s=t.ctx;fa=!1,e.beforeCreate&&ql(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:T,deactivated:x,beforeDestroy:P,beforeUnmount:N,destroyed:z,unmounted:b,render:H,renderTracked:ie,renderTriggered:ye,errorCaptured:pe,serverPrefetch:Ie,expose:Oe,inheritAttrs:qe,components:gt,directives:He,filters:wt}=e;if(l&&my(l,s,null),o)for(const se in o){const oe=o[se];Y(oe)&&(s[se]=oe.bind(n))}if(r){const se=r.call(n,n);Ee(se)&&(t.data=Cr(se))}if(fa=!0,i)for(const se in i){const oe=i[se],qt=Y(oe)?oe.bind(n,n):Y(oe.get)?oe.get.bind(n,n):Ct,tn=!Y(oe)&&Y(oe.set)?oe.set.bind(n):Ct,Dt=Tt({get:qt,set:tn});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:it=>Dt.value=it})}if(a)for(const se in a)Sf(a[se],s,n,se);if(c){const se=Y(c)?c.call(n):c;Reflect.ownKeys(se).forEach(oe=>{ci(oe,se[oe])})}u&&ql(u,t,"c");function Te(se,oe){K(oe)?oe.forEach(qt=>se(qt.bind(n))):oe&&se(oe.bind(n))}if(Te(ny,h),Te(sy,f),Te(ry,g),Te(iy,y),Te(Zm,T),Te(ey,x),Te(uy,pe),Te(ly,ie),Te(cy,ye),Te(oy,N),Te(_f,b),Te(ay,Ie),K(Oe))if(Oe.length){const se=t.exposed||(t.exposed={});Oe.forEach(oe=>{Object.defineProperty(se,oe,{get:()=>n[oe],set:qt=>n[oe]=qt})})}else t.exposed||(t.exposed={});H&&t.render===Ct&&(t.render=H),qe!=null&&(t.inheritAttrs=qe),gt&&(t.components=gt),He&&(t.directives=He)}function my(t,e,n=Ct){K(t)&&(t=da(t));for(const s in t){const r=t[s];let i;Ee(r)?"default"in r?i=Ft(r.from||s,r.default,!0):i=Ft(r.from||s):i=Ft(r),Xe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function ql(t,e,n){St(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sf(t,e,n,s){const r=s.includes(".")?yf(n,s):()=>n[s];if(ke(t)){const i=e[t];Y(i)&&ai(r,i)}else if(Y(t))ai(r,t.bind(n));else if(Ee(t))if(K(t))t.forEach(i=>Sf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&ai(r,i,t)}}function wc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>vi(c,l,o,!0)),vi(c,e,o)),Ee(e)&&i.set(e,c),c}function vi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&vi(t,i,n,!0),r&&r.forEach(o=>vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=yy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yy={data:Hl,props:Kl,emits:Kl,methods:Bs,computed:Bs,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Bs,directives:Bs,watch:wy,provide:Hl,inject:vy};function Hl(t,e){return e?t?function(){return Fe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function vy(t,e){return Bs(da(t),da(e))}function da(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Fe(Object.create(null),t,e):e}function Kl(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Fe(Object.create(null),zl(t),zl(e??{})):e}function wy(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=st(t[s],e[s]);return n}function Af(){return{app:null,config:{isNativeTag:Ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ey=0;function _y(t,e){return function(s,r=null){Y(s)||(s=Fe({},s)),r!=null&&!Ee(r)&&(r=null);const i=Af(),o=new Set;let a=!1;const c=i.app={_uid:Ey++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ky,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=_e(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Tc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){wi=c;try{return l()}finally{wi=null}}};return c}}let wi=null;function ci(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Ft(t,e,n=!1){const s=Le||Je;if(s||wi){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:wi._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function by(t,e,n,s=!1){const r={},i={};pi(i,Wi,1),t.propsDefaults=Object.create(null),xf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ef(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Iy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(zi(t.emitsOptions,f))continue;const g=e[f];if(c)if(ee(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Ut(f);r[y]=pa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{xf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ee(e,h)&&((u=Ss(h))===h||!ee(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=pa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ee(e,h))&&(delete i[h],l=!0)}l&&Gt(t,"set","$attrs")}function xf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const l=e[c];let u;r&&ee(r,u=Ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:zi(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=re(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=pa(r,c,h,l[h],t,!ee(l,h))}}return o}function pa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(En(r),s=l[n]=c.call(null,e),fn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ss(n))&&(s=!0))}return s}function Df(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[f,g]=Df(h,e,!0);Fe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ee(t)&&s.set(t,rs),rs;if(K(i))for(let u=0;u<i.length;u++){const h=Ut(i[u]);Wl(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Ut(u);if(Wl(h)){const f=i[u],g=o[h]=K(f)||Y(f)?{type:f}:Fe({},f);if(g){const y=Yl(Boolean,g.type),T=Yl(String,g.type);g[0]=y>-1,g[1]=T<0||y<T,(y>-1||ee(g,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&s.set(t,l),l}function Wl(t){return t[0]!=="$"}function Gl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ql(t,e){return Gl(t)===Gl(e)}function Yl(t,e){return K(e)?e.findIndex(n=>Ql(n,t)):Y(e)&&Ql(e,t)?0:-1}const kf=t=>t[0]==="_"||t==="$stable",Ec=t=>K(t)?t.map(bt):[bt(t)],Ty=(t,e,n)=>{if(e._n)return e;const s=Hs((...r)=>Ec(e(...r)),n);return s._c=!1,s},Rf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(kf(r))continue;const i=t[r];if(Y(i))e[r]=Ty(r,i,s);else if(i!=null){const o=Ec(i);e[r]=()=>o}}},Nf=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},Cy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),pi(e,"_",n)):Rf(e,t.slots={})}else t.slots={},e&&Nf(t,e);pi(t.slots,Wi,1)},Sy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Rf(e,r)),o=e}else e&&(Nf(t,e),o={default:1});if(i)for(const a in r)!kf(a)&&!(a in o)&&delete r[a]};function ga(t,e,n,s,r=!1){if(K(t)){t.forEach((f,g)=>ga(f,e&&(K(e)?e[g]:e),n,s,r));return}if(Ks(s)&&!r)return;const i=s.shapeFlag&4?Tc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ke(l)?(u[l]=null,ee(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),Y(c))hn(c,a,12,[o,u]);else{const f=ke(c),g=Xe(c);if(f||g){const y=()=>{if(t.f){const T=f?ee(h,c)?h[c]:u[c]:c.value;r?K(T)&&nc(T,i):K(T)?T.includes(i)||T.push(i):f?(u[c]=[i],ee(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ee(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ot(y,n)):y()}}}const ot=Ym;function Ay(t){return xy(t)}function xy(t,e){const n=ia();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ct,insertStaticContent:y}=t,T=(d,p,m,v=null,E=null,_=null,O=!1,S=null,D=!!p.dynamicChildren)=>{if(d===p)return;d&&!an(d,p)&&(v=w(d),it(d,E,_,!0),d=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:I,ref:V,shapeFlag:L}=p;switch(I){case Ki:x(d,p,m,v);break;case wn:P(d,p,m,v);break;case li:d==null&&N(p,m,v,O);break;case Me:gt(d,p,m,v,E,_,O,S,D);break;default:L&1?H(d,p,m,v,E,_,O,S,D):L&6?He(d,p,m,v,E,_,O,S,D):(L&64||L&128)&&I.process(d,p,m,v,E,_,O,S,D,k)}V!=null&&E&&ga(V,d&&d.ref,_,p||d,!p)},x=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},P=(d,p,m,v)=>{d==null?s(p.el=c(p.children||""),m,v):p.el=d.el},N=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},z=({el:d,anchor:p},m,v)=>{let E;for(;d&&d!==p;)E=f(d),s(d,m,v),d=E;s(p,m,v)},b=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},H=(d,p,m,v,E,_,O,S,D)=>{O=O||p.type==="svg",d==null?ie(p,m,v,E,_,O,S,D):Ie(d,p,E,_,O,S,D)},ie=(d,p,m,v,E,_,O,S)=>{let D,I;const{type:V,props:L,shapeFlag:j,transition:G,dirs:J}=d;if(D=d.el=o(d.type,_,L&&L.is,L),j&8?u(D,d.children):j&16&&pe(d.children,D,null,v,E,_&&V!=="foreignObject",O,S),J&&xn(d,null,v,"created"),ye(D,d,d.scopeId,O,v),L){for(const fe in L)fe!=="value"&&!oi(fe)&&i(D,fe,null,L[fe],_,d.children,v,E,Ke);"value"in L&&i(D,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Rt(I,v,d)}J&&xn(d,null,v,"beforeMount");const ge=(!E||E&&!E.pendingBranch)&&G&&!G.persisted;ge&&G.beforeEnter(D),s(D,p,m),((I=L&&L.onVnodeMounted)||ge||J)&&ot(()=>{I&&Rt(I,v,d),ge&&G.enter(D),J&&xn(d,null,v,"mounted")},E)},ye=(d,p,m,v,E)=>{if(m&&g(d,m),v)for(let _=0;_<v.length;_++)g(d,v[_]);if(E){let _=E.subTree;if(p===_){const O=E.vnode;ye(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},pe=(d,p,m,v,E,_,O,S,D=0)=>{for(let I=D;I<d.length;I++){const V=d[I]=S?rn(d[I]):bt(d[I]);T(null,V,p,m,v,E,_,O,S)}},Ie=(d,p,m,v,E,_,O)=>{const S=p.el=d.el;let{patchFlag:D,dynamicChildren:I,dirs:V}=p;D|=d.patchFlag&16;const L=d.props||ve,j=p.props||ve;let G;m&&Dn(m,!1),(G=j.onVnodeBeforeUpdate)&&Rt(G,m,p,d),V&&xn(p,d,m,"beforeUpdate"),m&&Dn(m,!0);const J=E&&p.type!=="foreignObject";if(I?Oe(d.dynamicChildren,I,S,m,v,J,_):O||oe(d,p,S,null,m,v,J,_,!1),D>0){if(D&16)qe(S,p,L,j,m,v,E);else if(D&2&&L.class!==j.class&&i(S,"class",null,j.class,E),D&4&&i(S,"style",L.style,j.style,E),D&8){const ge=p.dynamicProps;for(let fe=0;fe<ge.length;fe++){const Se=ge[fe],Et=L[Se],Yn=j[Se];(Yn!==Et||Se==="value")&&i(S,Se,Et,Yn,E,d.children,m,v,Ke)}}D&1&&d.children!==p.children&&u(S,p.children)}else!O&&I==null&&qe(S,p,L,j,m,v,E);((G=j.onVnodeUpdated)||V)&&ot(()=>{G&&Rt(G,m,p,d),V&&xn(p,d,m,"updated")},v)},Oe=(d,p,m,v,E,_,O)=>{for(let S=0;S<p.length;S++){const D=d[S],I=p[S],V=D.el&&(D.type===Me||!an(D,I)||D.shapeFlag&70)?h(D.el):m;T(D,I,V,null,v,E,_,O,!0)}},qe=(d,p,m,v,E,_,O)=>{if(m!==v){if(m!==ve)for(const S in m)!oi(S)&&!(S in v)&&i(d,S,m[S],null,O,p.children,E,_,Ke);for(const S in v){if(oi(S))continue;const D=v[S],I=m[S];D!==I&&S!=="value"&&i(d,S,I,D,O,p.children,E,_,Ke)}"value"in v&&i(d,"value",m.value,v.value)}},gt=(d,p,m,v,E,_,O,S,D)=>{const I=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:G}=p;G&&(S=S?S.concat(G):G),d==null?(s(I,m,v),s(V,m,v),pe(p.children,m,V,E,_,O,S,D)):L>0&&L&64&&j&&d.dynamicChildren?(Oe(d.dynamicChildren,j,m,E,_,O,S),(p.key!=null||E&&p===E.subTree)&&Of(d,p,!0)):oe(d,p,m,V,E,_,O,S,D)},He=(d,p,m,v,E,_,O,S,D)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?E.ctx.activate(p,m,v,O,D):wt(p,m,v,E,_,O,D):zt(d,p,D)},wt=(d,p,m,v,E,_,O)=>{const S=d.component=Ly(d,v,E);if(wf(d)&&(S.ctx.renderer=k),$y(S),S.asyncDep){if(E&&E.registerDep(S,Te),!d.el){const D=S.subTree=_e(wn);P(null,D,p,m)}return}Te(S,d,p,m,E,_,O)},zt=(d,p,m)=>{const v=p.component=d.component;if(jm(d,p,m))if(v.asyncDep&&!v.asyncResolved){se(v,p,m);return}else v.next=p,Lm(v.update),v.update();else p.el=d.el,v.vnode=p},Te=(d,p,m,v,E,_,O)=>{const S=()=>{if(d.isMounted){let{next:V,bu:L,u:j,parent:G,vnode:J}=d,ge=V,fe;Dn(d,!1),V?(V.el=J.el,se(d,V,O)):V=J,L&&xo(L),(fe=V.props&&V.props.onVnodeBeforeUpdate)&&Rt(fe,G,V,J),Dn(d,!0);const Se=Do(d),Et=d.subTree;d.subTree=Se,T(Et,Se,h(Et.el),w(Et),d,E,_),V.el=Se.el,ge===null&&yc(d,Se.el),j&&ot(j,E),(fe=V.props&&V.props.onVnodeUpdated)&&ot(()=>Rt(fe,G,V,J),E)}else{let V;const{el:L,props:j}=p,{bm:G,m:J,parent:ge}=d,fe=Ks(p);if(Dn(d,!1),G&&xo(G),!fe&&(V=j&&j.onVnodeBeforeMount)&&Rt(V,ge,p),Dn(d,!0),L&&ae){const Se=()=>{d.subTree=Do(d),ae(L,d.subTree,d,E,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=Do(d);T(null,Se,m,v,d,E,_),p.el=Se.el}if(J&&ot(J,E),!fe&&(V=j&&j.onVnodeMounted)){const Se=p;ot(()=>Rt(V,ge,Se),E)}(p.shapeFlag&256||ge&&Ks(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&ot(d.a,E),d.isMounted=!0,p=m=v=null}},D=d.effect=new cc(S,()=>mc(I),d.scope),I=d.update=()=>D.run();I.id=d.uid,Dn(d,!0),I()},se=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Iy(d,p.props,v,m),Sy(d,p.children,m),As(),Bl(),xs()},oe=(d,p,m,v,E,_,O,S,D=!1)=>{const I=d&&d.children,V=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:G}=p;if(j>0){if(j&128){tn(I,L,m,v,E,_,O,S,D);return}else if(j&256){qt(I,L,m,v,E,_,O,S,D);return}}G&8?(V&16&&Ke(I,E,_),L!==I&&u(m,L)):V&16?G&16?tn(I,L,m,v,E,_,O,S,D):Ke(I,E,_,!0):(V&8&&u(m,""),G&16&&pe(L,m,v,E,_,O,S,D))},qt=(d,p,m,v,E,_,O,S,D)=>{d=d||rs,p=p||rs;const I=d.length,V=p.length,L=Math.min(I,V);let j;for(j=0;j<L;j++){const G=p[j]=D?rn(p[j]):bt(p[j]);T(d[j],G,m,null,E,_,O,S,D)}I>V?Ke(d,E,_,!0,!1,L):pe(p,m,v,E,_,O,S,D,L)},tn=(d,p,m,v,E,_,O,S,D)=>{let I=0;const V=p.length;let L=d.length-1,j=V-1;for(;I<=L&&I<=j;){const G=d[I],J=p[I]=D?rn(p[I]):bt(p[I]);if(an(G,J))T(G,J,m,null,E,_,O,S,D);else break;I++}for(;I<=L&&I<=j;){const G=d[L],J=p[j]=D?rn(p[j]):bt(p[j]);if(an(G,J))T(G,J,m,null,E,_,O,S,D);else break;L--,j--}if(I>L){if(I<=j){const G=j+1,J=G<V?p[G].el:v;for(;I<=j;)T(null,p[I]=D?rn(p[I]):bt(p[I]),m,J,E,_,O,S,D),I++}}else if(I>j)for(;I<=L;)it(d[I],E,_,!0),I++;else{const G=I,J=I,ge=new Map;for(I=J;I<=j;I++){const ht=p[I]=D?rn(p[I]):bt(p[I]);ht.key!=null&&ge.set(ht.key,I)}let fe,Se=0;const Et=j-J+1;let Yn=!1,xl=0;const Ps=new Array(Et);for(I=0;I<Et;I++)Ps[I]=0;for(I=G;I<=L;I++){const ht=d[I];if(Se>=Et){it(ht,E,_,!0);continue}let kt;if(ht.key!=null)kt=ge.get(ht.key);else for(fe=J;fe<=j;fe++)if(Ps[fe-J]===0&&an(ht,p[fe])){kt=fe;break}kt===void 0?it(ht,E,_,!0):(Ps[kt-J]=I+1,kt>=xl?xl=kt:Yn=!0,T(ht,p[kt],m,null,E,_,O,S,D),Se++)}const Dl=Yn?Dy(Ps):rs;for(fe=Dl.length-1,I=Et-1;I>=0;I--){const ht=J+I,kt=p[ht],kl=ht+1<V?p[ht+1].el:v;Ps[I]===0?T(null,kt,m,kl,E,_,O,S,D):Yn&&(fe<0||I!==Dl[fe]?Dt(kt,m,kl,2):fe--)}}},Dt=(d,p,m,v,E=null)=>{const{el:_,type:O,transition:S,children:D,shapeFlag:I}=d;if(I&6){Dt(d.component.subTree,p,m,v);return}if(I&128){d.suspense.move(p,m,v);return}if(I&64){O.move(d,p,m,k);return}if(O===Me){s(_,p,m);for(let L=0;L<D.length;L++)Dt(D[L],p,m,v);s(d.anchor,p,m);return}if(O===li){z(d,p,m);return}if(v!==2&&I&1&&S)if(v===0)S.beforeEnter(_),s(_,p,m),ot(()=>S.enter(_),E);else{const{leave:L,delayLeave:j,afterLeave:G}=S,J=()=>s(_,p,m),ge=()=>{L(_,()=>{J(),G&&G()})};j?j(_,J,ge):ge()}else s(_,p,m)},it=(d,p,m,v=!1,E=!1)=>{const{type:_,props:O,ref:S,children:D,dynamicChildren:I,shapeFlag:V,patchFlag:L,dirs:j}=d;if(S!=null&&ga(S,null,m,d,!0),V&256){p.ctx.deactivate(d);return}const G=V&1&&j,J=!Ks(d);let ge;if(J&&(ge=O&&O.onVnodeBeforeUnmount)&&Rt(ge,p,d),V&6)qr(d.component,m,v);else{if(V&128){d.suspense.unmount(m,v);return}G&&xn(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,m,E,k,v):I&&(_!==Me||L>0&&L&64)?Ke(I,p,m,!1,!0):(_===Me&&L&384||!E&&V&16)&&Ke(D,p,m),v&&Gn(d)}(J&&(ge=O&&O.onVnodeUnmounted)||G)&&ot(()=>{ge&&Rt(ge,p,d),G&&xn(d,null,p,"unmounted")},m)},Gn=d=>{const{type:p,el:m,anchor:v,transition:E}=d;if(p===Me){Qn(m,v);return}if(p===li){b(d);return}const _=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,D=()=>O(m,_);S?S(d.el,_,D):D()}else _()},Qn=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},qr=(d,p,m)=>{const{bum:v,scope:E,update:_,subTree:O,um:S}=d;v&&xo(v),E.stop(),_&&(_.active=!1,it(O,d,p,m)),S&&ot(S,p),ot(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(d,p,m,v=!1,E=!1,_=0)=>{for(let O=_;O<d.length;O++)it(d[O],p,m,v,E)},w=d=>d.shapeFlag&6?w(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),Bl(),df(),p._vnode=d},k={p:T,um:it,m:Dt,r:Gn,mt:wt,mc:pe,pc:oe,pbc:Oe,n:w,o:t};let B,ae;return e&&([B,ae]=e(k)),{render:M,hydrate:B,createApp:_y(M,B)}}function Dn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Of(t,e,n=!1){const s=t.children,r=e.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rn(r[i]),a.el=o.el),n||Of(o,a)),a.type===Ki&&(a.el=o.el)}}function Dy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ky=t=>t.__isTeleport,Me=Symbol.for("v-fgt"),Ki=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),li=Symbol.for("v-stc"),Gs=[];let yt=null;function De(t=!1){Gs.push(yt=t?null:[])}function Pf(){Gs.pop(),yt=Gs[Gs.length-1]||null}let gs=1;function Xl(t){gs+=t}function Mf(t){return t.dynamicChildren=gs>0?yt||rs:null,Pf(),gs>0&&yt&&yt.push(t),t}function je(t,e,n,s,r,i){return Mf($(t,e,n,s,r,i,!0))}function Lf(t,e,n,s,r){return Mf(_e(t,e,n,s,r,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Wi="__vInternal",Ff=({key:t})=>t??null,ui=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||Xe(t)||Y(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,s=0,r=null,i=t===Me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ff(e),ref:e&&ui(e),scopeId:qi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return a?(bc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),gs>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const _e=Ry;function Ry(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===hy)&&(t=wn),cr(t)){const a=ms(t,e,!0);return n&&bc(a,n),gs>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(zy(t)&&(t=t.__vccOpts),e){e=Ny(e);let{class:a,style:c}=e;a&&!ke(a)&&(e.class=Vi(a)),Ee(c)&&(nf(c)&&!K(c)&&(c=Fe({},c)),e.style=oc(c))}const o=ke(t)?1:zm(t)?128:ky(t)?64:Ee(t)?4:Y(t)?2:0;return $(t,e,n,s,r,o,i,!0)}function Ny(t){return t?nf(t)||Wi in t?Fe({},t):t:null}function ms(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Oy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ff(a),ref:e&&e.ref?n&&r?K(r)?r.concat(ui(e)):[r,ui(e)]:ui(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function On(t=" ",e=0){return _e(Ki,null,t,e)}function _c(t,e){const n=_e(li,null,t);return n.staticCount=e,n}function bt(t){return t==null||typeof t=="boolean"?_e(wn):K(t)?_e(Me,null,t.slice()):typeof t=="object"?rn(t):_e(Ki,null,String(t))}function rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function bc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wi in e)?e._ctx=Je:r===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[On(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Vi([e.class,s.class]));else if(r==="style")e.style=oc([e.style,s.style]);else if(Fi(r)){const i=e[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Rt(t,e,n,s=null){St(t,e,7,[n,s])}const Py=Af();let My=0;function Ly(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Py,i={uid:My++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Df(s,r),emitsOptions:gf(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$m.bind(null,i),t.ce&&t.ce(i),i}let Le=null;const Fy=()=>Le||Je;let Ic,Xn,Jl="__VUE_INSTANCE_SETTERS__";(Xn=ia()[Jl])||(Xn=ia()[Jl]=[]),Xn.push(t=>Le=t),Ic=t=>{Xn.length>1?Xn.forEach(e=>e(t)):Xn[0](t)};const En=t=>{Ic(t),t.scope.on()},fn=()=>{Le&&Le.scope.off(),Ic(null)};function $f(t){return t.vnode.shapeFlag&4}let lr=!1;function $y(t,e=!1){lr=e;const{props:n,children:s}=t.vnode,r=$f(t);by(t,n,r,e),Cy(t,s);const i=r?By(t,e):void 0;return lr=!1,i}function By(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=sf(new Proxy(t.ctx,py));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Vy(t):null;En(t),As();const i=hn(s,t,0,[t.props,r]);if(xs(),fn(),rc(i)){if(i.then(fn,fn),e)return i.then(o=>{ma(t,o,e)}).catch(o=>{Sr(o,t,0)});t.asyncDep=i}else ma(t,i,e)}else Bf(t,e)}function ma(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=cf(e)),Bf(t,n)}let Zl;function Bf(t,e,n){const s=t.type;if(!t.render){if(!e&&Zl&&!s.render){const r=s.template||wc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);s.render=Zl(r,l)}}t.render=s.render||Ct}En(t),As(),gy(t),xs(),fn()}function Uy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}}))}function Vy(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Uy(t)},slots:t.slots,emit:t.emit,expose:e}}function Tc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cf(sf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}}))}function jy(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function zy(t){return Y(t)&&"__vccOpts"in t}const Tt=(t,e)=>Om(t,e,lr);function Uf(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!K(e)?cr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cr(n)&&(n=[n]),_e(t,e,n))}const qy=Symbol.for("v-scx"),Hy=()=>Ft(qy),Ky="3.3.4",Wy="http://www.w3.org/2000/svg",Nn=typeof document<"u"?document:null,eu=Nn&&Nn.createElement("template"),Gy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Nn.createElementNS(Wy,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{eu.innerHTML=s?`<svg>${t}</svg>`:t;const a=eu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yy(t,e,n){const s=t.style,r=ke(n);if(n&&!r){if(e&&!ke(e))for(const i in e)n[i]==null&&ya(s,i,"");for(const i in n)ya(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const tu=/\s*!important$/;function ya(t,e,n){if(K(n))n.forEach(s=>ya(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Xy(t,e);tu.test(n)?t.setProperty(Ss(s),n.replace(tu,""),"important"):t[s]=n}}const nu=["Webkit","Moz","ms"],Ro={};function Xy(t,e){const n=Ro[e];if(n)return n;let s=Ut(e);if(s!=="filter"&&s in t)return Ro[e]=s;s=Ui(s);for(let r=0;r<nu.length;r++){const i=nu[r]+s;if(i in t)return Ro[e]=i}return e}const su="http://www.w3.org/1999/xlink";function Jy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(su,e.slice(6,e.length)):t.setAttributeNS(su,e,n);else{const i=Zg(e);n==null||i&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Zy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jh(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ev(t,e,n,s){t.addEventListener(e,n,s)}function tv(t,e,n,s){t.removeEventListener(e,n,s)}function nv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=sv(e);if(s){const l=i[e]=ov(s,r);ev(t,a,l,c)}else o&&(tv(t,a,o,c),i[e]=void 0)}}const ru=/(?:Once|Passive|Capture)$/;function sv(t){let e;if(ru.test(t)){e={};let s;for(;s=t.match(ru);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ss(t.slice(2)),e]}let No=0;const rv=Promise.resolve(),iv=()=>No||(rv.then(()=>No=0),No=Date.now());function ov(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(av(s,n.value),e,5,[s])};return n.value=t,n.attached=iv(),n}function av(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const iu=/^on[a-z]/,cv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Qy(t,s,r):e==="style"?Yy(t,n,s):Fi(e)?tc(e)||nv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(t,e,s,r))?Zy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Jy(t,e,s,r))};function lv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&iu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||iu.test(e)&&ke(n)?!1:e in t}const uv=Fe({patchProp:cv},Gy);let ou;function hv(){return ou||(ou=Ay(uv))}const fv=(...t)=>{const e=hv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=dv(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function dv(t){return ke(t)?document.querySelector(t):t}const de={title:"Blazed Publishing",description:"Build a virtual empire with Blazed City. Claim your virtual paradise, today.",logo:"https://blazed.sirv.com/logo/Beaker-Dark.png?w=45&h=45",icon:"https://blazed.sirv.com/logo/Beaker-Cobalt.png",license:"https://blazedlabs.com/license.txt",humans:"https://blazedlabs.com/humans.txt",twitter:"BlazedLabs",fbAppId:"503698127531557",company:"Blazed Labs LLC",menu:[{label:"Home",url:"/"},{label:"Browse",url:"/#/catalog"},{label:"Contact",url:"/#/contact"}],footerLinks:[{label:"Home",url:"/"},{label:"Browse",url:"/#/catalog"},{label:"Contact",url:"/#/contact"},{label:"Blog",url:"https://blazedlabs.com/blog"}]};function pv(){const t=window.location.href;document.head.innerHTML+=`
        <link rel="icon" sizes="192x192" href="${de.icon}?w=192&h=192">
        <link rel="apple-touch-icon" href="${de.icon}?w=180&h=180">
        <link rel="apple-touch-startup-image" href="${de.icon}?w=180&h=180">
        <link rel="license" href="${de.license}">
        <link rel="author" href="${de.humans}">
        <!-- Meta Tags -->
        <meta name="generator" content="blz-fire v2.0">
        <meta name="google" content="nositelinkssearchbox">
        <meta name="robots" content="index,follow">
        <meta name="rating" content="General">
        <meta name="msapplication-config" content="/browserconfig.xml">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="application-name" content="${de.title}">
        <meta name="application-name" content="${de.title}">
        <meta name="apple-mobile-web-app-title" content="${de.title}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@${de.twitter}">
        <meta name="twitter:url" content="${t}">
        <meta name="twitter:title" content="${de.title}">
        <meta name="twitter:description" content="${de.description}">
        <meta name="twitter:image" content="${de.icon}?w=500&h=500">
        <meta name="twitter:image:alt" content="${de.description}">
        <meta property="fb:app_id" content="${de.fbAppId}">
        <meta property="og:url" content="${t}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${de.title}">
        <meta property="og:image" content="${de.icon}?w=500&h=500">
        <meta property="og:image:alt" content="${de.description}">
        <meta property="og:description" content="${de.description}">
        <meta property="og:site_name" content="${de.title}">
        <meta property="og:locale" content="en_US">
        <meta property="article:author" content="${de.company}">
        <meta itemprop="name" content="${de.title}">
        <meta itemprop="description" content="${de.description}">
        <meta itemprop="image" content="${de.icon}?w=180&h=180">
        `}const en=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Dr=t=>(Ar("data-v-b8472379"),t=t(),xr(),t),gv={class:"navbar shadow-lg"},mv={class:"flex-1"},yv=["title"],vv=["src"],wv={class:"hidden md:flex navbar-end"},Ev={class:"menu menu-horizontal px-1"},_v=["href"],bv=Dr(()=>$("div",{class:"flex md:hidden navbar-end drawer-content"},[$("label",{for:"mobile-menu-drawer",class:"btn btn-circle btn-outline drawer-button"},[$("svg",{id:"burger-menu",xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",fill:"currentColor",class:"inline-flex w-5 h-5"},[$("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})])])],-1)),Iv={class:"block md:hidden drawer"},Tv=Dr(()=>$("input",{id:"mobile-menu-drawer",type:"checkbox",class:"drawer-toggle"},null,-1)),Cv={class:"drawer-side"},Sv=Dr(()=>$("label",{for:"mobile-menu-drawer",class:"drawer-overlay"},null,-1)),Av={class:"menu p-4 w-80 h-full bg-base-200 text-base-content"},xv=Dr(()=>$("i",{class:"inline-flex"},[$("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",class:"group-focus:text-white",fill:"conentColor",viewBox:"0 0 384 512"},[$("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})])],-1)),Dv=Dr(()=>$("li",{class:"btn-disabled pt-5 bg-transparent"},[$("hr")],-1)),kv=["href"],Rv={__name:"BlzHeader",setup(t){function e(){const n=document.querySelector("#mobile-menu-drawer");n.checked===!0?n.checked=!1:n.checked=!0}return(n,s)=>(De(),je(Me,null,[$("header",null,[$("nav",gv,[$("div",mv,[$("a",{title:ft(de).title,href:"/",class:"btn btn-ghost group normal-case text-xl"},[$("img",{class:"group-hover:opacity-75",src:ft(de).logo},null,8,vv)],8,yv)]),$("div",wv,[$("ul",Ev,[(De(!0),je(Me,null,yi(ft(de).menu,r=>(De(),je("li",null,[$("a",{href:r.url},vt(r.label),9,_v)]))),256))])]),bv])]),$("div",Iv,[Tv,$("div",Cv,[Sv,$("ul",Av,[$("li",null,[$("a",{onClick:e,class:"cursor-pointer text-gray-800 group"},[xv,On(" Close Menu ")])]),Dv,(De(!0),je(Me,null,yi(ft(de).menu,r=>(De(),je("li",null,[$("a",{href:r.url},vt(r.label),9,kv)]))),256))])])])],64))}},Nv=en(Rv,[["__scopeId","data-v-b8472379"]]);const Vf=t=>(Ar("data-v-b5adcb5c"),t=t(),xr(),t),Ov={class:"footer footer-center p-10 bg-base-200 text-base-content rounded select-none"},Pv={class:"grid grid-flow-col gap-4"},Mv=["href"],Lv=_c('<div data-v-b5adcb5c><div class="grid grid-flow-col gap-4" data-v-b5adcb5c><a href="https://twitter.com/BlazedLabs" target="_blank" class="twitter" data-v-b5adcb5c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-b5adcb5c><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-v-b5adcb5c></path></svg></a><a href="https://www.youtube.com/channel/UCUl9Q2Nq-bvju0wm3b-bohA" target="_blank" class="youtube" data-v-b5adcb5c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-b5adcb5c><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" data-v-b5adcb5c></path></svg></a><a href="https://www.facebook.com/blazedlabs" target="_blank" class="facebook" data-v-b5adcb5c><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-b5adcb5c><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-b5adcb5c></path></svg></a></div></div>',1),Fv={class:"text-gray-600"},$v=["datetime"],Bv=Vf(()=>$("a",{href:"https://blazedlabs.com/",target:"_blank",class:"hover:underline"},"Blazed Labs LLC",-1)),Uv=Vf(()=>$("a",{target:"_blank",href:"https://ruff-manage.com/",class:"hover:underline"},"Ruff Management Inc.",-1)),Vv={__name:"BlzFooter",setup(t){const e=new Date().getFullYear();return(n,s)=>(De(),je("footer",Ov,[$("div",Pv,[(De(!0),je(Me,null,yi(ft(de).footerLinks,r=>(De(),je("span",null,[$("a",{href:r.url,class:"link link-hover"},vt(r.label),9,Mv)]))),256))]),Lv,$("div",null,[$("p",Fv,[On(" Copyright © "),$("time",{datetime:ft(e)},vt(ft(e)),9,$v),On(),Bv,On(", "),Uv,On(" All rights reserved. ")])])]))}},jv=en(Vv,[["__scopeId","data-v-b5adcb5c"]]);const zv={class:"md:p-10 bg-gray-50"},qv={__name:"App",setup(t){return(e,n)=>{const s=If("router-view");return De(),je(Me,null,[_e(Nv),(De(),Lf(Hm,null,{default:Hs(()=>[$("main",zv,[_e(s)])]),_:1})),_e(jv)],64)}}},Hv=en(qv,[["__scopeId","data-v-c5d2af0c"]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof window<"u";function Kv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function Oo(t,e){const n={};for(const s in e){const r=e[s];n[s]=At(r)?r.map(t):t(r)}return n}const Qs=()=>{},At=Array.isArray,Wv=/\/$/,Gv=t=>t.replace(Wv,"");function Po(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Jv(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Qv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Yv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ys(e.matched[s],n.matched[r])&&jf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Xv(t[n],e[n]))return!1;return!0}function Xv(t,e){return At(t)?cu(t,e):At(e)?cu(e,t):t===e}function cu(t,e){return At(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ur;(function(t){t.pop="pop",t.push="push"})(ur||(ur={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function Zv(t){if(!t)if(Zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gv(t)}const e0=/^[^#]+#/;function t0(t,e){return t.replace(e0,"#")+e}function n0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Gi=()=>({left:window.pageXOffset,top:window.pageYOffset});function s0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=n0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lu(t,e){return(history.state?history.state.position-e:-1)+t}const va=new Map;function r0(t,e){va.set(t,e)}function i0(t){const e=va.get(t);return va.delete(t),e}let o0=()=>location.protocol+"//"+location.host;function zf(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),au(c,"")}return au(n,t)+s+r}function a0(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=zf(t,location),y=n.value,T=e.value;let x=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}x=T?f.position-T.position:0}else s(g);r.forEach(P=>{P(n.value,y,{delta:x,type:ur.pop,direction:x?x>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ue({},f.state,{scroll:Gi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function uu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Gi():null}}function c0(t){const{history:e,location:n}=window,s={value:zf(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:o0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ue({},e.state,uu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:Gi()});i(u.current,u,!0);const h=ue({},uu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function l0(t){t=Zv(t);const e=c0(t),n=a0(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:t0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function u0(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),l0(t)}function h0(t){return typeof t=="string"||t&&typeof t=="object"}function qf(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hf=Symbol("");var hu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hu||(hu={}));function vs(t,e){return ue(new Error,{type:t,[Hf]:!0},e)}function Ht(t,e){return t instanceof Error&&Hf in t&&(e==null||!!(t.type&e))}const fu="[^/]+?",f0={sensitive:!1,strict:!1,start:!0,end:!0},d0=/[.+*?^${}()[\]/\\]/g;function p0(t,e){const n=ue({},f0,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(d0,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:T,optional:x,regexp:P}=f;i.push({name:y,repeatable:T,optional:x});const N=P||fu;if(N!==fu){g+=10;try{new RegExp(`(${N})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+b.message)}}let z=T?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(z=x&&l.length<2?`(?:/${z})`:"/"+z),x&&(z+="?"),r+=z,g+=20,x&&(g+=-8),T&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:x}=g,P=y in l?l[y]:"";if(At(P)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=At(P)?P.join("/"):P;if(!N)if(x)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function g0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function m0(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=g0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(du(s))return 1;if(du(r))return-1}return r.length-s.length}function du(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y0={type:0,value:""},v0=/[a-zA-Z0-9_]/;function w0(t){if(!t)return[[]];if(t==="/")return[[y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:v0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function E0(t,e,n){const s=p0(w0(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function _0(t,e){const n=[],s=new Map;e=mu({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=b0(u);y.aliasOf=f&&f.record;const T=mu(e,u),x=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of z)x.push(ue({},y,{components:f?f.record.components:y.components,path:b,aliasOf:f?f.record:y}))}let P,N;for(const z of x){const{path:b}=z;if(h&&b[0]!=="/"){const H=h.record.path,ie=H[H.length-1]==="/"?"":"/";z.path=h.record.path+(b&&ie+b)}if(P=E0(z,h,T),f?f.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),g&&u.name&&!gu(P)&&o(u.name)),y.children){const H=y.children;for(let ie=0;ie<H.length;ie++)i(H[ie],P,f&&f.children[ie])}f=f||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return N?()=>{o(N)}:Qs}function o(u){if(qf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&m0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Kf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gu(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw vs(1,{location:u});T=f.record.name,g=ue(pu(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&pu(u.params,f.keys.map(N=>N.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(N=>N.re.test(y)),f&&(g=f.parse(y),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw vs(1,{location:u,currentLocation:h});T=f.record.name,g=ue({},h.params,u.params),y=f.stringify(g)}const x=[];let P=f;for(;P;)x.unshift(P.record),P=P.parent;return{name:T,path:y,params:g,matched:x,meta:T0(x)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function pu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function b0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:I0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function I0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T0(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function mu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Kf(t,e){return e.children.some(n=>n===t||Kf(t,n))}const Wf=/#/g,C0=/&/g,S0=/\//g,A0=/=/g,x0=/\?/g,Gf=/\+/g,D0=/%5B/g,k0=/%5D/g,Qf=/%5E/g,R0=/%60/g,Yf=/%7B/g,N0=/%7C/g,Xf=/%7D/g,O0=/%20/g;function Cc(t){return encodeURI(""+t).replace(N0,"|").replace(D0,"[").replace(k0,"]")}function P0(t){return Cc(t).replace(Yf,"{").replace(Xf,"}").replace(Qf,"^")}function wa(t){return Cc(t).replace(Gf,"%2B").replace(O0,"+").replace(Wf,"%23").replace(C0,"%26").replace(R0,"`").replace(Yf,"{").replace(Xf,"}").replace(Qf,"^")}function M0(t){return wa(t).replace(A0,"%3D")}function L0(t){return Cc(t).replace(Wf,"%23").replace(x0,"%3F")}function F0(t){return t==null?"":L0(t).replace(S0,"%2F")}function Ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Gf," "),o=i.indexOf("="),a=Ei(o<0?i:i.slice(0,o)),c=o<0?null:Ei(i.slice(o+1));if(a in e){let l=e[a];At(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yu(t){let e="";for(let n in t){const s=t[n];if(n=M0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(At(s)?s.map(i=>i&&wa(i)):[s&&wa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function B0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=At(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const U0=Symbol(""),vu=Symbol(""),Sc=Symbol(""),Ac=Symbol(""),Ea=Symbol("");function Ms(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function on(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vs(4,{from:n,to:e})):h instanceof Error?a(h):h0(h)?a(vs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Mo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(V0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(on(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Kv(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&on(f,n,s,i,o)()}))}}return r}function V0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wu(t){const e=Ft(Sc),n=Ft(Ac),s=Tt(()=>e.resolve(ft(t.to))),r=Tt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ys.bind(null,u));if(f>-1)return f;const g=Eu(c[l-2]);return l>1&&Eu(u)===g&&h[h.length-1].path!==g?h.findIndex(ys.bind(null,c[l-2])):f}),i=Tt(()=>r.value>-1&&H0(n.params,s.value.params)),o=Tt(()=>r.value>-1&&r.value===n.matched.length-1&&jf(n.params,s.value.params));function a(c={}){return q0(c)?e[ft(t.replace)?"replace":"push"](ft(t.to)).catch(Qs):Promise.resolve()}return{route:s,href:Tt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const j0=vf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wu,setup(t,{slots:e}){const n=Cr(wu(t)),{options:s}=Ft(Sc),r=Tt(()=>({[_u(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[_u(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),z0=j0;function q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function H0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!At(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Eu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _u=(t,e,n)=>t??e??n,K0=vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ft(Ea),r=Tt(()=>t.route||s.value),i=Ft(vu,0),o=Tt(()=>{let l=ft(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Tt(()=>r.value.matched[o.value]);ci(vu,Tt(()=>o.value+1)),ci(U0,a),ci(Ea,r);const c=pc();return ai(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!ys(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return bu(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,x=Uf(f,ue({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return bu(n.default,{Component:x,route:l})||x}}});function bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W0=K0;function G0(t){const e=_0(t.routes,t),n=t.parseQuery||$0,s=t.stringifyQuery||yu,r=t.history,i=Ms(),o=Ms(),a=Ms(),c=Dm(sn);let l=sn;Zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oo.bind(null,w=>""+w),h=Oo.bind(null,F0),f=Oo.bind(null,Ei);function g(w,M){let k,B;return qf(w)?(k=e.getRecordMatcher(w),B=M):B=w,e.addRoute(B,k)}function y(w){const M=e.getRecordMatcher(w);M&&e.removeRoute(M)}function T(){return e.getRoutes().map(w=>w.record)}function x(w){return!!e.getRecordMatcher(w)}function P(w,M){if(M=ue({},M||c.value),typeof w=="string"){const m=Po(n,w,M.path),v=e.resolve({path:m.path},M),E=r.createHref(m.fullPath);return ue(m,v,{params:f(v.params),hash:Ei(m.hash),redirectedFrom:void 0,href:E})}let k;if("path"in w)k=ue({},w,{path:Po(n,w.path,M.path).path});else{const m=ue({},w.params);for(const v in m)m[v]==null&&delete m[v];k=ue({},w,{params:h(m)}),M.params=h(M.params)}const B=e.resolve(k,M),ae=w.hash||"";B.params=u(f(B.params));const d=Qv(s,ue({},w,{hash:P0(ae),path:B.path})),p=r.createHref(d);return ue({fullPath:d,hash:ae,query:s===yu?B0(w.query):w.query||{}},B,{redirectedFrom:void 0,href:p})}function N(w){return typeof w=="string"?Po(n,w,c.value.path):ue({},w)}function z(w,M){if(l!==w)return vs(8,{from:M,to:w})}function b(w){return ye(w)}function H(w){return b(ue(N(w),{replace:!0}))}function ie(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let B=typeof k=="function"?k(w):k;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=N(B):{path:B},B.params={}),ue({query:w.query,hash:w.hash,params:"path"in B?{}:w.params},B)}}function ye(w,M){const k=l=P(w),B=c.value,ae=w.state,d=w.force,p=w.replace===!0,m=ie(k);if(m)return ye(ue(N(m),{state:typeof m=="object"?ue({},ae,m.state):ae,force:d,replace:p}),M||k);const v=k;v.redirectedFrom=M;let E;return!d&&Yv(s,B,k)&&(E=vs(16,{to:v,from:B}),Dt(B,B,!0,!1)),(E?Promise.resolve(E):Oe(v,B)).catch(_=>Ht(_)?Ht(_,2)?_:tn(_):oe(_,v,B)).then(_=>{if(_){if(Ht(_,2))return ye(ue({replace:p},N(_.to),{state:typeof _.to=="object"?ue({},ae,_.to.state):ae,force:d}),M||v)}else _=gt(v,B,!0,p,ae);return qe(v,B,_),_})}function pe(w,M){const k=z(w,M);return k?Promise.reject(k):Promise.resolve()}function Ie(w){const M=Qn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(w):w()}function Oe(w,M){let k;const[B,ae,d]=Q0(w,M);k=Mo(B.reverse(),"beforeRouteLeave",w,M);for(const m of B)m.leaveGuards.forEach(v=>{k.push(on(v,w,M))});const p=pe.bind(null,w,M);return k.push(p),Ke(k).then(()=>{k=[];for(const m of i.list())k.push(on(m,w,M));return k.push(p),Ke(k)}).then(()=>{k=Mo(ae,"beforeRouteUpdate",w,M);for(const m of ae)m.updateGuards.forEach(v=>{k.push(on(v,w,M))});return k.push(p),Ke(k)}).then(()=>{k=[];for(const m of d)if(m.beforeEnter)if(At(m.beforeEnter))for(const v of m.beforeEnter)k.push(on(v,w,M));else k.push(on(m.beforeEnter,w,M));return k.push(p),Ke(k)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),k=Mo(d,"beforeRouteEnter",w,M),k.push(p),Ke(k))).then(()=>{k=[];for(const m of o.list())k.push(on(m,w,M));return k.push(p),Ke(k)}).catch(m=>Ht(m,8)?m:Promise.reject(m))}function qe(w,M,k){a.list().forEach(B=>Ie(()=>B(w,M,k)))}function gt(w,M,k,B,ae){const d=z(w,M);if(d)return d;const p=M===sn,m=Zn?history.state:{};k&&(B||p?r.replace(w.fullPath,ue({scroll:p&&m&&m.scroll},ae)):r.push(w.fullPath,ae)),c.value=w,Dt(w,M,k,p),tn()}let He;function wt(){He||(He=r.listen((w,M,k)=>{if(!qr.listening)return;const B=P(w),ae=ie(B);if(ae){ye(ue(ae,{replace:!0}),B).catch(Qs);return}l=B;const d=c.value;Zn&&r0(lu(d.fullPath,k.delta),Gi()),Oe(B,d).catch(p=>Ht(p,12)?p:Ht(p,2)?(ye(p.to,B).then(m=>{Ht(m,20)&&!k.delta&&k.type===ur.pop&&r.go(-1,!1)}).catch(Qs),Promise.reject()):(k.delta&&r.go(-k.delta,!1),oe(p,B,d))).then(p=>{p=p||gt(B,d,!1),p&&(k.delta&&!Ht(p,8)?r.go(-k.delta,!1):k.type===ur.pop&&Ht(p,20)&&r.go(-1,!1)),qe(B,d,p)}).catch(Qs)}))}let zt=Ms(),Te=Ms(),se;function oe(w,M,k){tn(w);const B=Te.list();return B.length?B.forEach(ae=>ae(w,M,k)):console.error(w),Promise.reject(w)}function qt(){return se&&c.value!==sn?Promise.resolve():new Promise((w,M)=>{zt.add([w,M])})}function tn(w){return se||(se=!w,wt(),zt.list().forEach(([M,k])=>w?k(w):M()),zt.reset()),w}function Dt(w,M,k,B){const{scrollBehavior:ae}=t;if(!Zn||!ae)return Promise.resolve();const d=!k&&i0(lu(w.fullPath,0))||(B||!k)&&history.state&&history.state.scroll||null;return uf().then(()=>ae(w,M,d)).then(p=>p&&s0(p)).catch(p=>oe(p,w,M))}const it=w=>r.go(w);let Gn;const Qn=new Set,qr={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:x,getRoutes:T,resolve:P,options:t,push:b,replace:H,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:qt,install(w){const M=this;w.component("RouterLink",z0),w.component("RouterView",W0),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(c)}),Zn&&!Gn&&c.value===sn&&(Gn=!0,b(r.location).catch(ae=>{}));const k={};for(const ae in sn)Object.defineProperty(k,ae,{get:()=>c.value[ae],enumerable:!0});w.provide(Sc,M),w.provide(Ac,ef(k)),w.provide(Ea,c);const B=w.unmount;Qn.add(w),w.unmount=function(){Qn.delete(w),Qn.size<1&&(l=sn,He&&He(),He=null,c.value=sn,Gn=!1,se=!1),B()}}};function Ke(w){return w.reduce((M,k)=>M.then(()=>Ie(k)),Promise.resolve())}return qr}function Q0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ys(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ys(l,c))||r.push(c))}return[n,s,r]}function Y0(){return Ft(Ac)}var X0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jf={exports:{}};/**
 * @license MIT
 * topbar 2.0.0, 2023-02-04
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */(function(t){(function(e,n){function s(){r.width=e.innerWidth,r.height=5*u.barThickness;var f=r.getContext("2d");f.shadowBlur=u.shadowBlur,f.shadowColor=u.shadowColor;var g,y=f.createLinearGradient(0,0,r.width,0);for(g in u.barColors)y.addColorStop(g,u.barColors[g]);f.lineWidth=u.barThickness,f.beginPath(),f.moveTo(0,u.barThickness/2),f.lineTo(Math.ceil(i*r.width),u.barThickness/2),f.strokeStyle=y,f.stroke()}var r,i,o,a=null,c=null,l=null,u={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},h={config:function(f){for(var g in f)u.hasOwnProperty(g)&&(u[g]=f[g])},show:function(f){var g,y;o||(f?l=l||setTimeout(()=>h.show(),f):(o=!0,c!==null&&e.cancelAnimationFrame(c),r||((y=(r=n.createElement("canvas")).style).position="fixed",y.top=y.left=y.right=y.margin=y.padding=0,y.zIndex=100001,y.display="none",u.className&&r.classList.add(u.className),n.body.appendChild(r),g="resize",f=s,(y=e).addEventListener?y.addEventListener(g,f,!1):y.attachEvent?y.attachEvent("on"+g,f):y["on"+g]=f),r.style.opacity=1,r.style.display="block",h.progress(0),u.autoRun&&function T(){a=e.requestAnimationFrame(T),h.progress("+"+.05*Math.pow(1-Math.sqrt(i),2))}()))},progress:function(f){return f===void 0||(typeof f=="string"&&(f=(0<=f.indexOf("+")||0<=f.indexOf("-")?i:0)+parseFloat(f)),i=1<f?1:f,s()),i},hide:function(){clearTimeout(l),l=null,o&&(o=!1,a!=null&&(e.cancelAnimationFrame(a),a=null),function f(){return 1<=h.progress("+.1")&&(r.style.opacity-=.05,r.style.opacity<=.05)?(r.style.display="none",void(c=null)):void(c=e.requestAnimationFrame(f))}())}};t.exports=h}).call(X0,window,document)})(Jf);var Z0=Jf.exports;const Zf=J0(Z0);const ew={class:"hero"},tw={class:"block text-3xl text-blue-700 sm:text-5xl"},nw={class:"block mt-4 sm:text-xl/relaxed px-10 md:px-20"},sw={class:"action-buttons mt-8 flex flex-wrap justify-center gap-4 px-10 md:px-0"},rw={__name:"Hero",props:["title","description","links"],setup(t){return(e,n)=>(De(),je("article",ew,[$("h1",tw,vt(t.title),1),$("p",nw,vt(t.description),1),$("div",sw,[dy(e.$slots,"default",{},void 0,!0)])]))}},iw=en(rw,[["__scopeId","data-v-9aad5a8c"]]),ow={class:"mx-auto max-w-xl text-center px-10 pt-5 pb-5"},aw=$("a",{class:"cursor-pointer btn btn-primary block w-full rounded bg-blue-600 hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"}," Catalog ",-1),cw=$("a",{class:"cursor-pointer btn btn-primary block w-full rounded hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"}," Contact ",-1),lw={__name:"Home",setup(t){return(e,n)=>{const s=If("router-link");return De(),je("div",ow,[_e(iw,{title:"Blazed Publishing",description:"Discover the physical and digial creations of Blazed Labs."},{default:Hs(()=>[_e(s,{to:"/catalog"},{default:Hs(()=>[aw]),_:1}),_e(s,{to:"/contact"},{default:Hs(()=>[cw]),_:1})]),_:1})])}}};/**
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
 */const ed=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},uw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ed(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new hw;const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fw=function(t){const e=ed(t);return td.encodeByteArray(e,!0)},_i=function(t){return fw(t).replace(/\./g,"")},dw=function(t){try{return td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gw=()=>pw().__FIREBASE_DEFAULTS__,mw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dw(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return gw()||mw()||yw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sd=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config};/**
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
 */class Ew{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),a].join(".")}function bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rd(){try{return typeof indexedDB=="object"}catch{return!1}}function id(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Iw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tw="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tw,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Cw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,a,s)}}function Cw(t,e){return t.replace(Sw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Sw=/\{\$([^}]+)}/g;function bi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Iu(i)&&Iu(o)){if(!bi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Iu(t){return t!==null&&typeof t=="object"}/**
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
 */const Aw=1e3,xw=2,Dw=4*60*60*1e3,kw=.5;function Tu(t,e=Aw,n=xw){const s=e*Math.pow(n,t),r=Math.round(kw*s*(Math.random()-.5)*2);return Math.min(Dw,s+r)}/**
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
 */function Yi(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class Rw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ew;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ow(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(t){return t===kn?void 0:t}function Ow(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Mw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Lw=ce.INFO,Fw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},$w=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Fw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=$w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Bw=(t,e)=>e.some(n=>t instanceof n);let Cu,Su;function Uw(){return Cu||(Cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vw(){return Su||(Su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const od=new WeakMap,_a=new WeakMap,ad=new WeakMap,Lo=new WeakMap,Dc=new WeakMap;function jw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&od.set(n,t)}).catch(()=>{}),Dc.set(e,t),e}function zw(t){if(_a.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_a.set(t,e)}let ba={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _a.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ad.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qw(t){ba=t(ba)}function Hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Fo(this),e,...n);return ad.set(s,e.sort?e.sort():[e]),dn(s)}:Vw().includes(t)?function(...e){return t.apply(Fo(this),e),dn(od.get(this))}:function(...e){return dn(t.apply(Fo(this),e))}}function Kw(t){return typeof t=="function"?Hw(t):(t instanceof IDBTransaction&&zw(t),Bw(t,Uw())?new Proxy(t,ba):t)}function dn(t){if(t instanceof IDBRequest)return jw(t);if(Lo.has(t))return Lo.get(t);const e=Kw(t);return e!==t&&(Lo.set(t,e),Dc.set(e,t)),e}const Fo=t=>Dc.get(t);function Ww(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(dn(o.result),c.oldVersion,c.newVersion,dn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gw=["get","getKey","getAll","getAllKeys","count"],Qw=["put","add","delete","clear"],$o=new Map;function Au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Qw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Gw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return $o.set(e,i),i}qw(t=>({...t,get:(e,n,s)=>Au(e,n)||t.get(e,n,s),has:(e,n)=>!!Au(e,n)||t.has(e,n)}));/**
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
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ia="@firebase/app",xu="0.9.13";/**
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
 */const Vn=new xc("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",e1="@firebase/analytics",t1="@firebase/app-check-compat",n1="@firebase/app-check",s1="@firebase/auth",r1="@firebase/auth-compat",i1="@firebase/database",o1="@firebase/database-compat",a1="@firebase/functions",c1="@firebase/functions-compat",l1="@firebase/installations",u1="@firebase/installations-compat",h1="@firebase/messaging",f1="@firebase/messaging-compat",d1="@firebase/performance",p1="@firebase/performance-compat",g1="@firebase/remote-config",m1="@firebase/remote-config-compat",y1="@firebase/storage",v1="@firebase/storage-compat",w1="@firebase/firestore",E1="@firebase/firestore-compat",_1="firebase",b1="9.23.0";/**
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
 */const Ta="[DEFAULT]",I1={[Ia]:"fire-core",[Jw]:"fire-core-compat",[e1]:"fire-analytics",[Zw]:"fire-analytics-compat",[n1]:"fire-app-check",[t1]:"fire-app-check-compat",[s1]:"fire-auth",[r1]:"fire-auth-compat",[i1]:"fire-rtdb",[o1]:"fire-rtdb-compat",[a1]:"fire-fn",[c1]:"fire-fn-compat",[l1]:"fire-iid",[u1]:"fire-iid-compat",[h1]:"fire-fcm",[f1]:"fire-fcm-compat",[d1]:"fire-perf",[p1]:"fire-perf-compat",[g1]:"fire-rc",[m1]:"fire-rc-compat",[y1]:"fire-gcs",[v1]:"fire-gcs-compat",[w1]:"fire-fst",[E1]:"fire-fst-compat","fire-js":"fire-js",[_1]:"fire-js-all"};/**
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
 */const Ii=new Map,Ca=new Map;function T1(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Ca.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Ca.set(e,t);for(const n of Ii.values())T1(n,t);return!0}function kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const C1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new Qi("app","Firebase",C1);/**
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
 */class S1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
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
 */const A1=b1;function cd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ta,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw pn.create("bad-app-name",{appName:String(r)});if(n||(n=sd()),!n)throw pn.create("no-options");const i=Ii.get(r);if(i){if(bi(n,i.options)&&bi(s,i.config))return i;throw pn.create("duplicate-app",{appName:r})}const o=new Pw(r);for(const c of Ca.values())o.addComponent(c);const a=new S1(n,s,o);return Ii.set(r,a),a}function ld(t=Ta){const e=Ii.get(t);if(!e&&t===Ta&&sd())return cd();if(!e)throw pn.create("no-app",{appName:t});return e}function $t(t,e,n){var s;let r=(s=I1[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}_n(new Qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const x1="firebase-heartbeat-database",D1=1,hr="firebase-heartbeat-store";let Bo=null;function ud(){return Bo||(Bo=Ww(x1,D1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),Bo}async function k1(t){try{return await(await ud()).transaction(hr).objectStore(hr).get(hd(t))}catch(e){if(e instanceof Cn)Vn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Du(t,e){try{const s=(await ud()).transaction(hr,"readwrite");await s.objectStore(hr).put(e,hd(t)),await s.done}catch(n){if(n instanceof Cn)Vn.warn(n.message);else{const s=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(s.message)}}}function hd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R1=1024,N1=30*24*60*60*1e3;class O1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new M1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=N1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ku(),{heartbeatsToSend:n,unsentEntries:s}=P1(this._heartbeatsCache.heartbeats),r=_i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ku(){return new Date().toISOString().substring(0,10)}function P1(t,e=R1){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ru(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ru(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class M1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rd()?id().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await k1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Du(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ru(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function L1(t){_n(new Qt("platform-logger",e=>new Yw(e),"PRIVATE")),_n(new Qt("heartbeat",e=>new O1(e),"PRIVATE")),$t(Ia,xu,t),$t(Ia,xu,"esm2017"),$t("fire-js","")}L1("");var F1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,kc=kc||{},W=F1||self;function Xi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $1(t){return Object.prototype.hasOwnProperty.call(t,Uo)&&t[Uo]||(t[Uo]=++B1)}var Uo="closure_uid_"+(1e9*Math.random()>>>0),B1=0;function U1(t,e,n){return t.call.apply(t.bind,arguments)}function V1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=U1:Ze=V1,Ze.apply(null,arguments)}function Xr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var j1=0;Sn.prototype.s=!1;Sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),j1!=0)&&$1(this)};Sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Nu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Xi(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var z1=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function fr(t){return/^[\s\xa0]*$/.test(t)}function Ji(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Ji().indexOf(t)!=-1}function Nc(t){return Nc[" "](t),t}Nc[" "]=function(){};function q1(t,e){var n=LE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var H1=Ot("Opera"),ws=Ot("Trident")||Ot("MSIE"),dd=Ot("Edge"),Sa=dd||ws,pd=Ot("Gecko")&&!(Ji().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),K1=Ji().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function gd(){var t=W.document;return t?t.documentMode:void 0}var Aa;e:{var Vo="",jo=function(){var t=Ji();if(pd)return/rv:([^\);]+)(\)|;)/.exec(t);if(dd)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(K1)return/WebKit\/(\S+)/.exec(t);if(H1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jo&&(Vo=jo?jo[1]:""),ws){var zo=gd();if(zo!=null&&zo>parseFloat(Vo)){Aa=String(zo);break e}}Aa=Vo}var xa;if(W.document&&ws){var Ou=gd();xa=Ou||parseInt(Aa,10)||void 0}else xa=void 0;var W1=xa;function dr(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pd){e:{try{Nc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:G1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dr.$.h.call(this)}}Be(dr,et);var G1={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),Q1=0;function Y1(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++Q1,this.fa=this.ia=!1}function Zi(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Oc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function X1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function md(t){const e={};for(const n in t)e[n]=t[n];return e}const Pu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Pu.length;i++)n=Pu[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function eo(t){this.src=t,this.g={},this.h=0}eo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ka(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Y1(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Da(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=fd(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Zi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ka(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Pc="closure_lm_"+(1e6*Math.random()|0),qo={};function vd(t,e,n,s,r){if(s&&s.once)return Ed(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)vd(t,e[i],n,s,r);return null}return n=Fc(n),t&&t[Nr]?t.O(e,n,Rr(s)?!!s.capture:!!s,r):wd(t,e,n,!1,s,r)}function wd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Rr(r)?!!r.capture:!!r,a=Lc(t);if(a||(t[Pc]=a=new eo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=J1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)z1||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(bd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function J1(){function t(n){return e.call(t.src,t.listener,n)}const e=Z1;return t}function Ed(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ed(t,e[i],n,s,r);return null}return n=Fc(n),t&&t[Nr]?t.P(e,n,Rr(s)?!!s.capture:!!s,r):wd(t,e,n,!0,s,r)}function _d(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_d(t,e[i],n,s,r);else s=Rr(s)?!!s.capture:!!s,n=Fc(n),t&&t[Nr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ka(i,n,s,r),-1<n&&(Zi(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ka(e,n,s,r)),(n=-1<t?e[t]:null)&&Mc(n))}function Mc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Nr])Da(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lc(e))?(Da(n,t),n.h==0&&(n.src=null,e[Pc]=null)):Zi(t)}}}function bd(t){return t in qo?qo[t]:qo[t]="on"+t}function Z1(t,e){if(t.fa)t=!0;else{e=new dr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Mc(t),t=n.call(s,e)}return t}function Lc(t){return t=t[Pc],t instanceof eo?t:null}var Ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fc(t){return typeof t=="function"?t:(t[Ho]||(t[Ho]=function(e){return t.handleEvent(e)}),t[Ho])}function $e(){Sn.call(this),this.i=new eo(this),this.S=this,this.J=null}Be($e,Sn);$e.prototype[Nr]=!0;$e.prototype.removeEventListener=function(t,e,n,s){_d(this,t,e,n,s)};function ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var r=e;e=new et(s,t),yd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Jr(o,s,!0,e)&&r}if(o=e.g=t,r=Jr(o,s,!0,e)&&r,r=Jr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Jr(o,s,!1,e)&&r}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Zi(n[s]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};$e.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Jr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Da(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var $c=W.JSON.stringify;class eE{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function tE(){var t=Bc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nE{constructor(){this.h=this.g=null}add(e,n){const s=Id.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Id=new eE(()=>new sE,t=>t.reset());class sE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rE(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function iE(t){W.setTimeout(()=>{throw t},0)}let pr,gr=!1,Bc=new nE,Td=()=>{const t=W.Promise.resolve(void 0);pr=()=>{t.then(oE)}};var oE=()=>{for(var t;t=tE();){try{t.h.call(t.g)}catch(n){iE(n)}var e=Id;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1};function to(t,e){$e.call(this),this.h=t||1,this.g=e||W,this.j=Ze(this.qb,this),this.l=Date.now()}Be(to,$e);R=to.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ze(this,"tick"),this.ga&&(Uc(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){to.$.N.call(this),Uc(this),delete this.g};function Vc(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Cd(t){t.g=Vc(()=>{t.g=null,t.i&&(t.i=!1,Cd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aE extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cd(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(t){Sn.call(this),this.h=t,this.g={}}Be(mr,Sn);var Mu=[];function Sd(t,e,n,s){Array.isArray(n)||(n&&(Mu[0]=n.toString()),n=Mu);for(var r=0;r<n.length;r++){var i=vd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ad(t){Oc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mc(e)},t),t.g={}}mr.prototype.N=function(){mr.$.N.call(this),Ad(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function no(){this.g=!0}no.prototype.Ea=function(){this.g=!1};function cE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function lE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hE(t,n)+(s?" "+s:"")})}function uE(t,e){t.info(function(){return"TIMEOUT: "+e})}no.prototype.info=function(){};function hE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return $c(n)}catch{return e}}var Wn={},Lu=null;function so(){return Lu=Lu||new $e}Wn.Ta="serverreachability";function xd(t){et.call(this,Wn.Ta,t)}Be(xd,et);function yr(t){const e=so();ze(e,new xd(e))}Wn.STAT_EVENT="statevent";function Dd(t,e){et.call(this,Wn.STAT_EVENT,t),this.stat=e}Be(Dd,et);function rt(t){const e=so();ze(e,new Dd(e,t))}Wn.Ua="timingevent";function kd(t,e){et.call(this,Wn.Ua,t),this.size=e}Be(kd,et);function Or(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var ro={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Rd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jc(){}jc.prototype.h=null;function Fu(t){return t.h||(t.h=t.i())}function Nd(){}var Pr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zc(){et.call(this,"d")}Be(zc,et);function qc(){et.call(this,"c")}Be(qc,et);var Ra;function io(){}Be(io,jc);io.prototype.g=function(){return new XMLHttpRequest};io.prototype.i=function(){return{}};Ra=new io;function Mr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new mr(this),this.P=fE,t=Sa?125:void 0,this.V=new to(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Od}function Od(){this.i=null,this.g="",this.h=!1}var fE=45e3,Na={},Ti={};R=Mr.prototype;R.setTimeout=function(t){this.P=t};function Oa(t,e,n){t.L=1,t.v=ao(Yt(e)),t.s=n,t.S=!0,Pd(t,null)}function Pd(t,e){t.G=Date.now(),Lr(t),t.A=Yt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),jd(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Od,t.g=lp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new aE(Ze(t.Pa,t,t.g),t.O)),Sd(t.U,t.g,"readystatechange",t.nb),e=t.I?md(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yr(),cE(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const u=Mt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sa||this.g&&(this.h.h||this.g.ja()||Vu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?yr(3):yr(2)),oo(this);var n=this.g.da();this.ca=n;t:if(Md(this)){var s=Vu(this.g);t="";var r=s.length,i=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),Xs(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,lE(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fr(a)){var l=a;break t}}l=null}if(n=l)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,n);else{this.i=!1,this.o=3,rt(12),Pn(this),Xs(this);break e}}this.S?(Ld(this,u,o),Sa&&this.i&&u==3&&(Sd(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),Pa(this,o)),u==4&&Pn(this),this.i&&!this.J&&(u==4?ip(this.l,this):(this.i=!1,Lr(this)))}else OE(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Pn(this),Xs(this)}}}catch{}finally{}};function Md(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ld(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=dE(t,n),r==Ti){e==4&&(t.o=4,rt(14),s=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Na){t.o=4,rt(15),ss(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ss(t.j,t.m,r,null),Pa(t,r);Md(t)&&r!=Ti&&r!=Na&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yc(e),e.M=!0,rt(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),Xs(t))}R.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(oo(this),Ld(this,t,e),this.i&&t!=4&&Lr(this))}};function dE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ti:(n=Number(e.substring(n,s)),isNaN(n)?Na:(s+=1,s+n>e.length?Ti:(e=e.slice(s,s+n),t.C=s+n,e)))}R.cancel=function(){this.J=!0,Pn(this)};function Lr(t){t.Y=Date.now()+t.P,Fd(t,t.P)}function Fd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Or(Ze(t.lb,t),e)}function oo(t){t.B&&(W.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uE(this.j,this.A),this.L!=2&&(yr(),rt(17)),Pn(this),this.o=2,Xs(this)):Fd(this,this.Y-t)};function Xs(t){t.l.H==0||t.J||ip(t.l,t)}function Pn(t){oo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Uc(t.V),Ad(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pa(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ma(n.i,t))){if(!t.K&&Ma(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ai(n),uo(n);else break e;Qc(n),rt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Or(Ze(n.ib,n),6e3));if(1>=Hd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mn(n,11)}else if((t.K||n.g==t)&&Ai(n),!fr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Hc(i,i.h),i.h=null))}if(s.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,me(s.I,s.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=cp(s,s.J?s.pa:null,s.Y),o.K){Kd(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(oo(a),Lr(a)),s.g=o}else sp(s);0<n.j.length&&ho(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):Gc(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}yr(4)}catch{}}function pE(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function gE(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function $d(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=gE(t),s=pE(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bn){this.h=t.h,Ci(this,t.j),this.s=t.s,this.g=t.g,Si(this,t.m),this.l=t.l;var e=t.i,n=new vr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$u(this,n),this.o=t.o}else t&&(e=String(t).match(Bd))?(this.h=!1,Ci(this,e[1]||"",!0),this.s=Us(e[2]||""),this.g=Us(e[3]||"",!0),Si(this,e[4]),this.l=Us(e[5]||"",!0),$u(this,e[6]||"",!0),this.o=Us(e[7]||"")):(this.h=!1,this.i=new vr(null,this.h))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,Bu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,Bu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?wE:vE,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,_E)),t.join("")};function Yt(t){return new Bn(t)}function Ci(t,e,n){t.j=n?Us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Si(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $u(t,e,n){e instanceof vr?(t.i=e,bE(t.i,t.h)):(n||(e=Vs(e,EE)),t.i=new vr(e,t.h))}function me(t,e,n){t.i.set(e,n)}function ao(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bu=/[#\/\?@]/g,vE=/[#\?:]/g,wE=/[#\?]/g,EE=/[#\?@]/g,_E=/#/g;function vr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function An(t){t.g||(t.g=new Map,t.h=0,t.i&&mE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=vr.prototype;R.add=function(t,e){An(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ud(t,e){An(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Vd(t,e){return An(t),e=Ds(t,e),t.g.has(e)}R.forEach=function(t,e){An(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};R.ta=function(){An(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};R.Z=function(t){An(this);let e=[];if(typeof t=="string")Vd(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return An(this),this.i=null,t=Ds(this,t),Vd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jd(t,e,n){Ud(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Rc(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bE(t,e){e&&!t.j&&(An(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ud(this,s),jd(this,r,n))},t)),t.j=e}var IE=class{constructor(t,e){this.g=t,this.map=e}};function zd(t){this.l=t||TE,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TE=10;function qd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hd(t){return t.h?1:t.g?t.g.size:0}function Ma(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hc(t,e){t.g?t.g.add(e):t.h=e}function Kd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zd.prototype.cancel=function(){if(this.i=Wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wd(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rc(t.i)}var CE=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function SE(){this.g=new CE}function AE(t,e,n){const s=n||"";try{$d(t,function(r,i){let o=r;Rr(r)&&(o=$c(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function xE(t,e){const n=new no;if(W.Image){const s=new Image;s.onload=Xr(Zr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xr(Zr,n,s,"TestLoadImage: error",!1,e),s.onabort=Xr(Zr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xr(Zr,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Zr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Fr(t){this.l=t.fc||null,this.j=t.ob||!1}Be(Fr,jc);Fr.prototype.g=function(){return new co(this.l,this.j)};Fr.prototype.i=function(t){return function(){return t}}({});function co(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Kc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(co,$e);var Kc=0;R=co.prototype;R.open=function(t,e){if(this.readyState!=Kc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wr(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=Kc};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Gd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$r(this):wr(this),this.readyState==3&&Gd(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,$r(this))};R.Ya=function(t){this.g&&(this.response=t,$r(this))};R.ka=function(){this.g&&$r(this)};function $r(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wr(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DE=W.JSON.parse;function be(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qd,this.L=this.M=!1}Be(be,$e);var Qd="",kE=/^https?$/i,RE=["POST","PUT"];R=be.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ra.g(),this.C=this.u?Fu(this.u):Fu(Ra),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Uu(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=fd(RE,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jd(this),0<this.B&&((this.L=NE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=Vc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Uu(this,i)}};function NE(t){return ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof kc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function Uu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yd(t),lo(t)}function Yd(t){t.F||(t.F=!0,ze(t,"complete"),ze(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),lo(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),lo(this,!0)),be.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?Xd(this):this.kb())};R.kb=function(){Xd(this)};function Xd(t){if(t.h&&typeof kc<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)Vc(t.La,0,t);else if(ze(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(Bd)[1]||null;!r&&W.self&&W.self.location&&(r=W.self.location.protocol.slice(0,-1)),s=!kE.test(r?r.toLowerCase():"")}n=s}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var i=2<Mt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Yd(t)}}finally{lo(t)}}}}function lo(t,e){if(t.g){Jd(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function Jd(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DE(e)}};function Vu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Qd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function OE(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(fr(t[s]))continue;var n=rE(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}X1(e,function(s){return s.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Zd(t){let e="";return Oc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Wc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Zd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ep(t){this.Ga=0,this.j=[],this.l=new no,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ls("baseRetryDelayMs",5e3,t),this.hb=Ls("retryDelaySeedMs",1e4,t),this.eb=Ls("forwardChannelMaxRetries",2,t),this.xa=Ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zd(t&&t.concurrentRequestLimit),this.Ja=new SE,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=ep.prototype;R.ra=8;R.H=1;function Gc(t){if(tp(t),t.H==3){var e=t.W++,n=Yt(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),Br(t,n),e=new Mr(t,t.l,e),e.L=2,e.v=ao(Yt(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=lp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Lr(e)}ap(t)}function uo(t){t.g&&(Yc(t),t.g.cancel(),t.g=null)}function tp(t){uo(t),t.u&&(W.clearTimeout(t.u),t.u=null),Ai(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function ho(t){if(!qd(t.i)&&!t.m){t.m=!0;var e=t.Na;pr||Td(),gr||(pr(),gr=!0),Bc.add(e,t),t.C=0}}function PE(t,e){return Hd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Or(Ze(t.Na,t,e),op(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Mr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=md(i),yd(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=np(this,r,e),n=Yt(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),Br(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Zd(i)))+"&"+e:this.o&&Wc(n,this.o,i)),Hc(this.i,r),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),r.aa=!0,Oa(r,n,null)):Oa(r,n,e),this.H=2}}else this.H==3&&(t?ju(this,t):this.j.length==0||qd(this.i)||ju(this))};function ju(t,e){var n;e?n=e.m:n=t.W++;const s=Yt(t.I);me(s,"SID",t.K),me(s,"RID",n),me(s,"AID",t.V),Br(t,s),t.o&&t.s&&Wc(s,t.o,t.s),n=new Mr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=np(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Hc(t.i,n),Oa(n,s,e)}function Br(t,e){t.na&&Oc(t.na,function(n,s){me(e,s,n)}),t.h&&$d({},function(n,s){me(e,s,n)})}function np(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Ze(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{AE(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function sp(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pr||Td(),gr||(pr(),gr=!0),Bc.add(e,t),t.A=0}}function Qc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Or(Ze(t.Ma,t),op(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,rp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Or(Ze(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),uo(this),rp(this))};function Yc(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function rp(t){t.g=new Mr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Yt(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),Br(t,e),t.o&&t.s&&Wc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ao(Yt(e)),n.s=null,n.S=!0,Pd(n,t)}R.ib=function(){this.v!=null&&(this.v=null,uo(this),Qc(this),rt(19))};function Ai(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function ip(t,e){var n=null;if(t.g==e){Ai(t),Yc(t),t.g=null;var s=2}else if(Ma(t.i,e))n=e.F,Kd(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=so(),ze(s,new kd(s,n)),ho(t)}else sp(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&PE(t,e)||s==2&&Qc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Mn(t,5);break;case 4:Mn(t,10);break;case 3:Mn(t,6);break;default:Mn(t,2)}}}function op(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Ze(t.pb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Ci(n,"https"),ao(n)),xE(n.toString(),s)}else rt(2);t.H=0,t.h&&t.h.za(e),ap(t),tp(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function ap(t){if(t.H=0,t.ma=[],t.h){const e=Wd(t.i);(e.length!=0||t.j.length!=0)&&(Nu(t.ma,e),Nu(t.ma,t.j),t.i.i.length=0,Rc(t.j),t.j.length=0),t.h.ya()}}function cp(t,e,n){var s=n instanceof Bn?Yt(n):new Bn(n);if(s.g!="")e&&(s.g=e+"."+s.g),Si(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Bn(null);s&&Ci(i,s),e&&(i.g=e),r&&Si(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&me(s,n,e),me(s,"VER",t.ra),Br(t,s),s}function lp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new be(new Fr({ob:!0})):new be(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function up(){}R=up.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function xi(){if(ws&&!(10<=Number(W1)))throw Error("Environmental error: no available transport.")}xi.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){$e.call(this),this.g=new ep(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}Be(pt,$e);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cp(t,null,t.Y),ho(t)};pt.prototype.close=function(){Gc(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$c(t),t=n);e.j.push(new IE(e.fb++,t)),e.H==3&&ho(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,Gc(this.g),delete this.g,pt.$.N.call(this)};function hp(t){zc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(hp,zc);function fp(){qc.call(this),this.status=1}Be(fp,qc);function ks(t){this.g=t}Be(ks,up);ks.prototype.Ba=function(){ze(this.g,"a")};ks.prototype.Aa=function(t){ze(this.g,new hp(t))};ks.prototype.za=function(t){ze(this.g,new fp)};ks.prototype.ya=function(){ze(this.g,"b")};function ME(){this.blockSize=-1}function xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(xt,ME);xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ko(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}xt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ko(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ko(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ko(this,s),r=0;break}}this.h=r,this.i+=e};xt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function he(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var LE={};function Xc(t){return-128<=t&&128>t?q1(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function Lt(t){if(isNaN(t)||!isFinite(t))return ls;if(0>t)return Ve(Lt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=La;return new he(e,0)}function dp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(dp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Lt(Math.pow(e,8)),s=ls,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Lt(Math.pow(e,i)),s=s.R(i).add(Lt(o))):(s=s.R(n),s=s.add(Lt(o)))}return s}var La=4294967296,ls=Xc(0),Fa=Xc(1),zu=Xc(16777216);R=he.prototype;R.ea=function(){if(mt(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:La+s)*e,e*=La}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wt(this))return"0";if(mt(this))return"-"+Ve(this).toString(t);for(var e=Lt(Math.pow(t,6)),n=this,s="";;){var r=ki(n,e).g;n=Di(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Wt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mt(t){return t.h==-1}R.X=function(t){return t=Di(this,t),mt(t)?-1:Wt(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new he(n,~t.h).add(Fa)}R.abs=function(){return mt(this)?Ve(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new he(n,n[n.length-1]&-2147483648?-1:0)};function Di(t,e){return t.add(Ve(e))}R.R=function(t){if(Wt(this)||Wt(t))return ls;if(mt(this))return mt(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(mt(t))return Ve(this.R(Ve(t)));if(0>this.X(zu)&&0>t.X(zu))return Lt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,ei(n,2*s+2*r),n[2*s+2*r+1]+=i*c,ei(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ei(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ei(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new he(n,0)};function ei(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fs(t,e){this.g=t,this.h=e}function ki(t,e){if(Wt(e))throw Error("division by zero");if(Wt(t))return new Fs(ls,ls);if(mt(t))return e=ki(Ve(t),e),new Fs(Ve(e.g),Ve(e.h));if(mt(e))return e=ki(t,Ve(e)),new Fs(Ve(e.g),e.h);if(30<t.g.length){if(mt(t)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fa,s=e;0>=s.X(t);)n=qu(n),s=qu(s);var r=Jn(n,1),i=Jn(s,1);for(s=Jn(s,2),n=Jn(n,2);!Wt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Jn(s,1),n=Jn(n,1)}return e=Di(t,r.R(e)),new Fs(r,e)}for(r=ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Lt(n),o=i.R(e);mt(o)||0<o.X(t);)n-=s,i=Lt(n),o=i.R(e);Wt(i)&&(i=Fa),r=r.add(i),t=Di(t,o)}return new Fs(r,t)}R.gb=function(t){return ki(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new he(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new he(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new he(n,this.h^t.h)};function qu(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new he(n,t.h)}function Jn(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new he(r,t.h)}xi.prototype.createWebChannel=xi.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;ro.NO_ERROR=0;ro.TIMEOUT=8;ro.HTTP_ERROR=6;Rd.COMPLETE="complete";Nd.EventType=Pr;Pr.OPEN="a";Pr.CLOSE="b";Pr.ERROR="c";Pr.MESSAGE="d";$e.prototype.listen=$e.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;xt.prototype.digest=xt.prototype.l;xt.prototype.reset=xt.prototype.reset;xt.prototype.update=xt.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Lt;he.fromString=dp;var FE=function(){return new xi},$E=function(){return so()},Wo=ro,BE=Rd,UE=Wn,Hu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},VE=Fr,ti=Nd,jE=be,zE=xt,us=he;const Ku="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Rs="9.23.0";/**
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
 */const jn=new xc("@firebase/firestore");function Wu(){return jn.logLevel}function F(t,...e){if(jn.logLevel<=ce.DEBUG){const n=e.map(Jc);jn.debug(`Firestore (${Rs}): ${t}`,...n)}}function Xt(t,...e){if(jn.logLevel<=ce.ERROR){const n=e.map(Jc);jn.error(`Firestore (${Rs}): ${t}`,...n)}}function Es(t,...e){if(jn.logLevel<=ce.WARN){const n=e.map(Jc);jn.warn(`Firestore (${Rs}): ${t}`,...n)}}function Jc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function Ne(t,e){t||X()}function ne(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class HE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KE{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new pp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Ge(e)}}class WE{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class GE{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new WE(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YE{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.T=n.token,new QE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function XE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class gp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=XE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function le(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ct(0,0))}static max(){return new Q(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Er{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Er.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Er?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Er{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const JE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Er{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return JE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(we.fromString(e))}static fromName(e){return new q(we.fromString(e).popFirst(5))}static empty(){return new q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new we(e.slice()))}}function ZE(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new bn(r,q.empty(),e)}function e_(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bn(Q.min(),q.empty(),-1)}static max(){return new bn(Q.max(),q.empty(),-1)}}function t_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const n_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zc(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==n_)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ur(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class el{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}el.ct=-1;function fo(t){return t==null}function $a(t){return t===0&&1/t==-1/0}/**
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
 */function Gu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function r_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ni(this.root,e,this.comparator,!0)}}class ni{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=r??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ue(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(e){return new Qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new cn([])}unionWith(e){let n=new tt(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class mp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new mp("Invalid base64 string: "+r):r}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const i_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=i_.exec(t);if(Ne(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zn(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */function tl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nl(t){const e=t.mapValue.fields.__previous_value__;return tl(e)?nl(e):e}function _r(t){const e=In(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class o_{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tl(t)?4:a_(t)?9007199254740991:10:X()}function Vt(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=In(s.timestampValue),o=In(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return zn(s.bytesValue).isEqual(zn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?$a(i)===$a(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Gu(i)!==Gu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Vt(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Ir(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=qn(t),s=qn(e);if(n!==s)return le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Yu(t.timestampValue,e.timestampValue);case 4:return Yu(_r(t),_r(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(r,i){const o=zn(r),a=zn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=le(xe(r.latitude),xe(i.latitude));return o!==0?o:le(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bs(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===si.mapValue&&i===si.mapValue)return 0;if(r===si.mapValue)return 1;if(i===si.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const f=bs(o[a[u]],c[l[u]]);if(f!==0)return f}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Yu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=In(t),s=In(e),r=le(n.seconds,s.seconds);return r!==0?r:le(n.nanos,s.nanos)}function Is(t){return Ba(t)}function Ba(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=In(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?zn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ba(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ba(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Ua(t){return!!t&&"integerValue"in t}function sl(t){return!!t&&"arrayValue"in t}function Xu(t){return!!t&&"nullValue"in t}function Ju(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Go(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Js(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function a_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=at.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Js(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Go(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){po(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Pt(Js(this.value))}}/**
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
 */class Qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,Q.min(),Q.min(),Q.min(),Pt.empty(),0)}static newFoundDocument(e,n,s,r){return new Qe(e,1,n,Q.min(),s,r,0)}static newNoDocument(e,n){return new Qe(e,2,n,Q.min(),Q.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,Q.min(),Q.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ri{constructor(e,n){this.position=e,this.inclusive=n}}function Zu(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function eh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function c_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yp{}class Re extends yp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new u_(e,n,s):n==="array-contains"?new d_(e,s):n==="in"?new p_(e,s):n==="not-in"?new g_(e,s):n==="array-contains-any"?new m_(e,s):new Re(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new h_(e,s):new f_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends yp{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new jt(e,n)}matches(e){return vp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function vp(t){return t.op==="and"}function wp(t){return l_(t)&&vp(t)}function l_(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Va(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(wp(t))return t.filters.map(e=>Va(e)).join(",");{const e=t.filters.map(n=>Va(n)).join(",");return`${t.op}(${e})`}}function Ep(t,e){return t instanceof Re?function(n,s){return s instanceof Re&&n.op===s.op&&n.field.isEqual(s.field)&&Vt(n.value,s.value)}(t,e):t instanceof jt?function(n,s){return s instanceof jt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ep(i,s.filters[o]),!0):!1}(t,e):void X()}function _p(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Is(e.value)}`}(t):t instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(_p).join(" ,")+"}"}(t):"Filter"}class u_ extends Re{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class h_ extends Re{constructor(e,n){super(e,"in",n),this.keys=bp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f_ extends Re{constructor(e,n){super(e,"not-in",n),this.keys=bp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class d_ extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sl(n)&&Ir(n.arrayValue,this.value)}}class p_ extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ir(this.value.arrayValue,n)}}class g_ extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ir(this.value.arrayValue,n)}}class m_ extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ir(this.value.arrayValue,s))}}/**
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
 */class y_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function th(t,e=null,n=[],s=[],r=null,i=null,o=null){return new y_(t,e,n,s,r,i,o)}function rl(t){const e=ne(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Va(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),fo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Is(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Is(s)).join(",")),e.dt=n}return e.dt}function il(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!c_(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ep(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eh(t.startAt,e.startAt)&&eh(t.endAt,e.endAt)}function ja(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class go{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function v_(t,e,n,s,r,i,o,a){return new go(t,e,n,s,r,i,o,a)}function ol(t){return new go(t)}function nh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function E_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function __(t){return t.collectionGroup!==null}function hs(t){const e=ne(t);if(e.wt===null){e.wt=[];const n=E_(e),s=w_(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Zs(n)),e.wt.push(new Zs(at.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Zs(at.keyField(),i))}}}return e.wt}function Jt(t){const e=ne(t);if(!e._t)if(e.limitType==="F")e._t=th(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of hs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Zs(i.field,o))}const s=e.endAt?new Ri(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ri(e.startAt.position,e.startAt.inclusive):null;e._t=th(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function za(t,e,n){return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mo(t,e){return il(Jt(t),Jt(e))&&t.limitType===e.limitType}function Ip(t){return`${rl(Jt(t))}|lt:${t.limitType}`}function qa(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>_p(s)).join(", ")}]`),fo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Is(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Is(s)).join(",")),`Target(${n})`}(Jt(t))}; limitType=${t.limitType})`}function yo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of hs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Zu(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,hs(n),s)||n.endAt&&!function(r,i,o){const a=Zu(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,hs(n),s))}(t,e)}function b_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tp(t){return(e,n)=>{let s=!1;for(const r of hs(t)){const i=I_(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function I_(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bs(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return r_(this.inner)}size(){return this.innerSize}}/**
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
 */const T_=new Ce(q.comparator);function Tn(){return T_}const Cp=new Ce(q.comparator);function js(...t){let e=Cp;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=Cp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ln(){return er()}function Sp(){return er()}function er(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const S_=new tt(q.comparator);function te(...t){let e=S_;for(const n of t)e=e.add(n);return e}const A_=new tt(le);function x_(){return A_}/**
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
 */function D_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function k_(t){return{integerValue:""+t}}/**
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
 */class vo{constructor(){this._=void 0}}function R_(t,e,n){return t instanceof Ha?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&tl(r)&&(r=nl(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ni?Ap(t,e):t instanceof Oi?xp(t,e):function(s,r){const i=O_(s,r),o=sh(i)+sh(s.gt);return Ua(i)&&Ua(s.gt)?k_(o):D_(s.serializer,o)}(t,e)}function N_(t,e,n){return t instanceof Ni?Ap(t,e):t instanceof Oi?xp(t,e):n}function O_(t,e){return t instanceof Ka?Ua(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ha extends vo{}class Ni extends vo{constructor(e){super(),this.elements=e}}function Ap(t,e){const n=Dp(e);for(const s of t.elements)n.some(r=>Vt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Oi extends vo{constructor(e){super(),this.elements=e}}function xp(t,e){let n=Dp(e);for(const s of t.elements)n=n.filter(r=>!Vt(r,s));return{arrayValue:{values:n}}}class Ka extends vo{constructor(e,n){super(),this.serializer=e,this.gt=n}}function sh(t){return xe(t.integerValue||t.doubleValue)}function Dp(t){return sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ni&&s instanceof Ni||n instanceof Oi&&s instanceof Oi?_s(n.elements,s.elements,Vt):n instanceof Ka&&s instanceof Ka?Vt(n.gt,s.gt):n instanceof Ha&&s instanceof Ha}(t.transform,e.transform)}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class al{}function kp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new L_(t.key,Un.none()):new cl(t.key,t.data,Un.none());{const n=t.data,s=Pt.empty();let r=new tt(at.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new wo(t.key,s,new cn(r.toArray()),Un.none())}}function M_(t,e,n){t instanceof cl?function(s,r,i){const o=s.value.clone(),a=ih(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof wo?function(s,r,i){if(!hi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ih(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Rp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function tr(t,e,n,s){return t instanceof cl?function(r,i,o,a){if(!hi(r.precondition,i))return o;const c=r.value.clone(),l=oh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof wo?function(r,i,o,a){if(!hi(r.precondition,i))return o;const c=oh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Rp(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return hi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function rh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&_s(n,s,(r,i)=>P_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cl extends al{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class wo extends al{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ih(t,e,n){const s=new Map;Ne(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,N_(o,a,n[r]))}return s}function oh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,R_(i,o,e))}return s}class L_ extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class F_{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&M_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=tr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=tr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Sp();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=kp(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,s)=>rh(n,s))&&_s(this.baseMutations,e.baseMutations,(n,s)=>rh(n,s))}}/**
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
 */class $_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class B_{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ae,Z;function Np(t){if(t===void 0)return Xt("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ae.OK:return A.OK;case Ae.CANCELLED:return A.CANCELLED;case Ae.UNKNOWN:return A.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return A.INTERNAL;case Ae.UNAVAILABLE:return A.UNAVAILABLE;case Ae.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ae.NOT_FOUND:return A.NOT_FOUND;case Ae.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ae.ABORTED:return A.ABORTED;case Ae.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ae.DATA_LOSS:return A.DATA_LOSS;default:return X()}}(Z=Ae||(Ae={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ll{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ri}static getOrCreateInstance(){return ri===null&&(ri=new ll),ri}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ri=null;/**
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
 */function U_(){return new TextEncoder}/**
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
 */const V_=new us([4294967295,4294967295],0);function ah(t){const e=U_().encode(t),n=new zE;return n.update(e),new Uint8Array(n.digest())}function ch(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new us([n,s],0),new us([r,i],0)]}class ul{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(s<0)throw new zs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=us.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(us.fromNumber(s)));return r.compare(V_)===1&&(r=new us([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=ah(e),[s,r]=ch(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ul(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=ah(e),[s,r]=ch(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Vr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Eo(Q.min(),r,new Ce(le),Tn(),te())}}class Vr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Vr(s,n,te(),te(),te())}}/**
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
 */class fi{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Op{constructor(e,n){this.targetId=e,this.Vt=n}}class Pp{constructor(e,n,s=nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class lh{constructor(){this.St=0,this.Dt=hh(),this.Ct=nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=te(),n=te(),s=te();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Vr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=hh()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class j_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Tn(),this.zt=uh(),this.Wt=new Ce(le)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(ja(o))if(r===0){const a=new q(o.path);this.Yt(s,a,Qe.newNoDocument(a,Q.min()))}else Ne(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=ll.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,g,y,T,x,P;const N={localCacheCount:u,existenceFilterCount:h.count},z=h.unchangedNames;return z&&(N.bloomFilter={applied:l===0,hashCount:(f=z==null?void 0:z.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(T=(y=(g=z==null?void 0:z.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&T!==void 0?T:0,padding:(P=(x=z==null?void 0:z.bits)===null||x===void 0?void 0:x.padding)!==null&&P!==void 0?P:0}),N}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=zn(i).toUint8Array()}catch(u){if(u instanceof mp)return Es("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new ul(c,o,a)}catch(u){return Es(u instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&ja(a.target)){const c=new q(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Qe.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=te();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Eo(e,n,this.Wt,this.jt,s);return this.jt=Tn(),this.zt=uh(),this.Wt=new Ce(le),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new lh,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new tt(le),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new lh),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function uh(){return new Ce(q.comparator)}function hh(){return new Ce(q.comparator)}const z_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),q_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),H_=(()=>({and:"AND",or:"OR"}))();class K_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wa(t,e){return t.useProto3Json||fo(e)?e:{value:e}}function W_(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fs(t){return Ne(!!t),Q.fromTimestamp(function(e){const n=In(e);return new ct(n.seconds,n.nanos)}(t))}function Q_(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Mp(t){const e=we.fromString(t);return Ne(Bp(e)),e}function Qo(t,e){const n=Mp(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Lp(n))}function Ga(t,e){return Q_(t.databaseId,e)}function Y_(t){const e=Mp(t);return e.length===4?we.emptyPath():Lp(e)}function fh(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lp(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function X_(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ne(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(Ne(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Np(c.code);return new U(l,c.message||"")}(o);n=new Pp(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qo(t,s.document.name),i=fs(s.document.updateTime),o=s.document.createTime?fs(s.document.createTime):Q.min(),a=new Pt({mapValue:{fields:s.document.fields}}),c=Qe.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new fi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qo(t,s.document),i=s.readTime?fs(s.readTime):Q.min(),o=Qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qo(t,s.document),i=s.removedTargetIds||[];n=new fi([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new B_(r,i),a=s.targetId;n=new Op(a,o)}}return n}function J_(t,e){return{documents:[Ga(t,e.path)]}}function Z_(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ga(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ga(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return $p(jt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:es(u.field),direction:nb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wa(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function eb(t){let e=Y_(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Fp(u);return h instanceof jt&&wp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Zs(ts(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,fo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ri(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ri(f,h)}(n.endAt)),v_(e,r,o,i,a,"F",c,l)}function tb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fp(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ts(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(e.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ts(e.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ts(e.unaryFilter.field);return Re.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(ts(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>Fp(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function nb(t){return z_[t]}function sb(t){return q_[t]}function rb(t){return H_[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return at.fromServerFormat(t.fieldPath)}function $p(t){return t instanceof Re?function(e){if(e.op==="=="){if(Ju(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NAN"}};if(Xu(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ju(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NAN"}};if(Xu(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(e.field),op:sb(e.op),value:e.value}}}(t):t instanceof jt?function(e){const n=e.getFilters().map(s=>$p(s));return n.length===1?n[0]:{compositeFilter:{op:rb(e.op),filters:n}}}(t):X()}function Bp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ln{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ib{constructor(e){this.fe=e}}function ob(t){const e=eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?za(e,e.limit,"L"):e}/**
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
 */class ab{constructor(){this.rn=new cb}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(bn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class cb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new tt(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new tt(we.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ts(0)}static Mn(){return new Ts(-1)}}/**
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
 */class lb{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ub{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&tr(s.mutation,r,cn.empty(),ct.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=Ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=js();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Tn();const o=er(),a=er();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof wo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),tr(u.mutation,l,u.mutation.getFieldMask(),ct.now())):o.set(l.key,cn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new ub(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=er();let r=new Ce((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||cn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Sp();u.forEach(f=>{if(!i.has(f)){const g=kp(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):__(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(Ln());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:C_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(s=>{let r=js();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=js();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new go(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=js();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&tr(l.mutation,c,cn.empty(),ct.now()),yo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class fb{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:fs(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:ob(s.bundledQuery),readTime:fs(s.readTime)}}(n)),C.resolve()}}/**
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
 */class db{constructor(){this.overlays=new Ce(q.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ln();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=Ln(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ln(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ln(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $_(n,s));let i=this.ls.get(n);i===void 0&&(i=te(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class hl{constructor(){this.fs=new tt(Pe.ds),this.ws=new tt(Pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Pe(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new q(new we([])),s=new Pe(n,e),r=new Pe(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new q(new we([])),s=new Pe(n,e),r=new Pe(n,e+1);let i=te();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return q.comparator(e.key,n.key)||le(e.As,n.As)}static _s(e,n){return le(e.As,n.As)||q.comparator(e.key,n.key)}}/**
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
 */class pb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new tt(Pe.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new F_(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),r=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new tt(le);return n.forEach(r=>{const i=new Pe(r,0),o=new Pe(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),C.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new q(i),0);let a=new tt(le);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ne(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return C.forEach(n.mutations,r=>{const i=new Pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Pe(n,0),r=this.Rs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gb{constructor(e){this.Ds=e,this.docs=new Ce(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let s=Tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Qe.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Tn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||t_(e_(u),s)<=0||(r.has(u.key)||yo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Cs(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new mb(this)}getSize(e){return C.resolve(this.size)}}class mb extends lb{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class yb{constructor(e){this.persistence=e,this.xs=new Ns(n=>rl(n),il),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new hl,this.targetCount=0,this.Ms=Ts.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
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
 */class vb{constructor(e,n){this.$s={},this.overlays={},this.Os=new el(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new yb(this),this.indexManager=new ab,this.remoteDocumentCache=function(s){return new gb(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new ib(n),this.qs=new fb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new pb(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new wb(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return C.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class wb extends s_{constructor(e){super(),this.currentSequenceNumber=e}}class fl{constructor(e){this.persistence=e,this.Qs=new hl,this.js=null}static zs(e){return new fl(e)}get Ws(){if(this.js)return this.js;throw X()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,s=>{const r=q.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class dl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dl(e,n.fromCache,s,r)}}/**
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
 */class Eb{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(nh(n))return C.resolve(null);let s=Jt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=za(n,null,"F"),s=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,za(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return nh(n)||r.isEqual(Q.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Wu()<=ce.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qa(n)),this.Wi(e,o,n,ZE(r,-1)))})}ji(e,n){let s=new tt(Tp(e));return n.forEach((r,i)=>{yo(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Wu()<=ce.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",qa(n)),this.Ui.getDocumentsMatchingQuery(e,n,bn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class _b{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Ce(le),this.Yi=new Ns(i=>rl(i),il),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hb(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function bb(t,e,n,s){return new _b(t,e,n,s)}async function Up(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Vp(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Ib(t,e){const n=ne(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(nt.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,T,x){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(f,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=Tn(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Tb(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(Q.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function Tb(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function Cb(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new ln(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Qa(t,e,n){const s=ne(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ur(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function dh(t,e,n){const s=ne(t);let r=Q.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ne(a),h=u.Yi.get(l);return h!==void 0?C.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?i:te())).next(a=>(Sb(s,b_(e),a),{documents:a,ir:i})))}function Sb(t,e,n){let s=t.Xi.get(e)||Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class ph{constructor(){this.activeTargetIds=x_()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ab{constructor(){this.Hr=new ph,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ph,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xb{Yr(e){}shutdown(){}}/**
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
 */class gh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ii=null;function Yo(){return ii===null?ii=268435456+Math.round(2147483648*Math.random()):ii++,"0x"+ii.toString(16)}/**
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
 */const Db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kb{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const We="WebChannelConnection";class Rb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Yo(),a=this.To(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(F("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Es("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=Db[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Yo();return new Promise((o,a)=>{const c=new jE;c.setWithCredentials(!0),c.listenOnce(BE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wo.NO_ERROR:const u=c.getResponseJson();F(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Wo.TIMEOUT:F(We,`RPC '${e}' ${i} timed out`),a(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case Wo.HTTP_ERROR:const h=c.getStatus();if(F(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(T){const x=T.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(x)>=0?x:A.UNKNOWN}(g.status);a(new U(y,g.message))}else a(new U(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(A.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{F(We,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);F(We,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Yo(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FE(),a=$E(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new VE({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");F(We,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new kb({ro:x=>{g?F(We,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(f||(F(We,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),F(We,`RPC '${e}' stream ${r} sending:`,x),h.send(x))},oo:()=>h.close()}),T=(x,P,N)=>{x.listen(P,z=>{try{N(z)}catch(b){setTimeout(()=>{throw b},0)}})};return T(h,ti.EventType.OPEN,()=>{g||F(We,`RPC '${e}' stream ${r} transport opened.`)}),T(h,ti.EventType.CLOSE,()=>{g||(g=!0,F(We,`RPC '${e}' stream ${r} transport closed`),y.wo())}),T(h,ti.EventType.ERROR,x=>{g||(g=!0,Es(We,`RPC '${e}' stream ${r} transport errored:`,x),y.wo(new U(A.UNAVAILABLE,"The operation could not be completed")))}),T(h,ti.EventType.MESSAGE,x=>{var P;if(!g){const N=x.data[0];Ne(!!N);const z=N,b=z.error||((P=z[0])===null||P===void 0?void 0:P.error);if(b){F(We,`RPC '${e}' stream ${r} received error:`,b);const H=b.status;let ie=function(pe){const Ie=Ae[pe];if(Ie!==void 0)return Np(Ie)}(H),ye=b.message;ie===void 0&&(ie=A.INTERNAL,ye="Unknown error status: "+H+" with message "+b.message),g=!0,y.wo(new U(ie,ye)),h.close()}else F(We,`RPC '${e}' stream ${r} received:`,N),y._o(N)}}),T(a,UE.STAT_EVENT,x=>{x.stat===Hu.PROXY?F(We,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===Hu.NOPROXY&&F(We,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Xo(){return typeof document<"u"?document:null}/**
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
 */function jp(t){return new K_(t,!0)}/**
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
 */class zp{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Nb{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new zp(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new U(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ob extends Nb{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=X_(this.serializer,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?fs(i.readTime):Q.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=fh(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=ja(a)?{documents:J_(r,a)}:{query:Z_(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=G_(r,i.resumeToken);const c=Wa(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Q.min())>0){o.readTime=W_(r,i.snapshotVersion.toTimestamp());const c=Wa(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=tb(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=fh(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
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
 */class Pb extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(A.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class Mb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Xt(n),this.mu=!1):F("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Lb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{zr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ne(a);c.vu.add(4),await jr(c),c.bu.set("Unknown"),c.vu.delete(4),await _o(c)}(this))})}),this.bu=new Mb(s,r)}}async function _o(t){if(zr(t))for(const e of t.Ru)await e(!0)}async function jr(t){for(const e of t.Ru)await e(!1)}function qp(t,e){const n=ne(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),ml(n)?gl(n):Os(n).Ko()&&pl(n,e))}function Hp(t,e){const n=ne(t),s=Os(n);n.Au.delete(e),s.Ko()&&Kp(n,e),n.Au.size===0&&(s.Ko()?s.jo():zr(n)&&n.bu.set("Unknown"))}function pl(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).su(e)}function Kp(t,e){t.Vu.qt(e),Os(t).iu(e)}function gl(t){t.Vu=new j_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.bu.gu()}function ml(t){return zr(t)&&!Os(t).Uo()&&t.Au.size>0}function zr(t){return ne(t).vu.size===0}function Wp(t){t.Vu=void 0}async function Fb(t){t.Au.forEach((e,n)=>{pl(t,e)})}async function $b(t,e){Wp(t),ml(t)?(t.bu.Iu(e),gl(t)):t.bu.set("Unknown")}async function Bb(t,e,n){if(t.bu.set("Online"),e instanceof Pp&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mh(t,s)}else if(e instanceof fi?t.Vu.Ht(e):e instanceof Op?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Q.min()))try{const s=await Vp(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),Kp(r,a);const u=new ln(l.target,a,c,l.sequenceNumber);pl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await mh(t,s)}}async function mh(t,e,n){if(!Ur(e))throw e;t.vu.add(1),await jr(t),t.bu.set("Offline"),n||(n=()=>Vp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await _o(t)})}async function yh(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=zr(n);n.vu.add(3),await jr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await _o(n)}async function Ub(t,e){const n=ne(t);e?(n.vu.delete(2),await _o(n)):e||(n.vu.add(2),await jr(n),n.bu.set("Unknown"))}function Os(t){return t.Su||(t.Su=function(e,n,s){const r=ne(e);return r.fu(),new Ob(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:Fb.bind(null,t),ao:$b.bind(null,t),nu:Bb.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),ml(t)?gl(t):t.bu.set("Unknown")):(await t.Su.stop(),Wp(t))})),t.Su}/**
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
 */class yl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new yl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),Ur(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ds{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=js(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class vh{constructor(){this.Cu=new Ce(q.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):X():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Cs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cs(e,n,ds.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Vb{constructor(){this.Nu=void 0,this.listeners=[]}}class jb{constructor(){this.queries=new Ns(e=>Ip(e),mo),this.onlineState="Unknown",this.ku=new Set}}async function Qp(t,e){const n=ne(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Vb),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Gp(o,`Initialization of query '${qa(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&vl(n)}async function Yp(t,e){const n=ne(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function zb(t,e){const n=ne(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&vl(n)}function qb(t,e,n){const s=ne(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function vl(t){t.ku.forEach(e=>{e.next()})}class Xp{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Cs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Jp{constructor(e){this.key=e}}class Zp{constructor(e){this.key=e}}class Hb{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=te(),this.mutatedKeys=te(),this.tc=Tp(e),this.ec=new ds(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new vh,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=yo(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;f&&g?f.data.isEqual(g.data)?y!==T&&(s.track({type:3,doc:g}),x=!0):this.rc(f,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),x=!0):f&&!g&&(s.track({type:1,doc:f}),x=!0,(c||l)&&(a=!0)),x&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(h)-g(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new Cs(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=te(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Zp(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Jp(s))}),n}hc(e){this.Yu=e.ir,this.Zu=te();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Cs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Kb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Wb{constructor(e){this.key=e,this.fc=!1}}class Gb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ns(a=>Ip(a),mo),this._c=new Map,this.mc=new Set,this.gc=new Ce(q.comparator),this.yc=new Map,this.Ic=new hl,this.Tc={},this.Ec=new Map,this.Ac=Ts.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Qb(t,e){const n=nI(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await Cb(n.localStore,Jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Yb(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&qp(n.remoteStore,o)}return r}async function Yb(t,e,n,s,r){t.Rc=(h,f,g)=>async function(y,T,x,P){let N=T.view.sc(x);N.zi&&(N=await dh(y.localStore,T.query,!1).then(({documents:H})=>T.view.sc(H,N)));const z=P&&P.targetChanges.get(T.targetId),b=T.view.applyChanges(N,y.isPrimaryClient,z);return Eh(y,T.targetId,b.cc),b.snapshot}(t,h,f,g);const i=await dh(t.localStore,e,!0),o=new Hb(e,i.ir),a=o.sc(i.documents),c=Vr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Eh(t,n,l.cc);const u=new Kb(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function Xb(t,e){const n=ne(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!mo(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Hp(n.remoteStore,s.targetId),Ya(n,s.targetId)}).catch(Zc)):(Ya(n,s.targetId),await Qa(n.localStore,s.targetId,!0))}async function eg(t,e){const n=ne(t);try{const s=await Ib(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Ne(o.fc):r.removedDocuments.size>0&&(Ne(o.fc),o.fc=!1))}),await ng(n,s,e)}catch(s){await Zc(s)}}function wh(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ne(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&vl(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Jb(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Ce(q.comparator);o=o.insert(i,Qe.newNoDocument(i,Q.min()));const a=te().add(i),c=new Eo(Q.min(),new Map,new Ce(le),o,a);await eg(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),wl(s)}else await Qa(s.localStore,e,!1).then(()=>Ya(s,e,n)).catch(Zc)}function Ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||tg(t,s)})}function tg(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Hp(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),wl(t))}function Eh(t,e,n){for(const s of n)s instanceof Jp?(t.Ic.addReference(s.key,e),Zb(t,s)):s instanceof Zp?(F("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||tg(t,s.key)):X()}function Zb(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(F("SyncEngine","New document in limbo: "+n),t.mc.add(s),wl(t))}function wl(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new q(we.fromString(e)),s=t.Ac.next();t.yc.set(s,new Wb(n)),t.gc=t.gc.insert(n,s),qp(t.remoteStore,new ln(Jt(ol(n.path)),s,"TargetPurposeLimboResolution",el.ct))}}async function ng(t,e,n){const s=ne(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=dl.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=ne(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ur(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,y)}}}(s.localStore,i))}async function eI(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await Up(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new U(A.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ng(n,s.er)}}function tI(t,e){const n=ne(t),s=n.yc.get(e);if(s&&s.fc)return te().add(s.key);{let r=te();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function nI(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jb.bind(null,e),e.dc.nu=zb.bind(null,e.eventManager),e.dc.Pc=qb.bind(null,e.eventManager),e}class _h{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jp(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bb(this.persistence,new Eb,e.initialUser,this.serializer)}createPersistence(e){return new vb(fl.zs,this.serializer)}createSharedClientState(e){return new Ab}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eI.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jb}createDatastore(e){const n=jp(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Rb(r));var r;return function(i,o,a,c){return new Pb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>wh(this.syncEngine,a,0),o=gh.D()?new gh:new xb,new Lb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Gb(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);F("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await jr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ge.UNAUTHENTICATED,this.clientId=gp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Gp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Jo(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Up(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oI(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>yh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yh(e.remoteStore,i)),t._onlineComponents=e}function iI(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!iI(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await Jo(t,new _h)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Jo(t,new _h);return t._offlineComponents}async function aI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await bh(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await bh(t,new sI))),t._onlineComponents}async function rg(t){const e=await aI(t),n=e.eventManager;return n.onListen=Qb.bind(null,e.syncEngine),n.onUnlisten=Xb.bind(null,e.syncEngine),n}function cI(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new sg({next:h=>{i.enqueueAndForget(()=>Yp(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Xp(ol(o.path),l,{includeMetadataChanges:!0,Ku:!0});return Qp(r,u)}(await rg(t),t.asyncQueue,e,n,s)),s.promise}function lI(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new sg({next:h=>{i.enqueueAndForget(()=>Yp(r,u)),h.fromCache&&a.source==="server"?c.reject(new U(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Xp(o,l,{includeMetadataChanges:!0,Ku:!0});return Qp(r,u)}(await rg(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function ig(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ih=new Map;/**
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
 */function og(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uI(t,e,n,s){if(e===!0&&s===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Th(t){if(!q.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ch(t){if(q.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hI(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ig((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class bo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qE;switch(n.type){case"firstParty":return new GE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ih.get(e);n&&(F("ComponentProvider","Removing Datastore"),Ih.delete(e),n.terminate())}(this),Promise.resolve()}}function fI(t,e,n,s={}){var r;const i=(t=Tr(t,bo))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Ge.MOCK_USER;else{a=_w(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ge(l)}t._authCredentials=new HE(new pp(a,c))}}/**
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
 */class Bt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Io{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class mn extends Io{constructor(e,n,s){super(e,n,ol(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new q(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function dI(t,e,...n){if(t=Yi(t),og("collection","path",e),t instanceof bo){const s=we.fromString(e,...n);return Ch(s),new mn(t,null,s)}{if(!(t instanceof Bt||t instanceof mn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Ch(s),new mn(t.firestore,null,s)}}function pI(t,e,...n){if(t=Yi(t),arguments.length===1&&(e=gp.A()),og("doc","path",e),t instanceof bo){const s=we.fromString(e,...n);return Th(s),new Bt(t,null,new q(s))}{if(!(t instanceof Bt||t instanceof mn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Th(s),new Bt(t.firestore,t instanceof mn?t.converter:null,new q(s))}}/**
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
 */class gI{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new zp(this,"async_queue_retry"),this.Xc=()=>{const n=Xo();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Xo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Xo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new gn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ur(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Xt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=yl.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&X()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class El extends bo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new gI,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cg(this),this._firestoreClient.terminate()}}function mI(t,e){const n=typeof t=="object"?t:ld(),s=typeof t=="string"?t:e||"(default)",r=kr(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=ww("firestore");i&&fI(r,...i)}return r}function ag(t){return t._firestoreClient||cg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function cg(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new o_(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ig(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new rI(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(nt.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}const vI=new RegExp("[~\\*/\\[\\]]");function wI(t,e,n){if(e.search(vI)>=0)throw Ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lg(...e.split("."))._internalPath}catch{throw Ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ah(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(A.INVALID_ARGUMENT,a+t+c)}/**
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
 */class ug{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EI extends ug{data(){return super.data()}}function hg(t,e){return typeof e=="string"?wI(t,e):e instanceof lg?e._internalPath:e._delegate._internalPath}/**
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
 */function _I(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bI{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return po(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new yI(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=In(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);Ne(Bp(s));const r=new br(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||Xt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fg extends ug{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(hg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class di extends fg{data(e={}){return super.data(e)}}class II{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new qs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new di(this._firestore,this._userDataWriter,s.key,s,new qs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new qs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:TI(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
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
 */function CI(t){t=Tr(t,Bt);const e=Tr(t.firestore,El);return cI(ag(e),t._key).then(n=>AI(e,t,n))}class dg extends bI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function SI(t){t=Tr(t,Io);const e=Tr(t.firestore,El),n=ag(e),s=new dg(e);return _I(t._query),lI(n,t._query).then(r=>new II(e,s,t,r))}function AI(t,e,n){const s=n.docs.get(e._key),r=new dg(t);return new fg(t,r,e._key,s,new qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Rs=n})(A1),_n(new Qt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new El(new KE(n.getProvider("auth-internal")),new YE(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),$t(Ku,"3.13.0",t),$t(Ku,"3.13.0","esm2017")})();var xI="firebase",DI="9.23.0";/**
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
 */$t(xI,DI,"app");const kI=(t,e)=>e.some(n=>t instanceof n);let xh,Dh;function RI(){return xh||(xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NI(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,Xa=new WeakMap,gg=new WeakMap,Zo=new WeakMap,_l=new WeakMap;function OI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,t)}).catch(()=>{}),_l.set(e,t),e}function PI(t){if(Xa.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xa.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MI(t){Ja=t(Ja)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ea(this),e,...n);return gg.set(s,e.sort?e.sort():[e]),yn(s)}:NI().includes(t)?function(...e){return t.apply(ea(this),e),yn(pg.get(this))}:function(...e){return yn(t.apply(ea(this),e))}}function FI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&PI(t),kI(t,RI())?new Proxy(t,Ja):t)}function yn(t){if(t instanceof IDBRequest)return OI(t);if(Zo.has(t))return Zo.get(t);const e=FI(t);return e!==t&&(Zo.set(t,e),_l.set(e,t)),e}const ea=t=>_l.get(t);function $I(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(yn(o.result),c.oldVersion,c.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const BI=["get","getKey","getAll","getAllKeys","count"],UI=["put","add","delete","clear"],ta=new Map;function kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ta.get(e))return ta.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=UI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||BI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ta.set(e,i),i}MI(t=>({...t,get:(e,n,s)=>kh(e,n)||t.get(e,n,s),has:(e,n)=>!!kh(e,n)||t.has(e,n)}));const mg="@firebase/installations",bl="0.6.4";/**
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
 */const yg=1e4,vg=`w:${bl}`,wg="FIS_v2",VI="https://firebaseinstallations.googleapis.com/v1",jI=60*60*1e3,zI="installations",qI="Installations";/**
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
 */const HI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hn=new Qi(zI,qI,HI);function Eg(t){return t instanceof Cn&&t.code.includes("request-failed")}/**
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
 */function _g({projectId:t}){return`${VI}/projects/${t}/installations`}function bg(t){return{token:t.token,requestStatus:2,expiresIn:WI(t.expiresIn),creationTime:Date.now()}}async function Ig(t,e){const s=(await e.json()).error;return Hn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Tg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KI(t,{refreshToken:e}){const n=Tg(t);return n.append("Authorization",GI(e)),n}async function Cg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function WI(t){return Number(t.replace("s","000"))}function GI(t){return`${wg} ${t}`}/**
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
 */async function QI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=_g(t),r=Tg(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:wg,appId:t.appId,sdkVersion:vg},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Cg(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:bg(l.authToken)}}else throw await Ig("Create Installation",c)}/**
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
 */function Sg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function YI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const XI=/^[cdef][\w-]{21}$/,Za="";function JI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZI(t);return XI.test(n)?n:Za}catch{return Za}}function ZI(t){return YI(t).substr(0,22)}/**
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
 */function To(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ag=new Map;function xg(t,e){const n=To(t);Dg(n,e),eT(n,e)}function Dg(t,e){const n=Ag.get(t);if(n)for(const s of n)s(e)}function eT(t,e){const n=tT();n&&n.postMessage({key:t,fid:e}),nT()}let Fn=null;function tT(){return!Fn&&"BroadcastChannel"in self&&(Fn=new BroadcastChannel("[Firebase] FID Change"),Fn.onmessage=t=>{Dg(t.data.key,t.data.fid)}),Fn}function nT(){Ag.size===0&&Fn&&(Fn.close(),Fn=null)}/**
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
 */const sT="firebase-installations-database",rT=1,Kn="firebase-installations-store";let na=null;function Il(){return na||(na=$I(sT,rT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}})),na}async function Mi(t,e){const n=To(t),r=(await Il()).transaction(Kn,"readwrite"),i=r.objectStore(Kn),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&xg(t,e.fid),e}async function kg(t){const e=To(t),s=(await Il()).transaction(Kn,"readwrite");await s.objectStore(Kn).delete(e),await s.done}async function Co(t,e){const n=To(t),r=(await Il()).transaction(Kn,"readwrite"),i=r.objectStore(Kn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&xg(t,a.fid),a}/**
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
 */async function Tl(t){let e;const n=await Co(t.appConfig,s=>{const r=iT(s),i=oT(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Za?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iT(t){const e=t||{fid:JI(),registrationStatus:0};return Rg(e)}function oT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Hn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=aT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cT(t)}:{installationEntry:e}}async function aT(t,e){try{const n=await QI(t,e);return Mi(t.appConfig,n)}catch(n){throw Eg(n)&&n.customData.serverCode===409?await kg(t.appConfig):await Mi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cT(t){let e=await Rh(t.appConfig);for(;e.registrationStatus===1;)await Sg(100),e=await Rh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Tl(t);return s||n}return e}function Rh(t){return Co(t,e=>{if(!e)throw Hn.create("installation-not-found");return Rg(e)})}function Rg(t){return lT(t)?{fid:t.fid,registrationStatus:0}:t}function lT(t){return t.registrationStatus===1&&t.registrationTime+yg<Date.now()}/**
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
 */async function uT({appConfig:t,heartbeatServiceProvider:e},n){const s=hT(t,n),r=KI(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:vg,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Cg(()=>fetch(s,a));if(c.ok){const l=await c.json();return bg(l)}else throw await Ig("Generate Auth Token",c)}function hT(t,{fid:e}){return`${_g(t)}/${e}/authTokens:generate`}/**
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
 */async function Cl(t,e=!1){let n;const s=await Co(t.appConfig,i=>{if(!Ng(i))throw Hn.create("not-registered");const o=i.authToken;if(!e&&pT(o))return i;if(o.requestStatus===1)return n=fT(t,e),i;{if(!navigator.onLine)throw Hn.create("app-offline");const a=mT(i);return n=dT(t,a),a}});return n?await n:s.authToken}async function fT(t,e){let n=await Nh(t.appConfig);for(;n.authToken.requestStatus===1;)await Sg(100),n=await Nh(t.appConfig);const s=n.authToken;return s.requestStatus===0?Cl(t,e):s}function Nh(t){return Co(t,e=>{if(!Ng(e))throw Hn.create("not-registered");const n=e.authToken;return yT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dT(t,e){try{const n=await uT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Mi(t.appConfig,s),n}catch(n){if(Eg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kg(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mi(t.appConfig,s)}throw n}}function Ng(t){return t!==void 0&&t.registrationStatus===2}function pT(t){return t.requestStatus===2&&!gT(t)}function gT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jI}function mT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yT(t){return t.requestStatus===1&&t.requestTime+yg<Date.now()}/**
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
 */async function vT(t){const e=t,{installationEntry:n,registrationPromise:s}=await Tl(e);return s?s.catch(console.error):Cl(e).catch(console.error),n.fid}/**
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
 */async function wT(t,e=!1){const n=t;return await ET(n),(await Cl(n,e)).token}async function ET(t){const{registrationPromise:e}=await Tl(t);e&&await e}/**
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
 */function _T(t){if(!t||!t.options)throw sa("App Configuration");if(!t.name)throw sa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sa(t){return Hn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Og="installations",bT="installations-internal",IT=t=>{const e=t.getProvider("app").getImmediate(),n=_T(e),s=kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},TT=t=>{const e=t.getProvider("app").getImmediate(),n=kr(e,Og).getImmediate();return{getId:()=>vT(n),getToken:r=>wT(n,r)}};function CT(){_n(new Qt(Og,IT,"PUBLIC")),_n(new Qt(bT,TT,"PRIVATE"))}CT();$t(mg,bl);$t(mg,bl,"esm2017");/**
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
 */const Li="analytics",ST="firebase_id",AT="origin",xT=60*1e3,DT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sl="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new xc("@firebase/analytics");/**
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
 */const kT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new Qi("analytics","Analytics",kT);/**
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
 */function RT(t){if(!t.startsWith(Sl)){const e=dt.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function Pg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function NT(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function OT(t,e){const n=NT("firebase-js-sdk-policy",{createScriptURL:RT}),s=document.createElement("script"),r=`${Sl}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function PT(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MT(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Pg(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){lt.error(a)}t("config",r,i)}async function LT(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Pg(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){lt.error(i)}}function FT(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await LT(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await MT(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){lt.error(a)}}return r}function $T(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=FT(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function BT(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sl)&&n.src.includes(t))return n;return null}/**
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
 */const UT=30,VT=1e3;class jT{constructor(e={},n=VT){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mg=new jT;function zT(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qT(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:zT(s)},i=DT.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function HT(t,e=Mg,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw dt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw dt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new GT;return setTimeout(async()=>{a.abort()},n!==void 0?n:xT),Lg({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Lg(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Mg){var i;const{appId:o,measurementId:a}=t;try{await KT(s,e)}catch(c){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await qT(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!WT(l)){if(r.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Tu(n,r.intervalMillis,UT):Tu(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),lt.debug(`Calling attemptFetch again in ${u} millis`),Lg(t,h,s,r)}}function KT(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function WT(t){if(!(t instanceof Cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QT(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function YT(){if(rd())try{await id()}catch(t){return lt.warn(dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XT(t,e,n,s,r,i,o){var a;const c=HT(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),e.push(c);const l=YT().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);BT(i)||OT(i,u.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[AT]="firebase",f.update=!0,h!=null&&(f[ST]=h),r("config",u.measurementId,f),u.measurementId}/**
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
 */class JT{constructor(e){this.app=e}_delete(){return delete nr[this.app.options.appId],Promise.resolve()}}let nr={},Oh=[];const Ph={};let ra="dataLayer",ZT="gtag",Mh,Fg,Lh=!1;function eC(){const t=[];if(bw()&&t.push("This is a browser extension environment."),Iw()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function tC(t,e,n){eC();const s=t.options.appId;if(!s)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(nr[s]!=null)throw dt.create("already-exists",{id:s});if(!Lh){PT(ra);const{wrappedGtag:i,gtagCore:o}=$T(nr,Oh,Ph,ra,ZT);Fg=i,Mh=o,Lh=!0}return nr[s]=XT(t,Oh,Ph,e,Mh,ra,n),new JT(t)}function nC(t=ld()){t=Yi(t);const e=kr(t,Li);return e.isInitialized()?e.getImmediate():sC(t)}function sC(t,e={}){const n=kr(t,Li);if(n.isInitialized()){const r=n.getImmediate();if(bi(e,n.getOptions()))return r;throw dt.create("already-initialized")}return n.initialize({options:e})}function rC(t,e,n,s){t=Yi(t),QT(Fg,nr[t.app.options.appId],e,n,s).catch(r=>lt.error(r))}const Fh="@firebase/analytics",$h="0.10.0";function iC(){_n(new Qt(Li,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return tC(s,r,n)},"PUBLIC")),_n(new Qt("analytics-internal",t,"PRIVATE")),$t(Fh,$h),$t(Fh,$h,"esm2017");function t(e){try{const n=e.getProvider(Li).getImmediate();return{logEvent:(s,r,i)=>rC(n,s,r,i)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}iC();const oC={apiKey:"AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",authDomain:"blz-one-9e383.firebaseapp.com",databaseURL:"https://blz-one-9e383-default-rtdb.firebaseio.com",projectId:"blz-one-9e383",storageBucket:"blz-one-9e383.appspot.com",messagingSenderId:"817319905653",appId:"1:817319905653:web:0ba677f32f0cd9bc8bab3c",measurementId:"G-JCPNWDTZK5"},Al=cd(oC),aC=nC(Al),cC=mI(Al),$g=Cr({app:Al,analytics:aC,db:cC});const lC=t=>(Ar("data-v-0bbc8a59"),t=t(),xr(),t),uC={class:"single-item"},hC={class:"text-3xl"},fC={class:"text-gray-500"},dC=lC(()=>$("hr",null,null,-1)),pC={class:"action-buttons"},gC=["href"],mC={__name:"View",async setup(t){let e,n;const s=Y0(),r=pI($g.db,"catalog",s.params.id),i=([e,n]=Cf(()=>CI(r)),e=await e,n(),e);let o={};i.exists()?o={uid:s.params.id,title:i.data().title,description:i.data().description,type:i.data().type,download:i.data().download}:So.push("/catalog");const a=pc(o);return(c,l)=>(De(),je("div",uC,[$("h1",hC,vt(a.value.title),1),$("p",null,[On(" Type: "),$("span",fC,vt(a.value.type),1)]),$("p",null,vt(a.value.description),1),dC,$("div",pC,[$("a",{href:a.value.download,class:"btn btn-active btn-neutral text-white"}," Download ",8,gC)])]))}},yC=en(mC,[["__scopeId","data-v-0bbc8a59"]]);const vC=t=>(Ar("data-v-88090599"),t=t(),xr(),t),wC=["href"],EC={class:"card bg-base-100 shadow-xl"},_C={class:"card-body"},bC={class:"card-title justify-center"},IC={class:"py-5 justify-center"},TC=vC(()=>$("div",{class:"card-actions justify-center"},[$("button",{class:"btn btn-primary"}," View ")],-1)),CC={__name:"Card",props:["title","type","description","viewLink"],setup(t){function e(n){let s="";switch(n){case"book":s="primary";break;case"website":s="secondary";break;case"software":s="accent";break;default:s="neutral";break}return`badge badge-${s}`}return(n,s)=>(De(),je("a",{href:t.viewLink,class:"blz-card inline-flex px-5"},[$("div",EC,[$("div",_C,[$("h2",bC,vt(t.title),1),$("div",IC,[$("div",{class:Vi(e(t.type))},vt(t.type),3)]),$("p",null,vt(t.description),1),TC])])],8,wC))}},SC=en(CC,[["__scopeId","data-v-88090599"]]);const AC=t=>(Ar("data-v-019c8ae0"),t=t(),xr(),t),xC=AC(()=>$("h1",{class:"text-3xl select-none py-3"}," Browse Publications ",-1)),DC={class:"catalog-grid grid grid-cols-3 justify-center"},kC={__name:"Catalog",async setup(t){let e,n;const s=([e,n]=Cf(()=>SI(dI($g.db,"catalog"))),e=await e,n(),e);let r=[];s.forEach(o=>{r.push({uid:o.id,title:o.data().title,description:o.data().description,type:o.data().type})});const i=pc(r);return(o,a)=>(De(),je(Me,null,[xC,$("div",DC,[(De(!0),je(Me,null,yi(i.value,(c,l)=>(De(),je("div",{class:"inline-flex",key:l},[_e(SC,{title:c.title,description:c.description,viewLink:`/#/view/${c.uid}`,type:c.type},null,8,["title","description","viewLink","type"])]))),128))])],64))}},RC=en(kC,[["__scopeId","data-v-019c8ae0"]]),NC={},OC=_c('<h1 class="text-3xl select-none py-3"> Contact Us </h1><ul><li><span class="select-none text-gray-500"> Phone Number: </span><a href="tel:+18882008103"> 1 (888) 200-8103 </a></li><li><span class="select-none text-gray-500"> Email: </span><a href="mailto:hello@blazed.xyz"> hello@blazed.xyz </a></li><li><span class="select-none text-gray-500"> Online: </span><a href="https://blazed.contact/"> Click Here </a></li></ul>',2);function PC(t,e){return OC}const MC=en(NC,[["render",PC]]),LC={},FC={class:"grid h-screen px-4 place-content-center"},$C=_c('<div class="text-center"><h1 class="font-black text-gray-200 text-9xl"> 404 </h1><p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Uh-oh! </p><p class="mt-4 text-gray-500"> We can&#39;t find that page. </p><a href="/" class="btn inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"> Go Back Home </a></div>',1),BC=[$C];function UC(t,e){return De(),je("div",FC,BC)}const VC=en(LC,[["render",UC]]),jC=[{path:"/",name:"home",component:lw},{path:"/contact",name:"contact",component:MC},{path:"/view/:id",name:"view",component:yC,props:{id:!1}},{path:"/catalog",name:"catalog",component:RC},{path:"/:pathMatch(.*)*",name:"NotFound",component:VC}],So=G0({history:u0(),routes:jC});So.beforeEach((t,e)=>{var n;Zf.show(),(n=document.activeElement)==null||n.blur()});So.afterEach((t,e,n)=>{Zf.hide();const s=document.querySelector("#mobile-menu-drawer");s.checked===!0&&(s.checked=!1)});const Bg=fv(Hv);Bg.use(So);Bg.mount("#app");pv();
