/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
define(function(){"use strict";function Mt(){var e=yt.splice(0,yt.length);bt=0;while(e.length)e.shift().call(null,e.shift())}function _t(e,t){for(var n=0,r=e.length;n<r;n++)Wt(e[n],t)}function Dt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Ot(r,k[Ht(r)])}function Pt(e){return function(t){st(t)&&(Wt(t,e),_t(t.querySelectorAll(L),e))}}function Ht(e){var t=lt.call(e,"is"),n=e.nodeName.toUpperCase(),r=O.call(C,t?x+t.toUpperCase():S+n);return t&&-1<r&&!Bt(n,t)?-1:r}function Bt(e,t){return-1<L.indexOf(e+'[is="'+t+'"]')}function jt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[m]||2,o=e[y]||3;xt&&(!i||i===t)&&t[l]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[l](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ft(e){var t=Pt(e);return function(e){yt.push(t,e.target),bt&&clearTimeout(bt),bt=setTimeout(Mt,1)}}function It(t){St&&(St=!1,t.currentTarget.removeEventListener(w,It)),_t((t.target||e).querySelectorAll(L),t.detail===a?a:o),rt&&Ut()}function qt(e,t){var n=this;pt.call(n,e,t),Tt.call(n,{target:n})}function Rt(e,t){et(e,t),kt?kt.observe(e,mt):(Et&&(e.setAttribute=qt,e[i]=Ct(e),e[s](E,Tt)),e[s](b,jt)),e[d]&&xt&&(e.created=!0,e[d](),e.created=!1)}function Ut(){for(var e,t=0,n=ot.length;t<n;t++)e=ot[t],A.contains(e)||(n--,ot.splice(t--,1),Wt(e,a))}function zt(e){throw new Error("A "+e+" type is already registered")}function Wt(e,t){var n,r=Ht(e);-1<r&&(At(e,k[r]),r=0,t===o&&!e[o]?(e[a]=!1,e[o]=!0,r=1,rt&&O.call(ot,e)<0&&ot.push(e)):t===a&&!e[a]&&(e[o]=!1,e[a]=!0,r=1),r&&(n=e[t+u])&&n.call(e))}function Xt(){}function Vt(t,n,i){var s=i&&i[f]||"",o=n.prototype,u=Z(o),a=n.observedAttributes||H,m={prototype:u};it(u,d,{value:function(){if(J)J=!1;else if(!this[U]){this[U]=!0,new n(this),o[d]&&o[d].call(this);var e=K[G.get(n)];(!W||e.create.length>1)&&Kt(this)}}}),it(u,l,{value:function(e){-1<O.call(a,e)&&o[l].apply(this,arguments)}}),o[h]&&it(u,c,{value:o[h]}),o[p]&&it(u,v,{value:o[p]}),s&&(m[f]=s),t=t.toUpperCase(),K[t]={constructor:n,create:s?[s,Y(t)]:[t]},G.set(n,t),e[r](t.toLowerCase(),m),Qt(t),Q[t].r()}function $t(e){var t=K[e.toUpperCase()];return t&&t.constructor}function Jt(e){return typeof e=="string"?e:e&&e.is||""}function Kt(e){var t=e[l],n=t?e.attributes:H,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function Qt(e){return e=e.toUpperCase(),e in Q||(Q[e]={},Q[e].p=new $(function(t){Q[e].r=t})),Q[e].p}function Gt(){z&&delete window.customElements,P(window,"customElements",{configurable:!0,value:new Xt}),P(window,"CustomElementRegistry",{configurable:!0,value:Xt});for(var t=function(t){var n=window[t];if(n){window[t]=function(r){var i,s;return r||(r=this),r[U]||(J=!0,i=K[G.get(r.constructor)],s=W&&i.create.length===1,r=s?Reflect.construct(n,H,i.constructor):e.createElement.apply(e,i.create),r[U]=!0,J=!1,s||Kt(r)),r},window[t].prototype=n.prototype;try{n.prototype.constructor=window[t]}catch(r){R=!0,P(n,U,{value:window[t]})}}},r=n.get(/^HTML[A-Z]*[a-z]/),i=r.length;i--;t(r[i]));e.createElement=function(e,t){var n=Jt(t);return n?vt.call(this,e,Y(n)):vt.call(this,e)}}var e=window.document,t=window.Object,n=function(e){var n=/^[A-Z]+[a-z]/,r=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(t.create||t)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(t){return typeof t=="string"?s[t]||(n.test(t)?[]:""):r(t)},o.set=function(t,r){return n.test(t)?i(t,r):i(r,t),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}}),r="registerElement",i="__"+r+(window.Math.random()*1e5>>0),s="addEventListener",o="attached",u="Callback",a="detached",f="extends",l="attributeChanged"+u,c=o+u,h="connected"+u,p="disconnected"+u,d="created"+u,v=a+u,m="ADDITION",g="MODIFICATION",y="REMOVAL",b="DOMAttrModified",w="DOMContentLoaded",E="DOMSubtreeModified",S="<",x="=",T=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,N=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],C=[],k=[],L="",A=e.documentElement,O=C.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},M=t.prototype,_=M.hasOwnProperty,D=M.isPrototypeOf,P=t.defineProperty,H=[],B=t.getOwnPropertyDescriptor,j=t.getOwnPropertyNames,F=t.getPrototypeOf,I=t.setPrototypeOf,q=!!t.__proto__,R=!1,U="__dreCEv1",z=window.customElements,W=!!(z&&z.define&&z.get&&z.whenDefined),X=t.create||t,V=window.Map||function(){var t=[],n=[],r;return{get:function(e){return n[O.call(t,e)]},set:function(e,i){r=O.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},$=window.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},J=!1,K=X(null),Q=X(null),G=new V,Y=String,Z=t.create||function en(e){return e?(en.prototype=e,new en):this},et=I||(q?function(e,t){return e.__proto__=t,e}:j&&B?function(){function e(e,t){for(var n,r=j(t),i=0,s=r.length;i<s;i++)n=r[i],_.call(e,n)||P(e,n,B(t,n))}return function(t,n){do e(t,n);while((n=F(n))&&!D.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),tt=window.MutationObserver||window.WebKitMutationObserver,nt=(window.HTMLElement||window.Element||window.Node).prototype,rt=!D.call(nt,A),it=rt?function(e,t,n){return e[t]=n.value,e}:P,st=rt?function(e){return e.nodeType===1}:function(e){return D.call(nt,e)},ot=rt&&[],ut=nt.attachShadow,at=nt.cloneNode,ft=nt.dispatchEvent,lt=nt.getAttribute,ct=nt.hasAttribute,ht=nt.removeAttribute,pt=nt.setAttribute,dt=e.createElement,vt=dt,mt=tt&&{attributes:!0,characterData:!0,attributeOldValue:!0},gt=tt||function(e){Et=!1,A.removeEventListener(b,gt)},yt,bt=0,wt=!1,Et=!0,St=!0,xt=!0,Tt,Nt,Ct,kt,Lt,At,Ot;r in e||(I||q?(At=function(e,t){D.call(t,e)||Rt(e,t)},Ot=Rt):(At=function(e,n){e[i]||(e[i]=t(!0),Rt(e,n))},Ot=At),rt?(Et=!1,function(){var e=B(nt,s),t=e.value,n=function(e){var t=new CustomEvent(b,{bubbles:!0});t.attrName=e,t.prevValue=lt.call(this,e),t.newValue=null,t[y]=t.attrChange=2,ht.call(this,e),ft.call(this,t)},r=function(e,t){var n=ct.call(this,e),r=n&&lt.call(this,e),i=new CustomEvent(b,{bubbles:!0});pt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[g]=i.attrChange=1:i[m]=i.attrChange=0,ft.call(this,i)},o=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(b,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[m]=s.attrChange=0:s[g]=s.attrChange=1,ft.call(t,s))};e.value=function(e,s,u){e===b&&this[l]&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,s,u)},P(nt,s,e)}()):tt||(A[s](b,gt),A.setAttribute(i,1),A.removeAttribute(i),Et&&(Tt=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Ct(t);for(s in r){if(!(s in n))return Nt(0,t,s,n[s],r[s],m);if(r[s]!==n[s])return Nt(1,t,s,n[s],r[s],g)}for(s in n)if(!(s in r))return Nt(2,t,s,n[s],r[s],y)}},Nt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,jt(o)},Ct=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),e[r]=function(n,r){p=n.toUpperCase(),wt||(wt=!0,tt?(kt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new tt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,xt&&s[l]&&i.attributeName!=="style"&&(o=lt.call(s,i.attributeName),o!==i.oldValue&&s[l](i.attributeName,i.oldValue,o)))})}(Pt(o),Pt(a)),Lt=function(e){return kt.observe(e,{childList:!0,subtree:!0}),e},Lt(e),ut&&(nt.attachShadow=function(){return Lt(ut.apply(this,arguments))})):(yt=[],e[s]("DOMNodeInserted",Ft(o)),e[s]("DOMNodeRemoved",Ft(a))),e[s](w,It),e[s]("readystatechange",It),nt.cloneNode=function(e){var t=at.call(this,!!e),n=Ht(t);return-1<n&&Ot(t,k[n]),e&&Dt(t.querySelectorAll(L)),t}),-2<O.call(C,x+p)+O.call(C,S+p)&&zt(n);if(!T.test(p)||-1<O.call(N,p))throw new Error("The type "+n+" is invalid");var i=function(){return c?e.createElement(h,p):e.createElement(h)},u=r||M,c=_.call(u,f),h=c?r[f].toUpperCase():p,p,d;return c&&-1<O.call(C,S+h)&&zt(h),d=C.push((c?x:S)+p)-1,L=L.concat(L.length?",":"",c?h+'[is="'+n.toLowerCase()+'"]':h),i.prototype=k[d]=_.call(u,"prototype")?u.prototype:Z(nt),_t(e.querySelectorAll(L),o),i},e.createElement=vt=function(t,n){var r=Jt(n),i=r?dt.call(e,t,Y(r)):dt.call(e,t),s=""+t,o=O.call(C,(r?x:S)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=Bt(s.toUpperCase(),r))),xt=!e.createElement.innerHTMLHelper,u&&Ot(i,k[o]),i}),Xt.prototype={constructor:Xt,define:W?function(e,t,n){if(n)Vt(e,t,n);else{var r=e.toUpperCase();K[r]={constructor:t,create:[r]},G.set(t,r),z.define(e,t)}}:Vt,get:W?function(e){return z.get(e)||$t(e)}:$t,whenDefined:W?function(e){return $.race([z.whenDefined(e),Qt(e)])}:Qt};if(!z)Gt();else try{(function(t,n,r){n[f]="a",t.prototype=Z(HTMLAnchorElement.prototype),t.prototype.constructor=t,window.customElements.define(r,t,n);if(lt.call(e.createElement("a",{is:r}),"is")!==r||W&&lt.call(new t,"is")!==r)throw n})(function tn(){return Reflect.construct(HTMLAnchorElement,[],tn)},{},"document-register-element-a")}catch(Yt){Gt()}try{dt.call(e,"a","a")}catch(Zt){Y=function(e){return{is:e}}}});