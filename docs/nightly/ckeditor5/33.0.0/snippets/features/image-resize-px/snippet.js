/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};ClassicEditor.create(document.querySelector("#snippet-image-resize-px"),{removePlugins:["LinkImage","AutoImage"],image:{resizeUnit:"px",resizeOptions:[{name:"resizeImage:original",label:"Original",value:null},{name:"resizeImage:100",label:"100px",value:"100"},{name:"resizeImage:200",label:"200px",value:"200"}],toolbar:["resizeImage"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}},cloudServices:e}).then((e=>{window.editorResizePX=e})).catch((e=>{console.error(e)}))})();