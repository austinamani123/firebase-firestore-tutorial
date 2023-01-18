(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
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
 */const Ki=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Ic=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[h],n[l],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ki(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ic(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const E=u<<6&192|l;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Sc=function(e){const t=Ki(e);return Hi.encodeByteArray(t,!0)},an=function(e){return Sc(e).replace(/\./g,"")},Cc=function(e){try{return Hi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function bc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ac(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _c=()=>Dc().__FIREBASE_DEFAULTS__,Nc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cc(e[1]);return t&&JSON.parse(t)},Gi=()=>{try{return _c()||Nc()||kc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Rc=e=>{var t,n;return(n=(t=Gi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},xc=e=>{const t=Rc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Lc=()=>{var e;return(e=Gi())===null||e===void 0?void 0:e.config};/**
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
 */class Oc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Mc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[an(JSON.stringify(n)),an(JSON.stringify(o)),a].join(".")}/**
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
 */const Fc="FirebaseError";class ee extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Fc,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Vc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ee(r,a,s)}}function Vc(e,t){return e.replace(Pc,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Pc=/\{\$([^}]+)}/g;function ds(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(qr(i)&&qr(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qr(e){return e!==null&&typeof e=="object"}/**
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
 */function kt(e){return e&&e._delegate?e._delegate:e}class we{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class Uc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Oc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($c(t))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=St){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=St){return this.instances.has(t)}getOptions(t=St){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=St){return this.component?this.component.multipleInstances?t:St:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(e){return e===St?void 0:e}function $c(e){return e.instantiationMode==="EAGER"}/**
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
 */class qc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(_||(_={}));const jc={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},Kc=_.INFO,Hc={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},Gc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Hc[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qi{constructor(t){this.name=t,this._logLevel=Kc,this._logHandler=Gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...t),this._logHandler(this,_.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...t),this._logHandler(this,_.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_.INFO,...t),this._logHandler(this,_.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_.WARN,...t),this._logHandler(this,_.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...t),this._logHandler(this,_.ERROR,...t)}}const zc=(e,t)=>t.some(n=>e instanceof n);let jr,Kr;function Qc(){return jr||(jr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wc(){return Kr||(Kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wi=new WeakMap,fs=new WeakMap,Yi=new WeakMap,Jn=new WeakMap,qs=new WeakMap;function Yc(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(gt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wi.set(n,e)}).catch(()=>{}),qs.set(t,e),t}function Xc(e){if(fs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fs.set(e,t)}let ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Yi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jc(e){ps=e(ps)}function Zc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Zn(this),t,...n);return Yi.set(s,t.sort?t.sort():[t]),gt(s)}:Wc().includes(e)?function(...t){return e.apply(Zn(this),t),gt(Wi.get(this))}:function(...t){return gt(e.apply(Zn(this),t))}}function tu(e){return typeof e=="function"?Zc(e):(e instanceof IDBTransaction&&Xc(e),zc(e,Qc())?new Proxy(e,ps):e)}function gt(e){if(e instanceof IDBRequest)return Yc(e);if(Jn.has(e))return Jn.get(e);const t=tu(e);return t!==e&&(Jn.set(e,t),qs.set(t,e)),t}const Zn=e=>qs.get(e);function eu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=gt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(gt(o.result),c.oldVersion,c.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const nu=["get","getKey","getAll","getAllKeys","count"],su=["put","add","delete","clear"],ts=new Map;function Hr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ts.get(t))return ts.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=su.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ts.set(t,i),i}Jc(e=>({...e,get:(t,n,s)=>Hr(t,n)||e.get(t,n,s),has:(t,n)=>!!Hr(t,n)||e.has(t,n)}));/**
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
 */class ru{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gs="@firebase/app",Gr="0.9.0";/**
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
 */const Rt=new Qi("@firebase/app"),ou="@firebase/app-compat",au="@firebase/analytics-compat",cu="@firebase/analytics",uu="@firebase/app-check-compat",hu="@firebase/app-check",lu="@firebase/auth",du="@firebase/auth-compat",fu="@firebase/database",pu="@firebase/database-compat",gu="@firebase/functions",mu="@firebase/functions-compat",yu="@firebase/installations",vu="@firebase/installations-compat",wu="@firebase/messaging",Eu="@firebase/messaging-compat",Tu="@firebase/performance",Iu="@firebase/performance-compat",Su="@firebase/remote-config",Cu="@firebase/remote-config-compat",bu="@firebase/storage",Au="@firebase/storage-compat",Du="@firebase/firestore",_u="@firebase/firestore-compat",Nu="firebase",ku="9.15.0";/**
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
 */const ms="[DEFAULT]",Ru={[gs]:"fire-core",[ou]:"fire-core-compat",[cu]:"fire-analytics",[au]:"fire-analytics-compat",[hu]:"fire-app-check",[uu]:"fire-app-check-compat",[lu]:"fire-auth",[du]:"fire-auth-compat",[fu]:"fire-rtdb",[pu]:"fire-rtdb-compat",[gu]:"fire-fn",[mu]:"fire-fn-compat",[yu]:"fire-iid",[vu]:"fire-iid-compat",[wu]:"fire-fcm",[Eu]:"fire-fcm-compat",[Tu]:"fire-perf",[Iu]:"fire-perf-compat",[Su]:"fire-rc",[Cu]:"fire-rc-compat",[bu]:"fire-gcs",[Au]:"fire-gcs-compat",[Du]:"fire-fst",[_u]:"fire-fst-compat","fire-js":"fire-js",[Nu]:"fire-js-all"};/**
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
 */const cn=new Map,ys=new Map;function xu(e,t){try{e.container.addComponent(t)}catch(n){Rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function un(e){const t=e.name;if(ys.has(t))return Rt.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,e);for(const n of cn.values())xu(n,e);return!0}function Lu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ou={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new zi("app","Firebase",Ou);/**
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
 */class Mu{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fu=ku;function Xi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ms,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw mt.create("bad-app-name",{appName:String(r)});if(n||(n=Lc()),!n)throw mt.create("no-options");const i=cn.get(r);if(i){if(ds(n,i.options)&&ds(s,i.config))return i;throw mt.create("duplicate-app",{appName:r})}const o=new qc(r);for(const c of ys.values())o.addComponent(c);const a=new Mu(n,s,o);return cn.set(r,a),a}function Vu(e=ms){const t=cn.get(e);if(!t&&e===ms)return Xi();if(!t)throw mt.create("no-app",{appName:e});return t}function qt(e,t,n){var s;let r=(s=Ru[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}un(new we(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Pu="firebase-heartbeat-database",Uu=1,Ee="firebase-heartbeat-store";let es=null;function Ji(){return es||(es=eu(Pu,Uu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ee)}}}).catch(e=>{throw mt.create("idb-open",{originalErrorMessage:e.message})})),es}async function Bu(e){try{return(await Ji()).transaction(Ee).objectStore(Ee).get(Zi(e))}catch(t){if(t instanceof ee)Rt.warn(t.message);else{const n=mt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(n.message)}}}async function zr(e,t){try{const s=(await Ji()).transaction(Ee,"readwrite");return await s.objectStore(Ee).put(t,Zi(e)),s.done}catch(n){if(n instanceof ee)Rt.warn(n.message);else{const s=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rt.warn(s.message)}}}function Zi(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $u=1024,qu=30*24*60*60*1e3;class ju{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hu(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=qu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qr(),{heartbeatsToSend:n,unsentEntries:s}=Ku(this._heartbeatsCache.heartbeats),r=an(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Qr(){return new Date().toISOString().substring(0,10)}function Ku(e,t=$u){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Wr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Wr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bc()?Ac().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Wr(e){return an(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gu(e){un(new we("platform-logger",t=>new ru(t),"PRIVATE")),un(new we("heartbeat",t=>new ju(t),"PRIVATE")),qt(gs,Gr,e),qt(gs,Gr,"esm2017"),qt("fire-js","")}Gu("");var zu="firebase",Qu="9.15.0";/**
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
 */qt(zu,Qu,"app");var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,js=js||{},I=Wu||self;function hn(){}function bn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Le(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Yu(e){return Object.prototype.hasOwnProperty.call(e,ns)&&e[ns]||(e[ns]=++Xu)}var ns="closure_uid_"+(1e9*Math.random()>>>0),Xu=0;function Ju(e,t,n){return e.call.apply(e.bind,arguments)}function Zu(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Ju:Y=Zu,Y.apply(null,arguments)}function Ye(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Tt(){this.s=this.s,this.o=this.o}var th=0;Tt.prototype.s=!1;Tt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),th!=0)&&Yu(this)};Tt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const to=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ks(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Yr(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(bn(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var eh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",hn,t),I.removeEventListener("test",hn,t)}catch{}return e}();function ln(e){return/^[\s\xa0]*$/.test(e)}var Xr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ss(e,t){return e<t?-1:e>t?1:0}function An(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function it(e){return An().indexOf(e)!=-1}function Hs(e){return Hs[" "](e),e}Hs[" "]=hn;function nh(e){var t=ih;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var sh=it("Opera"),zt=it("Trident")||it("MSIE"),eo=it("Edge"),vs=eo||zt,no=it("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!it("Edge"))&&!(it("Trident")||it("MSIE"))&&!it("Edge"),rh=An().toLowerCase().indexOf("webkit")!=-1&&!it("Edge");function so(){var e=I.document;return e?e.documentMode:void 0}var dn;t:{var rs="",is=function(){var e=An();if(no)return/rv:([^\);]+)(\)|;)/.exec(e);if(eo)return/Edge\/([\d\.]+)/.exec(e);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(rh)return/WebKit\/(\S+)/.exec(e);if(sh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(is&&(rs=is?is[1]:""),zt){var os=so();if(os!=null&&os>parseFloat(rs)){dn=String(os);break t}}dn=rs}var ih={};function oh(){return nh(function(){let e=0;const t=Xr(String(dn)).split("."),n=Xr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=ss(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ss(r[2].length==0,i[2].length==0)||ss(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var ws;if(I.document&&zt){var Jr=so();ws=Jr||parseInt(dn,10)||void 0}else ws=void 0;var ah=ws;function Te(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(no){t:{try{Hs(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ch[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Te.X.h.call(this)}}H(Te,X);var ch={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),uh=0;function hh(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++uh,this.ba=this.ea=!1}function Dn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Gs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ro(e){const t={};for(const n in e)t[n]=e[n];return t}const Zr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function io(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Zr.length;i++)n=Zr[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function _n(e){this.src=e,this.g={},this.h=0}_n.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ts(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new hh(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Es(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=to(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Dn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ts(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var zs="closure_lm_"+(1e6*Math.random()|0),as={};function oo(e,t,n,s,r){if(s&&s.once)return co(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)oo(e,t[i],n,s,r);return null}return n=Ys(n),e&&e[Oe]?e.N(t,n,Le(s)?!!s.capture:!!s,r):ao(e,t,n,!1,s,r)}function ao(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Le(r)?!!r.capture:!!r,a=Ws(e);if(a||(e[zs]=a=new _n(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=lh(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)eh||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ho(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lh(){function e(n){return t.call(e.src,e.listener,n)}const t=dh;return e}function co(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)co(e,t[i],n,s,r);return null}return n=Ys(n),e&&e[Oe]?e.O(t,n,Le(s)?!!s.capture:!!s,r):ao(e,t,n,!0,s,r)}function uo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)uo(e,t[i],n,s,r);else s=Le(s)?!!s.capture:!!s,n=Ys(n),e&&e[Oe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ts(i,n,s,r),-1<n&&(Dn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ws(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ts(t,n,s,r)),(n=-1<e?t[e]:null)&&Qs(n))}function Qs(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Oe])Es(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ho(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ws(t))?(Es(n,e),n.h==0&&(n.src=null,t[zs]=null)):Dn(e)}}}function ho(e){return e in as?as[e]:as[e]="on"+e}function dh(e,t){if(e.ba)e=!0;else{t=new Te(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Qs(e),e=n.call(s,t)}return e}function Ws(e){return e=e[zs],e instanceof _n?e:null}var cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ys(e){return typeof e=="function"?e:(e[cs]||(e[cs]=function(t){return e.handleEvent(t)}),e[cs])}function q(){Tt.call(this),this.i=new _n(this),this.P=this,this.I=null}H(q,Tt);q.prototype[Oe]=!0;q.prototype.removeEventListener=function(e,t,n,s){uo(this,e,t,n,s)};function K(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var r=t;t=new X(s,e),io(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Xe(o,s,!0,t)&&r}if(o=t.g=e,r=Xe(o,s,!0,t)&&r,r=Xe(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=Xe(o,s,!1,t)&&r}q.prototype.M=function(){if(q.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Dn(n[s]);delete e.g[t],e.h--}}this.I=null};q.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Xe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Es(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Xs=I.JSON.stringify;function fh(){var e=po;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ph{constructor(){this.h=this.g=null}add(t,n){const s=lo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new gh,e=>e.reset());class gh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mh(e){I.setTimeout(()=>{throw e},0)}function fo(e,t){Is||yh(),Ss||(Is(),Ss=!0),po.add(e,t)}var Is;function yh(){var e=I.Promise.resolve(void 0);Is=function(){e.then(vh)}}var Ss=!1,po=new ph;function vh(){for(var e;e=fh();){try{e.h.call(e.g)}catch(n){mh(n)}var t=lo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ss=!1}function Nn(e,t){q.call(this),this.h=e||1,this.g=t||I,this.j=Y(this.lb,this),this.l=Date.now()}H(Nn,q);y=Nn.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(Js(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Js(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){Nn.X.M.call(this),Js(this),delete this.g};function Zs(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function go(e){e.g=Zs(()=>{e.g=null,e.i&&(e.i=!1,go(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class wh extends Tt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:go(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(e){Tt.call(this),this.h=e,this.g={}}H(Ie,Tt);var ti=[];function mo(e,t,n,s){Array.isArray(n)||(n&&(ti[0]=n.toString()),n=ti);for(var r=0;r<n.length;r++){var i=oo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function yo(e){Gs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qs(t)},e),e.g={}}Ie.prototype.M=function(){Ie.X.M.call(this),yo(this)};Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function kn(){this.g=!0}kn.prototype.Aa=function(){this.g=!1};function Eh(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Th(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function $t(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Sh(e,n)+(s?" "+s:"")})}function Ih(e,t){e.info(function(){return"TIMEOUT: "+t})}kn.prototype.info=function(){};function Sh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Xs(n)}catch{return t}}var Ot={},ei=null;function Rn(){return ei=ei||new q}Ot.Pa="serverreachability";function vo(e){X.call(this,Ot.Pa,e)}H(vo,X);function Se(e){const t=Rn();K(t,new vo(t))}Ot.STAT_EVENT="statevent";function wo(e,t){X.call(this,Ot.STAT_EVENT,e),this.stat=t}H(wo,X);function Z(e){const t=Rn();K(t,new wo(t,e))}Ot.Qa="timingevent";function Eo(e,t){X.call(this,Ot.Qa,e),this.size=t}H(Eo,X);function Me(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var xn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},To={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function tr(){}tr.prototype.h=null;function ni(e){return e.h||(e.h=e.i())}function Io(){}var Fe={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function er(){X.call(this,"d")}H(er,X);function nr(){X.call(this,"c")}H(nr,X);var Cs;function Ln(){}H(Ln,tr);Ln.prototype.g=function(){return new XMLHttpRequest};Ln.prototype.i=function(){return{}};Cs=new Ln;function Ve(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new Ie(this),this.O=Ch,e=vs?125:void 0,this.T=new Nn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new So}function So(){this.i=null,this.g="",this.h=!1}var Ch=45e3,bs={},fn={};y=Ve.prototype;y.setTimeout=function(e){this.O=e};function As(e,t,n){e.K=1,e.v=Mn(lt(t)),e.s=n,e.P=!0,Co(e,null)}function Co(e,t){e.F=Date.now(),Pe(e),e.A=lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),xo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new So,e.g=Zo(e.l,n?t:null,!e.s),0<e.N&&(e.L=new wh(Y(e.La,e,e.g),e.N)),mo(e.S,e.g,"readystatechange",e.ib),t=e.H?ro(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Se(),Eh(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=ht(this.g);var t=this.g.Ea();const l=this.g.aa();if(!(3>h)&&(h!=3||vs||this.g&&(this.h.h||this.g.fa()||oi(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Se(3):Se(2)),On(this);var n=this.g.aa();this.Y=n;e:if(bo(this)){var s=oi(this.g);e="";var r=s.length,i=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),pe(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Th(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ln(a)){var u=a;break e}}u=null}if(n=u)$t(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ds(this,n);else{this.i=!1,this.o=3,Z(12),Ct(this),pe(this);break t}}this.P?(Ao(this,h,o),vs&&this.i&&h==3&&(mo(this.S,this.T,"tick",this.hb),this.T.start())):($t(this.j,this.m,o,null),Ds(this,o)),h==4&&Ct(this),this.i&&!this.I&&(h==4?Wo(this.l,this):(this.i=!1,Pe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Z(12)):(this.o=0,Z(13)),Ct(this),pe(this)}}}catch{}finally{}};function bo(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Ao(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=bh(e,n),r==fn){t==4&&(e.o=4,Z(14),s=!1),$t(e.j,e.m,null,"[Incomplete Response]");break}else if(r==bs){e.o=4,Z(15),$t(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else $t(e.j,e.m,r,null),Ds(e,r);bo(e)&&r!=fn&&r!=bs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Z(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ur(t),t.K=!0,Z(11))):($t(e.j,e.m,n,"[Invalid Chunked Response]"),Ct(e),pe(e))}y.hb=function(){if(this.g){var e=ht(this.g),t=this.g.fa();this.C<t.length&&(On(this),Ao(this,e,t),this.i&&e!=4&&Pe(this))}};function bh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fn:(n=Number(t.substring(n,s)),isNaN(n)?bs:(s+=1,s+n>t.length?fn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Ct(this)};function Pe(e){e.V=Date.now()+e.O,Do(e,e.O)}function Do(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Me(Y(e.gb,e),t)}function On(e){e.B&&(I.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ih(this.j,this.A),this.K!=2&&(Se(),Z(17)),Ct(this),this.o=2,pe(this)):Do(this,this.V-e)};function pe(e){e.l.G==0||e.I||Wo(e.l,e)}function Ct(e){On(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Js(e.T),yo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ds(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||_s(n.h,e))){if(!e.J&&_s(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)mn(n),Pn(n);else break t;cr(n),Z(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Me(Y(n.cb,n),6e3));if(1>=Mo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else bt(n,11)}else if((e.J||n.g==e)&&mn(n),!ln(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const l=u[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.h;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(sr(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.za=b,L(s.F,s.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Jo(s,s.H?s.ka:null,s.V),o.J){Fo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(On(a),Pe(a)),s.g=o}else zo(s);0<n.i.length&&Un(n)}else u[0]!="stop"&&u[0]!="close"||bt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bt(n,7):ar(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Se(4)}catch{}}function Ah(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(bn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Dh(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(bn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function _o(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(bn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Dh(e),s=Ah(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var No=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _h(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Dt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Dt){this.h=t!==void 0?t:e.h,pn(this,e.j),this.s=e.s,this.g=e.g,gn(this,e.m),this.l=e.l,t=e.i;var n=new Ce;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),si(this,n),this.o=e.o}else e&&(n=String(e).match(No))?(this.h=!!t,pn(this,n[1]||"",!0),this.s=he(n[2]||""),this.g=he(n[3]||"",!0),gn(this,n[4]),this.l=he(n[5]||"",!0),si(this,n[6]||"",!0),this.o=he(n[7]||"")):(this.h=!!t,this.i=new Ce(null,this.h))}Dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(le(t,ri,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(le(t,ri,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(le(n,n.charAt(0)=="/"?Rh:kh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",le(n,Lh)),e.join("")};function lt(e){return new Dt(e)}function pn(e,t,n){e.j=n?he(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function si(e,t,n){t instanceof Ce?(e.i=t,Oh(e.i,e.h)):(n||(t=le(t,xh)),e.i=new Ce(t,e.h))}function L(e,t,n){e.i.set(t,n)}function Mn(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function he(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Nh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ri=/[#\/\?@]/g,kh=/[#\?:]/g,Rh=/[#\?]/g,xh=/[#\?@]/g,Lh=/#/g;function Ce(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function It(e){e.g||(e.g=new Map,e.h=0,e.i&&_h(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Ce.prototype;y.add=function(e,t){It(this),this.i=null,e=ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ko(e,t){It(e),t=ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ro(e,t){return It(e),t=ne(e,t),e.g.has(t)}y.forEach=function(e,t){It(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};y.oa=function(){It(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};y.W=function(e){It(this);let t=[];if(typeof e=="string")Ro(this,e)&&(t=t.concat(this.g.get(ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return It(this),this.i=null,e=ne(this,e),Ro(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function xo(e,t,n){ko(e,t),0<n.length&&(e.i=null,e.g.set(ne(e,t),Ks(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Oh(e,t){t&&!e.j&&(It(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ko(this,s),xo(this,r,n))},e)),e.j=t}var Mh=class{constructor(t,n){this.h=t,this.g=n}};function Lo(e){this.l=e||Fh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fh=10;function Oo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Mo(e){return e.h?1:e.g?e.g.size:0}function _s(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function sr(e,t){e.g?e.g.add(t):e.h=t}function Fo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Lo.prototype.cancel=function(){if(this.i=Vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Vo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ks(e.i)}function rr(){}rr.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};rr.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function Vh(){this.g=new rr}function Ph(e,t,n){const s=n||"";try{_o(e,function(r,i){let o=r;Le(r)&&(o=Xs(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Uh(e,t){const n=new kn;if(I.Image){const s=new Image;s.onload=Ye(Je,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ye(Je,n,s,"TestLoadImage: error",!1,t),s.onabort=Ye(Je,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ye(Je,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Je(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function Ue(e){this.l=e.ac||null,this.j=e.jb||!1}H(Ue,tr);Ue.prototype.g=function(){return new Fn(this.l,this.j)};Ue.prototype.i=function(e){return function(){return e}}({});function Fn(e,t){q.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ir,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(Fn,q);var ir=0;y=Fn.prototype;y.open=function(e,t){if(this.readyState!=ir)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,be(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=ir};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Po(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Po(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Be(this):be(this),this.readyState==3&&Po(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Be(this))};y.Ua=function(e){this.g&&(this.response=e,Be(this))};y.ga=function(){this.g&&Be(this)};function Be(e){e.readyState=4,e.l=null,e.j=null,e.A=null,be(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Bh=I.JSON.parse;function O(e){q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Uo,this.K=this.L=!1}H(O,q);var Uo="",$h=/^https?$/i,qh=["POST","PUT"];y=O.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cs.g(),this.C=this.u?ni(this.u):ni(Cs),this.g.onreadystatechange=Y(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){ii(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&e instanceof I.FormData,!(0<=to(qh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qo(this),0<this.B&&((this.K=jh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.qa,this)):this.A=Zs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ii(this,i)}};function jh(e){return zt&&oh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof js<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function ii(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Bo(e),Vn(e)}function Bo(e){e.D||(e.D=!0,K(e,"complete"),K(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),Vn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vn(this,!0)),O.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?$o(this):this.fb())};y.fb=function(){$o(this)};function $o(e){if(e.h&&typeof js<"u"&&(!e.C[1]||ht(e)!=4||e.aa()!=2)){if(e.v&&ht(e)==4)Zs(e.Ha,0,e);else if(K(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(No)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!$h.test(r?r.toLowerCase():"")}n=s}if(n)K(e,"complete"),K(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Bo(e)}}finally{Vn(e)}}}}function Vn(e,t){if(e.g){qo(e);const n=e.g,s=e.C[0]?hn:null;e.g=null,e.C=null,t||K(e,"ready");try{n.onreadystatechange=s}catch{}}}function qo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Bh(t)}};function oi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Uo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jo(e){let t="";return Gs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function or(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=jo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function ue(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ko(e){this.Ca=0,this.i=[],this.j=new kn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ue("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ue("baseRetryDelayMs",5e3,e),this.bb=ue("retryDelaySeedMs",1e4,e),this.$a=ue("forwardChannelMaxRetries",2,e),this.ta=ue("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Lo(e&&e.concurrentRequestLimit),this.Fa=new Vh,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Ko.prototype;y.ma=8;y.G=1;function ar(e){if(Ho(e),e.G==3){var t=e.U++,n=lt(e.F);L(n,"SID",e.I),L(n,"RID",t),L(n,"TYPE","terminate"),$e(e,n),t=new Ve(e,e.j,t,void 0),t.K=2,t.v=Mn(lt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zo(t.l,null),t.g.da(t.v)),t.F=Date.now(),Pe(t)}Xo(e)}function Pn(e){e.g&&(ur(e),e.g.cancel(),e.g=null)}function Ho(e){Pn(e),e.u&&(I.clearTimeout(e.u),e.u=null),mn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Un(e){Oo(e.h)||e.m||(e.m=!0,fo(e.Ja,e),e.C=0)}function Kh(e,t){return Mo(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Me(Y(e.Ja,e,t),Yo(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new Ve(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=ro(i),io(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Go(this,r,t),n=lt(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),$e(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(jo(i)))+"&"+t:this.o&&or(n,this.o,i)),sr(this.h,r),this.Ya&&L(n,"TYPE","init"),this.O?(L(n,"$req",t),L(n,"SID","null"),r.Z=!0,As(r,n,null)):As(r,n,t),this.G=2}}else this.G==3&&(e?ai(this,e):this.i.length==0||Oo(this.h)||ai(this))};function ai(e,t){var n;t?n=t.m:n=e.U++;const s=lt(e.F);L(s,"SID",e.I),L(s,"RID",n),L(s,"AID",e.T),$e(e,s),e.o&&e.s&&or(s,e.o,e.s),n=new Ve(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Go(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),sr(e.h,n),As(n,s,t)}function $e(e,t){e.ia&&Gs(e.ia,function(n,s){L(t,s,n)}),e.l&&_o({},function(n,s){L(t,s,n)})}function Go(e,t,n){n=Math.min(e.i.length,n);var s=e.l?Y(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Ph(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function zo(e){e.g||e.u||(e.Z=1,fo(e.Ia,e),e.A=0)}function cr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Me(Y(e.Ia,e),Yo(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,Qo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Me(Y(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Z(10),Pn(this),Qo(this))};function ur(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Qo(e){e.g=new Ve(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=lt(e.sa);L(t,"RID","rpc"),L(t,"SID",e.I),L(t,"CI",e.L?"0":"1"),L(t,"AID",e.T),L(t,"TYPE","xmlhttp"),$e(e,t),e.o&&e.s&&or(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Mn(lt(t)),n.s=null,n.P=!0,Co(n,e)}y.cb=function(){this.v!=null&&(this.v=null,Pn(this),cr(this),Z(19))};function mn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Wo(e,t){var n=null;if(e.g==t){mn(e),ur(e),e.g=null;var s=2}else if(_s(e.h,t))n=t.D,Fo(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Rn(),K(s,new Eo(s,n)),Un(e)}else zo(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&Kh(e,t)||s==2&&cr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:bt(e,5);break;case 4:bt(e,10);break;case 3:bt(e,6);break;default:bt(e,2)}}}function Yo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function bt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=Y(e.kb,e);n||(n=new Dt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||pn(n,"https"),Mn(n)),Uh(n.toString(),s)}else Z(2);e.G=0,e.l&&e.l.va(t),Xo(e),Ho(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function Xo(e){if(e.G=0,e.la=[],e.l){const t=Vo(e.h);(t.length!=0||e.i.length!=0)&&(Yr(e.la,t),Yr(e.la,e.i),e.h.i.length=0,Ks(e.i),e.i.length=0),e.l.ua()}}function Jo(e,t,n){var s=n instanceof Dt?lt(n):new Dt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),gn(s,s.m);else{var r=I.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Dt(null,void 0);s&&pn(i,s),t&&(i.g=t),r&&gn(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&L(s,n,t),L(s,"VER",e.ma),$e(e,s),s}function Zo(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new O(new Ue({jb:!0})):new O(e.ra),t.Ka(e.H),t}function ta(){}y=ta.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function yn(){if(zt&&!(10<=Number(ah)))throw Error("Environmental error: no available transport.")}yn.prototype.g=function(e,t){return new nt(e,t)};function nt(e,t){q.call(this),this.g=new Ko(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ln(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ln(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new se(this)}H(nt,q);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Z(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Jo(e,null,e.V),Un(e)};nt.prototype.close=function(){ar(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Xs(e),e=n);t.i.push(new Mh(t.ab++,e)),t.G==3&&Un(t)};nt.prototype.M=function(){this.g.l=null,delete this.j,ar(this.g),delete this.g,nt.X.M.call(this)};function ea(e){er.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(ea,er);function na(){nr.call(this),this.status=1}H(na,nr);function se(e){this.g=e}H(se,ta);se.prototype.xa=function(){K(this.g,"a")};se.prototype.wa=function(e){K(this.g,new ea(e))};se.prototype.va=function(e){K(this.g,new na)};se.prototype.ua=function(){K(this.g,"b")};yn.prototype.createWebChannel=yn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;xn.NO_ERROR=0;xn.TIMEOUT=8;xn.HTTP_ERROR=6;To.COMPLETE="complete";Io.EventType=Fe;Fe.OPEN="a";Fe.CLOSE="b";Fe.ERROR="c";Fe.MESSAGE="d";q.prototype.listen=q.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;var Hh=function(){return new yn},Gh=function(){return Rn()},us=xn,zh=To,Qh=Ot,ci={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Wh=Ue,Ze=Io,Yh=O;const ui="@firebase/firestore";/**
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
 */class z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let re="9.15.0";/**
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
 */const xt=new Qi("@firebase/firestore");function hi(){return xt.logLevel}function v(e,...t){if(xt.logLevel<=_.DEBUG){const n=t.map(hr);xt.debug(`Firestore (${re}): ${e}`,...n)}}function dt(e,...t){if(xt.logLevel<=_.ERROR){const n=t.map(hr);xt.error(`Firestore (${re}): ${e}`,...n)}}function Ns(e,...t){if(xt.logLevel<=_.WARN){const n=t.map(hr);xt.warn(`Firestore (${re}): ${e}`,...n)}}function hr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${re}) INTERNAL ASSERTION FAILED: `+e;throw dt(t),new Error(t)}function R(e,t){e||T()}function C(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ee{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _t{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class sa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(z.UNAUTHENTICATED))}shutdown(){}}class Jh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zh{constructor(t){this.t=t,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _t,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _t)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new sa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new z(t)}}class tl{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class el{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new tl(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sl{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new nl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rl(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ra{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=rl(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function Qt(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new P(0,0))}static max(){return new S(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ae{constructor(t,n,s){n===void 0?n=0:n>t.length&&T(),s===void 0?s=t.length-n:s>t.length-n&&T(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ae.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ae?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Ae{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new x(n)}static emptyPath(){return new x([])}}const il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Ae{construct(t,n,s){return new W(t,n,s)}static isValidIdentifier(t){return il.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
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
 */class w{constructor(t){this.path=t}static fromPath(t){return new w(x.fromString(t))}static fromName(t){return new w(x.fromString(t).popFirst(5))}static empty(){return new w(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new w(new x(t.slice()))}}function ol(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=S.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new vt(r,w.empty(),t)}function al(e){return new vt(e.readTime,e.key,-1)}class vt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new vt(S.min(),w.empty(),-1)}static max(){return new vt(S.max(),w.empty(),-1)}}function cl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=w.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
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
 */const ul="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qe(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==ul)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function je(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class lr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}lr.at=-1;/**
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
 */class ll{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class De{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new De("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof De&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function li(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ie(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ia(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */function Bn(e){return e==null}function vn(e){return e===0&&1/e==-1/0}function dl(e){return typeof e=="number"&&Number.isInteger(e)&&!vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new J(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(e){if(R(!!e),typeof e=="string"){let t=0;const n=fl.exec(e);if(R(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Wt(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
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
 */function oa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function aa(e){const t=e.mapValue.fields.__previous_value__;return oa(t)?aa(t):t}function _e(e){const t=wt(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
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
 */const tn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oa(e)?4:pl(e)?9007199254740991:10:T()}function ut(e,t){if(e===t)return!0;const n=Lt(e);if(n!==Lt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _e(e).isEqual(_e(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=wt(s.timestampValue),o=wt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Wt(s.bytesValue).isEqual(Wt(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return F(s.geoPointValue.latitude)===F(r.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return F(s.integerValue)===F(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=F(s.doubleValue),o=F(r.doubleValue);return i===o?vn(i)===vn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return Qt(e.arrayValue.values||[],t.arrayValue.values||[],ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(li(i)!==li(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ut(i[a],o[a])))return!1;return!0}(e,t);default:return T()}}function Ne(e,t){return(e.values||[]).find(n=>ut(n,t))!==void 0}function Yt(e,t){if(e===t)return 0;const n=Lt(e),s=Lt(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=F(r.integerValue||r.doubleValue),a=F(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return di(e.timestampValue,t.timestampValue);case 4:return di(_e(e),_e(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Wt(r),a=Wt(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(F(r.latitude),F(i.latitude));return o!==0?o:N(F(r.longitude),F(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Yt(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===tn.mapValue&&i===tn.mapValue)return 0;if(r===tn.mapValue)return 1;if(i===tn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=N(a[h],u[h]);if(l!==0)return l;const p=Yt(o[a[h]],c[u[h]]);if(p!==0)return p}return N(a.length,u.length)}(e.mapValue,t.mapValue);default:throw T()}}function di(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=wt(e),s=wt(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function Xt(e){return ks(e)}function ks(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=wt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,w.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ks(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ks(s.fields[a])}`;return i+"}"}(e.mapValue):T();var t,n}function fi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Rs(e){return!!e&&"integerValue"in e}function dr(e){return!!e&&"arrayValue"in e}function pi(e){return!!e&&"nullValue"in e}function gi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function nn(e){return!!e&&"mapValue"in e}function ge(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ie(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ge(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ge(e.arrayValue.values[n]);return t}return Object.assign({},e)}function pl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wn{constructor(t,n){this.position=t,this.inclusive=n}}function mi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),n.key):s=Yt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function yi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ut(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ca{}class V extends ca{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new yl(t,n,s):n==="array-contains"?new El(t,s):n==="in"?new Tl(t,s):n==="not-in"?new Il(t,s):n==="array-contains-any"?new Sl(t,s):new V(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new vl(t,s):new wl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yt(n,this.value)):n!==null&&Lt(this.value)===Lt(n)&&this.matchesComparison(Yt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class rt extends ca{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new rt(t,n)}matches(t){return ua(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ua(e){return e.op==="and"}function gl(e){return ml(e)&&ua(e)}function ml(e){for(const t of e.filters)if(t instanceof rt)return!1;return!0}function ha(e){if(e instanceof V)return e.field.canonicalString()+e.op.toString()+Xt(e.value);{const t=e.filters.map(n=>ha(n)).join(",");return`${e.op}(${t})`}}function la(e,t){return e instanceof V?function(n,s){return s instanceof V&&n.op===s.op&&n.field.isEqual(s.field)&&ut(n.value,s.value)}(e,t):e instanceof rt?function(n,s){return s instanceof rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&la(i,s.filters[o]),!0):!1}(e,t):void T()}function da(e){return e instanceof V?function(t){return`${t.field.canonicalString()} ${t.op} ${Xt(t.value)}`}(e):e instanceof rt?function(t){return t.op.toString()+" {"+t.getFilters().map(da).join(" ,")+"}"}(e):"Filter"}class yl extends V{constructor(t,n,s){super(t,n,s),this.key=w.fromName(s.referenceValue)}matches(t){const n=w.comparator(t.key,this.key);return this.matchesComparison(n)}}class vl extends V{constructor(t,n){super(t,"in",n),this.keys=fa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class wl extends V{constructor(t,n){super(t,"not-in",n),this.keys=fa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function fa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>w.fromName(s.referenceValue))}class El extends V{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return dr(n)&&Ne(n.arrayValue,this.value)}}class Tl extends V{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ne(this.value.arrayValue,n)}}class Il extends V{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ne(this.value.arrayValue,n)}}class Sl extends V{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!dr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ne(this.value.arrayValue,s))}}/**
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
 */class jt{constructor(t,n="asc"){this.field=t,this.dir=n}}function Cl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class B{constructor(t,n){this.comparator=t,this.root=n||j.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,j.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new en(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new en(this.root,t,this.comparator,!1)}getReverseIterator(){return new en(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new en(this.root,t,this.comparator,!0)}}class en{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class j{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??j.RED,this.left=r??j.EMPTY,this.right=i??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new j(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return j.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(e,t,n,s,r){return this}insert(e,t,n){return new j(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class U{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new vi(this.data.getIterator())}getIteratorFrom(t){return new vi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof U)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new U(this.comparator);return n.data=t,n}}class vi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ot([])}unionWith(t){let n=new U(W.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class st{constructor(t){this.value=t}static empty(){return new st({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ge(n)}setAll(t){let n=W.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ge(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];nn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){ie(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new st(ge(this.value))}}function pa(e){const t=[];return ie(e.fields,(n,s)=>{const r=new W([n]);if(nn(s)){const i=pa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new ot(t)}/**
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
 */class Q{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Q(t,0,S.min(),S.min(),S.min(),st.empty(),0)}static newFoundDocument(t,n,s,r){return new Q(t,1,n,S.min(),s,r,0)}static newNoDocument(t,n){return new Q(t,2,n,S.min(),S.min(),st.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,S.min(),S.min(),st.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bl{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function wi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new bl(e,t,n,s,r,i,o)}function fr(e){const t=C(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ha(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Bn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xt(s)).join(",")),t.ft=n}return t.ft}function pr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Cl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!la(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!yi(e.startAt,t.startAt)&&yi(e.endAt,t.endAt)}function xs(e){return w.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class oe{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Al(e,t,n,s,r,i,o,a){return new oe(e,t,n,s,r,i,o,a)}function gr(e){return new oe(e)}function Ei(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function mr(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function $n(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function ga(e){return e.collectionGroup!==null}function Kt(e){const t=C(e);if(t.dt===null){t.dt=[];const n=$n(t),s=mr(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new jt(n)),t.dt.push(new jt(W.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new jt(W.keyField(),i))}}}return t.dt}function ft(e){const t=C(e);if(!t._t)if(t.limitType==="F")t._t=wi(t.path,t.collectionGroup,Kt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Kt(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new jt(i.field,o))}const s=t.endAt?new wn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wn(t.startAt.position,t.startAt.inclusive):null;t._t=wi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t._t}function Ls(e,t){t.getFirstInequalityField(),$n(e);const n=e.filters.concat([t]);return new oe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Os(e,t,n){return new oe(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qn(e,t){return pr(ft(e),ft(t))&&e.limitType===t.limitType}function ma(e){return`${fr(ft(e))}|lt:${e.limitType}`}function Ms(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>da(s)).join(", ")}]`),Bn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Xt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Xt(s)).join(",")),`Target(${n})`}(ft(e))}; limitType=${e.limitType})`}function yr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Kt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=mi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Kt(n),s)||n.endAt&&!function(r,i,o){const a=mi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Kt(n),s))}(e,t)}function Dl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ya(e){return(t,n)=>{let s=!1;for(const r of Kt(e)){const i=_l(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function _l(e,t,n){const s=e.field.isKeyField()?w.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Yt(a,c):T()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function va(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vn(t)?"-0":t}}function wa(e){return{integerValue:""+e}}function Nl(e,t){return dl(t)?wa(t):va(e,t)}/**
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
 */class jn{constructor(){this._=void 0}}function kl(e,t,n){return e instanceof En?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof ke?Ta(e,t):e instanceof Re?Ia(e,t):function(s,r){const i=Ea(s,r),o=Ti(i)+Ti(s.gt);return Rs(i)&&Rs(s.gt)?wa(o):va(s.yt,o)}(e,t)}function Rl(e,t,n){return e instanceof ke?Ta(e,t):e instanceof Re?Ia(e,t):n}function Ea(e,t){return e instanceof Tn?Rs(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class En extends jn{}class ke extends jn{constructor(t){super(),this.elements=t}}function Ta(e,t){const n=Sa(t);for(const s of e.elements)n.some(r=>ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Re extends jn{constructor(t){super(),this.elements=t}}function Ia(e,t){let n=Sa(t);for(const s of e.elements)n=n.filter(r=>!ut(r,s));return{arrayValue:{values:n}}}class Tn extends jn{constructor(t,n){super(),this.yt=t,this.gt=n}}function Ti(e){return F(e.integerValue||e.doubleValue)}function Sa(e){return dr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function xl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof ke&&s instanceof ke||n instanceof Re&&s instanceof Re?Qt(n.elements,s.elements,ut):n instanceof Tn&&s instanceof Tn?ut(n.gt,s.gt):n instanceof En&&s instanceof En}(e.transform,t.transform)}class Ll{constructor(t,n){this.version=t,this.transformResults=n}}class at{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Kn{}function Ca(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new vr(e.key,at.none()):new Ke(e.key,e.data,at.none());{const n=e.data,s=st.empty();let r=new U(W.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Mt(e.key,s,new ot(r.toArray()),at.none())}}function Ol(e,t,n){e instanceof Ke?function(s,r,i){const o=s.value.clone(),a=Si(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(s,r,i){if(!sn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Si(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ba(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function me(e,t,n,s){return e instanceof Ke?function(r,i,o,a){if(!sn(r.precondition,i))return o;const c=r.value.clone(),u=Ci(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Mt?function(r,i,o,a){if(!sn(r.precondition,i))return o;const c=Ci(r.fieldTransforms,a,i),u=i.data;return u.setAll(ba(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(r,i,o){return sn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Ml(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ea(s.transform,r||null);i!=null&&(n===null&&(n=st.empty()),n.set(s.field,i))}return n||null}function Ii(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qt(n,s,(r,i)=>xl(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ke extends Kn{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mt extends Kn{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ba(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Si(e,t,n){const s=new Map;R(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Rl(o,a,n[r]))}return s}function Ci(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,kl(i,o,t))}return s}class vr extends Kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fl extends Kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vl{constructor(t){this.count=t}}/**
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
 */var M,D;function Pl(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Aa(e){if(e===void 0)return dt("GRPC error has no .code"),d.UNKNOWN;switch(e){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(D=M||(M={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ae{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ie(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return ia(this.inner)}size(){return this.innerSize}}/**
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
 */const Ul=new B(w.comparator);function pt(){return Ul}const Da=new B(w.comparator);function de(...e){let t=Da;for(const n of e)t=t.insert(n.key,n);return t}function _a(e){let t=Da;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function At(){return ye()}function Na(){return ye()}function ye(){return new ae(e=>e.toString(),(e,t)=>e.isEqual(t))}const Bl=new B(w.comparator),$l=new U(w.comparator);function A(...e){let t=$l;for(const n of e)t=t.add(n);return t}const ql=new U(N);function ka(){return ql}/**
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
 */class Hn{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,He.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Hn(S.min(),r,ka(),pt(),A())}}class He{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new He(s,n,A(),A(),A())}}/**
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
 */class rn{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Ra{constructor(t,n){this.targetId=t,this.Et=n}}class xa{constructor(t,n,s=J.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class bi{constructor(){this.At=0,this.Rt=Di(),this.bt=J.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=A(),n=A(),s=A();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:T()}}),new He(this.bt,this.Pt,t,n,s)}xt(){this.vt=!1,this.Rt=Di()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class jl{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=pt(),this.qt=Ai(),this.Ut=new U(N)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const s=this.Wt(n);switch(t.state){case 0:this.zt(n)&&s.Dt(t.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(t){const n=t.targetId,s=t.Et.count,r=this.Yt(n);if(r){const i=r.target;if(xs(i))if(s===0){const o=new w(i.path);this.Qt(n,o,Q.newNoDocument(o,S.min()))}else R(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&xs(a.target)){const c=new w(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Q.newNoDocument(c,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=A();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new Hn(t,n,this.Ut,this.Lt,s);return this.Lt=pt(),this.qt=Ai(),this.Ut=new U(N),r}Gt(t,n){if(!this.zt(t))return;const s=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.zt(t))return;const r=this.Wt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new bi,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new U(N),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new bi),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function Ai(){return new B(w.comparator)}function Di(){return new B(w.comparator)}/**
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
 */const Kl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Gl=(()=>({and:"AND",or:"OR"}))();class zl{constructor(t,n){this.databaseId=t,this.wt=n}}function In(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function La(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Ql(e,t){return In(e,t.toTimestamp())}function ct(e){return R(!!e),S.fromTimestamp(function(t){const n=wt(t);return new P(n.seconds,n.nanos)}(e))}function wr(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Oa(e){const t=x.fromString(e);return R(Pa(t)),t}function Fs(e,t){return wr(e.databaseId,t.path)}function hs(e,t){const n=Oa(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new w(Ma(n))}function Vs(e,t){return wr(e.databaseId,t)}function Wl(e){const t=Oa(e);return t.length===4?x.emptyPath():Ma(t)}function Ps(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ma(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _i(e,t,n){return{name:Fs(e,t),fields:n.value.mapValue.fields}}function Yl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.wt?(R(u===void 0||typeof u=="string"),J.fromBase64String(u||"")):(R(u===void 0||u instanceof Uint8Array),J.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?d.UNKNOWN:Aa(c.code);return new m(u,c.message||"")}(o);n=new xa(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=hs(e,s.document.name),i=ct(s.document.updateTime),o=s.document.createTime?ct(s.document.createTime):S.min(),a=new st({mapValue:{fields:s.document.fields}}),c=Q.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new rn(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=hs(e,s.document),i=s.readTime?ct(s.readTime):S.min(),o=Q.newNoDocument(r,i),a=s.removedTargetIds||[];n=new rn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=hs(e,s.document),i=s.removedTargetIds||[];n=new rn([],i,r,null)}else{if(!("filter"in t))return T();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new Vl(r),o=s.targetId;n=new Ra(o,i)}}return n}function Xl(e,t){let n;if(t instanceof Ke)n={update:_i(e,t.key,t.value)};else if(t instanceof vr)n={delete:Fs(e,t.key)};else if(t instanceof Mt)n={update:_i(e,t.key,t.data),updateMask:od(t.fieldMask)};else{if(!(t instanceof Fl))return T();n={verify:Fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof En)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ke)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Re)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tn)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw T()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Ql(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(e,t.precondition)),n}function Jl(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ct(s.updateTime):ct(r);return i.isEqual(S.min())&&(i=ct(r)),new Ll(i,s.transformResults||[])}(n,t))):[]}function Zl(e,t){return{documents:[Vs(e,t.path)]}}function td(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Vs(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vs(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Va(rt.create(c,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Ut(h.field),direction:sd(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Bn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function ed(e){let t=Wl(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let i=[];n.where&&(i=function(h){const l=Fa(h);return l instanceof rt&&gl(l)?l.getFilters():[l]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new jt(Bt(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Bn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,p=h.values||[];return new wn(p,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,p=h.values||[];return new wn(p,l)}(n.endAt)),Al(t,r,o,i,a,"F",c,u)}function nd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Fa(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bt(t.unaryFilter.field);return V.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bt(t.unaryFilter.field);return V.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bt(t.unaryFilter.field);return V.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bt(t.unaryFilter.field);return V.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(t){return V.create(Bt(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return rt.create(t.compositeFilter.filters.map(n=>Fa(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(t.compositeFilter.op))}(e):T()}function sd(e){return Kl[e]}function rd(e){return Hl[e]}function id(e){return Gl[e]}function Ut(e){return{fieldPath:e.canonicalString()}}function Bt(e){return W.fromServerFormat(e.fieldPath)}function Va(e){return e instanceof V?function(t){if(t.op==="=="){if(gi(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NAN"}};if(pi(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gi(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NAN"}};if(pi(t.value))return{unaryFilter:{field:Ut(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(t.field),op:rd(t.op),value:t.value}}}(e):e instanceof rt?function(t){const n=t.getFilters().map(s=>Va(s));return n.length===1?n[0]:{compositeFilter:{op:id(t.op),filters:n}}}(e):T()}function od(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Pa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ad{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Ol(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=me(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=me(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Na();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ca(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),A())}isEqual(t){return this.batchId===t.batchId&&Qt(this.mutations,t.mutations,(n,s)=>Ii(n,s))&&Qt(this.baseMutations,t.baseMutations,(n,s)=>Ii(n,s))}}class Er{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){R(t.mutations.length===s.length);let r=Bl;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Er(t,n,s,r)}}/**
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
 */class cd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Nt{constructor(t,n,s,r,i=S.min(),o=S.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Nt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class ud{constructor(t){this.ie=t}}function hd(e){const t=ed({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class ld{constructor(){this.Je=new dd}addToCollectionParentIndex(t,n){return this.Je.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(vt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(vt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class dd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new U(x.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new U(x.comparator)).toArray()}}/**
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
 */class Jt{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Jt(0)}static vn(){return new Jt(-1)}}/**
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
 */class fd{constructor(){this.changes=new ae(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class pd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class gd{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&me(s.mutation,r,ot.empty(),P.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,A()).next(()=>s))}getLocalViewOfDocuments(t,n,s=A()){const r=At();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=de();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=At();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,A()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=pt();const o=ye(),a=ye();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Mt)?i=i.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),me(h.mutation,u,h.mutation.getFieldMask(),P.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var l;return a.set(u,new pd(h,(l=o.get(u))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ye();let r=new B((o,a)=>o-a),i=A();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||ot.empty();h=a.applyToLocalView(u,h),s.set(c,h);const l=(r.get(a.batchId)||A()).add(c);r=r.insert(a.batchId,l)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,l=Na();h.forEach(p=>{if(!i.has(p)){const g=Ca(n.get(p),s.get(p));g!==null&&l.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ga(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(At());let a=-1,c=i;return o.next(u=>f.forEach(u,(h,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),i.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,A())).next(h=>({batchId:a,changes:_a(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new w(n)).next(s=>{let r=de();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=de();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const c=function(u,h){return new oe(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Q.newInvalidDocument(u)))});let o=de();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&me(u.mutation,c,ot.empty(),P.now()),yr(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class md{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ct(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:hd(s.bundledQuery),readTime:ct(s.readTime)}}(n)),f.resolve()}}/**
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
 */class yd{constructor(){this.overlays=new B(w.comparator),this.es=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=At();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.oe(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=At(),i=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new B((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=At(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=At(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return f.resolve(a)}oe(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new cd(n,s));let i=this.es.get(n);i===void 0&&(i=A(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Tr{constructor(){this.ns=new U($.ss),this.rs=new U($.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new $(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new $(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new w(new x([])),s=new $(n,t),r=new $(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new w(new x([])),s=new $(n,t),r=new $(n,t+1);let i=A();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this._s=n}static ss(t,n){return w.comparator(t.key,n.key)||N(t._s,n._s)}static os(t,n){return N(t._s,n._s)||w.comparator(t.key,n.key)}}/**
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
 */class vd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new U($.ss)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ad(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),r=new $(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new U(N);return n.forEach(r=>{const i=new $(r,0),o=new $(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;w.isDocumentKey(i)||(i=i.child(""));const o=new $(new w(i),0);let a=new U(N);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),f.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){R(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(n.mutations,r=>{const i=new $(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new $(n,0),r=this.gs.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wd{constructor(t){this.Es=t,this.docs=new B(w.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Q.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(t,n,s){let r=pt();const i=new w(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||cl(al(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,r){T()}As(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Ed(this)}getSize(t){return f.resolve(this.size)}}class Ed extends fd{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
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
 */class Td{constructor(t){this.persistence=t,this.Rs=new ae(n=>fr(n),pr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Tr,this.targetCount=0,this.vs=Jt.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),f.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Jt(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.Dn(n),f.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Ps.containsKey(n))}}/**
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
 */class Id{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new lr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Td(this),this.indexManager=new ld,this.remoteDocumentCache=function(s){return new wd(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ud(n),this.Ns=new md(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new yd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new vd(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Sd(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(t,n){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Sd extends hl{constructor(t){super(),this.currentSequenceNumber=t}}class Ir{constructor(t){this.persistence=t,this.Fs=new Tr,this.$s=null}static Bs(t){return new Ir(t)}get Ls(){if(this.$s)return this.$s;throw T()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),f.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const r=w.fromPath(s);return this.qs(t,r).next(i=>{i||n.removeEntry(r,S.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return f.or([()=>f.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
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
 */class Sr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=A(),r=A();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Sr(t,n.fromCache,s,r)}}/**
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
 */class Cd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Oi(t,n,r,s)).next(i=>i||this.Mi(t,n))}ki(t,n){if(Ei(n))return f.resolve(null);let s=ft(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Os(n,null,"F"),s=ft(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=A(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,Os(n,null,"F")):this.Bi(t,u,n,c)}))})))}Oi(t,n,s,r){return Ei(n)||r.isEqual(S.min())?this.Mi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(t,n):(hi()<=_.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(n)),this.Bi(t,o,n,ol(r,-1)))})}Fi(t,n){let s=new U(ya(t));return n.forEach((r,i)=>{yr(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,n){return hi()<=_.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.Ni.getDocumentsMatchingQuery(t,n,vt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bd{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.yt=r,this.qi=new B(N),this.Ui=new ae(i=>fr(i),pr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function Ad(e,t,n,s){return new bd(e,t,n,s)}async function Ua(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=A();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Dd(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let p=f.resolve();return l.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(E=>{const b=c.docVersions.get(g);R(b!==null),E.version.compareTo(b)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=A();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Ba(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function _d(e,t){const n=C(e),s=t.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];t.targetChanges.forEach((h,l)=>{const p=r.get(l);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,h.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(i,h.addedDocuments,l)));let g=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(l)?g=g.withResumeToken(J.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(l,g),function(E,b,k){return E.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,g,h)&&a.push(n.Cs.updateTargetData(i,g))});let c=pt(),u=A();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Nd(i,o,t.documentUpdates).next(h=>{c=h.Wi,u=h.zi})),!s.isEqual(S.min())){const h=n.Cs.getLastRemoteSnapshotVersion(i).next(l=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Nd(e,t,n){let s=A(),r=A();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=pt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function kd(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Rd(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,f.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Nt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(t,s.targetId)),s})}async function Us(e,t,n){const s=C(e),r=s.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!je(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.qi=s.qi.remove(t),s.Ui.delete(r.target)}function Ni(e,t,n){const s=C(e);let r=S.min(),i=A();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=C(a),l=h.Ui.get(u);return l!==void 0?f.resolve(h.qi.get(l)):h.Cs.getTargetData(c,u)}(s,o,ft(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:S.min(),n?i:A())).next(a=>(xd(s,Dl(t),a),{documents:a,Hi:i})))}function xd(e,t,n){let s=e.Ki.get(t)||S.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class ki{constructor(){this.activeTargetIds=ka()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ld{constructor(){this.Lr=new ki,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new ki,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Od{Ur(t){}shutdown(){}}/**
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
 */class Ri{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Md={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Fd{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
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
 */class Vd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,s,r,i){const o=this.ho(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Ns("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,r,i,o){return this.ao(t,n,s,r,i)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+re,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ho(t,n){const s=Md[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,r){return new Promise((i,o)=>{const a=new Yh;a.setWithCredentials(!0),a.listenOnce(zh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case us.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case us.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let l=a.getResponseJson();Array.isArray(l)&&(l=l[0]);const p=l==null?void 0:l.error;if(p&&p.status&&p.message){const g=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(b)>=0?b:d.UNKNOWN}(p.status);o(new m(g,p.message))}else o(new m(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new m(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Hh(),o=Gh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Wh({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const p=new Fd({Hr:E=>{l?v("Connection","Not sending because WebChannel is closed:",E):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",E),u.send(E))},Jr:()=>u.close()}),g=(E,b,k)=>{E.listen(b,tt=>{try{k(tt)}catch(G){setTimeout(()=>{throw G},0)}})};return g(u,Ze.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),g(u,Ze.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),p.io())}),g(u,Ze.EventType.ERROR,E=>{l||(l=!0,Ns("Connection","WebChannel transport errored:",E),p.io(new m(d.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ze.EventType.MESSAGE,E=>{var b;if(!l){const k=E.data[0];R(!!k);const tt=k,G=tt.error||((b=tt[0])===null||b===void 0?void 0:b.error);if(G){v("Connection","WebChannel received error:",G);const Qe=G.status;let Pt=function(Tc){const $r=M[Tc];if($r!==void 0)return Aa($r)}(Qe),We=G.message;Pt===void 0&&(Pt=d.INTERNAL,We="Unknown error status: "+Qe+" with message "+G.message),l=!0,p.io(new m(Pt,We)),u.close()}else v("Connection","WebChannel received:",k),p.ro(k)}}),g(o,Qh.STAT_EVENT,E=>{E.stat===ci.PROXY?v("Connection","Detected buffering proxy"):E.stat===ci.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function ls(){return typeof document<"u"?document:null}/**
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
 */function Gn(e){return new zl(e,!0)}class $a{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class qa{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new $a(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(dt(n.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pd extends qa{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=Yl(this.yt,t),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?ct(i.readTime):S.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=Ps(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=xs(a)?{documents:Zl(r,a)}:{query:td(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=La(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=In(r,i.snapshotVersion.toTimestamp())),o}(this.yt,t);const s=nd(this.yt,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=Ps(this.yt),n.removeTarget=t,this.Bo(n)}}class Ud extends qa{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Jl(t.writeResults,t.commitTime),s=ct(t.commitTime);return this.listener.Zo(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Ps(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Xl(this.yt,s))};this.Bo(n)}}/**
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
 */class Bd extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(d.UNKNOWN,r.toString())})}_o(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class $d{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(dt(n),this.ou=!1):v("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class qd{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ft(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c._u.add(4),await Ge(c),c.gu.set("Unknown"),c._u.delete(4),await zn(c)}(this))})}),this.gu=new $d(s,r)}}async function zn(e){if(Ft(e))for(const t of e.wu)await t(!0)}async function Ge(e){for(const t of e.wu)await t(!1)}function ja(e,t){const n=C(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Ar(n)?br(n):ce(n).ko()&&Cr(n,t))}function Ka(e,t){const n=C(e),s=ce(n);n.du.delete(t),s.ko()&&Ha(n,t),n.du.size===0&&(s.ko()?s.Fo():Ft(n)&&n.gu.set("Unknown"))}function Cr(e,t){e.yu.Ot(t.targetId),ce(e).zo(t)}function Ha(e,t){e.yu.Ot(t),ce(e).Ho(t)}function br(e){e.yu=new jl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),ce(e).start(),e.gu.uu()}function Ar(e){return Ft(e)&&!ce(e).No()&&e.du.size>0}function Ft(e){return C(e)._u.size===0}function Ga(e){e.yu=void 0}async function jd(e){e.du.forEach((t,n)=>{Cr(e,t)})}async function Kd(e,t){Ga(e),Ar(e)?(e.gu.hu(t),br(e)):e.gu.set("Unknown")}async function Hd(e,t,n){if(e.gu.set("Online"),t instanceof xa&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Sn(e,s)}else if(t instanceof rn?e.yu.Kt(t):t instanceof Ra?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(S.min()))try{const s=await Ba(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(J.EMPTY_BYTE_STRING,c.snapshotVersion)),Ha(r,a);const u=new Nt(c.target,a,1,c.sequenceNumber);Cr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await Sn(e,s)}}async function Sn(e,t,n){if(!je(t))throw t;e._u.add(1),await Ge(e),e.gu.set("Offline"),n||(n=()=>Ba(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await zn(e)})}function za(e,t){return t().catch(n=>Sn(e,n,t))}async function Qn(e){const t=C(e),n=Et(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Gd(t);)try{const r=await kd(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,zd(t,r)}catch(r){await Sn(t,r)}Qa(t)&&Wa(t)}function Gd(e){return Ft(e)&&e.fu.length<10}function zd(e,t){e.fu.push(t);const n=Et(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Qa(e){return Ft(e)&&!Et(e).No()&&e.fu.length>0}function Wa(e){Et(e).start()}async function Qd(e){Et(e).eu()}async function Wd(e){const t=Et(e);for(const n of e.fu)t.Xo(n.mutations)}async function Yd(e,t,n){const s=e.fu.shift(),r=Er.from(s,t,n);await za(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Qn(e)}async function Xd(e,t){t&&Et(e).Yo&&await async function(n,s){if(r=s.code,Pl(r)&&r!==d.ABORTED){const i=n.fu.shift();Et(n).Mo(),await za(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qn(n)}var r}(e,t),Qa(e)&&Wa(e)}async function xi(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=Ft(n);n._u.add(3),await Ge(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await zn(n)}async function Jd(e,t){const n=C(e);t?(n._u.delete(2),await zn(n)):t||(n._u.add(2),await Ge(n),n.gu.set("Unknown"))}function ce(e){return e.pu||(e.pu=function(t,n,s){const r=C(t);return r.su(),new Pd(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:jd.bind(null,e),Zr:Kd.bind(null,e),Wo:Hd.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),Ar(e)?br(e):e.gu.set("Unknown")):(await e.pu.stop(),Ga(e))})),e.pu}function Et(e){return e.Iu||(e.Iu=function(t,n,s){const r=C(t);return r.su(),new Ud(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(e.datastore,e.asyncQueue,{Yr:Qd.bind(null,e),Zr:Xd.bind(null,e),tu:Wd.bind(null,e),Zo:Yd.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Qn(e)):(await e.Iu.stop(),e.fu.length>0&&(v("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
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
 */class Dr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Dr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _r(e,t){if(dt("AsyncQueue",`${t}: ${e}`),je(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ht{constructor(t){this.comparator=t?(n,s)=>t(n,s)||w.comparator(n.key,s.key):(n,s)=>w.comparator(n.key,s.key),this.keyedMap=de(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new Ht(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ht;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Li{constructor(){this.Tu=new B(w.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):T():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Zt{constructor(t,n,s,r,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zt(t,n,Ht.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Zd{constructor(){this.Au=void 0,this.listeners=[]}}class tf{constructor(){this.queries=new ae(t=>ma(t),qn),this.onlineState="Unknown",this.Ru=new Set}}async function ef(e,t){const n=C(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Zd),r)try{i.Au=await n.onListen(s)}catch(o){const a=_r(o,`Initialization of query '${Ms(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Nr(n)}async function nf(e,t){const n=C(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function sf(e,t){const n=C(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Nr(n)}function rf(e,t,n){const s=C(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function Nr(e){e.Ru.forEach(t=>{t.next()})}class of{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
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
 */class Ya{constructor(t){this.key=t}}class Xa{constructor(t){this.key=t}}class af{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=A(),this.mutatedKeys=A(),this.Gu=ya(t),this.Qu=new Ht(this.Gu)}get ju(){return this.qu}Wu(t,n){const s=n?n.zu:new Li,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,l)=>{const p=r.get(h),g=yr(this.query,l)?l:null,E=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;p&&g?p.data.isEqual(g.data)?E!==b&&(s.track({type:3,doc:g}),k=!0):this.Hu(p,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),k=!0):p&&!g&&(s.track({type:1,doc:p}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Eu();i.sort((u,h)=>function(l,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return g(l)-g(p)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Zt(this.query,t.Qu,r,i,t.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Li,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=A(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new Xa(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new Ya(s))}),n}tc(t){this.qu=t.Hi,this.Ku=A();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Zt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class cf{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class uf{constructor(t){this.key=t,this.nc=!1}}class hf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ae(a=>ma(a),qn),this.rc=new Map,this.oc=new Set,this.uc=new B(w.comparator),this.cc=new Map,this.ac=new Tr,this.hc={},this.lc=new Map,this.fc=Jt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function lf(e,t){const n=Tf(e);let s,r;const i=n.ic.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Rd(n.localStore,ft(t));n.isPrimaryClient&&ja(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await df(n,t,s,a==="current",o.resumeToken)}return r}async function df(e,t,n,s,r){e._c=(l,p,g)=>async function(E,b,k,tt){let G=b.view.Wu(k);G.$i&&(G=await Ni(E.localStore,b.query,!1).then(({documents:We})=>b.view.Wu(We,G)));const Qe=tt&&tt.targetChanges.get(b.targetId),Pt=b.view.applyChanges(G,E.isPrimaryClient,Qe);return Mi(E,b.targetId,Pt.Xu),Pt.snapshot}(e,l,p,g);const i=await Ni(e.localStore,t,!0),o=new af(t,i.Hi),a=o.Wu(i.documents),c=He.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,c);Mi(e,n,u.Xu);const h=new cf(t,n,o);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function ff(e,t){const n=C(e),s=n.ic.get(t),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!qn(i,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ka(n.remoteStore,s.targetId),Bs(n,s.targetId)}).catch(qe)):(Bs(n,s.targetId),await Us(n.localStore,s.targetId,!0))}async function pf(e,t,n){const s=If(e);try{const r=await function(i,o){const a=C(i),c=P.now(),u=o.reduce((p,g)=>p.add(g.key),A());let h,l;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=pt(),E=A();return a.Gi.getEntries(p,u).next(b=>{g=b,g.forEach((k,tt)=>{tt.isValidDocument()||(E=E.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(b=>{h=b;const k=[];for(const tt of o){const G=Ml(tt,h.get(tt.key).overlayedDocument);G!=null&&k.push(new Mt(tt.key,G,pa(G.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,k,o)}).next(b=>{l=b;const k=b.applyToLocalDocumentSet(h,E);return a.documentOverlayCache.saveOverlays(p,b.batchId,k)})}).then(()=>({batchId:l.batchId,changes:_a(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ze(s,r.changes),await Qn(s.remoteStore)}catch(r){const i=_r(r,"Failed to persist write");n.reject(i)}}async function Ja(e,t){const n=C(e);try{const s=await _d(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(R(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?R(o.nc):r.removedDocuments.size>0&&(R(o.nc),o.nc=!1))}),await ze(n,s,t)}catch(s){await qe(s)}}function Oi(e,t,n){const s=C(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.bu(o)&&(c=!0)}),c&&Nr(a)}(s.eventManager,t),r.length&&s.sc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function gf(e,t,n){const s=C(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.cc.get(t),i=r&&r.key;if(i){let o=new B(w.comparator);o=o.insert(i,Q.newNoDocument(i,S.min()));const a=A().add(i),c=new Hn(S.min(),new Map,new U(N),o,a);await Ja(s,c),s.uc=s.uc.remove(i),s.cc.delete(t),kr(s)}else await Us(s.localStore,t,!1).then(()=>Bs(s,t,n)).catch(qe)}async function mf(e,t){const n=C(e),s=t.batch.batchId;try{const r=await Dd(n.localStore,t);tc(n,s,null),Za(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ze(n,r)}catch(r){await qe(r)}}async function yf(e,t,n){const s=C(e);try{const r=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(R(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);tc(s,t,n),Za(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await ze(s,r)}catch(r){await qe(r)}}function Za(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function tc(e,t,n){const s=C(e);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.hc[s.currentUser.toKey()]=r}}function Bs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.rc.get(t))e.ic.delete(s),n&&e.sc.wc(s,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(s=>{e.ac.containsKey(s)||ec(e,s)})}function ec(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(Ka(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),kr(e))}function Mi(e,t,n){for(const s of n)s instanceof Ya?(e.ac.addReference(s.key,t),vf(e,s)):s instanceof Xa?(v("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,t),e.ac.containsKey(s.key)||ec(e,s.key)):T()}function vf(e,t){const n=t.key,s=n.path.canonicalString();e.uc.get(n)||e.oc.has(s)||(v("SyncEngine","New document in limbo: "+n),e.oc.add(s),kr(e))}function kr(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new w(x.fromString(t)),s=e.fc.next();e.cc.set(s,new uf(n)),e.uc=e.uc.insert(n,s),ja(e.remoteStore,new Nt(ft(gr(n.path)),s,2,lr.at))}}async function ze(e,t,n){const s=C(e),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,t,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const h=Sr.Ci(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,l=>f.forEach(l.Si,p=>u.persistence.referenceDelegate.addReference(h,l.targetId,p)).next(()=>f.forEach(l.Di,p=>u.persistence.referenceDelegate.removeReference(h,l.targetId,p)))))}catch(h){if(!je(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const p=u.qi.get(l),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(l,E)}}}(s.localStore,i))}async function wf(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await Ua(n.localStore,t);n.currentUser=t,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ze(n,s.ji)}}function Ef(e,t){const n=C(e),s=n.cc.get(t);if(s&&s.nc)return A().add(s.key);{let r=A();const i=n.rc.get(t);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Tf(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ja.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ef.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=gf.bind(null,t),t.sc.Wo=sf.bind(null,t.eventManager),t.sc.wc=rf.bind(null,t.eventManager),t}function If(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yf.bind(null,t),t}class Sf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Gn(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return Ad(this.persistence,new Cd,t.initialUser,this.yt)}yc(t){return new Id(Ir.Bs,this.yt)}gc(t){return new Ld}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Oi(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wf.bind(null,this.syncEngine),await Jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tf}createDatastore(t){const n=Gn(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Vd(r));var r;return function(i,o,a,c){return new Bd(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Oi(this.syncEngine,a,0),o=Ri.C()?new Ri:new Od,new qd(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const h=new hf(s,r,i,o,a,c);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);v("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ge(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function nc(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bf(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fi(e){if(!w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vi(e){if(w.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Wn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Gt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wn(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Pi=new Map;class Ui{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,bf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Yn{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ui({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ui(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xh;switch(n.type){case"gapi":const s=n.client;return new el(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Pi.get(t);n&&(v("ComponentProvider","Removing Datastore"),Pi.delete(t),n.terminate())}(this),Promise.resolve()}}function Af(e,t,n,s={}){var r;const i=(e=Gt(e,Yn))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&Ns("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=z.MOCK_USER;else{o=Mc(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new z(c)}e._authCredentials=new Jh(new sa(o,a))}}/**
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
 */class et{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new et(this.firestore,t,this._key)}}class Vt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Vt(this.firestore,t,this._query)}}class yt extends Vt{constructor(t,n,s){super(t,n,gr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new et(this.firestore,null,new w(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function Rr(e,t,...n){if(e=kt(e),nc("collection","path",t),e instanceof Yn){const s=x.fromString(t,...n);return Vi(s),new yt(e,null,s)}{if(!(e instanceof et||e instanceof yt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Vi(s),new yt(e.firestore,null,s)}}function sc(e,t,...n){if(e=kt(e),arguments.length===1&&(t=ra.R()),nc("doc","path",t),e instanceof Yn){const s=x.fromString(t,...n);return Fi(s),new et(e,null,new w(s))}{if(!(e instanceof et||e instanceof yt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return Fi(s),new et(e.firestore,e instanceof yt?e.converter:null,new w(s))}}/**
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
 */class Df{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class _f{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=z.UNAUTHENTICATED,this.clientId=ra.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=_r(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Nf(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ua(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function kf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Rf(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>xi(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>xi(t.remoteStore,i)),e.onlineComponents=t}async function Rf(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Nf(e,new Sf)),e.offlineComponents}async function rc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await kf(e,new Cf)),e.onlineComponents}function xf(e){return rc(e).then(t=>t.syncEngine)}async function Bi(e){const t=await rc(e),n=t.eventManager;return n.onListen=lf.bind(null,t.syncEngine),n.onUnlisten=ff.bind(null,t.syncEngine),n}class Lf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new $a(this,"async_queue_retry"),this.Wc=()=>{const n=ls();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=ls();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=ls();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new _t;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!je(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw dt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(t,n,s){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const r=Dr.createAndSchedule(this,t,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&T()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function $i(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class xe extends Yn{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new Lf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oc(this),this._firestoreClient.terminate()}}function Of(e,t){const n=typeof e=="object"?e:Vu(),s=typeof e=="string"?e:t||"(default)",r=Lu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=xc("firestore");i&&Af(r,...i)}return r}function ic(e){return e._firestoreClient||oc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new ll(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new _f(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new te(J.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new te(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class xr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ac{constructor(t){this._methodName=t}}/**
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
 */class Lr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
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
 */const Mf=/^__.*__$/;class Ff{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Mt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Ke(t,this.data,n,this.fieldTransforms)}}function cc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Or{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Or(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.ua(t),r}ca(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ia({path:s,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Cn(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if(cc(this.sa)&&Mf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Vf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=s||Gn(t)}da(t,n,s,r=!1){return new Or({sa:t,methodName:n,fa:s,path:W.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function uc(e){const t=e._freezeSettings(),n=Gn(e._databaseId);return new Vf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pf(e,t,n,s,r,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,r);dc("Data must be an object, but it was:",o,s);const a=hc(s,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const p=Bf(t,l,n);if(!o.contains(p))throw new m(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qf(h,p)||h.push(p)}c=new ot(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new Ff(new st(a),c,u)}function Uf(e,t,n,s=!1){return Mr(n,e.da(s?4:3,t))}function Mr(e,t){if(lc(e=kt(e)))return dc("Unsupported field value:",t,e),hc(e,t);if(e instanceof ac)return function(n,s){if(!cc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Mr(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Nl(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=P.fromDate(n);return{timestampValue:In(s.yt,r)}}if(n instanceof P){const r=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:In(s.yt,r)}}if(n instanceof Lr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof te)return{bytesValue:La(s.yt,n._byteString)};if(n instanceof et){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:wr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Wn(n)}`)}(e,t)}function hc(e,t){const n={};return ia(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ie(e,(s,r)=>{const i=Mr(r,t.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function lc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof Lr||e instanceof te||e instanceof et||e instanceof ac)}function dc(e,t,n){if(!lc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Wn(n);throw s==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+s)}}function Bf(e,t,n){if((t=kt(t))instanceof xr)return t._internalPath;if(typeof t=="string")return fc(e,t);throw Cn("Field path arguments must be of type string or ",e,!1,void 0,n)}const $f=new RegExp("[~\\*/\\[\\]]");function fc(e,t,n){if(t.search($f)>=0)throw Cn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xr(...t.split("."))._internalPath}catch{throw Cn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new m(d.INVALID_ARGUMENT,a+e+c)}function qf(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class pc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Fr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jf extends pc{data(){return super.data()}}function Fr(e,t){return typeof t=="string"?fc(e,t):t instanceof xr?t._internalPath:t._delegate._internalPath}/**
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
 */function Kf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vr{}class gc extends Vr{}function Hf(e,t,...n){let s=[];t instanceof Vr&&s.push(t),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Ur).length,o=r.filter(a=>a instanceof Pr).length;if(i>1||i>0&&o>0)throw new m(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)e=r._apply(e);return e}class Pr extends gc{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Pr(t,n,s)}_apply(t){const n=this._parse(t);return mc(t._query,n),new Vt(t.firestore,t.converter,Ls(t._query,n))}_parse(t){const n=uc(t.firestore);return function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ji(h,u);const p=[];for(const g of h)p.push(qi(a,r,g));l={arrayValue:{values:p}}}else l=qi(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ji(h,u),l=Uf(o,i,h,u==="in"||u==="not-in");return V.create(c,u,l)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ur extends Vr{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ur(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:rt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)mc(i,a),i=Ls(i,a)}(t._query,n),new Vt(t.firestore,t.converter,Ls(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Br extends gc{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Br(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new jt(r,i);return function(a,c){if(mr(a)===null){const u=$n(a);u!==null&&yc(a,u,c.field)}}(s,o),o}(t._query,this._field,this._direction);return new Vt(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new oe(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Gf(e,t="asc"){const n=t,s=Fr("orderBy",e);return Br._create(s,n)}function qi(e,t,n){if(typeof(n=kt(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ga(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(x.fromString(n));if(!w.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return fi(e,new w(s))}if(n instanceof et)return fi(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wn(n)}.`)}function ji(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new m(d.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function mc(e,t){if(t.isInequality()){const s=$n(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=mr(e);i!==null&&yc(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function yc(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class zf{convertValue(t,n="none"){switch(Lt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){const s={};return ie(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new Lr(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=aa(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(_e(t));default:return null}}convertTimestamp(t){const n=wt(t);return new P(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);R(Pa(s));const r=new De(s.get(1),s.get(3)),i=new w(s.popFirst(5));return r.isEqual(n)||dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Qf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
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
 */class fe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vc extends pc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new on(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Fr("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class on extends vc{data(t={}){return super.data(t)}}class Wf{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new fe(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new on(this._firestore,this._userDataWriter,s.key,s,new fe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new on(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new on(s._firestore,s._userDataWriter,o.doc.key,o.doc,new fe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Yf(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Yf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class wc extends zf{constructor(t){super(),this.firestore=t}convertBytes(t){return new te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new et(this.firestore,null,n)}}function Xf(e){return Ec(Gt(e.firestore,xe),[new vr(e._key,at.none())])}function Jf(e,t){const n=Gt(e.firestore,xe),s=sc(e),r=Qf(e.converter,t);return Ec(n,[Pf(uc(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then(()=>s)}function Zf(e,...t){var n,s,r;e=kt(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||$i(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($i(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(e instanceof et)u=Gt(e.firestore,xe),h=gr(e._key.path),c={next:l=>{t[o]&&t[o](tp(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Gt(e,Vt);u=Gt(l.firestore,xe),h=l._query;const p=new wc(u);c={next:g=>{t[o]&&t[o](new Wf(u,p,l,g))},error:t[o+1],complete:t[o+2]},Kf(e._query)}return function(l,p,g,E){const b=new Df(E),k=new of(p,b,g);return l.asyncQueue.enqueueAndForget(async()=>ef(await Bi(l),k)),()=>{b.bc(),l.asyncQueue.enqueueAndForget(async()=>nf(await Bi(l),k))}}(ic(u),h,a,c)}function Ec(e,t){return function(n,s){const r=new _t;return n.asyncQueue.enqueueAndForget(async()=>pf(await xf(n),s,r)),r.promise}(ic(e),t)}function tp(e,t,n){const s=n.docs.get(t._key),r=new wc(e);return new vc(e,r,t._key,s,new fe(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){re=n})(Fu),un(new we("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new xe(new Zh(n.getProvider("auth-internal")),new sl(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new De(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),qt(ui,"3.8.0",e),qt(ui,"3.8.0","esm2017")})();const ep={apiKey:"AIzaSyBDk6kgzyvVZBc4QAqjMvmbxF-r8SBu1YQ",authDomain:"fir-firestore-tutorial-8f5d5.firebaseapp.com",projectId:"fir-firestore-tutorial-8f5d5",storageBucket:"fir-firestore-tutorial-8f5d5.appspot.com",messagingSenderId:"29874342677",appId:"1:29874342677:web:e99939bc71673dfe33f71c"},np=Xi(ep),Xn=Of(np);Rr(Xn,"Cafes");const $s=document.querySelector("#cafe-list"),ve=document.querySelector("#add-cafe-form");function sp(e){let t=document.createElement("li"),n=document.createElement("span"),s=document.createElement("span"),r=document.createElement("div");t.setAttribute("data-id",e.id),n.textContent=e.data().Name,s.textContent=e.data().City,r.textContent="x",t.appendChild(n),t.appendChild(s),t.appendChild(r),$s.appendChild(t),r.addEventListener("click",i=>{i.stopPropagation();let o=i.target.parentElement.getAttribute("data-id");ip(o)})}(async function(){try{const t=Rr(Xn,"Cafes"),n=await Hf(t,Gf("Name"));Zf(n,s=>{s.docChanges().forEach(r=>{if(r.type==="added")sp(r.doc);else if(r.type==="removed"){let i=$s.querySelector("[data-id="+r.doc.id+"]");$s.removeChild(i)}})})}catch(t){console.log("Error retreiving documents:",t)}})();async function rp(){try{const e=await Jf(Rr(Xn,"Cafes"),{Name:ve.name.value,City:ve.city.value});console.log("Document written with ID",e.id)}catch(e){console.error("Error adding document",e)}}ve.addEventListener("submit",e=>{e.preventDefault(),rp(),ve.name.value="",ve.city.value=""});async function ip(e){await Xf(sc(Xn,"Cafes",e))}
