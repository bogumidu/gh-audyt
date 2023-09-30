(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Tl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ft={},lr=[],be=()=>{},zp=()=>!1,Hp=/^on[^a-z]/,oo=t=>Hp.test(t),Al=t=>t.startsWith("onUpdate:"),Ct=Object.assign,Il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qp=Object.prototype.hasOwnProperty,tt=(t,e)=>qp.call(t,e),j=Array.isArray,cr=t=>ao(t)==="[object Map]",Zf=t=>ao(t)==="[object Set]",G=t=>typeof t=="function",Pt=t=>typeof t=="string",Cl=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",th=t=>pt(t)&&G(t.then)&&G(t.catch),eh=Object.prototype.toString,ao=t=>eh.call(t),Kp=t=>ao(t).slice(8,-1),nh=t=>ao(t)==="[object Object]",Pl=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bs=Tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wp=/-(\w)/g,Ne=lo(t=>t.replace(Wp,(e,n)=>n?n.toUpperCase():"")),Gp=/\B([A-Z])/g,Cr=lo(t=>t.replace(Gp,"-$1").toLowerCase()),co=lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jo=lo(t=>t?`on${co(t)}`:""),si=(t,e)=>!Object.is(t,e),ws=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Os=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Yp=t=>{const e=Pt(t)?Number(t):NaN;return isNaN(e)?t:e};let Gc;const Ca=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Pt(r)?Zp(r):xl(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Pt(t))return t;if(pt(t))return t}}const Qp=/;(?![^(]*\))/g,Xp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Zp(t){const e={};return t.replace(Jp,"").split(Qp).forEach(n=>{if(n){const r=n.split(Xp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jn(t){let e="";if(Pt(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=jn(t[n]);r&&(e+=r+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eg=Tl(tg);function rh(t){return!!t||t===""}const Yc=t=>Pt(t)?t:t==null?"":j(t)||pt(t)&&(t.toString===eh||!G(t.toString))?JSON.stringify(t,ih,2):String(t),ih=(t,e)=>e&&e.__v_isRef?ih(t,e.value):cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Zf(e)?{[`Set(${e.size})`]:[...e.values()]}:pt(e)&&!j(e)&&!nh(e)?String(e):e;let me;class sh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=me,!e&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=me;try{return me=this,e()}finally{me=n}}}on(){me=this}off(){me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ng(t){return new sh(t)}function rg(t,e=me){e&&e.active&&e.effects.push(t)}function ig(){return me}const Sl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},oh=t=>(t.w&cn)>0,ah=t=>(t.n&cn)>0,sg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cn},og=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];oh(i)&&!ah(i)?i.delete(t):e[n++]=i,i.w&=~cn,i.n&=~cn}e.length=n}},Pa=new WeakMap;let Hr=0,cn=1;const xa=30;let ge;const Fn=Symbol(""),Sa=Symbol("");class Rl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rg(this,r)}run(){if(!this.active)return this.fn();let e=ge,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ge,ge=this,rn=!0,cn=1<<++Hr,Hr<=xa?sg(this):Qc(this),this.fn()}finally{Hr<=xa&&og(this),cn=1<<--Hr,ge=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(Qc(this),this.onStop&&this.onStop(),this.active=!1)}}function Qc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const lh=[];function Pr(){lh.push(rn),rn=!1}function xr(){const t=lh.pop();rn=t===void 0?!0:t}function ee(t,e,n){if(rn&&ge){let r=Pa.get(t);r||Pa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Sl()),ch(i)}}function ch(t,e){let n=!1;Hr<=xa?ah(t)||(t.n|=cn,n=!oh(t)):n=!t.has(ge),n&&(t.add(ge),ge.deps.push(t))}function ze(t,e,n,r,i,s){const o=Pa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Pl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),cr(t)&&a.push(o.get(Sa)));break;case"delete":j(t)||(a.push(o.get(Fn)),cr(t)&&a.push(o.get(Sa)));break;case"set":cr(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Ra(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ra(Sl(l))}}function Ra(t,e){const n=j(t)?t:[...t];for(const r of n)r.computed&&Xc(r);for(const r of n)r.computed||Xc(r)}function Xc(t,e){(t!==ge||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ag=Tl("__proto__,__v_isRef,__isVue"),uh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cl)),lg=kl(),cg=kl(!1,!0),ug=kl(!0),Jc=fg();function fg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=nt(this);for(let s=0,o=this.length;s<o;s++)ee(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(nt)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pr();const r=nt(this)[e].apply(this,n);return xr(),r}}),t}function hg(t){const e=nt(this);return ee(e,"has",t),e.hasOwnProperty(t)}function kl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?xg:ph:e?mh:dh).get(r))return r;const o=j(r);if(!t){if(o&&tt(Jc,i))return Reflect.get(Jc,i,s);if(i==="hasOwnProperty")return hg}const a=Reflect.get(r,i,s);return(Cl(i)?uh.has(i):ag(i))||(t||ee(r,"get",i),e)?a:Wt(a)?o&&Pl(i)?a:a.value:pt(a)?t?gh(a):Dl(a):a}}const dg=fh(),mg=fh(!0);function fh(t=!1){return function(n,r,i,s){let o=n[r];if(vr(o)&&Wt(o)&&!Wt(i))return!1;if(!t&&(!Ns(i)&&!vr(i)&&(o=nt(o),i=nt(i)),!j(n)&&Wt(o)&&!Wt(i)))return o.value=i,!0;const a=j(n)&&Pl(r)?Number(r)<n.length:tt(n,r),l=Reflect.set(n,r,i,s);return n===nt(s)&&(a?si(i,o)&&ze(n,"set",r,i):ze(n,"add",r,i)),l}}function pg(t,e){const n=tt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ze(t,"delete",e,void 0),r}function gg(t,e){const n=Reflect.has(t,e);return(!Cl(e)||!uh.has(e))&&ee(t,"has",e),n}function vg(t){return ee(t,"iterate",j(t)?"length":Fn),Reflect.ownKeys(t)}const hh={get:lg,set:dg,deleteProperty:pg,has:gg,ownKeys:vg},yg={get:ug,set(t,e){return!0},deleteProperty(t,e){return!0}},_g=Ct({},hh,{get:cg,set:mg}),Ol=t=>t,uo=t=>Reflect.getPrototypeOf(t);function Qi(t,e,n=!1,r=!1){t=t.__v_raw;const i=nt(t),s=nt(e);n||(e!==s&&ee(i,"get",e),ee(i,"get",s));const{has:o}=uo(i),a=r?Ol:n?Fl:oi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Xi(t,e=!1){const n=this.__v_raw,r=nt(n),i=nt(t);return e||(t!==i&&ee(r,"has",t),ee(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ji(t,e=!1){return t=t.__v_raw,!e&&ee(nt(t),"iterate",Fn),Reflect.get(t,"size",t)}function Zc(t){t=nt(t);const e=nt(this);return uo(e).has.call(e,t)||(e.add(t),ze(e,"add",t,t)),this}function tu(t,e){e=nt(e);const n=nt(this),{has:r,get:i}=uo(n);let s=r.call(n,t);s||(t=nt(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?si(e,o)&&ze(n,"set",t,e):ze(n,"add",t,e),this}function eu(t){const e=nt(this),{has:n,get:r}=uo(e);let i=n.call(e,t);i||(t=nt(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&ze(e,"delete",t,void 0),s}function nu(){const t=nt(this),e=t.size!==0,n=t.clear();return e&&ze(t,"clear",void 0,void 0),n}function Zi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=nt(o),l=e?Ol:t?Fl:oi;return!t&&ee(a,"iterate",Fn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ts(t,e,n){return function(...r){const i=this.__v_raw,s=nt(i),o=cr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Ol:e?Fl:oi;return!e&&ee(s,"iterate",l?Sa:Fn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Je(t){return function(...e){return t==="delete"?!1:this}}function Eg(){const t={get(s){return Qi(this,s)},get size(){return Ji(this)},has:Xi,add:Zc,set:tu,delete:eu,clear:nu,forEach:Zi(!1,!1)},e={get(s){return Qi(this,s,!1,!0)},get size(){return Ji(this)},has:Xi,add:Zc,set:tu,delete:eu,clear:nu,forEach:Zi(!1,!0)},n={get(s){return Qi(this,s,!0)},get size(){return Ji(this,!0)},has(s){return Xi.call(this,s,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Zi(!0,!1)},r={get(s){return Qi(this,s,!0,!0)},get size(){return Ji(this,!0)},has(s){return Xi.call(this,s,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ts(s,!1,!1),n[s]=ts(s,!0,!1),e[s]=ts(s,!1,!0),r[s]=ts(s,!0,!0)}),[t,n,e,r]}const[bg,wg,Tg,Ag]=Eg();function Nl(t,e){const n=e?t?Ag:Tg:t?wg:bg;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(tt(n,i)&&i in r?n:r,i,s)}const Ig={get:Nl(!1,!1)},Cg={get:Nl(!1,!0)},Pg={get:Nl(!0,!1)},dh=new WeakMap,mh=new WeakMap,ph=new WeakMap,xg=new WeakMap;function Sg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rg(t){return t.__v_skip||!Object.isExtensible(t)?0:Sg(Kp(t))}function Dl(t){return vr(t)?t:Vl(t,!1,hh,Ig,dh)}function kg(t){return Vl(t,!1,_g,Cg,mh)}function gh(t){return Vl(t,!0,yg,Pg,ph)}function Vl(t,e,n,r,i){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Rg(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ur(t){return vr(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function vr(t){return!!(t&&t.__v_isReadonly)}function Ns(t){return!!(t&&t.__v_isShallow)}function vh(t){return ur(t)||vr(t)}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function Ml(t){return Os(t,"__v_skip",!0),t}const oi=t=>pt(t)?Dl(t):t,Fl=t=>pt(t)?gh(t):t;function yh(t){rn&&ge&&(t=nt(t),ch(t.dep||(t.dep=Sl())))}function _h(t,e){t=nt(t);const n=t.dep;n&&Ra(n)}function Wt(t){return!!(t&&t.__v_isRef===!0)}function Og(t){return Ng(t,!1)}function Ng(t,e){return Wt(t)?t:new Dg(t,e)}class Dg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:nt(e),this._value=n?e:oi(e)}get value(){return yh(this),this._value}set value(e){const n=this.__v_isShallow||Ns(e)||vr(e);e=n?e:nt(e),si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oi(e),_h(this))}}function Vg(t){return Wt(t)?t.value:t}const Mg={get:(t,e,n)=>Vg(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Wt(i)&&!Wt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Eh(t){return ur(t)?t:new Proxy(t,Mg)}class Fg{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,_h(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=nt(this);return yh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lg(t,e,n=!1){let r,i;const s=G(t);return s?(r=t,i=be):(r=t.get,i=t.set),new Fg(r,i,s||!i,n)}function sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){fo(s,e,n)}return i}function fe(t,e,n,r){if(G(t)){const s=sn(t,e,n,r);return s&&th(s)&&s.catch(o=>{fo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(fe(t[s],e,n,r));return i}function fo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){sn(l,null,10,[t,o,a]);return}}Bg(t,n,i,r)}function Bg(t,e,n,r=!0){console.error(t)}let ai=!1,ka=!1;const qt=[];let Pe=0;const fr=[];let Fe=null,Pn=0;const bh=Promise.resolve();let Ll=null;function $g(t){const e=Ll||bh;return t?e.then(this?t.bind(this):t):e}function Ug(t){let e=Pe+1,n=qt.length;for(;e<n;){const r=e+n>>>1;li(qt[r])<t?e=r+1:n=r}return e}function Bl(t){(!qt.length||!qt.includes(t,ai&&t.allowRecurse?Pe+1:Pe))&&(t.id==null?qt.push(t):qt.splice(Ug(t.id),0,t),wh())}function wh(){!ai&&!ka&&(ka=!0,Ll=bh.then(Ah))}function jg(t){const e=qt.indexOf(t);e>Pe&&qt.splice(e,1)}function zg(t){j(t)?fr.push(...t):(!Fe||!Fe.includes(t,t.allowRecurse?Pn+1:Pn))&&fr.push(t),wh()}function ru(t,e=ai?Pe+1:0){for(;e<qt.length;e++){const n=qt[e];n&&n.pre&&(qt.splice(e,1),e--,n())}}function Th(t){if(fr.length){const e=[...new Set(fr)];if(fr.length=0,Fe){Fe.push(...e);return}for(Fe=e,Fe.sort((n,r)=>li(n)-li(r)),Pn=0;Pn<Fe.length;Pn++)Fe[Pn]();Fe=null,Pn=0}}const li=t=>t.id==null?1/0:t.id,Hg=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ah(t){ka=!1,ai=!0,qt.sort(Hg);const e=be;try{for(Pe=0;Pe<qt.length;Pe++){const n=qt[Pe];n&&n.active!==!1&&sn(n,null,14)}}finally{Pe=0,qt.length=0,Th(),ai=!1,Ll=null,(qt.length||fr.length)&&Ah()}}function qg(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ft;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||ft;d&&(i=n.map(p=>Pt(p)?p.trim():p)),f&&(i=n.map(Ia))}let a,l=r[a=Jo(e)]||r[a=Jo(Ne(e))];!l&&s&&(l=r[a=Jo(Cr(e))]),l&&fe(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,fe(c,t,6,i)}}function Ih(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Ih(c,e,!0);u&&(a=!0,Ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(pt(t)&&r.set(t,null),null):(j(s)?s.forEach(l=>o[l]=null):Ct(o,s),pt(t)&&r.set(t,o),o)}function ho(t,e){return!t||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(t,e[0].toLowerCase()+e.slice(1))||tt(t,Cr(e))||tt(t,e))}let se=null,mo=null;function Ds(t){const e=se;return se=t,mo=t&&t.type.__scopeId||null,e}function Yn(t){mo=t}function Qn(){mo=null}function $l(t,e=se,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&pu(-1);const s=Ds(e);let o;try{o=t(...i)}finally{Ds(s),r._d&&pu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:P,inheritAttrs:T}=t;let O,_;const A=Ds(t);try{if(n.shapeFlag&4){const R=i||r;O=Ce(u.call(R,R,f,s,p,d,P)),_=l}else{const R=e;O=Ce(R.length>1?R(s,{attrs:l,slots:a,emit:c}):R(s,null)),_=e.props?l:Kg(l)}}catch(R){Qr.length=0,fo(R,t,1),O=_t($e)}let V=O;if(_&&T!==!1){const R=Object.keys(_),{shapeFlag:W}=V;R.length&&W&7&&(o&&R.some(Al)&&(_=Wg(_,o)),V=un(V,_))}return n.dirs&&(V=un(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),O=V,Ds(A),O}const Kg=t=>{let e;for(const n in t)(n==="class"||n==="style"||oo(n))&&((e||(e={}))[n]=t[n]);return e},Wg=(t,e)=>{const n={};for(const r in t)(!Al(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gg(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?iu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!ho(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?iu(r,o,c):!0:!!o;return!1}function iu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ho(n,s))return!0}return!1}function Yg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qg=t=>t.__isSuspense;function Xg(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):zg(t)}const es={};function Ts(t,e,n){return Ch(t,e,n)}function Ch(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ft){var a;const l=ig()===((a=kt)==null?void 0:a.scope)?kt:null;let c,u=!1,f=!1;if(Wt(t)?(c=()=>t.value,u=Ns(t)):ur(t)?(c=()=>t,r=!0):j(t)?(f=!0,u=t.some(R=>ur(R)||Ns(R)),c=()=>t.map(R=>{if(Wt(R))return R.value;if(ur(R))return kn(R);if(G(R))return sn(R,l,2)})):G(t)?e?c=()=>sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),fe(t,l,3,[p])}:c=be,e&&r){const R=c;c=()=>kn(R())}let d,p=R=>{d=A.onStop=()=>{sn(R,l,4)}},P;if(ui)if(p=be,e?n&&fe(e,l,3,[c(),f?[]:void 0,p]):c(),i==="sync"){const R=Yv();P=R.__watcherHandles||(R.__watcherHandles=[])}else return be;let T=f?new Array(t.length).fill(es):es;const O=()=>{if(A.active)if(e){const R=A.run();(r||u||(f?R.some((W,ct)=>si(W,T[ct])):si(R,T)))&&(d&&d(),fe(e,l,3,[R,T===es?void 0:f&&T[0]===es?[]:T,p]),T=R)}else A.run()};O.allowRecurse=!!e;let _;i==="sync"?_=O:i==="post"?_=()=>te(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),_=()=>Bl(O));const A=new Rl(c,_);e?n?O():T=A.run():i==="post"?te(A.run.bind(A),l&&l.suspense):A.run();const V=()=>{A.stop(),l&&l.scope&&Il(l.scope.effects,A)};return P&&P.push(V),V}function Jg(t,e,n){const r=this.proxy,i=Pt(t)?t.includes(".")?Ph(r,t):()=>r[t]:t.bind(r,r);let s;G(e)?s=e:(s=e.handler,n=e);const o=kt;yr(this);const a=Ch(i,s.bind(r),n);return o?yr(o):Ln(),a}function Ph(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function kn(t,e){if(!pt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Wt(t))kn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)kn(t[n],e);else if(Zf(t)||cr(t))t.forEach(n=>{kn(n,e)});else if(nh(t))for(const n in t)kn(t[n],e);return t}function Se(t,e){const n=se;if(n===null)return t;const r=_o(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ft]=e[s];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&kn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function bn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Pr(),fe(l,n,8,[t.el,a,t,e]),xr())}}function Zg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nh(()=>{t.isMounted=!0}),Dh(()=>{t.isUnmounting=!0}),t}const le=[Function,Array],xh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:le,onEnter:le,onAfterEnter:le,onEnterCancelled:le,onBeforeLeave:le,onLeave:le,onAfterLeave:le,onLeaveCancelled:le,onBeforeAppear:le,onAppear:le,onAfterAppear:le,onAppearCancelled:le},tv={name:"BaseTransition",props:xh,setup(t,{slots:e}){const n=Uv(),r=Zg();let i;return()=>{const s=e.default&&Rh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const T of s)if(T.type!==$e){o=T;break}}const a=nt(t),{mode:l}=a;if(r.isLeaving)return ta(o);const c=su(o);if(!c)return ta(o);const u=Oa(c,a,r,n);Na(c,u);const f=n.subTree,d=f&&su(f);let p=!1;const{getTransitionKey:P}=c.type;if(P){const T=P();i===void 0?i=T:T!==i&&(i=T,p=!0)}if(d&&d.type!==$e&&(!xn(c,d)||p)){const T=Oa(d,a,r,n);if(Na(d,T),l==="out-in")return r.isLeaving=!0,T.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ta(o);l==="in-out"&&c.type!==$e&&(T.delayLeave=(O,_,A)=>{const V=Sh(r,d);V[String(d.key)]=d,O._leaveCb=()=>{_(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},ev=tv;function Sh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Oa(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:P,onBeforeAppear:T,onAppear:O,onAfterAppear:_,onAppearCancelled:A}=e,V=String(t.key),R=Sh(n,t),W=(K,Z)=>{K&&fe(K,r,9,Z)},ct=(K,Z)=>{const rt=Z[1];W(K,Z),j(K)?K.every(Ut=>Ut.length<=1)&&rt():K.length<=1&&rt()},ut={mode:s,persisted:o,beforeEnter(K){let Z=a;if(!n.isMounted)if(i)Z=T||a;else return;K._leaveCb&&K._leaveCb(!0);const rt=R[V];rt&&xn(t,rt)&&rt.el._leaveCb&&rt.el._leaveCb(),W(Z,[K])},enter(K){let Z=l,rt=c,Ut=u;if(!n.isMounted)if(i)Z=O||l,rt=_||c,Ut=A||u;else return;let B=!1;const vt=K._enterCb=re=>{B||(B=!0,re?W(Ut,[K]):W(rt,[K]),ut.delayedLeave&&ut.delayedLeave(),K._enterCb=void 0)};Z?ct(Z,[K,vt]):vt()},leave(K,Z){const rt=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return Z();W(f,[K]);let Ut=!1;const B=K._leaveCb=vt=>{Ut||(Ut=!0,Z(),vt?W(P,[K]):W(p,[K]),K._leaveCb=void 0,R[rt]===t&&delete R[rt])};R[rt]=t,d?ct(d,[K,B]):B()},clone(K){return Oa(K,e,n,r)}};return ut}function ta(t){if(po(t))return t=un(t),t.children=null,t}function su(t){return po(t)?t.children?t.children[0]:void 0:t}function Na(t,e){t.shapeFlag&6&&t.component?Na(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rh(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ce?(o.patchFlag&128&&i++,r=r.concat(Rh(o.children,e,a))):(e||o.type!==$e)&&r.push(a!=null?un(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function kh(t,e){return G(t)?(()=>Ct({name:t.name},e,{setup:t}))():t}const As=t=>!!t.type.__asyncLoader,po=t=>t.type.__isKeepAlive;function nv(t,e){Oh(t,"a",e)}function rv(t,e){Oh(t,"da",e)}function Oh(t,e,n=kt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(go(e,r,n),n){let i=n.parent;for(;i&&i.parent;)po(i.parent.vnode)&&iv(r,e,n,i),i=i.parent}}function iv(t,e,n,r){const i=go(e,t,r,!0);Vh(()=>{Il(r[e],i)},n)}function go(t,e,n=kt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pr(),yr(n);const a=fe(e,n,t,o);return Ln(),xr(),a});return r?i.unshift(s):i.push(s),s}}const Ye=t=>(e,n=kt)=>(!ui||t==="sp")&&go(t,(...r)=>e(...r),n),sv=Ye("bm"),Nh=Ye("m"),ov=Ye("bu"),av=Ye("u"),Dh=Ye("bum"),Vh=Ye("um"),lv=Ye("sp"),cv=Ye("rtg"),uv=Ye("rtc");function fv(t,e=kt){go("ec",t,e)}const Mh="components";function Fh(t,e){return dv(Mh,t,!0,e)||t}const hv=Symbol.for("v-ndc");function dv(t,e,n=!0,r=!1){const i=se||kt;if(i){const s=i.type;if(t===Mh){const a=Kv(s,!1);if(a&&(a===e||a===Ne(e)||a===co(Ne(e))))return s}const o=ou(i[t]||s[t],e)||ou(i.appContext[t],e);return!o&&r?s:o}}function ou(t,e){return t&&(t[e]||t[Ne(e)]||t[co(Ne(e))])}function mv(t,e,n,r){let i;const s=n&&n[r];if(j(t)||Pt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(pt(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Da=t=>t?Yh(t)?_o(t)||t.proxy:Da(t.parent):null,Yr=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Da(t.parent),$root:t=>Da(t.root),$emit:t=>t.emit,$options:t=>Ul(t),$forceUpdate:t=>t.f||(t.f=()=>Bl(t.update)),$nextTick:t=>t.n||(t.n=$g.bind(t.proxy)),$watch:t=>Jg.bind(t)}),ea=(t,e)=>t!==ft&&!t.__isScriptSetup&&tt(t,e),pv={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ea(r,e))return o[e]=1,r[e];if(i!==ft&&tt(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(n!==ft&&tt(n,e))return o[e]=4,n[e];Va&&(o[e]=0)}}const u=Yr[e];let f,d;if(u)return e==="$attrs"&&ee(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ft&&tt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ea(i,e)?(i[e]=n,!0):r!==ft&&tt(r,e)?(r[e]=n,!0):tt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ft&&tt(t,o)||ea(e,o)||(a=s[0])&&tt(a,o)||tt(r,o)||tt(Yr,o)||tt(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:tt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function au(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Va=!0;function gv(t){const e=Ul(t),n=t.proxy,r=t.ctx;Va=!1,e.beforeCreate&&lu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:P,activated:T,deactivated:O,beforeDestroy:_,beforeUnmount:A,destroyed:V,unmounted:R,render:W,renderTracked:ct,renderTriggered:ut,errorCaptured:K,serverPrefetch:Z,expose:rt,inheritAttrs:Ut,components:B,directives:vt,filters:re}=e;if(c&&vv(c,r,null),o)for(const Et in o){const ot=o[Et];G(ot)&&(r[Et]=ot.bind(n))}if(i){const Et=i.call(n,n);pt(Et)&&(t.data=Dl(Et))}if(Va=!0,s)for(const Et in s){const ot=s[Et],_n=G(ot)?ot.bind(n,n):G(ot.get)?ot.get.bind(n,n):be,Gi=!G(ot)&&G(ot.set)?ot.set.bind(n):be,En=In({get:_n,set:Gi});Object.defineProperty(r,Et,{enumerable:!0,configurable:!0,get:()=>En.value,set:Te=>En.value=Te})}if(a)for(const Et in a)Lh(a[Et],r,n,Et);if(l){const Et=G(l)?l.call(n):l;Reflect.ownKeys(Et).forEach(ot=>{Tv(ot,Et[ot])})}u&&lu(u,t,"c");function St(Et,ot){j(ot)?ot.forEach(_n=>Et(_n.bind(n))):ot&&Et(ot.bind(n))}if(St(sv,f),St(Nh,d),St(ov,p),St(av,P),St(nv,T),St(rv,O),St(fv,K),St(uv,ct),St(cv,ut),St(Dh,A),St(Vh,R),St(lv,Z),j(rt))if(rt.length){const Et=t.exposed||(t.exposed={});rt.forEach(ot=>{Object.defineProperty(Et,ot,{get:()=>n[ot],set:_n=>n[ot]=_n})})}else t.exposed||(t.exposed={});W&&t.render===be&&(t.render=W),Ut!=null&&(t.inheritAttrs=Ut),B&&(t.components=B),vt&&(t.directives=vt)}function vv(t,e,n=be){j(t)&&(t=Ma(t));for(const r in t){const i=t[r];let s;pt(i)?"default"in i?s=Is(i.from||r,i.default,!0):s=Is(i.from||r):s=Is(i),Wt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function lu(t,e,n){fe(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lh(t,e,n,r){const i=r.includes(".")?Ph(n,r):()=>n[r];if(Pt(t)){const s=e[t];G(s)&&Ts(i,s)}else if(G(t))Ts(i,t.bind(n));else if(pt(t))if(j(t))t.forEach(s=>Lh(s,e,n,r));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&Ts(i,s,t)}}function Ul(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Vs(l,c,o,!0)),Vs(l,e,o)),pt(e)&&s.set(e,l),l}function Vs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Vs(t,s,n,!0),i&&i.forEach(o=>Vs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yv={data:cu,props:uu,emits:uu,methods:qr,computed:qr,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:qr,directives:qr,watch:Ev,provide:cu,inject:_v};function cu(t,e){return e?t?function(){return Ct(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function _v(t,e){return qr(Ma(t),Ma(e))}function Ma(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function qr(t,e){return t?Ct(Object.create(null),t,e):e}function uu(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ct(Object.create(null),au(t),au(e??{})):e}function Ev(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const r in e)n[r]=Qt(t[r],e[r]);return n}function Bh(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bv=0;function wv(t,e){return function(r,i=null){G(r)||(r=Ct({},r)),i!=null&&!pt(i)&&(i=null);const s=Bh(),o=new Set;let a=!1;const l=s.app={_uid:bv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Qv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=_t(r,i);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,_o(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ms=l;try{return c()}finally{Ms=null}}};return l}}let Ms=null;function Tv(t,e){if(kt){let n=kt.provides;const r=kt.parent&&kt.parent.provides;r===n&&(n=kt.provides=Object.create(r)),n[t]=e}}function Is(t,e,n=!1){const r=kt||se;if(r||Ms){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ms._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(r&&r.proxy):e}}function Av(t,e,n,r=!1){const i={},s={};Os(s,yo,1),t.propsDefaults=Object.create(null),$h(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:kg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Iv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=nt(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ho(t.emitsOptions,d))continue;const p=e[d];if(l)if(tt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const P=Ne(d);i[P]=Fa(l,a,P,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{$h(t,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=Cr(f))===f||!tt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Fa(l,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&ze(t,"set","$attrs")}function $h(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(bs(l))continue;const c=e[l];let u;i&&tt(i,u=Ne(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ho(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=nt(n),c=a||ft;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Fa(i,l,f,c[f],t,!tt(c,f))}}return o}function Fa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=tt(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(yr(i),r=c[n]=l.call(null,e),Ln())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}function Uh(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!G(t)){const u=f=>{l=!0;const[d,p]=Uh(f,e,!0);Ct(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return pt(t)&&r.set(t,lr),lr;if(j(s))for(let u=0;u<s.length;u++){const f=Ne(s[u]);fu(f)&&(o[f]=ft)}else if(s)for(const u in s){const f=Ne(u);if(fu(f)){const d=s[u],p=o[f]=j(d)||G(d)?{type:d}:Ct({},d);if(p){const P=mu(Boolean,p.type),T=mu(String,p.type);p[0]=P>-1,p[1]=T<0||P<T,(P>-1||tt(p,"default"))&&a.push(f)}}}const c=[o,a];return pt(t)&&r.set(t,c),c}function fu(t){return t[0]!=="$"}function hu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function du(t,e){return hu(t)===hu(e)}function mu(t,e){return j(e)?e.findIndex(n=>du(n,t)):G(e)&&du(e,t)?0:-1}const jh=t=>t[0]==="_"||t==="$stable",jl=t=>j(t)?t.map(Ce):[Ce(t)],Cv=(t,e,n)=>{if(e._n)return e;const r=$l((...i)=>jl(e(...i)),n);return r._c=!1,r},zh=(t,e,n)=>{const r=t._ctx;for(const i in t){if(jh(i))continue;const s=t[i];if(G(s))e[i]=Cv(i,s,r);else if(s!=null){const o=jl(s);e[i]=()=>o}}},Hh=(t,e)=>{const n=jl(e);t.slots.default=()=>n},Pv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=nt(e),Os(e,"_",n)):zh(e,t.slots={})}else t.slots={},e&&Hh(t,e);Os(t.slots,yo,1)},xv=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ft;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ct(i,e),!n&&a===1&&delete i._):(s=!e.$stable,zh(e,i)),o=e}else e&&(Hh(t,e),o={default:1});if(s)for(const a in i)!jh(a)&&!(a in o)&&delete i[a]};function La(t,e,n,r,i=!1){if(j(t)){t.forEach((d,p)=>La(d,e&&(j(e)?e[p]:e),n,r,i));return}if(As(r)&&!i)return;const s=r.shapeFlag&4?_o(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,tt(f,c)&&(f[c]=null)):Wt(c)&&(c.value=null)),G(l))sn(l,a,12,[o,u]);else{const d=Pt(l),p=Wt(l);if(d||p){const P=()=>{if(t.f){const T=d?tt(f,l)?f[l]:u[l]:l.value;i?j(T)&&Il(T,s):j(T)?T.includes(s)||T.push(s):d?(u[l]=[s],tt(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,tt(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(P.id=-1,te(P,n)):P()}}}const te=Xg;function Sv(t){return Rv(t)}function Rv(t,e){const n=Ca();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=be,insertStaticContent:P}=t,T=(h,m,g,y=null,v=null,C=null,k=!1,I=null,x=!!m.dynamicChildren)=>{if(h===m)return;h&&!xn(h,m)&&(y=Yi(h),Te(h,v,C,!0),h=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:E,ref:$,shapeFlag:M}=m;switch(E){case vo:O(h,m,g,y);break;case $e:_(h,m,g,y);break;case Cs:h==null&&A(m,g,y,k);break;case ce:B(h,m,g,y,v,C,k,I,x);break;default:M&1?W(h,m,g,y,v,C,k,I,x):M&6?vt(h,m,g,y,v,C,k,I,x):(M&64||M&128)&&E.process(h,m,g,y,v,C,k,I,x,Zn)}$!=null&&v&&La($,h&&h.ref,C,m||h,!m)},O=(h,m,g,y)=>{if(h==null)r(m.el=a(m.children),g,y);else{const v=m.el=h.el;m.children!==h.children&&c(v,m.children)}},_=(h,m,g,y)=>{h==null?r(m.el=l(m.children||""),g,y):m.el=h.el},A=(h,m,g,y)=>{[h.el,h.anchor]=P(h.children,m,g,y,h.el,h.anchor)},V=({el:h,anchor:m},g,y)=>{let v;for(;h&&h!==m;)v=d(h),r(h,g,y),h=v;r(m,g,y)},R=({el:h,anchor:m})=>{let g;for(;h&&h!==m;)g=d(h),i(h),h=g;i(m)},W=(h,m,g,y,v,C,k,I,x)=>{k=k||m.type==="svg",h==null?ct(m,g,y,v,C,k,I,x):Z(h,m,v,C,k,I,x)},ct=(h,m,g,y,v,C,k,I)=>{let x,E;const{type:$,props:M,shapeFlag:U,transition:q,dirs:Q}=h;if(x=h.el=o(h.type,C,M&&M.is,M),U&8?u(x,h.children):U&16&&K(h.children,x,null,y,v,C&&$!=="foreignObject",k,I),Q&&bn(h,null,y,"created"),ut(x,h,h.scopeId,k,y),M){for(const st in M)st!=="value"&&!bs(st)&&s(x,st,null,M[st],C,h.children,y,v,Me);"value"in M&&s(x,"value",null,M.value),(E=M.onVnodeBeforeMount)&&Ie(E,y,h)}Q&&bn(h,null,y,"beforeMount");const at=(!v||v&&!v.pendingBranch)&&q&&!q.persisted;at&&q.beforeEnter(x),r(x,m,g),((E=M&&M.onVnodeMounted)||at||Q)&&te(()=>{E&&Ie(E,y,h),at&&q.enter(x),Q&&bn(h,null,y,"mounted")},v)},ut=(h,m,g,y,v)=>{if(g&&p(h,g),y)for(let C=0;C<y.length;C++)p(h,y[C]);if(v){let C=v.subTree;if(m===C){const k=v.vnode;ut(h,k,k.scopeId,k.slotScopeIds,v.parent)}}},K=(h,m,g,y,v,C,k,I,x=0)=>{for(let E=x;E<h.length;E++){const $=h[E]=I?nn(h[E]):Ce(h[E]);T(null,$,m,g,y,v,C,k,I)}},Z=(h,m,g,y,v,C,k)=>{const I=m.el=h.el;let{patchFlag:x,dynamicChildren:E,dirs:$}=m;x|=h.patchFlag&16;const M=h.props||ft,U=m.props||ft;let q;g&&wn(g,!1),(q=U.onVnodeBeforeUpdate)&&Ie(q,g,m,h),$&&bn(m,h,g,"beforeUpdate"),g&&wn(g,!0);const Q=v&&m.type!=="foreignObject";if(E?rt(h.dynamicChildren,E,I,g,y,Q,C):k||ot(h,m,I,null,g,y,Q,C,!1),x>0){if(x&16)Ut(I,m,M,U,g,y,v);else if(x&2&&M.class!==U.class&&s(I,"class",null,U.class,v),x&4&&s(I,"style",M.style,U.style,v),x&8){const at=m.dynamicProps;for(let st=0;st<at.length;st++){const At=at[st],de=M[At],tr=U[At];(tr!==de||At==="value")&&s(I,At,de,tr,v,h.children,g,y,Me)}}x&1&&h.children!==m.children&&u(I,m.children)}else!k&&E==null&&Ut(I,m,M,U,g,y,v);((q=U.onVnodeUpdated)||$)&&te(()=>{q&&Ie(q,g,m,h),$&&bn(m,h,g,"updated")},y)},rt=(h,m,g,y,v,C,k)=>{for(let I=0;I<m.length;I++){const x=h[I],E=m[I],$=x.el&&(x.type===ce||!xn(x,E)||x.shapeFlag&70)?f(x.el):g;T(x,E,$,null,y,v,C,k,!0)}},Ut=(h,m,g,y,v,C,k)=>{if(g!==y){if(g!==ft)for(const I in g)!bs(I)&&!(I in y)&&s(h,I,g[I],null,k,m.children,v,C,Me);for(const I in y){if(bs(I))continue;const x=y[I],E=g[I];x!==E&&I!=="value"&&s(h,I,E,x,k,m.children,v,C,Me)}"value"in y&&s(h,"value",g.value,y.value)}},B=(h,m,g,y,v,C,k,I,x)=>{const E=m.el=h?h.el:a(""),$=m.anchor=h?h.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:q}=m;q&&(I=I?I.concat(q):q),h==null?(r(E,g,y),r($,g,y),K(m.children,g,$,v,C,k,I,x)):M>0&&M&64&&U&&h.dynamicChildren?(rt(h.dynamicChildren,U,g,v,C,k,I),(m.key!=null||v&&m===v.subTree)&&qh(h,m,!0)):ot(h,m,g,$,v,C,k,I,x)},vt=(h,m,g,y,v,C,k,I,x)=>{m.slotScopeIds=I,h==null?m.shapeFlag&512?v.ctx.activate(m,g,y,k,x):re(m,g,y,v,C,k,x):Mr(h,m,x)},re=(h,m,g,y,v,C,k)=>{const I=h.component=$v(h,y,v);if(po(h)&&(I.ctx.renderer=Zn),jv(I),I.asyncDep){if(v&&v.registerDep(I,St),!h.el){const x=I.subTree=_t($e);_(null,x,m,g)}return}St(I,h,m,g,v,C,k)},Mr=(h,m,g)=>{const y=m.component=h.component;if(Gg(h,m,g))if(y.asyncDep&&!y.asyncResolved){Et(y,m,g);return}else y.next=m,jg(y.update),y.update();else m.el=h.el,y.vnode=m},St=(h,m,g,y,v,C,k)=>{const I=()=>{if(h.isMounted){let{next:$,bu:M,u:U,parent:q,vnode:Q}=h,at=$,st;wn(h,!1),$?($.el=Q.el,Et(h,$,k)):$=Q,M&&ws(M),(st=$.props&&$.props.onVnodeBeforeUpdate)&&Ie(st,q,$,Q),wn(h,!0);const At=Zo(h),de=h.subTree;h.subTree=At,T(de,At,f(de.el),Yi(de),h,v,C),$.el=At.el,at===null&&Yg(h,At.el),U&&te(U,v),(st=$.props&&$.props.onVnodeUpdated)&&te(()=>Ie(st,q,$,Q),v)}else{let $;const{el:M,props:U}=m,{bm:q,m:Q,parent:at}=h,st=As(m);if(wn(h,!1),q&&ws(q),!st&&($=U&&U.onVnodeBeforeMount)&&Ie($,at,m),wn(h,!0),M&&Xo){const At=()=>{h.subTree=Zo(h),Xo(M,h.subTree,h,v,null)};st?m.type.__asyncLoader().then(()=>!h.isUnmounted&&At()):At()}else{const At=h.subTree=Zo(h);T(null,At,g,y,h,v,C),m.el=At.el}if(Q&&te(Q,v),!st&&($=U&&U.onVnodeMounted)){const At=m;te(()=>Ie($,at,At),v)}(m.shapeFlag&256||at&&As(at.vnode)&&at.vnode.shapeFlag&256)&&h.a&&te(h.a,v),h.isMounted=!0,m=g=y=null}},x=h.effect=new Rl(I,()=>Bl(E),h.scope),E=h.update=()=>x.run();E.id=h.uid,wn(h,!0),E()},Et=(h,m,g)=>{m.component=h;const y=h.vnode.props;h.vnode=m,h.next=null,Iv(h,m.props,y,g),xv(h,m.children,g),Pr(),ru(),xr()},ot=(h,m,g,y,v,C,k,I,x=!1)=>{const E=h&&h.children,$=h?h.shapeFlag:0,M=m.children,{patchFlag:U,shapeFlag:q}=m;if(U>0){if(U&128){Gi(E,M,g,y,v,C,k,I,x);return}else if(U&256){_n(E,M,g,y,v,C,k,I,x);return}}q&8?($&16&&Me(E,v,C),M!==E&&u(g,M)):$&16?q&16?Gi(E,M,g,y,v,C,k,I,x):Me(E,v,C,!0):($&8&&u(g,""),q&16&&K(M,g,y,v,C,k,I,x))},_n=(h,m,g,y,v,C,k,I,x)=>{h=h||lr,m=m||lr;const E=h.length,$=m.length,M=Math.min(E,$);let U;for(U=0;U<M;U++){const q=m[U]=x?nn(m[U]):Ce(m[U]);T(h[U],q,g,null,v,C,k,I,x)}E>$?Me(h,v,C,!0,!1,M):K(m,g,y,v,C,k,I,x,M)},Gi=(h,m,g,y,v,C,k,I,x)=>{let E=0;const $=m.length;let M=h.length-1,U=$-1;for(;E<=M&&E<=U;){const q=h[E],Q=m[E]=x?nn(m[E]):Ce(m[E]);if(xn(q,Q))T(q,Q,g,null,v,C,k,I,x);else break;E++}for(;E<=M&&E<=U;){const q=h[M],Q=m[U]=x?nn(m[U]):Ce(m[U]);if(xn(q,Q))T(q,Q,g,null,v,C,k,I,x);else break;M--,U--}if(E>M){if(E<=U){const q=U+1,Q=q<$?m[q].el:y;for(;E<=U;)T(null,m[E]=x?nn(m[E]):Ce(m[E]),g,Q,v,C,k,I,x),E++}}else if(E>U)for(;E<=M;)Te(h[E],v,C,!0),E++;else{const q=E,Q=E,at=new Map;for(E=Q;E<=U;E++){const ie=m[E]=x?nn(m[E]):Ce(m[E]);ie.key!=null&&at.set(ie.key,E)}let st,At=0;const de=U-Q+1;let tr=!1,qc=0;const Fr=new Array(de);for(E=0;E<de;E++)Fr[E]=0;for(E=q;E<=M;E++){const ie=h[E];if(At>=de){Te(ie,v,C,!0);continue}let Ae;if(ie.key!=null)Ae=at.get(ie.key);else for(st=Q;st<=U;st++)if(Fr[st-Q]===0&&xn(ie,m[st])){Ae=st;break}Ae===void 0?Te(ie,v,C,!0):(Fr[Ae-Q]=E+1,Ae>=qc?qc=Ae:tr=!0,T(ie,m[Ae],g,null,v,C,k,I,x),At++)}const Kc=tr?kv(Fr):lr;for(st=Kc.length-1,E=de-1;E>=0;E--){const ie=Q+E,Ae=m[ie],Wc=ie+1<$?m[ie+1].el:y;Fr[E]===0?T(null,Ae,g,Wc,v,C,k,I,x):tr&&(st<0||E!==Kc[st]?En(Ae,g,Wc,2):st--)}}},En=(h,m,g,y,v=null)=>{const{el:C,type:k,transition:I,children:x,shapeFlag:E}=h;if(E&6){En(h.component.subTree,m,g,y);return}if(E&128){h.suspense.move(m,g,y);return}if(E&64){k.move(h,m,g,Zn);return}if(k===ce){r(C,m,g);for(let M=0;M<x.length;M++)En(x[M],m,g,y);r(h.anchor,m,g);return}if(k===Cs){V(h,m,g);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(C),r(C,m,g),te(()=>I.enter(C),v);else{const{leave:M,delayLeave:U,afterLeave:q}=I,Q=()=>r(C,m,g),at=()=>{M(C,()=>{Q(),q&&q()})};U?U(C,Q,at):at()}else r(C,m,g)},Te=(h,m,g,y=!1,v=!1)=>{const{type:C,props:k,ref:I,children:x,dynamicChildren:E,shapeFlag:$,patchFlag:M,dirs:U}=h;if(I!=null&&La(I,null,g,h,!0),$&256){m.ctx.deactivate(h);return}const q=$&1&&U,Q=!As(h);let at;if(Q&&(at=k&&k.onVnodeBeforeUnmount)&&Ie(at,m,h),$&6)jp(h.component,g,y);else{if($&128){h.suspense.unmount(g,y);return}q&&bn(h,null,m,"beforeUnmount"),$&64?h.type.remove(h,m,g,v,Zn,y):E&&(C!==ce||M>0&&M&64)?Me(E,m,g,!1,!0):(C===ce&&M&384||!v&&$&16)&&Me(x,m,g),y&&zc(h)}(Q&&(at=k&&k.onVnodeUnmounted)||q)&&te(()=>{at&&Ie(at,m,h),q&&bn(h,null,m,"unmounted")},g)},zc=h=>{const{type:m,el:g,anchor:y,transition:v}=h;if(m===ce){Up(g,y);return}if(m===Cs){R(h);return}const C=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(h.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:I}=v,x=()=>k(g,C);I?I(h.el,C,x):x()}else C()},Up=(h,m)=>{let g;for(;h!==m;)g=d(h),i(h),h=g;i(m)},jp=(h,m,g)=>{const{bum:y,scope:v,update:C,subTree:k,um:I}=h;y&&ws(y),v.stop(),C&&(C.active=!1,Te(k,h,m,g)),I&&te(I,m),te(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Me=(h,m,g,y=!1,v=!1,C=0)=>{for(let k=C;k<h.length;k++)Te(h[k],m,g,y,v)},Yi=h=>h.shapeFlag&6?Yi(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),Hc=(h,m,g)=>{h==null?m._vnode&&Te(m._vnode,null,null,!0):T(m._vnode||null,h,m,null,null,null,g),ru(),Th(),m._vnode=h},Zn={p:T,um:Te,m:En,r:zc,mt:re,mc:K,pc:ot,pbc:rt,n:Yi,o:t};let Qo,Xo;return e&&([Qo,Xo]=e(Zn)),{render:Hc,hydrate:Qo,createApp:wv(Hc,Qo)}}function wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qh(t,e,n=!1){const r=t.children,i=e.children;if(j(r)&&j(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=nn(i[s]),a.el=o.el),n||qh(o,a)),a.type===vo&&(a.el=o.el)}}function kv(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Ov=t=>t.__isTeleport,ce=Symbol.for("v-fgt"),vo=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),Qr=[];let ye=null;function he(t=!1){Qr.push(ye=t?null:[])}function Nv(){Qr.pop(),ye=Qr[Qr.length-1]||null}let ci=1;function pu(t){ci+=t}function Kh(t){return t.dynamicChildren=ci>0?ye||lr:null,Nv(),ci>0&&ye&&ye.push(t),t}function we(t,e,n,r,i,s){return Kh(N(t,e,n,r,i,s,!0))}function Dv(t,e,n,r,i){return Kh(_t(t,e,n,r,i,!0))}function Ba(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const yo="__vInternal",Wh=({key:t})=>t??null,Ps=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||Wt(t)||G(t)?{i:se,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,i=null,s=t===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wh(e),ref:e&&Ps(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:se};return a?(zl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),ci>0&&!o&&ye&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ye.push(l),l}const _t=Vv;function Vv(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===hv)&&(t=$e),Ba(t)){const a=un(t,e,!0);return n&&zl(a,n),ci>0&&!s&&ye&&(a.shapeFlag&6?ye[ye.indexOf(t)]=a:ye.push(a)),a.patchFlag|=-2,a}if(Wv(t)&&(t=t.__vccOpts),e){e=Mv(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=jn(a)),pt(l)&&(vh(l)&&!j(l)&&(l=Ct({},l)),e.style=xl(l))}const o=Pt(t)?1:Qg(t)?128:Ov(t)?64:pt(t)?4:G(t)?2:0;return N(t,e,n,r,i,o,s,!0)}function Mv(t){return t?vh(t)||yo in t?Ct({},t):t:null}function un(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Fv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wh(a),ref:e&&e.ref?n&&i?j(i)?i.concat(Ps(e)):[i,Ps(e)]:Ps(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ce?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sn(t=" ",e=0){return _t(vo,null,t,e)}function Gh(t,e){const n=_t(Cs,null,t);return n.staticCount=e,n}function Ce(t){return t==null||typeof t=="boolean"?_t($e):j(t)?_t(ce,null,t.slice()):typeof t=="object"?nn(t):_t(vo,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),zl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(yo in e)?e._ctx=se:i===3&&se&&(se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:se},n=32):(e=String(e),r&64?(n=16,e=[Sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=jn([e.class,r.class]));else if(i==="style")e.style=xl([e.style,r.style]);else if(oo(i)){const s=e[i],o=r[i];o&&s!==o&&!(j(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ie(t,e,n,r=null){fe(t,e,7,[n,r])}const Lv=Bh();let Bv=0;function $v(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Lv,s={uid:Bv++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uh(r,i),emitsOptions:Ih(r,i),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:r.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qg.bind(null,s),t.ce&&t.ce(s),s}let kt=null;const Uv=()=>kt||se;let Hl,er,gu="__VUE_INSTANCE_SETTERS__";(er=Ca()[gu])||(er=Ca()[gu]=[]),er.push(t=>kt=t),Hl=t=>{er.length>1?er.forEach(e=>e(t)):er[0](t)};const yr=t=>{Hl(t),t.scope.on()},Ln=()=>{kt&&kt.scope.off(),Hl(null)};function Yh(t){return t.vnode.shapeFlag&4}let ui=!1;function jv(t,e=!1){ui=e;const{props:n,children:r}=t.vnode,i=Yh(t);Av(t,n,i,e),Pv(t,r);const s=i?zv(t,e):void 0;return ui=!1,s}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ml(new Proxy(t.ctx,pv));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?qv(t):null;yr(t),Pr();const s=sn(r,t,0,[t.props,i]);if(xr(),Ln(),th(s)){if(s.then(Ln,Ln),e)return s.then(o=>{vu(t,o,e)}).catch(o=>{fo(o,t,0)});t.asyncDep=s}else vu(t,s,e)}else Qh(t,e)}function vu(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Eh(e)),Qh(t,n)}let yu;function Qh(t,e,n){const r=t.type;if(!t.render){if(!e&&yu&&!r.render){const i=r.template||Ul(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ct(Ct({isCustomElement:s,delimiters:a},o),l);r.render=yu(i,c)}}t.render=r.render||be}yr(t),Pr(),gv(t),xr(),Ln()}function Hv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ee(t,"get","$attrs"),e[n]}}))}function qv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Hv(t)},slots:t.slots,emit:t.emit,expose:e}}function _o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Eh(Ml(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yr)return Yr[n](t)},has(e,n){return n in e||n in Yr}}))}function Kv(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Wv(t){return G(t)&&"__vccOpts"in t}const In=(t,e)=>Lg(t,e,ui);function Xh(t,e,n){const r=arguments.length;return r===2?pt(e)&&!j(e)?Ba(e)?_t(t,null,[e]):_t(t,e):_t(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ba(n)&&(n=[n]),_t(t,e,n))}const Gv=Symbol.for("v-scx"),Yv=()=>Is(Gv),Qv="3.3.4",Xv="http://www.w3.org/2000/svg",Rn=typeof document<"u"?document:null,_u=Rn&&Rn.createElement("template"),Jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Rn.createElementNS(Xv,t):Rn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{_u.innerHTML=r?`<svg>${t}</svg>`:t;const a=_u.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Zv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ty(t,e,n){const r=t.style,i=Pt(n);if(n&&!i){if(e&&!Pt(e))for(const s in e)n[s]==null&&$a(r,s,"");for(const s in n)$a(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Eu=/\s*!important$/;function $a(t,e,n){if(j(n))n.forEach(r=>$a(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ey(t,e);Eu.test(n)?t.setProperty(Cr(r),n.replace(Eu,""),"important"):t[r]=n}}const bu=["Webkit","Moz","ms"],na={};function ey(t,e){const n=na[e];if(n)return n;let r=Ne(e);if(r!=="filter"&&r in t)return na[e]=r;r=co(r);for(let i=0;i<bu.length;i++){const s=bu[i]+r;if(s in t)return na[e]=s}return e}const wu="http://www.w3.org/1999/xlink";function ny(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wu,e.slice(6,e.length)):t.setAttributeNS(wu,e,n);else{const s=eg(e);n==null||s&&!rh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function ry(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=rh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function rr(t,e,n,r){t.addEventListener(e,n,r)}function iy(t,e,n,r){t.removeEventListener(e,n,r)}function sy(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=oy(e);if(r){const c=s[e]=cy(r,i);rr(t,a,c,l)}else o&&(iy(t,a,o,l),s[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function oy(t){let e;if(Tu.test(t)){e={};let r;for(;r=t.match(Tu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let ra=0;const ay=Promise.resolve(),ly=()=>ra||(ay.then(()=>ra=0),ra=Date.now());function cy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;fe(uy(r,n.value),e,5,[r])};return n.value=t,n.attached=ly(),n}function uy(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Au=/^on[a-z]/,fy=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Zv(t,r,i):e==="style"?ty(t,n,r):oo(e)?Al(e)||sy(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hy(t,e,r,i))?ry(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ny(t,e,r,i))};function hy(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Au.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Au.test(e)&&Pt(n)?!1:e in t}const Ze="transition",Lr="animation",Eo=(t,{slots:e})=>Xh(ev,dy(t),e);Eo.displayName="Transition";const Jh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Eo.props=Ct({},xh,Jh);const Tn=(t,e=[])=>{j(t)?t.forEach(n=>n(...e)):t&&t(...e)},Iu=t=>t?j(t)?t.some(e=>e.length>1):t.length>1:!1;function dy(t){const e={};for(const B in t)B in Jh||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,P=my(i),T=P&&P[0],O=P&&P[1],{onBeforeEnter:_,onEnter:A,onEnterCancelled:V,onLeave:R,onLeaveCancelled:W,onBeforeAppear:ct=_,onAppear:ut=A,onAppearCancelled:K=V}=e,Z=(B,vt,re)=>{An(B,vt?u:a),An(B,vt?c:o),re&&re()},rt=(B,vt)=>{B._isLeaving=!1,An(B,f),An(B,p),An(B,d),vt&&vt()},Ut=B=>(vt,re)=>{const Mr=B?ut:A,St=()=>Z(vt,B,re);Tn(Mr,[vt,St]),Cu(()=>{An(vt,B?l:s),tn(vt,B?u:a),Iu(Mr)||Pu(vt,r,T,St)})};return Ct(e,{onBeforeEnter(B){Tn(_,[B]),tn(B,s),tn(B,o)},onBeforeAppear(B){Tn(ct,[B]),tn(B,l),tn(B,c)},onEnter:Ut(!1),onAppear:Ut(!0),onLeave(B,vt){B._isLeaving=!0;const re=()=>rt(B,vt);tn(B,f),vy(),tn(B,d),Cu(()=>{B._isLeaving&&(An(B,f),tn(B,p),Iu(R)||Pu(B,r,O,re))}),Tn(R,[B,re])},onEnterCancelled(B){Z(B,!1),Tn(V,[B])},onAppearCancelled(B){Z(B,!0),Tn(K,[B])},onLeaveCancelled(B){rt(B),Tn(W,[B])}})}function my(t){if(t==null)return null;if(pt(t))return[ia(t.enter),ia(t.leave)];{const e=ia(t);return[e,e]}}function ia(t){return Yp(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function An(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Cu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let py=0;function Pu(t,e,n,r){const i=t._endId=++py,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=gy(t,e);if(!o)return r();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function gy(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),i=r(`${Ze}Delay`),s=r(`${Ze}Duration`),o=xu(i,s),a=r(`${Lr}Delay`),l=r(`${Lr}Duration`),c=xu(a,l);let u=null,f=0,d=0;e===Ze?o>0&&(u=Ze,f=o,d=s.length):e===Lr?c>0&&(u=Lr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ze:Lr:null,d=u?u===Ze?s.length:l.length:0);const p=u===Ze&&/\b(transform|all)(,|$)/.test(r(`${Ze}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Su(n)+Su(t[r])))}function Su(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function vy(){return document.body.offsetHeight}const Ru=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>ws(e,n):e};function yy(t){t.target.composing=!0}function ku(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ru(i);const s=r||i.props&&i.props.type==="number";rr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ia(a)),t._assign(a)}),n&&rr(t,"change",()=>{t.value=t.value.trim()}),e||(rr(t,"compositionstart",yy),rr(t,"compositionend",ku),rr(t,"change",ku))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ru(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ia(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},hr={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Br(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Br(t,!0),r.enter(t)):r.leave(t,()=>{Br(t,!1)}):Br(t,e))},beforeUnmount(t,{value:e}){Br(t,e)}};function Br(t,e){t.style.display=e?t._vod:"none"}const _y=Ct({patchProp:fy},Jv);let Ou;function Ey(){return Ou||(Ou=Sv(_y))}const by=(...t)=>{const e=Ey().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=wy(r);if(!i)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function wy(t){return Pt(t)?document.querySelector(t):t}var Ty=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Ay=Symbol();var Nu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nu||(Nu={}));function Iy(){const t=ng(!0),e=t.run(()=>Og({}));let n=[],r=[];const i=Ml({install(s){i._a=s,s.provide(Ay,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Ty?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Cy={name:"appNav",data(){return{mobile:null,mobileNav:null,windowWidth:null}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{toggleMobileNav(){this.mobileNav=!this.mobileNav},checkScreen(){if(this.windowWidth=window.innerWidth,this.windowWidth<=750){this.mobile=!0;return}this.mobile=!1,this.mobileNav=!1}}};const Qe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Sr=t=>(Yn("data-v-abe9eaf4"),t=t(),Qn(),t),Py={class:"navigation"},xy=Sr(()=>N("li",null,[N("a",{class:"link",href:"#price"},"Cennik")],-1)),Sy=Sr(()=>N("li",null,[N("a",{class:"link",href:"#faq"},"Pytania i odpowiedzi")],-1)),Ry=Sr(()=>N("li",null,[N("a",{class:"link",href:"#contact"},"Kontakt")],-1)),ky=[xy,Sy,Ry],Oy={class:"icon"},Ny={class:"dropdown-nav"},Dy=Sr(()=>N("li",null,[N("a",{class:"link",href:"#price"},"Cennik")],-1)),Vy=Sr(()=>N("li",null,[N("a",{class:"link",href:"#faq"},"Pytania i odpowiedzi")],-1)),My=Sr(()=>N("li",null,[N("a",{class:"link",href:"#contact"},"Kontakt")],-1)),Fy=[Dy,Vy,My];function Ly(t,e,n,r,i,s){return he(),we("header",null,[N("nav",null,[Se(N("ul",Py,ky,512),[[hr,!i.mobile]]),N("div",Oy,[Se(N("i",{onClick:e[0]||(e[0]=(...o)=>s.toggleMobileNav&&s.toggleMobileNav(...o)),class:jn(["far fa-bars",{"icon-active":i.mobileNav}])},null,2),[[hr,i.mobile]])]),_t(Eo,{name:"mobile-nav"},{default:$l(()=>[Se(N("ul",Ny,Fy,512),[[hr,i.mobileNav]])]),_:1})])])}const By=Qe(Cy,[["render",Ly],["__scopeId","data-v-abe9eaf4"]]),$y={},Uy="/gh-audyt/assets/audyt-7518856e.png";const jy={class:"hero",id:"home"},zy=Gh('<div class="container flex-row" data-v-96821e56><div class="left" data-v-96821e56><h2 data-v-96821e56>Lorem ipsum dolor sit amet.</h2><div class="buttons" data-v-96821e56><a href="#faq" class="btn" data-v-96821e56>Dlaczego warto?</a><a href="#price" class="btn btn-light" data-v-96821e56>Ceny</a></div></div><img src="'+Uy+'" alt="" data-v-96821e56></div>',1),Hy=[zy];function qy(t,e,n,r,i,s){return he(),we("section",jy,Hy)}const Ky=Qe($y,[["render",qy],["__scopeId","data-v-96821e56"]]),Wy={data(){return{showImages:null,windowWidth:null}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{checkScreen(){if(this.windowWidth=window.innerWidth,this.windowWidth<=1e3){this.showImages=!1;return}this.showImages=!0}}},Gy="/gh-audyt/assets/about-image-87227955.png";const Zh=t=>(Yn("data-v-0864ad73"),t=t(),Qn(),t),Yy={id:"about",class:"section about"},Qy={class:"flex-row"},Xy={class:"left"},Jy=Zh(()=>N("img",{src:Gy,alt:""},null,-1)),Zy=[Jy],t_=Zh(()=>N("div",{class:"right"},[N("h2",null,"Audyty energetyczne"),N("p",{class:"info"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum veniam est similique culpa ex accusamus voluptates. Necessitatibus, nam perspiciatis nemo officia architecto repellendus modi veniam, qui ea, voluptas aliquam."),N("p",{class:"info"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse molestias ad labore, maiores laboriosam fugiat perferendis, sit nam, dicta error quasi laborum iure aliquid molestiae?")],-1));function e_(t,e,n,r,i,s){return he(),we("section",Yy,[N("div",Qy,[Se(N("div",Xy,Zy,512),[[hr,i.showImages]]),t_])])}const n_=Qe(Wy,[["render",e_],["__scopeId","data-v-0864ad73"]]),r_={data(){return{showImages:null,windowWidth:null}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{checkScreen(){if(this.windowWidth=window.innerWidth,this.windowWidth<=1e3){this.showImages=!1;return}this.showImages=!0}}},i_="/gh-audyt/assets/price-image-047bf257.png";const s_=t=>(Yn("data-v-d9a71a3c"),t=t(),Qn(),t),o_={class:"section pricing",id:"price"},a_={class:"flex-row"},l_=Gh('<div class="left" data-v-d9a71a3c><div class="info" data-v-d9a71a3c><h2 data-v-d9a71a3c>Cennik szczegółowy</h2></div><h3 data-v-d9a71a3c>Z kompletem dokumentów</h3><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Lokal</strong> - Lorem ipsum dolor sit amet.</p></div></div><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Dom</strong> - Lorem ipsum dolor sit amet.</p></div></div><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Lokal użytkowy</strong> - Lorem ipsum dolor sit amet.</p></div></div><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Lokal użytkowy</strong> - Lorem ipsum dolor sit amet.</p></div></div><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Budynek komercyjny</strong> - Lorem ipsum dolor sit amet.</p></div></div><h3 data-v-d9a71a3c>Koszt inwentaryzacji</h3><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Inwentaryzacja lokalu</strong> - Lorem ipsum dolor sit amet.</p></div></div><div class="flex-row" data-v-d9a71a3c><i class="fas fa-circle" data-v-d9a71a3c></i><div class="info" data-v-d9a71a3c><p data-v-d9a71a3c><strong data-v-d9a71a3c>Inwentaryzacja budynku</strong> - Lorem ipsum dolor sit amet.</p></div></div></div>',1),c_={class:"right"},u_=s_(()=>N("img",{src:i_,alt:""},null,-1)),f_=[u_];function h_(t,e,n,r,i,s){return he(),we("section",o_,[N("div",a_,[l_,Se(N("div",c_,f_,512),[[hr,i.showImages]])])])}const d_=Qe(r_,[["render",h_],["__scopeId","data-v-d9a71a3c"]]),m_={name:"AccordinFaq",props:["faq","index","open"],methods:{beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+10+"px",t.style.opacity="1"},beforeLeave:function(t){t.style.height=t.scrollHeight+10+"px",t.style.opacity="0"},leave:function(t){t.style.height="0"}}};const p_={class:"accordin-faq"};function g_(t,e,n,r,i,s){return he(),we("div",p_,[N("div",{class:jn(["question",{open:n.faq.open}])},[Sn(Yc(n.faq.question)+" ",1),N("i",{class:jn(["fas fa-plus",{"icon-active":n.faq.open}]),onClick:e[0]||(e[0]=o=>t.$emit("toggleOpen",n.index))},null,2)],2),_t(Eo,{name:"accordin-answer",onBeforeEnter:s.beforeEnter,onEnter:s.enter,onBeforeLeave:s.beforeLeave,onLeave:s.leave},{default:$l(()=>[Se(N("div",{class:"answer"},Yc(n.faq.answer),513),[[hr,n.faq.open]])]),_:1},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave"])])}const v_=Qe(m_,[["render",g_],["__scopeId","data-v-8508268e"]]),y_={components:{AccoordionFaq:v_},data(){return{faqs:[{question:"1Lorem ipsum dolor sit amet?",answer:"1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",open:!1},{question:"2Lorem ipsum dolor sit amet?",answer:"2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",open:!1},{question:"3Lorem ipsum dolor sit amet?",answer:"3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",open:!1},{question:"4Lorem ipsum dolor sit amet?",answer:"4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",open:!1},{question:"5Lorem ipsum dolor sit amet?",answer:"5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",open:!1}]}},methods:{toggleOpen:function(t){this.faqs=this.faqs.map((e,n)=>(t===n?e.open=!e.open:e.open=!1,e))}}};const __=t=>(Yn("data-v-5cccd8f5"),t=t(),Qn(),t),E_={id:"faq",class:"section faq"},b_=__(()=>N("div",{class:"info"},[N("h2",null,"Pytania i odpowiedzi")],-1));function w_(t,e,n,r,i,s){const o=Fh("AccoordionFaq");return he(),we("section",E_,[b_,(he(!0),we(ce,null,mv(i.faqs,(a,l)=>(he(),Dv(o,{faq:a,index:l,key:l,open:a.open,onToggleOpen:s.toggleOpen},null,8,["faq","index","open","onToggleOpen"]))),128))])}const T_=Qe(y_,[["render",w_],["__scopeId","data-v-5cccd8f5"]]),A_={name:"ContactModal",props:["displayed"]},I_="/gh-audyt/assets/contact-0a31041f.png";const ql=t=>(Yn("data-v-e2e1e2dd"),t=t(),Qn(),t),C_={class:"modal"},P_=ql(()=>N("img",{src:I_,alt:""},null,-1)),x_=ql(()=>N("p",null,"Dziękujemy za opaidj",-1)),S_=ql(()=>N("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quam.",-1));function R_(t,e,n,r,i,s){return he(),we("div",{class:jn(["modal-wrap",{"display-none":!n.displayed}])},[N("div",C_,[P_,x_,S_,N("button",{class:"btn",onClick:e[0]||(e[0]=o=>t.$emit("toggleModal"))},"Zamknij")])],2)}const k_=Qe(A_,[["render",R_],["__scopeId","data-v-e2e1e2dd"]]);/**
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
 */const td=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(td(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new N_;const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const D_=function(t){const e=td(t);return ed.encodeByteArray(e,!0)},Fs=function(t){return D_(t).replace(/\./g,"")},V_=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function M_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F_=()=>M_().__FIREBASE_DEFAULTS__,L_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&V_(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return F_()||L_()||B_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$_=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},U_=t=>{const e=$_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rd=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config};/**
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
 */class j_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),a].join(".")}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function q_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const K_="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=K_,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,id.prototype.create)}}class id{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?W_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rr(i,a,r)}}function W_(t,e){return t.replace(G_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const G_=/\{\$([^}]+)}/g;function Ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Du(s)&&Du(o)){if(!Ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Du(t){return t!==null&&typeof t=="object"}/**
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
 */function fi(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class Y_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new j_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X_(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q_(t){return t===Cn?void 0:t}function X_(t){return t.instantiationMode==="EAGER"}/**
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
 */class J_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(et||(et={}));const Z_={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},t0=et.INFO,e0={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},n0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=t0,this._logHandler=n0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}}const r0=(t,e)=>e.some(n=>t instanceof n);let Vu,Mu;function i0(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s0(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const od=new WeakMap,ja=new WeakMap,ad=new WeakMap,sa=new WeakMap,Kl=new WeakMap;function o0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&od.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function a0(t){if(ja.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ja.set(t,e)}let za={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ja.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ad.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l0(t){za=t(za)}function c0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oa(this),e,...n);return ad.set(r,e.sort?e.sort():[e]),on(r)}:s0().includes(t)?function(...e){return t.apply(oa(this),e),on(od.get(this))}:function(...e){return on(t.apply(oa(this),e))}}function u0(t){return typeof t=="function"?c0(t):(t instanceof IDBTransaction&&a0(t),r0(t,i0())?new Proxy(t,za):t)}function on(t){if(t instanceof IDBRequest)return o0(t);if(sa.has(t))return sa.get(t);const e=u0(t);return e!==t&&(sa.set(t,e),Kl.set(e,t)),e}const oa=t=>Kl.get(t);function f0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const h0=["get","getKey","getAll","getAllKeys","count"],d0=["put","add","delete","clear"],aa=new Map;function Fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=d0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return aa.set(e,s),s}l0(t=>({...t,get:(e,n,r)=>Fu(e,n)||t.get(e,n,r),has:(e,n)=>!!Fu(e,n)||t.has(e,n)}));/**
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
 */class m0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Lu="0.9.19";/**
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
 */const zn=new sd("@firebase/app"),g0="@firebase/app-compat",v0="@firebase/analytics-compat",y0="@firebase/analytics",_0="@firebase/app-check-compat",E0="@firebase/app-check",b0="@firebase/auth",w0="@firebase/auth-compat",T0="@firebase/database",A0="@firebase/database-compat",I0="@firebase/functions",C0="@firebase/functions-compat",P0="@firebase/installations",x0="@firebase/installations-compat",S0="@firebase/messaging",R0="@firebase/messaging-compat",k0="@firebase/performance",O0="@firebase/performance-compat",N0="@firebase/remote-config",D0="@firebase/remote-config-compat",V0="@firebase/storage",M0="@firebase/storage-compat",F0="@firebase/firestore",L0="@firebase/firestore-compat",B0="firebase",$0="10.4.0";/**
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
 */const qa="[DEFAULT]",U0={[Ha]:"fire-core",[g0]:"fire-core-compat",[y0]:"fire-analytics",[v0]:"fire-analytics-compat",[E0]:"fire-app-check",[_0]:"fire-app-check-compat",[b0]:"fire-auth",[w0]:"fire-auth-compat",[T0]:"fire-rtdb",[A0]:"fire-rtdb-compat",[I0]:"fire-fn",[C0]:"fire-fn-compat",[P0]:"fire-iid",[x0]:"fire-iid-compat",[S0]:"fire-fcm",[R0]:"fire-fcm-compat",[k0]:"fire-perf",[O0]:"fire-perf-compat",[N0]:"fire-rc",[D0]:"fire-rc-compat",[V0]:"fire-gcs",[M0]:"fire-gcs-compat",[F0]:"fire-fst",[L0]:"fire-fst-compat","fire-js":"fire-js",[B0]:"fire-js-all"};/**
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
 */const Ls=new Map,Ka=new Map;function j0(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(Ka.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of Ls.values())j0(n,t);return!0}function z0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const H0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new id("app","Firebase",H0);/**
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
 */class q0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const K0=$0;function ld(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=rd()),!n)throw an.create("no-options");const s=Ls.get(i);if(s){if(Ua(n,s.options)&&Ua(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new J_(i);for(const l of Ka.values())o.addComponent(l);const a=new q0(n,r,o);return Ls.set(i,a),a}function W0(t=qa){const e=Ls.get(t);if(!e&&t===qa&&rd())return ld();if(!e)throw an.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let i=(r=U0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}Bs(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const G0="firebase-heartbeat-database",Y0=1,di="firebase-heartbeat-store";let la=null;function cd(){return la||(la=f0(G0,Y0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),la}async function Q0(t){try{return await(await cd()).transaction(di).objectStore(di).get(ud(t))}catch(e){if(e instanceof Rr)zn.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Bu(t,e){try{const r=(await cd()).transaction(di,"readwrite");await r.objectStore(di).put(e,ud(t)),await r.done}catch(n){if(n instanceof Rr)zn.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function ud(t){return`${t.name}!${t.options.appId}`}/**
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
 */const X0=1024,J0=30*24*60*60*1e3;class Z0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$u();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=J0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$u(),{heartbeatsToSend:n,unsentEntries:r}=t1(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $u(){return new Date().toISOString().substring(0,10)}function t1(t,e=X0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class e1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?q_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Q0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uu(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function n1(t){Bs(new hi("platform-logger",e=>new m0(e),"PRIVATE")),Bs(new hi("heartbeat",e=>new Z0(e),"PRIVATE")),dr(Ha,Lu,t),dr(Ha,Lu,"esm2017"),dr("fire-js","")}n1("");var r1="firebase",i1="10.4.0";/**
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
 */dr(r1,i1,"app");var s1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Wl=Wl||{},H=s1||self;function bo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function o1(t){return Object.prototype.hasOwnProperty.call(t,ca)&&t[ca]||(t[ca]=++a1)}var ca="closure_uid_"+(1e9*Math.random()>>>0),a1=0;function l1(t,e,n){return t.call.apply(t.bind,arguments)}function c1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Gt=l1:Gt=c1,Gt.apply(null,arguments)}function rs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var u1=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),u1!=0)&&o1(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ju(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(bo(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Yt.prototype.h=function(){this.defaultPrevented=!0};var f1=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function mi(t){return/^[\s\xa0]*$/.test(t)}function wo(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function xe(t){return wo().indexOf(t)!=-1}function Yl(t){return Yl[" "](t),t}Yl[" "]=function(){};function h1(t,e){var n=iE;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var d1=xe("Opera"),_r=xe("Trident")||xe("MSIE"),hd=xe("Edge"),Wa=hd||_r,dd=xe("Gecko")&&!(wo().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge"))&&!(xe("Trident")||xe("MSIE"))&&!xe("Edge"),m1=wo().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge");function md(){var t=H.document;return t?t.documentMode:void 0}var Ga;t:{var ua="",fa=function(){var t=wo();if(dd)return/rv:([^\);]+)(\)|;)/.exec(t);if(hd)return/Edge\/([\d\.]+)/.exec(t);if(_r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(m1)return/WebKit\/(\S+)/.exec(t);if(d1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fa&&(ua=fa?fa[1]:""),_r){var ha=md();if(ha!=null&&ha>parseFloat(ua)){Ga=String(ha);break t}}Ga=ua}var Ya;if(H.document&&_r){var zu=md();Ya=zu||parseInt(Ga,10)||void 0}else Ya=void 0;var p1=Ya;function pi(t,e){if(Yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dd){t:{try{Yl(e.nodeName);var i=!0;break t}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:g1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pi.$.h.call(this)}}Mt(pi,Yt);var g1={2:"touch",3:"pen",4:"mouse"};pi.prototype.h=function(){pi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),v1=0;function y1(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++v1,this.fa=this.ia=!1}function To(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ql(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function pd(t){const e={};for(const n in t)e[n]=t[n];return e}const Hu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gd(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Hu.length;s++)n=Hu[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ao(t){this.src=t,this.g={},this.h=0}Ao.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xa(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new y1(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Qa(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fd(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(To(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xa(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Xl="closure_lm_"+(1e6*Math.random()|0),da={};function vd(t,e,n,r,i){if(r&&r.once)return _d(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)vd(t,e[s],n,r,i);return null}return n=tc(n),t&&t[Di]?t.O(e,n,Ni(r)?!!r.capture:!!r,i):yd(t,e,n,!1,r,i)}function yd(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ni(i)?!!i.capture:!!i,a=Zl(t);if(a||(t[Xl]=a=new Ao(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=E1(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)f1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function E1(){function t(n){return e.call(t.src,t.listener,n)}const e=b1;return t}function _d(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_d(t,e[s],n,r,i);return null}return n=tc(n),t&&t[Di]?t.P(e,n,Ni(r)?!!r.capture:!!r,i):yd(t,e,n,!0,r,i)}function Ed(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ed(t,e[s],n,r,i);else r=Ni(r)?!!r.capture:!!r,n=tc(n),t&&t[Di]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xa(s,n,r,i),-1<n&&(To(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xa(e,n,r,i)),(n=-1<t?e[t]:null)&&Jl(n))}function Jl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Di])Qa(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zl(e))?(Qa(n,t),n.h==0&&(n.src=null,e[Xl]=null)):To(t)}}}function bd(t){return t in da?da[t]:da[t]="on"+t}function b1(t,e){if(t.fa)t=!0;else{e=new pi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Jl(t),t=n.call(r,e)}return t}function Zl(t){return t=t[Xl],t instanceof Ao?t:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function tc(t){return typeof t=="function"?t:(t[ma]||(t[ma]=function(e){return t.handleEvent(e)}),t[ma])}function Dt(){vn.call(this),this.i=new Ao(this),this.S=this,this.J=null}Mt(Dt,vn);Dt.prototype[Di]=!0;Dt.prototype.removeEventListener=function(t,e,n,r){Ed(this,t,e,n,r)};function $t(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Yt(e,t);else if(e instanceof Yt)e.target=e.target||t;else{var i=e;e=new Yt(r,t),gd(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=is(o,r,!0,e)&&i}if(o=e.g=t,i=is(o,r,!0,e)&&i,i=is(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=is(o,r,!1,e)&&i}Dt.prototype.N=function(){if(Dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)To(n[r]);delete t.g[e],t.h--}}this.J=null};Dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function is(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qa(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ec=H.JSON.stringify;class w1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function T1(){var t=nc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class A1{constructor(){this.h=this.g=null}add(e,n){const r=wd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wd=new w1(()=>new I1,t=>t.reset());class I1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function C1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function P1(t){H.setTimeout(()=>{throw t},0)}let gi,vi=!1,nc=new A1,Td=()=>{const t=H.Promise.resolve(void 0);gi=()=>{t.then(x1)}};var x1=()=>{for(var t;t=T1();){try{t.h.call(t.g)}catch(n){P1(n)}var e=wd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vi=!1};function Io(t,e){Dt.call(this),this.h=t||1,this.g=e||H,this.j=Gt(this.qb,this),this.l=Date.now()}Mt(Io,Dt);S=Io.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),$t(this,"tick"),this.ga&&(rc(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}S.N=function(){Io.$.N.call(this),rc(this),delete this.g};function ic(t,e,n){if(typeof t=="function")n&&(t=Gt(t,n));else if(t&&typeof t.handleEvent=="function")t=Gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Ad(t){t.g=ic(()=>{t.g=null,t.i&&(t.i=!1,Ad(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class S1 extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ad(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(t){vn.call(this),this.h=t,this.g={}}Mt(yi,vn);var qu=[];function Id(t,e,n,r){Array.isArray(n)||(n&&(qu[0]=n.toString()),n=qu);for(var i=0;i<n.length;i++){var s=vd(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Cd(t){Ql(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jl(e)},t),t.g={}}yi.prototype.N=function(){yi.$.N.call(this),Cd(this)};yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Co(){this.g=!0}Co.prototype.Ea=function(){this.g=!1};function R1(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function k1(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function sr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+N1(t,n)+(r?" "+r:"")})}function O1(t,e){t.info(function(){return"TIMEOUT: "+e})}Co.prototype.info=function(){};function N1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ec(n)}catch{return e}}var Xn={},Ku=null;function Po(){return Ku=Ku||new Dt}Xn.Ta="serverreachability";function Pd(t){Yt.call(this,Xn.Ta,t)}Mt(Pd,Yt);function _i(t){const e=Po();$t(e,new Pd(e))}Xn.STAT_EVENT="statevent";function xd(t,e){Yt.call(this,Xn.STAT_EVENT,t),this.stat=e}Mt(xd,Yt);function Xt(t){const e=Po();$t(e,new xd(e,t))}Xn.Ua="timingevent";function Sd(t,e){Yt.call(this,Xn.Ua,t),this.size=e}Mt(Sd,Yt);function Vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var xo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Rd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sc(){}sc.prototype.h=null;function Wu(t){return t.h||(t.h=t.i())}function kd(){}var Mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oc(){Yt.call(this,"d")}Mt(oc,Yt);function ac(){Yt.call(this,"c")}Mt(ac,Yt);var Ja;function So(){}Mt(So,sc);So.prototype.g=function(){return new XMLHttpRequest};So.prototype.i=function(){return{}};Ja=new So;function Fi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new yi(this),this.P=D1,t=Wa?125:void 0,this.V=new Io(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Od}function Od(){this.i=null,this.g="",this.h=!1}var D1=45e3,Za={},$s={};S=Fi.prototype;S.setTimeout=function(t){this.P=t};function tl(t,e,n){t.L=1,t.v=ko(He(e)),t.s=n,t.S=!0,Nd(t,null)}function Nd(t,e){t.G=Date.now(),Li(t),t.A=He(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Ud(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Od,t.g=lm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new S1(Gt(t.Pa,t,t.g),t.O)),Id(t.U,t.g,"readystatechange",t.nb),e=t.I?pd(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_i(),R1(t.j,t.u,t.A,t.m,t.W,t.s)}S.nb=function(t){t=t.target;const e=this.M;e&&Re(t)==3?e.l():this.Pa(t)};S.Pa=function(t){try{if(t==this.g)t:{const u=Re(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||Wa||this.g&&(this.h.h||this.g.ja()||Xu(this.g)))){this.J||u!=4||e==7||(e==8||0>=f?_i(3):_i(2)),Ro(this);var n=this.g.da();this.ca=n;e:if(Dd(this)){var r=Xu(this.g);t="";var i=r.length,s=Re(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),Xr(this);var o="";break e}this.h.i=new H.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,k1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mi(a)){var c=a;break e}}c=null}if(n=c)sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,n);else{this.i=!1,this.o=3,Xt(12),On(this),Xr(this);break t}}this.S?(Vd(this,u,o),Wa&&this.i&&u==3&&(Id(this.U,this.V,"tick",this.mb),this.V.start())):(sr(this.j,this.m,o,null),el(this,o)),u==4&&On(this),this.i&&!this.J&&(u==4?im(this.l,this):(this.i=!1,Li(this)))}else eE(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),On(this),Xr(this)}}}catch{}finally{}};function Dd(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Vd(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=V1(t,n),i==$s){e==4&&(t.o=4,Xt(14),r=!1),sr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Za){t.o=4,Xt(15),sr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else sr(t.j,t.m,i,null),el(t,i);Dd(t)&&i!=$s&&i!=Za&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dc(e),e.M=!0,Xt(11))):(sr(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Xr(t))}S.mb=function(){if(this.g){var t=Re(this.g),e=this.g.ja();this.C<e.length&&(Ro(this),Vd(this,t,e),this.i&&t!=4&&Li(this))}};function V1(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$s:(n=Number(e.substring(n,r)),isNaN(n)?Za:(r+=1,r+n>e.length?$s:(e=e.slice(r,r+n),t.C=r+n,e)))}S.cancel=function(){this.J=!0,On(this)};function Li(t){t.Y=Date.now()+t.P,Md(t,t.P)}function Md(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vi(Gt(t.lb,t),e)}function Ro(t){t.B&&(H.clearTimeout(t.B),t.B=null)}S.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(O1(this.j,this.A),this.L!=2&&(_i(),Xt(17)),On(this),this.o=2,Xr(this)):Md(this,this.Y-t)};function Xr(t){t.l.H==0||t.J||im(t.l,t)}function On(t){Ro(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,rc(t.V),Cd(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function el(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nl(n.i,t))){if(!t.K&&nl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)zs(n),Vo(n);else break t;hc(n),Xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vi(Gt(n.ib,n),6e3));if(1>=Hd(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nn(n,11)}else if((t.K||n.g==t)&&zs(n),!mi(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const P=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(P){var s=r.i;s.g||P.indexOf("spdy")==-1&&P.indexOf("quic")==-1&&P.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(lc(s,s.h),s.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,dt(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=am(r,r.J?r.pa:null,r.Y),o.K){qd(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ro(a),Li(a)),r.g=o}else nm(r);0<n.j.length&&Mo(n)}else c[0]!="stop"&&c[0]!="close"||Nn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Nn(n,7):fc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}_i(4)}catch{}}function M1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(bo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function F1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(bo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=F1(t),r=M1(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function L1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bn){this.h=t.h,Us(this,t.j),this.s=t.s,this.g=t.g,js(this,t.m),this.l=t.l;var e=t.i,n=new Ei;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gu(this,n),this.o=t.o}else t&&(e=String(t).match(Ld))?(this.h=!1,Us(this,e[1]||"",!0),this.s=Kr(e[2]||""),this.g=Kr(e[3]||"",!0),js(this,e[4]),this.l=Kr(e[5]||"",!0),Gu(this,e[6]||"",!0),this.o=Kr(e[7]||"")):(this.h=!1,this.i=new Ei(null,this.h))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wr(e,Yu,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wr(e,Yu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wr(n,n.charAt(0)=="/"?U1:$1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wr(n,z1)),t.join("")};function He(t){return new Bn(t)}function Us(t,e,n){t.j=n?Kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function js(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gu(t,e,n){e instanceof Ei?(t.i=e,H1(t.i,t.h)):(n||(e=Wr(e,j1)),t.i=new Ei(e,t.h))}function dt(t,e,n){t.i.set(e,n)}function ko(t){return dt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,B1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function B1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yu=/[#\/\?@]/g,$1=/[#\?:]/g,U1=/[#\?]/g,j1=/[#\?@]/g,z1=/#/g;function Ei(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new Map,t.h=0,t.i&&L1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=Ei.prototype;S.add=function(t,e){yn(this),this.i=null,t=kr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bd(t,e){yn(t),e=kr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $d(t,e){return yn(t),e=kr(t,e),t.g.has(e)}S.forEach=function(t,e){yn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};S.ta=function(){yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};S.Z=function(t){yn(this);let e=[];if(typeof t=="string")$d(this,t)&&(e=e.concat(this.g.get(kr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return yn(this),this.i=null,t=kr(this,t),$d(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ud(t,e,n){Bd(t,e),0<n.length&&(t.i=null,t.g.set(kr(t,e),Gl(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function kr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H1(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Bd(this,r),Ud(this,i,n))},t)),t.j=e}var q1=class{constructor(t,e){this.g=t,this.map=e}};function jd(t){this.l=t||K1,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var K1=10;function zd(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hd(t){return t.h?1:t.g?t.g.size:0}function nl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function lc(t,e){t.g?t.g.add(e):t.h=e}function qd(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jd.prototype.cancel=function(){if(this.i=Kd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kd(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gl(t.i)}var W1=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function G1(){this.g=new W1}function Y1(t,e,n){const r=n||"";try{Fd(t,function(i,s){let o=i;Ni(i)&&(o=ec(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Q1(t,e){const n=new Co;if(H.Image){const r=new Image;r.onload=rs(ss,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rs(ss,n,r,"TestLoadImage: error",!1,e),r.onabort=rs(ss,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rs(ss,n,r,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ss(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Oo(t){this.l=t.ec||null,this.j=t.ob||!1}Mt(Oo,sc);Oo.prototype.g=function(){return new No(this.l,this.j)};Oo.prototype.i=function(t){return function(){return t}}({});function No(t,e){Dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(No,Dt);var cc=0;S=No.prototype;S.open=function(t,e){if(this.readyState!=cc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=cc};S.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wd(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Wd(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}S.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):bi(this),this.readyState==3&&Wd(this)}};S.Za=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};S.Ya=function(t){this.g&&(this.response=t,Bi(this))};S.ka=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var X1=H.JSON.parse;function Tt(t){Dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gd,this.L=this.M=!1}Mt(Tt,Dt);var Gd="",J1=/^https?$/i,Z1=["POST","PUT"];S=Tt.prototype;S.Oa=function(t){this.M=t};S.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ja.g(),this.C=this.u?Wu(this.u):Wu(Ja),this.g.onreadystatechange=Gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Qu(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=H.FormData&&t instanceof H.FormData,!(0<=fd(Z1,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xd(this),0<this.B&&((this.L=tE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gt(this.ua,this)):this.A=ic(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qu(this,s)}};function tE(t){return _r&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.ua=function(){typeof Wl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$t(this,"timeout"),this.abort(8))};function Qu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Yd(t),Do(t)}function Yd(t){t.F||(t.F=!0,$t(t,"complete"),$t(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$t(this,"complete"),$t(this,"abort"),Do(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Do(this,!0)),Tt.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Qd(this):this.kb())};S.kb=function(){Qd(this)};function Qd(t){if(t.h&&typeof Wl<"u"&&(!t.C[1]||Re(t)!=4||t.da()!=2)){if(t.v&&Re(t)==4)ic(t.La,0,t);else if($t(t,"readystatechange"),Re(t)==4){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Ld)[1]||null;!i&&H.self&&H.self.location&&(i=H.self.location.protocol.slice(0,-1)),r=!J1.test(i?i.toLowerCase():"")}n=r}if(n)$t(t,"complete"),$t(t,"success");else{t.m=6;try{var s=2<Re(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Yd(t)}}finally{Do(t)}}}}function Do(t,e){if(t.g){Xd(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||$t(t,"ready");try{n.onreadystatechange=r}catch{}}}function Xd(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}S.isActive=function(){return!!this.g};function Re(t){return t.g?t.g.readyState:0}S.da=function(){try{return 2<Re(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),X1(e)}};function Xu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gd:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eE(t){const e={};t=(t.g&&2<=Re(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(mi(t[r]))continue;var n=C1(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}_1(e,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jd(t){let e="";return Ql(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uc(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Jd(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):dt(t,e,n))}function $r(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zd(t){this.Ga=0,this.j=[],this.l=new Co,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$r("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$r("baseRetryDelayMs",5e3,t),this.hb=$r("retryDelaySeedMs",1e4,t),this.eb=$r("forwardChannelMaxRetries",2,t),this.xa=$r("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jd(t&&t.concurrentRequestLimit),this.Ja=new G1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=Zd.prototype;S.ra=8;S.H=1;function fc(t){if(tm(t),t.H==3){var e=t.W++,n=He(t.I);if(dt(n,"SID",t.K),dt(n,"RID",e),dt(n,"TYPE","terminate"),$i(t,n),e=new Fi(t,t.l,e),e.L=2,e.v=ko(He(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=lm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Li(e)}om(t)}function Vo(t){t.g&&(dc(t),t.g.cancel(),t.g=null)}function tm(t){Vo(t),t.u&&(H.clearTimeout(t.u),t.u=null),zs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Mo(t){if(!zd(t.i)&&!t.m){t.m=!0;var e=t.Na;gi||Td(),vi||(gi(),vi=!0),nc.add(e,t),t.C=0}}function nE(t,e){return Hd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vi(Gt(t.Na,t,e),sm(t,t.C)),t.C++,!0)}S.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fi(this,this.l,t);let s=this.s;if(this.U&&(s?(s=pd(s),gd(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break t}if(e===4096||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=em(this,i,e),n=He(this.I),dt(n,"RID",t),dt(n,"CVER",22),this.F&&dt(n,"X-HTTP-Session-Id",this.F),$i(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Jd(s)))+"&"+e:this.o&&uc(n,this.o,s)),lc(this.i,i),this.bb&&dt(n,"TYPE","init"),this.P?(dt(n,"$req",e),dt(n,"SID","null"),i.aa=!0,tl(i,n,null)):tl(i,n,e),this.H=2}}else this.H==3&&(t?Ju(this,t):this.j.length==0||zd(this.i)||Ju(this))};function Ju(t,e){var n;e?n=e.m:n=t.W++;const r=He(t.I);dt(r,"SID",t.K),dt(r,"RID",n),dt(r,"AID",t.V),$i(t,r),t.o&&t.s&&uc(r,t.o,t.s),n=new Fi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=em(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),lc(t.i,n),tl(n,r,e)}function $i(t,e){t.na&&Ql(t.na,function(n,r){dt(e,r,n)}),t.h&&Fd({},function(n,r){dt(e,r,n)})}function em(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Gt(t.h.Va,t.h,t):null;t:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{Y1(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function nm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;gi||Td(),vi||(gi(),vi=!0),nc.add(e,t),t.A=0}}function hc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vi(Gt(t.Ma,t),sm(t,t.A)),t.A++,!0)}S.Ma=function(){if(this.u=null,rm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vi(Gt(this.jb,this),t)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),Vo(this),rm(this))};function dc(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function rm(t){t.g=new Fi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=He(t.wa);dt(e,"RID","rpc"),dt(e,"SID",t.K),dt(e,"AID",t.V),dt(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&dt(e,"TO",t.qa),dt(e,"TYPE","xmlhttp"),$i(t,e),t.o&&t.s&&uc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ko(He(e)),n.s=null,n.S=!0,Nd(n,t)}S.ib=function(){this.v!=null&&(this.v=null,Vo(this),hc(this),Xt(19))};function zs(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function im(t,e){var n=null;if(t.g==e){zs(t),dc(t),t.g=null;var r=2}else if(nl(t.i,e))n=e.F,qd(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Po(),$t(r,new Sd(r,n)),Mo(t)}else nm(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&nE(t,e)||r==2&&hc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nn(t,5);break;case 4:Nn(t,10);break;case 3:Nn(t,6);break;default:Nn(t,2)}}}function sm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Gt(t.pb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Us(n,"https"),ko(n)),Q1(n.toString(),r)}else Xt(2);t.H=0,t.h&&t.h.za(e),om(t),tm(t)}S.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function om(t){if(t.H=0,t.ma=[],t.h){const e=Kd(t.i);(e.length!=0||t.j.length!=0)&&(ju(t.ma,e),ju(t.ma,t.j),t.i.i.length=0,Gl(t.j),t.j.length=0),t.h.ya()}}function am(t,e,n){var r=n instanceof Bn?He(n):new Bn(n);if(r.g!="")e&&(r.g=e+"."+r.g),js(r,r.m);else{var i=H.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Bn(null);r&&Us(s,r),e&&(s.g=e),i&&js(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&dt(r,n,e),dt(r,"VER",t.ra),$i(t,r),r}function lm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Tt(new Oo({ob:!0})):new Tt(t.va),e.Oa(t.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function cm(){}S=cm.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Hs(){if(_r&&!(10<=Number(p1)))throw Error("Environmental error: no available transport.")}Hs.prototype.g=function(t,e){return new oe(t,e)};function oe(t,e){Dt.call(this),this.g=new Zd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!mi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Or(this)}Mt(oe,Dt);oe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=am(t,null,t.Y),Mo(t)};oe.prototype.close=function(){fc(this.g)};oe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ec(t),t=n);e.j.push(new q1(e.fb++,t)),e.H==3&&Mo(e)};oe.prototype.N=function(){this.g.h=null,delete this.j,fc(this.g),delete this.g,oe.$.N.call(this)};function um(t){oc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Mt(um,oc);function fm(){ac.call(this),this.status=1}Mt(fm,ac);function Or(t){this.g=t}Mt(Or,cm);Or.prototype.Ba=function(){$t(this.g,"a")};Or.prototype.Aa=function(t){$t(this.g,new um(t))};Or.prototype.za=function(t){$t(this.g,new fm)};Or.prototype.ya=function(){$t(this.g,"b")};function rE(){this.blockSize=-1}function De(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(De,rE);De.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pa(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}De.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)pa(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){pa(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){pa(this,r),i=0;break}}this.h=i,this.i+=e};De.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function it(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var iE={};function mc(t){return-128<=t&&128>t?h1(t,function(e){return new it([e|0],0>e?-1:0)}):new it([t|0],0>t?-1:0)}function ke(t){if(isNaN(t)||!isFinite(t))return mr;if(0>t)return Bt(ke(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rl;return new it(e,0)}function hm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Bt(hm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ke(Math.pow(e,8)),r=mr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ke(Math.pow(e,s)),r=r.R(s).add(ke(o))):(r=r.R(n),r=r.add(ke(o)))}return r}var rl=4294967296,mr=mc(0),il=mc(1),Zu=mc(16777216);S=it.prototype;S.ea=function(){if(ue(this))return-Bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rl+r)*e,e*=rl}return t};S.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Be(this))return"0";if(ue(this))return"-"+Bt(this).toString(t);for(var e=ke(Math.pow(t,6)),n=this,r="";;){var i=Ks(n,e).g;n=qs(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Be(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};S.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Be(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ue(t){return t.h==-1}S.X=function(t){return t=qs(this,t),ue(t)?-1:Be(t)?0:1};function Bt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new it(n,~t.h).add(il)}S.abs=function(){return ue(this)?Bt(this):this};S.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new it(n,n[n.length-1]&-2147483648?-1:0)};function qs(t,e){return t.add(Bt(e))}S.R=function(t){if(Be(this)||Be(t))return mr;if(ue(this))return ue(t)?Bt(this).R(Bt(t)):Bt(Bt(this).R(t));if(ue(t))return Bt(this.R(Bt(t)));if(0>this.X(Zu)&&0>t.X(Zu))return ke(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,os(n,2*r+2*i),n[2*r+2*i+1]+=s*l,os(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,os(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,os(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new it(n,0)};function os(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ur(t,e){this.g=t,this.h=e}function Ks(t,e){if(Be(e))throw Error("division by zero");if(Be(t))return new Ur(mr,mr);if(ue(t))return e=Ks(Bt(t),e),new Ur(Bt(e.g),Bt(e.h));if(ue(e))return e=Ks(t,Bt(e)),new Ur(Bt(e.g),e.h);if(30<t.g.length){if(ue(t)||ue(e))throw Error("slowDivide_ only works with positive integers.");for(var n=il,r=e;0>=r.X(t);)n=tf(n),r=tf(r);var i=nr(n,1),s=nr(r,1);for(r=nr(r,2),n=nr(n,2);!Be(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=nr(r,1),n=nr(n,1)}return e=qs(t,i.R(e)),new Ur(i,e)}for(i=mr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ke(n),o=s.R(e);ue(o)||0<o.X(t);)n-=r,s=ke(n),o=s.R(e);Be(s)&&(s=il),i=i.add(s),t=qs(t,o)}return new Ur(i,t)}S.gb=function(t){return Ks(this,t).h};S.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new it(n,this.h&t.h)};S.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new it(n,this.h|t.h)};S.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new it(n,this.h^t.h)};function tf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new it(n,t.h)}function nr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new it(i,t.h)}Hs.prototype.createWebChannel=Hs.prototype.g;oe.prototype.send=oe.prototype.u;oe.prototype.open=oe.prototype.m;oe.prototype.close=oe.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;Rd.COMPLETE="complete";kd.EventType=Mi;Mi.OPEN="a";Mi.CLOSE="b";Mi.ERROR="c";Mi.MESSAGE="d";Dt.prototype.listen=Dt.prototype.O;Tt.prototype.listenOnce=Tt.prototype.P;Tt.prototype.getLastError=Tt.prototype.Sa;Tt.prototype.getLastErrorCode=Tt.prototype.Ia;Tt.prototype.getStatus=Tt.prototype.da;Tt.prototype.getResponseJson=Tt.prototype.Wa;Tt.prototype.getResponseText=Tt.prototype.ja;Tt.prototype.send=Tt.prototype.ha;Tt.prototype.setWithCredentials=Tt.prototype.Oa;De.prototype.digest=De.prototype.l;De.prototype.reset=De.prototype.reset;De.prototype.update=De.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=ke;it.fromString=hm;var sE=function(){return new Hs},oE=function(){return Po()},ga=xo,aE=Rd,lE=Xn,ef={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},as=kd,cE=Tt,uE=it;const nf="@firebase/firestore";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Nr="10.4.0";/**
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
 */const Hn=new sd("@firebase/firestore");function jr(){return Hn.logLevel}function L(t,...e){if(Hn.logLevel<=et.DEBUG){const n=e.map(pc);Hn.debug(`Firestore (${Nr}): ${t}`,...n)}}function qn(t,...e){if(Hn.logLevel<=et.ERROR){const n=e.map(pc);Hn.error(`Firestore (${Nr}): ${t}`,...n)}}function Ws(t,...e){if(Hn.logLevel<=et.WARN){const n=e.map(pc);Hn.warn(`Firestore (${Nr}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function Vt(t,e){t||X()}function gt(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class hE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dE{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vt(typeof r.accessToken=="string"),new dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vt(e===null||typeof e=="string"),new zt(e)}}class mE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Vt(typeof n.token=="string"),this.R=n.token,new gE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class mm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function lt(t,e){return t<e?-1:t>e?1:0}function Er(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Nt.fromMillis(Date.now())}static fromDate(e){return Nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?lt(this.nanoseconds,e.nanoseconds):lt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class yt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new yt(e)}static min(){return new yt(new Nt(0,0))}static max(){return new yt(new Nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class wt extends wi{construct(e,n,r){return new wt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const _E=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends wi{construct(e,n,r){return new Kt(e,n,r)}static isValidIdentifier(e){return _E.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(wt.fromString(e))}static fromName(e){return new Y(wt.fromString(e).popFirst(5))}static empty(){return new Y(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return wt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new wt(e.slice()))}}function EE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=yt.fromTimestamp(r===1e9?new Nt(n+1,0):new Nt(n,r));return new fn(i,Y.empty(),e)}function bE(t){return new fn(t.readTime,t.key,-1)}class fn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fn(yt.min(),Y.empty(),-1)}static max(){return new fn(yt.max(),Y.empty(),-1)}}function wE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:lt(t.largestBatchId,e.largestBatchId))}/**
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
 */const TE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pm(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==TE)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}gm.ae=-1;function gc(t){return t==null}function Gs(t){return t===0&&1/t==-1/0}function IE(t){return typeof t=="number"&&Number.isInteger(t)&&!Gs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ne{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ft.RED,this.left=i??Ft.EMPTY,this.right=s??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Jt{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Jt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Jt(this.comparator);return n.data=e,n}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _e{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new _e([])}unionWith(e){let n=new Jt(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _e(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CE("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return lt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const PE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Vt(!!t),typeof t=="string"){let e=0;const n=PE.exec(t);if(Vt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Lt(t.seconds),nanos:Lt(t.nanos)}}function Lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function vc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ym(t){const e=t.mapValue.fields.__previous_value__;return vc(e)?ym(e):e}function Ys(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Nt(e.seconds,e.nanos)}/**
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
 */class xE{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vc(t)?4:SE(t)?9007199254740991:10:X()}function Ve(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kn(i.timestampValue),a=Kn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Lt(i.geoPointValue.latitude)===Lt(s.geoPointValue.latitude)&&Lt(i.geoPointValue.longitude)===Lt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Lt(i.integerValue)===Lt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Lt(i.doubleValue),a=Lt(s.doubleValue);return o===a?Gs(o)===Gs(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Er(t.arrayValue.values||[],e.arrayValue.values||[],Ve);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rf(o)!==rf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ve(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function Ai(t,e){return(t.values||[]).find(n=>Ve(n,e))!==void 0}function wr(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return lt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Lt(s.integerValue||s.doubleValue),l=Lt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return of(t.timestampValue,e.timestampValue);case 4:return of(Ys(t),Ys(e));case 5:return lt(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),l=Ti(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=lt(a[c],l[c]);if(u!==0)return u}return lt(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=lt(Lt(s.latitude),Lt(o.latitude));return a!==0?a:lt(Lt(s.longitude),Lt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=wr(a[c],l[c]);if(u)return u}return lt(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cs.mapValue&&o===cs.mapValue)return 0;if(s===cs.mapValue)return 1;if(o===cs.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const d=lt(l[f],u[f]);if(d!==0)return d;const p=wr(a[l[f]],c[u[f]]);if(p!==0)return p}return lt(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return lt(t,e);const n=Kn(t),r=Kn(e),i=lt(n.seconds,r.seconds);return i!==0?i:lt(n.nanos,r.nanos)}function Tr(t){return sl(t)}function sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sl(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sl(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function ol(t){return!!t&&"integerValue"in t}function yc(t){return!!t&&"arrayValue"in t}function xs(t){return!!t&&"mapValue"in t}function Jr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ve{constructor(e){this.value=e}static empty(){return new ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(n)}setAll(e){let n=Kt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Jr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ve(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ve(Jr(this.value))}}function _m(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Kt([n]);if(xs(r)){const s=_m(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _e(e)}/**
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
 */class pe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pe(e,0,yt.min(),yt.min(),yt.min(),ve.empty(),0)}static newFoundDocument(e,n,r,i){return new pe(e,1,n,yt.min(),r,i,0)}static newNoDocument(e,n){return new pe(e,2,n,yt.min(),yt.min(),ve.empty(),0)}static newUnknownDocument(e,n){return new pe(e,3,n,yt.min(),yt.min(),ve.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(yt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xs{constructor(e,n){this.position=e,this.inclusive=n}}function af(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=wr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ve(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zr{constructor(e,n="asc"){this.field=e,this.dir=n}}function RE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Em{}class Ot extends Em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OE(e,n,r):n==="array-contains"?new VE(e,r):n==="in"?new ME(e,r):n==="not-in"?new FE(e,r):n==="array-contains-any"?new LE(e,r):new Ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NE(e,r):new DE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wr(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class hn extends Em{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new hn(e,n)}matches(e){return bm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bm(t){return t.op==="and"}function wm(t){return kE(t)&&bm(t)}function kE(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function al(t){if(t instanceof Ot)return t.field.canonicalString()+t.op.toString()+Tr(t.value);if(wm(t))return t.filters.map(e=>al(e)).join(",");{const e=t.filters.map(n=>al(n)).join(",");return`${t.op}(${e})`}}function Tm(t,e){return t instanceof Ot?function(r,i){return i instanceof Ot&&r.op===i.op&&r.field.isEqual(i.field)&&Ve(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Tm(o,i.filters[a]),!0):!1}(t,e):void X()}function Am(t){return t instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Tr(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(Am).join(" ,")+"}"}(t):"Filter"}class OE extends Ot{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class NE extends Ot{constructor(e,n){super(e,"in",n),this.keys=Im("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DE extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=Im("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Im(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class VE extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yc(n)&&Ai(n.arrayValue,this.value)}}class ME extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ai(this.value.arrayValue,n)}}class FE extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ai(this.value.arrayValue,n)}}class LE extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ai(this.value.arrayValue,r))}}/**
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
 */class BE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function cf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BE(t,e,n,r,i,s,o)}function _c(t){const e=gt(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>al(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Tr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Tr(r)).join(",")),e.he=n}return e.he}function Ec(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lf(t.startAt,e.startAt)&&lf(t.endAt,e.endAt)}/**
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
 */class Lo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function $E(t,e,n,r,i,s,o,a){return new Lo(t,e,n,r,i,s,o,a)}function UE(t){return new Lo(t)}function uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zE(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function HE(t){return t.collectionGroup!==null}function ti(t){const e=gt(t);if(e.Pe===null){e.Pe=[];const n=zE(e),r=jE(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Zr(n)),e.Pe.push(new Zr(Kt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Zr(Kt.keyField(),s))}}}return e.Pe}function Un(t){const e=gt(t);return e.Ie||(e.Ie=qE(e,ti(t))),e.Ie}function qE(t,e){if(t.limitType==="F")return cf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zr(i.field,s)});const n=t.endAt?new Xs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xs(t.startAt.position,t.startAt.inclusive):null;return cf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ll(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cm(t,e){return Ec(Un(t),Un(e))&&t.limitType===e.limitType}function Pm(t){return`${_c(Un(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Am(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Tr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Tr(i)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ti(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=af(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ti(r),i)||r.endAt&&!function(o,a,l){const c=af(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ti(r),i))}(t,e)}function KE(t){return(e,n)=>{let r=!1;for(const i of ti(t)){const s=WE(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WE(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?wr(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
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
 */const GE=new ne(Y.comparator);function Js(){return GE}const xm=new ne(Y.comparator);function us(...t){let e=xm;for(const n of t)e=e.insert(n.key,n);return e}function Sm(t){let e=xm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dn(){return ei()}function Rm(){return ei()}function ei(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const YE=new ne(Y.comparator),QE=new Jt(Y.comparator);function Ht(...t){let e=QE;for(const n of t)e=e.add(n);return e}const XE=new Jt(lt);function JE(){return XE}/**
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
 */function km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gs(e)?"-0":e}}function Om(t){return{integerValue:""+t}}function ZE(t,e){return IE(e)?Om(e):km(t,e)}/**
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
 */class Bo{constructor(){this._=void 0}}function tb(t,e,n){return t instanceof Zs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vc(s)&&(s=ym(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ii?Dm(t,e):t instanceof Ci?Vm(t,e):function(i,s){const o=Nm(i,s),a=ff(o)+ff(i.Te);return ol(o)&&ol(i.Te)?Om(a):km(i.serializer,a)}(t,e)}function eb(t,e,n){return t instanceof Ii?Dm(t,e):t instanceof Ci?Vm(t,e):n}function Nm(t,e){return t instanceof to?function(r){return ol(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zs extends Bo{}class Ii extends Bo{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Mm(e);for(const r of t.elements)n.some(i=>Ve(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends Bo{constructor(e){super(),this.elements=e}}function Vm(t,e){let n=Mm(e);for(const r of t.elements)n=n.filter(i=>!Ve(i,r));return{arrayValue:{values:n}}}class to extends Bo{constructor(e,n){super(),this.serializer=e,this.Te=n}}function ff(t){return Lt(t.integerValue||t.doubleValue)}function Mm(t){return yc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ii&&i instanceof Ii||r instanceof Ci&&i instanceof Ci?Er(r.elements,i.elements,Ve):r instanceof to&&i instanceof to?Ve(r.Te,i.Te):r instanceof Zs&&i instanceof Zs}(t.transform,e.transform)}class rb{constructor(e,n){this.version=e,this.transformResults=n}}class Ue{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $o{}function Fm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bm(t.key,Ue.none()):new ji(t.key,t.data,Ue.none());{const n=t.data,r=ve.empty();let i=new Jt(Kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jn(t.key,r,new _e(i.toArray()),Ue.none())}}function ib(t,e,n){t instanceof ji?function(i,s,o){const a=i.value.clone(),l=df(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Jn?function(i,s,o){if(!Ss(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=df(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Lm(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof ji?function(s,o,a,l){if(!Ss(s.precondition,o))return a;const c=s.value.clone(),u=mf(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jn?function(s,o,a,l){if(!Ss(s.precondition,o))return a;const c=mf(s.fieldTransforms,l,o),u=o.data;return u.setAll(Lm(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ss(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function sb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Nm(r.transform,i||null);s!=null&&(n===null&&(n=ve.empty()),n.set(r.field,s))}return n||null}function hf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Er(r,i,(s,o)=>nb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ji extends $o{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jn extends $o{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function df(t,e,n){const r=new Map;Vt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eb(o,a,n[i]))}return r}function mf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tb(s,o,e))}return r}class Bm extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ob extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ab{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ib(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Fm(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(yt.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ht())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(n,r)=>hf(n,r))&&Er(this.baseMutations,e.baseMutations,(n,r)=>hf(n,r))}}class wc{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Vt(e.mutations.length===r.length);let i=function(){return YE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wc(e,n,r,i)}}/**
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
 */class lb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var It,J;function cb(t){switch(t){default:return X();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function ub(t){if(t===void 0)return qn("GRPC error has no .code"),w.UNKNOWN;switch(t){case It.OK:return w.OK;case It.CANCELLED:return w.CANCELLED;case It.UNKNOWN:return w.UNKNOWN;case It.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case It.INTERNAL:return w.INTERNAL;case It.UNAVAILABLE:return w.UNAVAILABLE;case It.UNAUTHENTICATED:return w.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case It.NOT_FOUND:return w.NOT_FOUND;case It.ALREADY_EXISTS:return w.ALREADY_EXISTS;case It.PERMISSION_DENIED:return w.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case It.ABORTED:return w.ABORTED;case It.OUT_OF_RANGE:return w.OUT_OF_RANGE;case It.UNIMPLEMENTED:return w.UNIMPLEMENTED;case It.DATA_LOSS:return w.DATA_LOSS;default:return X()}}(J=It||(It={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new uE([4294967295,4294967295],0);class fb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function db(t,e){return cl(t,e.toTimestamp())}function pr(t){return Vt(!!t),yt.fromTimestamp(function(n){const r=Kn(n);return new Nt(r.seconds,r.nanos)}(t))}function $m(t,e){return function(r){return new wt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function mb(t){const e=wt.fromString(t);return Vt(wb(e)),e}function ul(t,e){return $m(t.databaseId,e.path)}function pb(t){const e=mb(t);return e.length===4?wt.emptyPath():vb(e)}function gb(t){return new wt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vb(t){return Vt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pf(t,e,n){return{name:ul(t,e),fields:n.value.mapValue.fields}}function yb(t,e){let n;if(e instanceof ji)n={update:pf(t,e.key,e.value)};else if(e instanceof Bm)n={delete:ul(t,e.key)};else if(e instanceof Jn)n={update:pf(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof ob))return X();n={verify:ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof to)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:db(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function _b(t,e){return t&&t.length>0?(Vt(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pr(i.updateTime):pr(s);return o.isEqual(yt.min())&&(o=pr(s)),new rb(o,i.transformResults||[])}(n,e))):[]}function Eb(t){let e=pb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(f){const d=Um(f);return d instanceof hn&&wm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(P){return new Zr(ir(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,gc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new Xs(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const d=!f.before,p=f.values||[];return new Xs(p,d)}(n.endAt)),$E(e,i,o,s,a,"F",l,c)}function Um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ir(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ir(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ir(n.unaryFilter.field);return Ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ot.create(ir(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Um(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function ir(t){return Kt.fromServerFormat(t.fieldPath)}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Tb{constructor(e){this.ht=e}}function Ab(t){const e=Eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ll(e,e.limit,"L"):e}/**
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
 */class Ib{constructor(){this.an=new Cb}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(fn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(fn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Cb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Jt(wt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Jt(wt.comparator)).toArray()}}/**
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
 */class Ar{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ar(0)}static Ln(){return new Ar(-1)}}/**
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
 */class Pb{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Sb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ni(r.mutation,i,_e.empty(),Nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ht()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ht()){const i=Dn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=us();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ht()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Js();const o=ei(),a=function(){return ei()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Jn)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ni(u.mutation,c,u.mutation.getFieldMask(),Nt.now())):o.set(c.key,_e.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new xb(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ei();let i=new ne((o,a)=>o-a),s=Ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||_e.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(i.get(a.batchId)||Ht()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=Rm();u.forEach(d=>{if(!s.has(d)){const p=Fm(n.get(d),r.get(d));p!==null&&f.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Dn());let a=-1,l=s;return o.next(c=>b.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Ht())).next(u=>({batchId:a,changes:Sm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=us();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,l=>{const c=function(f,d){return new Lo(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,pe.newInvalidDocument(u)))});let a=us();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&ni(u.mutation,c,_e.empty(),Nt.now()),bc(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class Rb{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pr(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:Ab(i.bundledQuery),readTime:pr(i.readTime)}}(n)),b.resolve()}}/**
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
 */class kb{constructor(){this.overlays=new ne(Y.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Dn(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ne((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Dn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Dn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return b.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lb(n,r));let s=this.Pr.get(n);s===void 0&&(s=Ht(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class Tc{constructor(){this.Ir=new Jt(Rt.dr),this.Tr=new Jt(Rt.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Rt(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Rt(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Y(new wt([])),r=new Rt(n,e),i=new Rt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Y(new wt([])),r=new Rt(n,e),i=new Rt(n,e+1);let s=Ht();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Rt(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Rt{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Y.comparator(e.key,n.key)||lt(e.yr,n.yr)}static Er(e,n){return lt(e.yr,n.yr)||Y.comparator(e.key,n.key)}}/**
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
 */class Ob{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Jt(Rt.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ab(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Rt(n,0),i=new Rt(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Jt(lt);return n.forEach(i=>{const s=new Rt(i,0),o=new Rt(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Rt(new Y(s),0);let a=new Jt(lt);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Vt(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,i=>{const s=new Rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Rt(n,0),i=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Nb{constructor(e){this.Fr=e,this.docs=function(){return new ne(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(n))}getEntries(e,n){let r=Js();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pe.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Js();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||wE(bE(u),r)<=0||(i.has(u.key)||bc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Db(this)}getSize(e){return b.resolve(this.size)}}class Db extends Pb{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class Vb{constructor(e){this.persistence=e,this.Or=new Dr(n=>_c(n),Ec),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Tc,this.targetCount=0,this.Lr=Ar.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ar(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class Mb{constructor(e,n){this.kr={},this.overlays={},this.qr=new gm(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new Vb(this),this.indexManager=new Ib,this.remoteDocumentCache=function(i){return new Nb(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Tb(n),this.Ur=new Rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new Ob(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new Fb(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class Fb extends AE{constructor(e){super(),this.currentSequenceNumber=e}}class Ac{constructor(e){this.persistence=e,this.jr=new Tc,this.Hr=null}static Jr(e){return new Ac(e)}get Yr(){if(this.Hr)return this.Hr;throw X()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const i=Y.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,yt.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Ic{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=Ht(),i=Ht();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ic(e,n.fromCache,r,i)}}/**
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
 */class Lb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Bb{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Lb;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(jr()<=et.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(jr()<=et.DEBUG&&L("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(jr()<=et.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):b.resolve())}Hi(e,n){if(uf(n))return b.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ll(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ht(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,ll(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,i){return uf(n)||i.isEqual(yt.min())?b.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?b.resolve(null):(jr()<=et.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zr(n)),this.ts(e,o,n,EE(i,-1)).next(a=>a))})}Xi(e,n){let r=new Jt(KE(e));return n.forEach((i,s)=>{bc(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return jr()<=et.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",zr(n)),this.ji.getDocumentsMatchingQuery(e,n,fn.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class $b{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new ne(lt),this.ss=new Dr(s=>_c(s),Ec),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sb(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function Ub(t,e,n,r){return new $b(t,e,n,r)}async function jm(t,e){const n=gt(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ht();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function jb(t,e){const n=gt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const f=c.batch,d=f.keys();let p=b.resolve();return d.forEach(P=>{p=p.next(()=>u.getEntry(l,P)).next(T=>{const O=c.docVersions.get(P);Vt(O!==null),T.version.compareTo(O)<0&&(f.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ht();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zb(t){const e=gt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function Hb(t,e){const n=gt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class gf{constructor(){this.activeTargetIds=JE()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qb{constructor(){this.ro=new gf,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new gf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kb{so(e){}shutdown(){}}/**
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
 */class vf{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fs=null;function va(){return fs===null?fs=function(){return 268435456+Math.round(2147483648*Math.random())}():fs++,"0x"+fs.toString(16)}/**
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
 */const Wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gb{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const jt="WebChannelConnection";class Yb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=va(),l=this.Do(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,s,o),this.vo(n,l,c,i).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=Wb[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=va();return new Promise((o,a)=>{const l=new cE;l.setWithCredentials(!0),l.listenOnce(aE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ga.NO_ERROR:const u=l.getResponseJson();L(jt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case ga.TIMEOUT:L(jt,`RPC '${e}' ${s} timed out`),a(new z(w.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const f=l.getStatus();if(L(jt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const P=function(O){const _=O.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(_)>=0?_:w.UNKNOWN}(p.status);a(new z(P,p.message))}else a(new z(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(w.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{L(jt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);L(jt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const i=va(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sE(),a=oE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");L(jt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const f=o.createWebChannel(u,l);let d=!1,p=!1;const P=new Gb({ho:O=>{p?L(jt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(d||(L(jt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),L(jt,`RPC '${e}' stream ${i} sending:`,O),f.send(O))},Po:()=>f.close()}),T=(O,_,A)=>{O.listen(_,V=>{try{A(V)}catch(R){setTimeout(()=>{throw R},0)}})};return T(f,as.EventType.OPEN,()=>{p||L(jt,`RPC '${e}' stream ${i} transport opened.`)}),T(f,as.EventType.CLOSE,()=>{p||(p=!0,L(jt,`RPC '${e}' stream ${i} transport closed`),P.mo())}),T(f,as.EventType.ERROR,O=>{p||(p=!0,Ws(jt,`RPC '${e}' stream ${i} transport errored:`,O),P.mo(new z(w.UNAVAILABLE,"The operation could not be completed")))}),T(f,as.EventType.MESSAGE,O=>{var _;if(!p){const A=O.data[0];Vt(!!A);const V=A,R=V.error||((_=V[0])===null||_===void 0?void 0:_.error);if(R){L(jt,`RPC '${e}' stream ${i} received error:`,R);const W=R.status;let ct=function(Z){const rt=It[Z];if(rt!==void 0)return ub(rt)}(W),ut=R.message;ct===void 0&&(ct=w.INTERNAL,ut="Unknown error status: "+W+" with message "+R.message),p=!0,P.mo(new z(ct,ut)),f.close()}else L(jt,`RPC '${e}' stream ${i} received:`,A),P.fo(A)}}),T(a,lE.STAT_EVENT,O=>{O.stat===ef.PROXY?L(jt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===ef.NOPROXY&&L(jt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.Vo()},0),P}}function ya(){return typeof document<"u"?document:null}/**
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
 */function Uo(t){return new fb(t,!0)}/**
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
 */class zm{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Qb{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new zm(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new z(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xb extends Qb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Vt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=_b(e.writeResults,e.commitTime),r=pr(e.commitTime);return this.listener.T_(r,n)}return Vt(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=gb(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yb(this.serializer,r))};this.n_(n)}}/**
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
 */class Jb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new z(w.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(w.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(w.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class Zb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(qn(n),this.p_=!1):L("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class tw{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Hi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=gt(l);c.F_.add(4),await zi(c),c.O_.set("Unknown"),c.F_.delete(4),await jo(c)}(this))})}),this.O_=new Zb(r,i)}}async function jo(t){if(Hi(t))for(const e of t.M_)await e(!0)}async function zi(t){for(const e of t.M_)await e(!1)}function Hi(t){return gt(t).F_.size===0}async function Hm(t,e,n){if(!Fo(e))throw e;t.F_.add(1),await zi(t),t.O_.set("Offline"),n||(n=()=>zb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await jo(t)})}function qm(t,e){return e().catch(n=>Hm(t,n,e))}async function zo(t){const e=gt(t),n=dn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;ew(e);)try{const i=await Hb(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,nw(e,i)}catch(i){await Hm(e,i)}Km(e)&&Wm(e)}function ew(t){return Hi(t)&&t.C_.length<10}function nw(t,e){t.C_.push(e);const n=dn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Km(t){return Hi(t)&&!dn(t).Jo()&&t.C_.length>0}function Wm(t){dn(t).start()}async function rw(t){dn(t).A_()}async function iw(t){const e=dn(t);for(const n of t.C_)e.d_(n.mutations)}async function sw(t,e,n){const r=t.C_.shift(),i=wc.from(r,e,n);await qm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zo(t)}async function ow(t,e){e&&dn(t).I_&&await async function(r,i){if(function(o){return cb(o)&&o!==w.ABORTED}(i.code)){const s=r.C_.shift();dn(r).Xo(),await qm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zo(r)}}(t,e),Km(t)&&Wm(t)}async function yf(t,e){const n=gt(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Hi(n);n.F_.add(3),await zi(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await jo(n)}async function aw(t,e){const n=gt(t);e?(n.F_.delete(2),await jo(n)):e||(n.F_.add(2),await zi(n),n.O_.set("Unknown"))}function dn(t){return t.L_||(t.L_=function(n,r,i){const s=gt(n);return s.V_(),new Xb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:rw.bind(null,t),Eo:ow.bind(null,t),E_:iw.bind(null,t),T_:sw.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await zo(t)):(await t.L_.stop(),t.C_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Cc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Cc(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(t,e){if(qn("AsyncQueue",`${e}: ${t}`),Fo(t))return new z(w.UNAVAILABLE,`${e}: ${t}`);throw t}class lw{constructor(){this.queries=new Dr(e=>Pm(e),Cm),this.onlineState="Unknown",this.K_=new Set}}function cw(t){t.K_.forEach(e=>{e.next()})}class uw{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Dr(a=>Pm(a),Cm),this.pa=new Map,this.ya=new Set,this.wa=new ne(Y.comparator),this.Sa=new Map,this.ba=new Tc,this.Da={},this.Ca=new Map,this.va=Ar.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function fw(t,e,n){const r=pw(t);try{const i=await function(o,a){const l=gt(o),c=Nt.now(),u=a.reduce((p,P)=>p.add(P.key),Ht());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let P=Js(),T=Ht();return l._s.getEntries(p,u).next(O=>{P=O,P.forEach((_,A)=>{A.isValidDocument()||(T=T.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,P)).next(O=>{f=O;const _=[];for(const A of a){const V=sb(A,f.get(A.key).overlayedDocument);V!=null&&_.push(new Jn(A.key,V,_m(V.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,_,a)}).next(O=>{d=O;const _=O.applyToLocalDocumentSet(f,T);return l.documentOverlayCache.saveOverlays(p,O.batchId,_)})}).then(()=>({batchId:d.batchId,changes:Sm(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new ne(lt)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ho(r,i.changes),await zo(r.remoteStore)}catch(i){const s=Gm(i,"Failed to persist write");n.reject(s)}}function _f(t,e,n){const r=gt(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=gt(o);l.onlineState=a;let c=!1;l.queries.forEach((u,f)=>{for(const d of f.listeners)d.U_(a)&&(c=!0)}),c&&cw(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hw(t,e){const n=gt(t),r=e.batch.batchId;try{const i=await jb(n.localStore,e);Qm(n,r,null),Ym(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ho(n,i)}catch(i){await pm(i)}}async function dw(t,e,n){const r=gt(t);try{const i=await function(o,a){const l=gt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Vt(f!==null),u=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Qm(r,e,n),Ym(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ho(r,i)}catch(i){await pm(i)}}function Ym(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Qm(t,e,n){const r=gt(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function Ho(t,e,n){const r=gt(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ic.$i(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,c){const u=gt(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>b.forEach(c,d=>b.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>b.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!Fo(f))throw f;L("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const d=f.targetId;if(!f.fromCache){const p=u.rs.get(d),P=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(P);u.rs=u.rs.insert(d,T)}}}(r.localStore,s))}async function mw(t,e){const n=gt(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new z(w.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ho(n,r.cs)}}function pw(t){const e=gt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dw.bind(null,e),e}class Ef{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ub(this.persistence,new Bb,e.initialUser,this.serializer)}createPersistence(e){return new Mb(Ac.Jr,this.serializer)}createSharedClientState(e){return new qb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gw{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mw.bind(null,this.syncEngine),await aw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lw}()}createDatastore(e){const n=Uo(e.databaseInfo.databaseId),r=function(s){return new Yb(s)}(e.databaseInfo);return function(s,o,a,l){return new Jb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new tw(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_f(this.syncEngine,n,0),function(){return vf.C()?new vf:new Kb}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const f=new uw(i,s,o,a,l,c);return u&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=gt(n);L("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await zi(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class vw{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=mm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _a(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _w(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>yf(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>yf(e.remoteStore,s)),t._onlineComponents=e}function yw(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _w(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await _a(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!yw(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await _a(t,new Ef)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await _a(t,new Ef);return t._offlineComponents}async function Ew(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await bf(t,new gw))),t._onlineComponents}function bw(t){return Ew(t).then(e=>e.syncEngine)}/**
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
 */function Xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wf=new Map;/**
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
 */function Jm(t,e,n){if(!n)throw new z(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ww(t,e,n,r){if(e===!0&&r===!0)throw new z(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tf(t){if(!Y.isDocumentKey(t))throw new z(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Af(t){if(Y.isDocumentKey(t))throw new z(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Zm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pc(t);throw new z(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class If{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ww("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qo{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fE;switch(r.type){case"firstParty":return new pE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&(L("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function Tw(t,e,n,r={}){var i;const s=(t=Zm(t,qo))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=zt.MOCK_USER;else{a=z_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new zt(c)}t._authCredentials=new hE(new dm(a,l))}}/**
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
 */class xc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xc(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class ln extends xc{constructor(e,n,r){super(e,n,UE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new Y(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function Aw(t,e,...n){if(t=fi(t),Jm("collection","path",e),t instanceof qo){const r=wt.fromString(e,...n);return Af(r),new ln(t,null,r)}{if(!(t instanceof je||t instanceof ln))throw new z(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wt.fromString(e,...n));return Af(r),new ln(t.firestore,null,r)}}function Iw(t,e,...n){if(t=fi(t),arguments.length===1&&(e=mm.V()),Jm("doc","path",e),t instanceof qo){const r=wt.fromString(e,...n);return Tf(r),new je(t,null,new Y(r))}{if(!(t instanceof je||t instanceof ln))throw new z(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(wt.fromString(e,...n));return Tf(r),new je(t.firestore,t instanceof ln?t.converter:null,new Y(r))}}/**
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
 */class Cw{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new zm(this,"async_queue_retry"),this.ou=()=>{const n=ya();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=ya();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new $n;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Fo(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=Cc.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&X()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class tp extends qo{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Cw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ep(this),this._firestoreClient.terminate()}}function Pw(t,e){const n=typeof t=="object"?t:W0(),r=typeof t=="string"?t:e||"(default)",i=z0(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=U_("firestore");s&&Tw(i,...s)}return i}function xw(t){return t._firestoreClient||ep(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ep(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new xE(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new vw(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pi(qe.fromBase64String(e))}catch(n){throw new z(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pi(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class np{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rp{constructor(e){this._methodName=e}}/**
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
 */class ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return lt(this._lat,e._lat)||lt(this._long,e._long)}}/**
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
 */const Sw=/^__.*__$/;class Rw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ji(e,this.data,n,this.fieldTransforms)}}function sp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Sc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return eo(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(sp(this.Tu)&&Sw.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class kw{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uo(e)}wu(e,n,r,i=!1){return new Sc({Tu:e,methodName:n,yu:r,path:Kt.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ow(t){const e=t._freezeSettings(),n=Uo(t._databaseId);return new kw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nw(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const a=ap(r,o);let l,c;if(s.merge)l=new _e(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const d=Dw(e,f,n);if(!o.contains(d))throw new z(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Fw(u,d)||u.push(d)}l=new _e(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Rw(new ve(a),l,c)}function op(t,e){if(lp(t=fi(t)))return cp("Unsupported field value:",e,t),ap(t,e);if(t instanceof rp)return function(r,i){if(!sp(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=op(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fi(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Nt.fromDate(r);return{timestampValue:cl(i.serializer,s)}}if(r instanceof Nt){const s=new Nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cl(i.serializer,s)}}if(r instanceof ip)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pi)return{bytesValue:hb(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$m(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Pc(r)}`)}(t,e)}function ap(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=op(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lp(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Nt||t instanceof ip||t instanceof Pi||t instanceof je||t instanceof rp)}function cp(t,e,n){if(!lp(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Dw(t,e,n){if((e=fi(e))instanceof np)return e._internalPath;if(typeof e=="string")return Mw(t,e);throw eo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vw=new RegExp("[~\\*/\\[\\]]");function Mw(t,e,n){if(e.search(Vw)>=0)throw eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new np(...e.split("."))._internalPath}catch{throw eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function eo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(w.INVALID_ARGUMENT,a+t+l)}function Fw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Lw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Bw(t,e){const n=Zm(t.firestore,tp),r=Iw(t),i=Lw(t.converter,e);return $w(n,[Nw(Ow(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function $w(t,e){return function(r,i){const s=new $n;return r.asyncQueue.enqueueAndForget(async()=>fw(await bw(r),i,s)),s.promise}(xw(t),e)}(function(e,n=!0){(function(i){Nr=i})(K0),Bs(new hi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new tp(new dE(r.getProvider("auth-internal")),new vE(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),dr(nf,"4.2.0",e),dr(nf,"4.2.0","esm2017")})();const Uw={apiKey:"AIzaSyCp5CA1-9S0vnrXOR0hWXFJuckUUbPxFxk",authDomain:"contact-test-bdgh.firebaseapp.com",projectId:"contact-test-bdgh",storageBucket:"contact-test-bdgh.appspot.com",messagingSenderId:"674652846438",appId:"1:674652846438:web:d2cd88eea12bf05d74b0a7"};ld(Uw);const jw=Pw(),zw=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,Hw={name:"Contact",components:{ContactModal:k_},emits:["toggleModal"],data(){return{displayModal:!1,firstName:"",email:"",subject:"",message:""}},methods:{toggleModal(){this.displayModal=!this.displayModal},async submitForm(){this.firstName===""||this.subject===""||this.message===""||this.email.match(zw)&&(this.createContact(this.firstName,this.email,this.subject,this.message),this.toggleModal(),this.firstName="",this.email="",this.subject="",this.message="")},async createContact(t,e,n,r){const i=Aw(jw,"gd-testing");await Bw(i,{name:t,email:e,subject:n,message:r})}}};const qw=t=>(Yn("data-v-082dfc5f"),t=t(),Qn(),t),Kw={id:"contact",class:"section contact"},Ww=qw(()=>N("h2",null,"Skontaktuj się z nami",-1)),Gw={class:"contact-form"},Yw={class:"flex-row"};function Qw(t,e,n,r,i,s){const o=Fh("ContactModal");return he(),we(ce,null,[_t(o,{displayed:i.displayModal,onToggleModal:s.toggleModal},null,8,["displayed","onToggleModal"]),N("section",Kw,[Ww,N("form",Gw,[N("div",Yw,[Se(N("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.firstName=a),type:"search",class:"first-name",placeholder:"Twoje imię"},null,512),[[ns,i.firstName]]),Se(N("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>i.email=a),type:"search",class:"email-adress",placeholder:"Twój adres email"},null,512),[[ns,i.email]])]),Se(N("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>i.subject=a),type:"search",class:"subject",placeholder:"Tytuł"},null,512),[[ns,i.subject]]),Se(N("textarea",{"onUpdate:modelValue":e[3]||(e[3]=a=>i.message=a),class:"message",placeholder:"Wiadomość"},null,512),[[ns,i.message]]),N("div",{class:"btn",onClick:e[4]||(e[4]=(...a)=>s.submitForm&&s.submitForm(...a))},"Wyślij wiadomość")])])],64)}const Xw=Qe(Hw,[["render",Qw],["__scopeId","data-v-082dfc5f"]]),Jw={};const Zw=t=>(Yn("data-v-2b6ba46a"),t=t(),Qn(),t),tT=Zw(()=>N("div",{class:"column"},[N("div",{class:"flex-row"},[N("div",null,"tel.+48123456789"),N("div",null,"tel.+48123456789"),N("div",null,"mail@email.com")]),N("div",{class:"flex-row"},[N("div",{class:"credits"},[N("a",{href:"https://www.freepik.com/free-vector/icons-set-drawn-flat-style-different-factory-workers_4268141.htm#query=Engineer&position=10&from_view=search&track=sph"},"Image by macrovector"),Sn(" on Freepik")]),N("div",{class:"credits"},[N("a",{href:"https://www.freepik.com/icon/safety_842436"},"Icon by Freepik")]),N("div",{class:"credits"},[Sn("Code and design by "),N("a",{href:"https://github.com/bogumidu"},"Bogumidu")])]),N("div",{class:"flex-row credits"},[N("p",{"xmlns:cc":"http://creativecommons.org/ns#","xmlns:dct":"http://purl.org/dc/terms/"},[N("a",{property:"dct:title",rel:"cc:attributionURL",href:"https://github.com/bogumidu/gh-audyt"},"gd-audyt"),Sn(" by "),N("a",{rel:"cc:attributionURL dct:creator",property:"cc:attributionName",href:"https://github.com/bogumidu"},"Bogumidu"),Sn(" is licensed under "),N("a",{href:"http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1",target:"_blank",rel:"license noopener noreferrer",style:{display:"inline-block"}},[Sn("Attribution 4.0 International"),N("img",{style:{height:"22px!important","margin-left":"3px","vertical-align":"text-bottom"},src:"https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"}),N("img",{style:{height:"22px!important","margin-left":"3px","vertical-align":"text-bottom"},src:"https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"})])])])],-1)),eT=[tT];function nT(t,e,n,r,i,s){return he(),we("footer",null,eT)}const rT=Qe(Jw,[["render",nT],["__scopeId","data-v-2b6ba46a"]]),iT={class:"app"},sT={class:"content"},oT=kh({__name:"App",setup(t){function e(){console.log("toggling")}return(n,r)=>(he(),we("div",iT,[_t(By),N("div",sT,[_t(Ky),_t(n_),_t(d_),_t(T_),_t(Xw,{onToggleModal:e}),_t(rT)])]))}});function Cf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cf(Object(n),!0).forEach(function(r){xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function no(t){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},no(t)}function aT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pf(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function lT(t,e,n){return e&&Pf(t.prototype,e),n&&Pf(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rc(t,e){return uT(t)||hT(t,e)||up(t,e)||mT()}function qi(t){return cT(t)||fT(t)||up(t)||dT()}function cT(t){if(Array.isArray(t))return fl(t)}function uT(t){if(Array.isArray(t))return t}function fT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function up(t,e){if(t){if(typeof t=="string")return fl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fl(t,e)}}function fl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xf=function(){},kc={},fp={},hp=null,dp={mark:xf,measure:xf};try{typeof window<"u"&&(kc=window),typeof document<"u"&&(fp=document),typeof MutationObserver<"u"&&(hp=MutationObserver),typeof performance<"u"&&(dp=performance)}catch{}var pT=kc.navigator||{},Sf=pT.userAgent,Rf=Sf===void 0?"":Sf,mn=kc,mt=fp,kf=hp,hs=dp;mn.document;var Xe=!!mt.documentElement&&!!mt.head&&typeof mt.addEventListener=="function"&&typeof mt.createElement=="function",mp=~Rf.indexOf("MSIE")||~Rf.indexOf("Trident/"),ds,ms,ps,gs,vs,Ke="___FONT_AWESOME___",hl=16,pp="fa",gp="svg-inline--fa",Wn="data-fa-i2svg",dl="data-fa-pseudo-element",gT="data-fa-pseudo-element-pending",Oc="data-prefix",Nc="data-icon",Of="fontawesome-i2svg",vT="async",yT=["HTML","HEAD","STYLE","SCRIPT"],vp=function(){try{return!0}catch{return!1}}(),ht="classic",bt="sharp",Dc=[ht,bt];function Ki(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ht]}})}var xi=Ki((ds={},xt(ds,ht,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),xt(ds,bt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ds)),Si=Ki((ms={},xt(ms,ht,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xt(ms,bt,{solid:"fass",regular:"fasr",light:"fasl"}),ms)),Ri=Ki((ps={},xt(ps,ht,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xt(ps,bt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ps)),_T=Ki((gs={},xt(gs,ht,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xt(gs,bt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gs)),ET=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yp="fa-layers-text",bT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wT=Ki((vs={},xt(vs,ht,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xt(vs,bt,{900:"fass",400:"fasr",300:"fasl"}),vs)),_p=[1,2,3,4,5,6,7,8,9,10],TT=_p.concat([11,12,13,14,15,16,17,18,19,20]),AT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ki=new Set;Object.keys(Si[ht]).map(ki.add.bind(ki));Object.keys(Si[bt]).map(ki.add.bind(ki));var IT=[].concat(Dc,qi(ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vn.GROUP,Vn.SWAP_OPACITY,Vn.PRIMARY,Vn.SECONDARY]).concat(_p.map(function(t){return"".concat(t,"x")})).concat(TT.map(function(t){return"w-".concat(t)})),ri=mn.FontAwesomeConfig||{};function CT(t){var e=mt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function PT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(mt&&typeof mt.querySelector=="function"){var xT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xT.forEach(function(t){var e=Rc(t,2),n=e[0],r=e[1],i=PT(CT(n));i!=null&&(ri[r]=i)})}var Ep={styleDefault:"solid",familyDefault:"classic",cssPrefix:pp,replacementClass:gp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ri.familyPrefix&&(ri.cssPrefix=ri.familyPrefix);var Ir=D(D({},Ep),ri);Ir.autoReplaceSvg||(Ir.observeMutations=!1);var F={};Object.keys(Ep).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(n){Ir[t]=n,ii.forEach(function(r){return r(F)})},get:function(){return Ir[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){Ir.cssPrefix=e,ii.forEach(function(n){return n(F)})},get:function(){return Ir.cssPrefix}});mn.FontAwesomeConfig=F;var ii=[];function ST(t){return ii.push(t),function(){ii.splice(ii.indexOf(t),1)}}var en=hl,Oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function RT(t){if(!(!t||!Xe)){var e=mt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=mt.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return mt.head.insertBefore(e,r),t}}var kT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oi(){for(var t=12,e="";t-- >0;)e+=kT[Math.random()*62|0];return e}function Vr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vc(t){return t.classList?Vr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function OT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bp(t[n]),'" ')},"").trim()}function Ko(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mc(t){return t.size!==Oe.size||t.x!==Oe.x||t.y!==Oe.y||t.rotate!==Oe.rotate||t.flipX||t.flipY}function NT(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function DT(t){var e=t.transform,n=t.width,r=n===void 0?hl:n,i=t.height,s=i===void 0?hl:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mp?l+="translate(".concat(e.x/en-r/2,"em, ").concat(e.y/en-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/en,"em), calc(-50% + ").concat(e.y/en,"em)) "):l+="translate(".concat(e.x/en,"em, ").concat(e.y/en,"em) "),l+="scale(".concat(e.size/en*(e.flipX?-1:1),", ").concat(e.size/en*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var VT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wp(){var t=pp,e=gp,n=F.cssPrefix,r=F.replacementClass,i=VT;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Nf=!1;function Ea(){F.autoAddCss&&!Nf&&(RT(wp()),Nf=!0)}var MT={mixout:function(){return{dom:{css:wp,insertCss:Ea}}},hooks:function(){return{beforeDOMElementCreation:function(){Ea()},beforeI2svg:function(){Ea()}}}},We=mn||{};We[Ke]||(We[Ke]={});We[Ke].styles||(We[Ke].styles={});We[Ke].hooks||(We[Ke].hooks={});We[Ke].shims||(We[Ke].shims=[]);var Ee=We[Ke],Tp=[],FT=function t(){mt.removeEventListener("DOMContentLoaded",t),ro=1,Tp.map(function(e){return e()})},ro=!1;Xe&&(ro=(mt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(mt.readyState),ro||mt.addEventListener("DOMContentLoaded",FT));function LT(t){Xe&&(ro?setTimeout(t,0):Tp.push(t))}function Wi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?bp(t):"<".concat(e," ").concat(OT(r),">").concat(s.map(Wi).join(""),"</").concat(e,">")}function Df(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var BT=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ba=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?BT(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function $T(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ml(t){var e=$T(t);return e.length===1?e[0].toString(16):null}function UT(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vf(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function pl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vf(e);typeof Ee.hooks.addPack=="function"&&!i?Ee.hooks.addPack(t,Vf(e)):Ee.styles[t]=D(D({},Ee.styles[t]||{}),s),t==="fas"&&pl("fa",e)}var ys,_s,Es,or=Ee.styles,jT=Ee.shims,zT=(ys={},xt(ys,ht,Object.values(Ri[ht])),xt(ys,bt,Object.values(Ri[bt])),ys),Fc=null,Ap={},Ip={},Cp={},Pp={},xp={},HT=(_s={},xt(_s,ht,Object.keys(xi[ht])),xt(_s,bt,Object.keys(xi[bt])),_s);function qT(t){return~IT.indexOf(t)}function KT(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qT(i)?i:null}var Sp=function(){var e=function(s){return ba(or,function(o,a,l){return o[l]=ba(a,s,{}),o},{})};Ap=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Ip=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),xp=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in or||F.autoFetchSvg,r=ba(jT,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Cp=r.names,Pp=r.unicodes,Fc=Wo(F.styleDefault,{family:F.familyDefault})};ST(function(t){Fc=Wo(t.styleDefault,{family:F.familyDefault})});Sp();function Lc(t,e){return(Ap[t]||{})[e]}function WT(t,e){return(Ip[t]||{})[e]}function Mn(t,e){return(xp[t]||{})[e]}function Rp(t){return Cp[t]||{prefix:null,iconName:null}}function GT(t){var e=Pp[t],n=Lc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pn(){return Fc}var Bc=function(){return{prefix:null,iconName:null,rest:[]}};function Wo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ht:n,i=xi[r][t],s=Si[r][t]||Si[r][i],o=t in Ee.styles?t:null;return s||o||null}var Mf=(Es={},xt(Es,ht,Object.keys(Ri[ht])),xt(Es,bt,Object.keys(Ri[bt])),Es);function Go(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},xt(e,ht,"".concat(F.cssPrefix,"-").concat(ht)),xt(e,bt,"".concat(F.cssPrefix,"-").concat(bt)),e),o=null,a=ht;(t.includes(s[ht])||t.some(function(c){return Mf[ht].includes(c)}))&&(a=ht),(t.includes(s[bt])||t.some(function(c){return Mf[bt].includes(c)}))&&(a=bt);var l=t.reduce(function(c,u){var f=KT(F.cssPrefix,u);if(or[u]?(u=zT[a].includes(u)?_T[a][u]:u,o=u,c.prefix=u):HT[a].indexOf(u)>-1?(o=u,c.prefix=Wo(u,{family:a})):f?c.iconName=f:u!==F.replacementClass&&u!==s[ht]&&u!==s[bt]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var d=o==="fa"?Rp(c.iconName):{},p=Mn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!or.far&&or.fas&&!F.autoFetchSvg&&(c.prefix="fas")}return c},Bc());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===bt&&(or.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Mn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=pn()||"fas"),l}var YT=function(){function t(){aT(this,t),this.definitions={}}return lT(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),pl(a,o[a]);var l=Ri[ht][a];l&&pl(l,o[a]),Sp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Ff=[],ar={},gr={},QT=Object.keys(gr);function XT(t,e){var n=e.mixoutsTo;return Ff=t,ar={},Object.keys(gr).forEach(function(r){QT.indexOf(r)===-1&&delete gr[r]}),Ff.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),no(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ar[o]||(ar[o]=[]),ar[o].push(s[o])})}r.provides&&r.provides(gr)}),n}function gl(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ar[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Gn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ar[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ge(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gr[t]?gr[t].apply(null,e):void 0}function vl(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||pn();if(e)return e=Mn(n,e)||e,Df(kp.definitions,n,e)||Df(Ee.styles,n,e)}var kp=new YT,JT=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Gn("noAuto")},ZT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(Gn("beforeI2svg",e),Ge("pseudoElements2svg",e),Ge("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,LT(function(){eA({autoReplaceSvgRoot:n}),Gn("watch",e)})}},tA={icon:function(e){if(e===null)return null;if(no(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Mn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Wo(e[0]);return{prefix:r,iconName:Mn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(ET))){var i=Go(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||pn(),iconName:Mn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=pn();return{prefix:s,iconName:Mn(s,e)||e}}}},ae={noAuto:JT,config:F,dom:ZT,parse:tA,library:kp,findIconDefinition:vl,toHtml:Wi},eA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?mt:n;(Object.keys(Ee.styles).length>0||F.autoFetchSvg)&&Xe&&F.autoReplaceSvg&&ae.dom.i2svg({node:r})};function Yo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Xe){var r=mt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function nA(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mc(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Ko(D(D({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function rA(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function $c(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,P=r.found?r:n,T=P.width,O=P.height,_=i==="fak",A=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(Z){return f.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(f.classes).join(" "),V={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(O)})},R=_&&!~f.classes.indexOf("fa-fw")?{width:"".concat(T/O*16*.0625,"em")}:{};p&&(V.attributes[Wn]=""),l&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(u||Oi())},children:[l]}),delete V.attributes.title);var W=D(D({},V),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:D(D({},R),f.styles)}),ct=r.found&&n.found?Ge("generateAbstractMask",W)||{children:[],attributes:{}}:Ge("generateAbstractIcon",W)||{children:[],attributes:{}},ut=ct.children,K=ct.attributes;return W.children=ut,W.attributes=K,a?rA(W):nA(W)}function Lf(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Wn]="");var u=D({},o.styles);Mc(i)&&(u.transform=DT({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Ko(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function iA(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ko(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var wa=Ee.styles;function yl(t){var e=t[0],n=t[1],r=t.slice(4),i=Rc(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Vn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Vn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var sA={found:!1,width:512,height:512};function oA(t,e){!vp&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function _l(t,e){var n=e;return e==="fa"&&F.styleDefault!==null&&(e=pn()),new Promise(function(r,i){if(Ge("missingIconAbstract"),n==="fa"){var s=Rp(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&wa[e]&&wa[e][t]){var o=wa[e][t];return r(yl(o))}oA(t,e),r(D(D({},sA),{},{icon:F.showMissingIcons&&t?Ge("missingIconAbstract")||{}:{}}))})}var Bf=function(){},El=F.measurePerformance&&hs&&hs.mark&&hs.measure?hs:{mark:Bf,measure:Bf},Gr='FA "6.4.2"',aA=function(e){return El.mark("".concat(Gr," ").concat(e," begins")),function(){return Op(e)}},Op=function(e){El.mark("".concat(Gr," ").concat(e," ends")),El.measure("".concat(Gr," ").concat(e),"".concat(Gr," ").concat(e," begins"),"".concat(Gr," ").concat(e," ends"))},Uc={begin:aA,end:Op},Rs=function(){};function $f(t){var e=t.getAttribute?t.getAttribute(Wn):null;return typeof e=="string"}function lA(t){var e=t.getAttribute?t.getAttribute(Oc):null,n=t.getAttribute?t.getAttribute(Nc):null;return e&&n}function cA(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function uA(){if(F.autoReplaceSvg===!0)return ks.replace;var t=ks[F.autoReplaceSvg];return t||ks.replace}function fA(t){return mt.createElementNS("http://www.w3.org/2000/svg",t)}function hA(t){return mt.createElement(t)}function Np(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?fA:hA:n;if(typeof t=="string")return mt.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Np(o,{ceFn:r}))}),i}function dA(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ks={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Np(i),n)}),n.getAttribute(Wn)===null&&F.keepOriginalSource){var r=mt.createComment(dA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vc(n).indexOf(F.replacementClass))return ks.replace(e);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Wi(a)}).join(`
`);n.setAttribute(Wn,""),n.innerHTML=o}};function Uf(t){t()}function Dp(t,e){var n=typeof e=="function"?e:Rs;if(t.length===0)n();else{var r=Uf;F.mutateApproach===vT&&(r=mn.requestAnimationFrame||Uf),r(function(){var i=uA(),s=Uc.begin("mutate");t.map(i),s(),n()})}}var jc=!1;function Vp(){jc=!0}function bl(){jc=!1}var io=null;function jf(t){if(kf&&F.observeMutations){var e=t.treeCallback,n=e===void 0?Rs:e,r=t.nodeCallback,i=r===void 0?Rs:r,s=t.pseudoElementsCallback,o=s===void 0?Rs:s,a=t.observeMutationsRoot,l=a===void 0?mt:a;io=new kf(function(c){if(!jc){var u=pn();Vr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!$f(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&$f(f.target)&&~AT.indexOf(f.attributeName))if(f.attributeName==="class"&&lA(f.target)){var d=Go(Vc(f.target)),p=d.prefix,P=d.iconName;f.target.setAttribute(Oc,p||u),P&&f.target.setAttribute(Nc,P)}else cA(f.target)&&i(f.target)})}}),Xe&&io.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mA(){io&&io.disconnect()}function pA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function gA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Go(Vc(t));return i.prefix||(i.prefix=pn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=WT(i.prefix,t.innerText)||Lc(i.prefix,ml(t.innerText))),!i.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function vA(t){var e=Vr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return F.autoA11y&&(n?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Oi()):(e["aria-hidden"]="true",e.focusable="false")),e}function yA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gA(t),r=n.iconName,i=n.prefix,s=n.rest,o=vA(t),a=gl("parseNodeAttributes",{},t),l=e.styleParser?pA(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var _A=Ee.styles;function Mp(t){var e=F.autoReplaceSvg==="nest"?zf(t,{styleParser:!1}):zf(t);return~e.extra.classes.indexOf(yp)?Ge("generateLayersText",t,e):Ge("generateSvgReplacementMutation",t,e)}var gn=new Set;Dc.map(function(t){gn.add("fa-".concat(t))});Object.keys(xi[ht]).map(gn.add.bind(gn));Object.keys(xi[bt]).map(gn.add.bind(gn));gn=qi(gn);function Hf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=mt.documentElement.classList,r=function(f){return n.add("".concat(Of,"-").concat(f))},i=function(f){return n.remove("".concat(Of,"-").concat(f))},s=F.autoFetchSvg?gn:Dc.map(function(u){return"fa-".concat(u)}).concat(Object.keys(_A));s.includes("fa")||s.push("fa");var o=[".".concat(yp,":not([").concat(Wn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Wn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Vr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Uc.begin("onTree"),c=a.reduce(function(u,f){try{var d=Mp(f);d&&u.push(d)}catch(p){vp||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Dp(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function EA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mp(t).then(function(n){n&&Dp([n],e)})}function bA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:vl(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:vl(i||{})),t(r,D(D({},n),{},{mask:i}))}}var wA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Oe:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,P=p===void 0?null:p,T=n.classes,O=T===void 0?[]:T,_=n.attributes,A=_===void 0?{}:_,V=n.styles,R=V===void 0?{}:V;if(e){var W=e.prefix,ct=e.iconName,ut=e.icon;return Yo(D({type:"icon"},e),function(){return Gn("beforeDOMElementCreation",{iconDefinition:e,params:n}),F.autoA11y&&(d?A["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(P||Oi()):(A["aria-hidden"]="true",A.focusable="false")),$c({icons:{main:yl(ut),mask:l?yl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ct,transform:D(D({},Oe),i),symbol:o,title:d,maskId:u,titleId:P,extra:{attributes:A,styles:R,classes:O}})})}},TA={mixout:function(){return{icon:bA(wA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hf,n.nodeCallback=EA,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?mt:r,s=n.callback,o=s===void 0?function(){}:s;return Hf(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,P){Promise.all([_l(i,a),u.iconName?_l(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var O=Rc(T,2),_=O[0],A=O[1];p([n,$c({icons:{main:_,mask:A},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(P)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ko(a);l.length>0&&(i.style=l);var c;return Mc(o)&&(c=Ge("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},AA={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Yo({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(qi(s)).join(" ")},children:o}]})}}}},IA={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Yo({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),iA({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(qi(a))}})})}}}},CA={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Oe:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return Yo({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),Lf({content:n,transform:D(D({},Oe),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(F.cssPrefix,"-layers-text")].concat(qi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(mp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Lf({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},PA=new RegExp('"',"ug"),qf=[1105920,1112319];function xA(t){var e=t.replace(PA,""),n=UT(e,0),r=n>=qf[0]&&n<=qf[1],i=e.length===2?e[0]===e[1]:!1;return{value:ml(i?e[0]:e),isSecondary:r||i}}function Kf(t,e){var n="".concat(gT).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Vr(t.children),o=s.filter(function(ut){return ut.getAttribute(dl)===e})[0],a=mn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(bT),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?bt:ht,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Si[d][l[2].toLowerCase()]:wT[d][c],P=xA(f),T=P.value,O=P.isSecondary,_=l[0].startsWith("FontAwesome"),A=Lc(p,T),V=A;if(_){var R=GT(T);R.iconName&&R.prefix&&(A=R.iconName,p=R.prefix)}if(A&&!O&&(!o||o.getAttribute(Oc)!==p||o.getAttribute(Nc)!==V)){t.setAttribute(n,V),o&&t.removeChild(o);var W=yA(),ct=W.extra;ct.attributes[dl]=e,_l(A,p).then(function(ut){var K=$c(D(D({},W),{},{icons:{main:ut,mask:Bc()},prefix:p,iconName:V,extra:ct,watchable:!0})),Z=mt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Z,t.firstChild):t.appendChild(Z),Z.outerHTML=K.map(function(rt){return Wi(rt)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function SA(t){return Promise.all([Kf(t,"::before"),Kf(t,"::after")])}function RA(t){return t.parentNode!==document.head&&!~yT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wf(t){if(Xe)return new Promise(function(e,n){var r=Vr(t.querySelectorAll("*")).filter(RA).map(SA),i=Uc.begin("searchPseudoElements");Vp(),Promise.all(r).then(function(){i(),bl(),e()}).catch(function(){i(),bl(),n()})})}var kA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wf,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?mt:r;F.searchPseudoElements&&Wf(i)}}},Gf=!1,OA={mixout:function(){return{dom:{unwatch:function(){Vp(),Gf=!0}}}},hooks:function(){return{bootstrap:function(){jf(gl("mutationObserverCallbacks",{}))},noAuto:function(){mA()},watch:function(n){var r=n.observeMutationsRoot;Gf?bl():jf(gl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Yf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},NA={mixout:function(){return{parse:{transform:function(n){return Yf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Yf(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Ta={x:0,y:0,width:"100%",height:"100%"};function Qf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function DA(t){return t.tag==="g"?t.children:[t]}var VA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Go(i.split(" ").map(function(o){return o.trim()})):Bc();return s.prefix||(s.prefix=pn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,p=NT({transform:l,containerWidth:f,iconWidth:c}),P={tag:"rect",attributes:D(D({},Ta),{},{fill:"white"})},T=u.children?{children:u.children.map(Qf)}:{},O={tag:"g",attributes:D({},p.inner),children:[Qf(D({tag:u.tag,attributes:D(D({},u.attributes),p.path)},T))]},_={tag:"g",attributes:D({},p.outer),children:[O]},A="mask-".concat(a||Oi()),V="clip-".concat(a||Oi()),R={tag:"mask",attributes:D(D({},Ta),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,_]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:V},children:DA(d)},R]};return r.push(W,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(V,")"),mask:"url(#".concat(A,")")},Ta)}),{children:r,attributes:i}}}},MA={provides:function(e){var n=!1;mn.matchMedia&&(n=mn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},FA={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},LA=[MT,TA,AA,IA,CA,kA,OA,NA,VA,MA,FA];XT(LA,{mixoutsTo:ae});ae.noAuto;ae.config;var BA=ae.library;ae.dom;var wl=ae.parse;ae.findIconDefinition;ae.toHtml;var $A=ae.icon;ae.layer;ae.text;ae.counter;function Xf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xf(Object(n),!0).forEach(function(r){Zt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function so(t){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},so(t)}function Zt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jA(t,e){if(t==null)return{};var n=UA(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var zA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fp={exports:{}};(function(t){(function(e){var n=function(_,A,V){if(!c(A)||f(A)||d(A)||p(A)||l(A))return A;var R,W=0,ct=0;if(u(A))for(R=[],ct=A.length;W<ct;W++)R.push(n(_,A[W],V));else{R={};for(var ut in A)Object.prototype.hasOwnProperty.call(A,ut)&&(R[_(ut,V)]=n(_,A[ut],V))}return R},r=function(_,A){A=A||{};var V=A.separator||"_",R=A.split||/(?=[A-Z])/;return _.split(R).join(V)},i=function(_){return P(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(A,V){return V?V.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var A=i(_);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(_,A){return r(_,A).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},f=function(_){return a.call(_)=="[object Date]"},d=function(_){return a.call(_)=="[object RegExp]"},p=function(_){return a.call(_)=="[object Boolean]"},P=function(_){return _=_-0,_===_},T=function(_,A){var V=A&&"process"in A?A.process:A;return typeof V!="function"?_:function(R,W){return V(R,_,W)}},O={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(_,A){return n(T(i,A),_)},decamelizeKeys:function(_,A){return n(T(o,A),_,A)},pascalizeKeys:function(_,A){return n(T(s,A),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(zA)})(Fp);var HA=Fp.exports,qA=["class","style"];function KA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HA.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function WA(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Lp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Lp(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=WA(u);break;case"style":l.style=KA(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=jA(n,qA);return Xh(t.tag,Le(Le(Le({},e),{},{class:i.class,style:Le(Le({},i.style),o)},i.attrs),a),r)}var Bp=!1;try{Bp=!0}catch{}function GA(){if(!Bp&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Aa(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zt({},t,e):{}}function YA(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Zt(e,"fa-".concat(t.size),t.size!==null),Zt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Zt(e,"fa-pull-".concat(t.pull),t.pull!==null),Zt(e,"fa-swap-opacity",t.swapOpacity),Zt(e,"fa-bounce",t.bounce),Zt(e,"fa-shake",t.shake),Zt(e,"fa-beat",t.beat),Zt(e,"fa-fade",t.fade),Zt(e,"fa-beat-fade",t.beatFade),Zt(e,"fa-flash",t.flash),Zt(e,"fa-spin-pulse",t.spinPulse),Zt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Jf(t){if(t&&so(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wl.icon)return wl.icon(t);if(t===null)return null;if(so(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var QA=kh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=In(function(){return Jf(e.icon)}),s=In(function(){return Aa("classes",YA(e))}),o=In(function(){return Aa("transform",typeof e.transform=="string"?wl.transform(e.transform):e.transform)}),a=In(function(){return Aa("mask",Jf(e.mask))}),l=In(function(){return $A(i.value,Le(Le(Le(Le({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Ts(l,function(u){if(!u)return GA("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=In(function(){return l.value?Lp(l.value.abstract[0],{},r):null});return function(){return c.value}}}),XA={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]};BA.add(XA);const $p=by(oT).component("font-awsome-icon",QA);$p.use(Iy());$p.mount("#app");
