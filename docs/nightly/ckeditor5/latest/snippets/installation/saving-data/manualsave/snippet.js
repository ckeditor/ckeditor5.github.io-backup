/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};let t=500,n=!1;function s(e){const t=document.querySelector("#snippet-manualsave-container");n?t.classList.add("active"):t.classList.remove("active"),e.plugins.get("PendingActions").hasAny?t.classList.add("saving"):t.classList.remove("saving")}document.querySelector("#snippet-manualsave-lag").addEventListener("change",(e=>{t=e.target.value})),ClassicEditor.create(document.querySelector("#snippet-manualsave"),{cloudServices:e,ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e,function(e){e.plugins.get("PendingActions").on("change:hasAny",(()=>s(e))),e.model.document.on("change:data",(()=>{n=!0,s(e)}))}(e),function(e){const o=document.querySelector("#snippet-manualsave-save"),c=e.plugins.get("PendingActions");o.addEventListener("click",(o=>{const i=e.getData(),d=c.add("Saving in progress.");o.preventDefault(),setTimeout((()=>{!function(e){const t=document.querySelector("#snippet-manualsave-console");a++,t.classList.add("updated"),t.textContent=e,setTimeout((()=>{0==--a&&t.classList.remove("updated")}),500)}(i),c.remove(d),i==e.getData()&&(n=!1),s(e)}),t)}))}(e),function(e){window.addEventListener("beforeunload",(t=>{e.plugins.get("PendingActions").hasAny&&t.preventDefault()}))}(e)})).catch((e=>{console.error(e.stack)}));let a=0})();