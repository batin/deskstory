(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{HTtL:function(e,t,n){"use strict";n.r(t);n("VRzm"),n("Btvt"),n("f3/d");var r=n("o0o1"),a=n.n(r),o=(n("ls82"),n("q1tI")),i=n.n(o),c=n("Wbzz"),l=n("Fqsg"),u=n("Bl7J"),s=n("vrFN"),m=n("IdFE"),f=function(e){var t=e.nextColor,n=e.download,r=e.back,a=e.show,c=Object(o.useState)(!1),l=c[0],u=c[1];return i.a.createElement("div",{className:a?"menu":"menu d-none"},i.a.createElement("div",{onClick:function(){u(!l)},className:"menuItem d-flex justify-content-center align-items-center"},i.a.createElement(m.e,{className:"icon"})),l?i.a.createElement("div",null,i.a.createElement("div",{onClick:function(){return r(!0)},className:"menuItem"},i.a.createElement(m.c,{className:"icon"})),i.a.createElement("div",{onClick:function(){t(!0)},className:"menuItem"},i.a.createElement(m.d,{className:"icon"})),i.a.createElement("a",{href:"https://github.com/batin/badger",target:"_blank",rel:"noopener noreferrer",className:"menuItem"},i.a.createElement(m.b,{className:"icon"})),i.a.createElement("div",{onClick:function(){n(!0)},className:"menuItem"},i.a.createElement(m.a,{className:"icon"}))):i.a.createElement("div",null))},d=n("cLAn"),h=n.n(d);function p(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,a)}t.default=function(){var e,t,n,r,m,d,v,g,y,E,w,x=Object(o.useContext)(l.a),P=Object(o.useState)(4),b=P[0],N=P[1],k=Object(o.useState)(!0),A=k[0],T=k[1];Object(o.useEffect)((function(){var e;(null==x||null===(e=x.user)||void 0===e?void 0:e.emoji)||Object(c.navigate)("/")}),[]);var j=function(){var e,t=(e=a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(!1);case 3:return t=document.createElement("a"),e.next=6,h.a.toPng(document.getElementById("layout"),{"font-family":"Dosis"});case 6:return t.href=e.sent,t.download="badger.png",t.click(),e.next=11,T(!0);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){p(o,r,a,i,c,"next",e)}function c(e){p(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return i.a.createElement(u.a,{colorState:b},i.a.createElement(s.a,{title:"Badges For Your Soical Media"}),i.a.createElement(f,{show:A,back:function(){return Object(c.navigate)("/")},nextColor:function(){N((b+1)%6)},download:j}),i.a.createElement("div",{className:"container d-flex flex-column justify-content-center align-items-center"},i.a.createElement("div",{className:"profileInfo d-flex flex-column align-items-center justify-content-center"},i.a.createElement("div",{className:"pp d-flex align-items-center justify-content-center"},i.a.createElement("h1",null,x.user.emoji)),i.a.createElement("div",{className:"userInfo mt-3"},i.a.createElement("p",null,x.user.desktimeData.name+" / "+x.user.desktimeData.group))),i.a.createElement("div",{className:"desktimeInfoContainer d-flex flex-column align-items-center justify-content-center"},i.a.createElement("div",{className:"row my-2"},i.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center mr-4"},i.a.createElement("p",null,"Desktime"),i.a.createElement("div",{className:"desktimeBadge d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"text coloredText"+b},Math.floor(x.user.desktimeData.desktimeTime/3600)+"H "+Math.floor(x.user.desktimeData.desktimeTime/60%60)+"M"))),i.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center ml-4"},i.a.createElement("p",null,"Time At Work"),i.a.createElement("div",{className:"timeAtWorkBadge d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"text coloredText"+b},Math.floor(x.user.desktimeData.atWorkTime/3600)+"H "+Math.floor(x.user.desktimeData.atWorkTime/60%60)+"M")))),i.a.createElement("div",{className:"row my-2"},i.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center mr-4"},i.a.createElement("p",null,"Productivity"),i.a.createElement("div",{className:"productivityBadge d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"text coloredText"+b},null===(e=x.user)||void 0===e||null===(t=e.desktimeData)||void 0===t||null===(n=t.productivity)||void 0===n?void 0:n.toFixed(1),"%"))),i.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center ml-4"},i.a.createElement("p",null,"Efficiency"),i.a.createElement("div",{className:"efficiencyBadge d-flex align-items-center justify-content-center"},i.a.createElement("p",{className:"text coloredText"+b},null===(r=x.user)||void 0===r||null===(m=r.desktimeData)||void 0===m||null===(d=m.efficiency)||void 0===d?void 0:d.toFixed(1),"%"))))),!(null===(v=x.user)||void 0===v||null===(g=v.desktimeData)||void 0===g||!g.mostUsedApps)&&i.a.createElement("div",{className:"mostUsedApps "},i.a.createElement("div",{className:"title"},i.a.createElement("p",null,"Most Used Apps")),i.a.createElement("div",{className:"mostUsedAppsContainer"},null===(y=x.user)||void 0===y||null===(E=y.desktimeData)||void 0===E||null===(w=E.mostUsedApps)||void 0===w?void 0:w.map((function(e,t){return i.a.createElement("div",{key:t,className:"app p-1 px-3"},i.a.createElement("p",{className:"appName"},e.name),i.a.createElement("div",{className:"progressBar coloredBackground"+b,role:"progressbar",style:{width:25*(4-t)+"%"},"aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},i.a.createElement("p",null,(Math.floor(e.duration/3600)>0&&Math.floor(e.duration/3600)+"H ")+Math.floor(e.duration/60%60)+"M")))}))))))}},cLAn:function(e,t,n){n("2Spj"),n("XfO3"),n("Oyvg"),n("pIFo"),n("a1Th"),n("h7Nl"),n("NO8f"),n("KKXr"),n("OG14"),n("bWfx"),n("rGqo"),n("yt8O"),n("RW0V"),n("8+KV"),n("0l/t"),n("VRzm"),n("Btvt"),function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,a=new Uint8Array(r),o=0;o<r;o++)a[o]=n.charCodeAt(o);t(new Blob([a],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var a=n.createElement("a");return n.body.appendChild(a),r.href=t,a.href=e,a.href},getAndEncode:function(e){c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(n?t(n):o("cannot fetch resource: "+e+", status: "+r.status));var a=new FileReader;a.onloadend=function(){var e=a.result.split(/,/)[1];t(e)},a.readAsDataURL(r.response)},r.ontimeout=function(){n?t(n):o("timeout of 30000ms occured while fetching resource: "+e)},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),c.impl.options.imagePlaceholder){var a=c.impl.options.imagePlaceholder.split(/,/);a&&a[1]&&(n=a[1])}function o(e){console.error(e),t("")}}))},uid:(e=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+e++}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,o){return function(){return!t(e)}()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return a(t,e,n,o)}))})),r}))},shouldProcess:t,impl:{readUrls:r,inline:a}};function t(t){return-1!==t.search(e)}function r(t){for(var r,a=[];null!==(r=e.exec(t));)a.push(r[1]);return a.filter((function(e){return!n.isDataUrl(e)}))}function a(e,t,r,a){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(a||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),a=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function t(a){return a instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}(a).then((function(){return a instanceof HTMLImageElement?e(a).inline():Promise.all(n.asArray(a.childNodes).map((function(e){return t(e)})))})):Promise.resolve(a)},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),i={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:l,toPng:function(e,t){return u(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return u(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return u(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return u(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:a,images:o,util:n,inliner:r,options:{}}};function l(e,t){return function(e){void 0===e.imagePlaceholder?c.impl.options.imagePlaceholder=i.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?c.impl.options.cacheBust=i.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return function e(t,r,a){return a||!r||r(t)?Promise.resolve(t).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(e){return o(t,e,r)})).then((function(e){return function(e,t){return t instanceof Element?Promise.resolve().then(r).then(a).then(o).then(i).then((function(){return t})):t;function r(){var r,a;r=window.getComputedStyle(e),a=t.style,r.cssText?a.cssText=r.cssText:function(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}(r,a)}function a(){[":before",":after"].forEach((function(r){!function(r){var a=window.getComputedStyle(e,r),o=a.getPropertyValue("content");if(""===o||"none"===o)return;var i=n.uid();t.className=t.className+" "+i;var c=document.createElement("style");c.appendChild(function(e,t,r){var a="."+e+":"+t,o=r.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(r):function(e){return n.asArray(e).map((function(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")})).join("; ")+";"}(r);return document.createTextNode(a+"{"+o+"}")}(i,r,a)),t.appendChild(c)}(r)}))}function o(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function i(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}(t,e)})):Promise.resolve();function o(t,r,a){var o=t.childNodes;return 0===o.length?Promise.resolve(r):i(r,n.asArray(o),a).then((function(){return r}));function i(t,n,r){var a=Promise.resolve();return n.forEach((function(n){a=a.then((function(){return e(n,r)})).then((function(e){e&&t.appendChild(e)}))})),a}}}(e,t.filter,!0)})).then(s).then(m).then((function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]}));return e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function u(e,t){return l(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var a=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var a=r.getContext("2d");a.fillStyle=t.bgcolor,a.fillRect(0,0,r.width,r.height)}return r}(e);return a.getContext("2d").drawImage(r,0,0),a}))}function s(e){return a.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function m(e){return o.inlineAll(e).then((function(){return e}))}e.exports=c}()}}]);
//# sourceMappingURL=component---src-pages-badges-js-6e757e7f08af424efadc.js.map