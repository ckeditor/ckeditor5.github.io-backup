/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{"use strict";const e={tokenUrl:"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",uploadUrl:"https://33333.cke-cs.com/easyimage/upload/"};ClassicEditor.create(document.querySelector("#snippet-default-headings"),{cloudServices:e,heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"}]},ui:{viewportOffset:{top:window.getViewportTopOffsetConfig()}}}).then((e=>{window.editor=e,window.attachTourBalloon({target:window.findToolbarItem(e.ui.view.toolbar,(e=>e.buttonView&&e.buttonView.label&&e.buttonView.label.startsWith("Heading"))),text:"Click to change heading level.",editor:e,tippyOptions:{placement:"bottom-start"}})})).catch((e=>{console.error(e.stack)}))})();