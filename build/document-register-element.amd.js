/*! (C) WebReflection Mit Style License */
define(function(){"use strict";function Ct(){var e=dt.splice(0,dt.length);vt=0;while(e.length)e.shift().call(null,e.shift())}function kt(e,t){for(var n=0,r=e.length;n<r;n++)It(e[n],t)}function Lt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Nt(r,N[Ot(r)])}function At(e){return function(t){nt(t)&&(It(t,e),kt(t.querySelectorAll(C),e))}}function Ot(e){var t=ot.call(e,"is"),n=e.nodeName.toUpperCase(),r=L.call(T,t?E+t.toUpperCase():w+n);return t&&-1<r&&!Mt(n,t)?-1:r}function Mt(e,t){return-1<C.indexOf(e+'[is="'+t+'"]')}function _t(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;bt&&(!i||i===t)&&t[a]&&r!=="style"&&e.prevValue!==e.newValue&&t[a](r,n===e[d]?null:e.prevValue,n===e[m]?null:e.newValue)}function Dt(e){var t=At(e);return function(e){dt.push(t,e.target),vt&&clearTimeout(vt),vt=setTimeout(Ct,1)}}function Pt(e){yt&&(yt=!1,e.currentTarget.removeEventListener(y,Pt)),kt((e.target||document).querySelectorAll(C),e.detail===o?o:i),et&&jt()}function Ht(e,t){var n=this;ft.call(n,e,t),wt.call(n,{target:n})}function Bt(e,t){G(e,t),xt?xt.observe(e,ht):(gt&&(e.setAttribute=Ht,e[n]=St(e),e[r](b,wt)),e[r](g,_t)),e[h]&&bt&&(e.created=!0,e[h](),e.created=!1)}function jt(){for(var e,t=0,n=rt.length;t<n;t++)e=rt[t],k.contains(e)||(n--,rt.splice(t--,1),It(e,o))}function Ft(e){throw new Error("A "+e+" type is already registered")}function It(e,t){var n,r=Ot(e);-1<r&&(Tt(e,N[r]),r=0,t===i&&!e[i]?(e[o]=!1,e[i]=!0,r=1,et&&L.call(rt,e)<0&&rt.push(e)):t===o&&!e[o]&&(e[i]=!1,e[o]=!0,r=1),r&&(n=e[t+s])&&n.call(e))}function qt(){}function Rt(t,n,r){var i=r&&r[u]||"",s=n.prototype,o=Q(s),d=n.observedAttributes||D,v={prototype:o};tt(o,h,{value:function(){if(V)V=!1;else if(!this[q]){this[q]=!0,new n(this),s[h]&&s[h].call(this);var e=$[K.get(n)];(!U||e.create.length>1)&&zt(this)}}}),tt(o,a,{value:function(e){-1<L.call(d,e)&&s[a].apply(this,arguments)}}),s[l]&&tt(o,f,{value:s[l]}),s[c]&&tt(o,p,{value:s[c]}),i&&(v[u]=i),document[e](t,v),t=t.toUpperCase(),$[t]={constructor:n,create:i?[i,t]:[t]},K.set(n,t),Wt(t),J[t].r()}function Ut(e){var t=$[e.toUpperCase()];return t&&t.constructor}function zt(e){var t=e[a],n=t?e.attributes:D,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function Wt(e){return e=e.toUpperCase(),e in J||(J[e]={},J[e].p=new X(function(t){J[e].r=t})),J[e].p}function Xt(){R&&delete window.customElements,_(window,"customElements",{configurable:!0,value:new qt}),_(window,"CustomElementRegistry",{configurable:!0,value:qt});for(var e=function(e){var t=window[e];if(t){window[e]=function(n){var r,i;return n||(n=this),n[q]||(V=!0,r=$[K.get(n.constructor)],i=U&&r.create.length===1,n=i?Reflect.construct(t,D,r.constructor):document.createElement.apply(document,r.create),n[q]=!0,V=!1,i||zt(n)),n},window[e].prototype=t.prototype;try{t.prototype.constructor=window[e]}catch(n){I=!0,_(t,q,{value:window[e]})}}},n=t.get(/^HTML/),r=n.length;r--;e(n[r]));document.createElement=function(e,t){var n=typeof t=="string"?t:t&&t.is||"";return n?ct.call(this,e,n):ct.call(this,e)}}var e="registerElement",t=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in i)e.test(n)&&t.push(n);return t},r=function(e,t){t=t.toLowerCase(),t in i||(i[e]=(i[e]||[]).concat(t),i[t]=i[t.toUpperCase()]=e)},i=(Object.create||Object)(null),s={},o,u,a,f;for(u in e)for(f in e[u]){a=e[u][f],i[f]=a;for(o=0;o<a.length;o++)i[a[o].toLowerCase()]=i[a[o].toUpperCase()]=f}return s.get=function(r){return typeof r=="string"?i[r]||(t.test(r)?[]:""):n(r)},s.set=function(n,i){return t.test(n)?r(n,i):r(i,n),s},s}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}}),n="__"+e+(Math.random()*1e5>>0),r="addEventListener",i="attached",s="Callback",o="detached",u="extends",a="attributeChanged"+s,f=i+s,l="connected"+s,c="disconnected"+s,h="created"+s,p=o+s,d="ADDITION",v="MODIFICATION",m="REMOVAL",g="DOMAttrModified",y="DOMContentLoaded",b="DOMSubtreeModified",w="<",E="=",S=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,x=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],T=[],N=[],C="",k=document.documentElement,L=T.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},A=Object.prototype,O=A.hasOwnProperty,M=A.isPrototypeOf,_=Object.defineProperty,D=[],P=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,B=Object.getPrototypeOf,j=Object.setPrototypeOf,F=!!Object.__proto__,I=!1,q="__dreCEv1",R=window.customElements,U=!!(R&&R.define&&R.get&&R.whenDefined),z=Object.create||Object,W=window.Map||function(){var t=[],n=[],r;return{get:function(e){return n[L.call(t,e)]},set:function(e,i){r=L.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},X=window.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},V=!1,$=z(null),J=z(null),K=new W,Q=Object.create||function $t(e){return e?($t.prototype=e,new $t):this},G=j||(F?function(e,t){return e.__proto__=t,e}:H&&P?function(){function e(e,t){for(var n,r=H(t),i=0,s=r.length;i<s;i++)n=r[i],O.call(e,n)||_(e,n,P(t,n))}return function(t,n){do e(t,n);while((n=B(n))&&!M.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Y=window.MutationObserver||window.WebKitMutationObserver,Z=(window.HTMLElement||window.Element||window.Node).prototype,et=!M.call(Z,k),tt=et?function(e,t,n){return e[t]=n.value,e}:_,nt=et?function(e){return e.nodeType===1}:function(e){return M.call(Z,e)},rt=et&&[],it=Z.cloneNode,st=Z.dispatchEvent,ot=Z.getAttribute,ut=Z.hasAttribute,at=Z.removeAttribute,ft=Z.setAttribute,lt=document.createElement,ct=lt,ht=Y&&{attributes:!0,characterData:!0,attributeOldValue:!0},pt=Y||function(e){gt=!1,k.removeEventListener(g,pt)},dt,vt=0,mt=!1,gt=!0,yt=!0,bt=!0,wt,Et,St,xt,Tt,Nt;e in document||(j||F?(Tt=function(e,t){M.call(t,e)||Bt(e,t)},Nt=Bt):(Tt=function(e,t){e[n]||(e[n]=Object(!0),Bt(e,t))},Nt=Tt),et?(gt=!1,function(){var e=P(Z,r),t=e.value,i=function(e){var t=new CustomEvent(g,{bubbles:!0});t.attrName=e,t.prevValue=ot.call(this,e),t.newValue=null,t[m]=t.attrChange=2,at.call(this,e),st.call(this,t)},s=function(e,t){var n=ut.call(this,e),r=n&&ot.call(this,e),i=new CustomEvent(g,{bubbles:!0});ft.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[v]=i.attrChange=1:i[d]=i.attrChange=0,st.call(this,i)},o=function(e){var t=e.currentTarget,r=t[n],i=e.propertyName,s;r.hasOwnProperty(i)&&(r=r[i],s=new CustomEvent(g,{bubbles:!0}),s.attrName=r.name,s.prevValue=r.value||null,s.newValue=r.value=t[i]||null,s.prevValue==null?s[d]=s.attrChange=0:s[v]=s.attrChange=1,st.call(t,s))};e.value=function(e,r,u){e===g&&this[a]&&this.setAttribute!==s&&(this[n]={className:{name:"class",value:this.className}},this.setAttribute=s,this.removeAttribute=i,t.call(this,"propertychange",o)),t.call(this,e,r,u)},_(Z,r,e)}()):Y||(k[r](g,pt),k.setAttribute(n,1),k.removeAttribute(n),gt&&(wt=function(e){var t=this,r,i,s;if(t===e.target){r=t[n],t[n]=i=St(t);for(s in i){if(!(s in r))return Et(0,t,s,r[s],i[s],d);if(i[s]!==r[s])return Et(1,t,s,r[s],i[s],v)}for(s in r)if(!(s in i))return Et(2,t,s,r[s],i[s],m)}},Et=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,_t(o)},St=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),document[e]=function(t,n){h=t.toUpperCase(),mt||(mt=!0,Y?(xt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Y(function(r){for(var i,s,o,u=0,f=r.length;u<f;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,bt&&s[a]&&i.attributeName!=="style"&&(o=ot.call(s,i.attributeName),o!==i.oldValue&&s[a](i.attributeName,i.oldValue,o)))})}(At(i),At(o)),xt.observe(document,{childList:!0,subtree:!0})):(dt=[],document[r]("DOMNodeInserted",Dt(i)),document[r]("DOMNodeRemoved",Dt(o))),document[r](y,Pt),document[r]("readystatechange",Pt),Z.cloneNode=function(e){var t=it.call(this,!!e),n=Ot(t);return-1<n&&Nt(t,N[n]),e&&Lt(t.querySelectorAll(C)),t}),-2<L.call(T,E+h)+L.call(T,w+h)&&Ft(t);if(!S.test(h)||-1<L.call(x,h))throw new Error("The type "+t+" is invalid");var s=function(){return l?document.createElement(c,h):document.createElement(c)},f=n||A,l=O.call(f,u),c=l?n[u].toUpperCase():h,h,p;return l&&-1<L.call(T,w+c)&&Ft(c),p=T.push((l?E:w)+h)-1,C=C.concat(C.length?",":"",l?c+'[is="'+t.toLowerCase()+'"]':c),s.prototype=N[p]=O.call(f,"prototype")?f.prototype:Q(Z),kt(document.querySelectorAll(C),i),s},document.createElement=ct=function(e,t){var n=typeof t=="string"?t:"",r=n?lt.call(document,e,n):lt.call(document,e),i=""+e,s=L.call(T,(n?E:w)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=Mt(i.toUpperCase(),n))),bt=!document.createElement.innerHTMLHelper,o&&Nt(r,N[s]),r}),qt.prototype={constructor:qt,define:U?function(e,t,n){n?Rt(e,t,n):(R.define(e,t),e=e.toUpperCase(),$[e]={constructor:t,create:[e]},K.set(t,e))}:Rt,get:U?function(e){return R.get(e)||Ut(e)}:Ut,whenDefined:U?function(e){return X.race([R.whenDefined(e),Wt(e)])}:Wt},R||Xt();try{(function(e,t,n){t[u]="a",e.prototype=HTMLAnchorElement.prototype,R.define(n,e,t);if(document.createElement(n).getAttribute("is")!==n)throw t})(function Jt(){return Reflect.construct(HTMLAnchorElement,[],Jt)},{},"document-register-element-a")}catch(Vt){Xt()}});