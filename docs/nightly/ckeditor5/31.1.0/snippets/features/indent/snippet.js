/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};ClassicEditor.create(document.querySelector("#snippet-indent"),{cloudServices:e,toolbar:{items:["heading","|","outdent","indent","|","bulletedList","numberedList","|","undo","redo"]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.label&&"Increase indent"===e.label)),text:"Click to indent or outdent a block.",editor:e})})).catch((e=>{console.error(e.stack)}))})();